import { createPortal } from "react-dom";
import { type ReactNode, useEffect, useId } from "react";
import "./style.css";

type Props = {
  backdropClick?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  icon?: string;
  title: string|ReactNode;
  width?: number;
  position?: "start" | "center";
  handleClose: (v: boolean) => void;
};

let modalStack: string[] = [];

function pushModal(id: string) {
  modalStack.push(id);
}

function popModal(id: string) {
  modalStack = modalStack.filter((m) => m !== id);
}

function isTopModal(id: string) {
  return modalStack[modalStack.length - 1] === id;
}

export default function ModalModern({
  backdropClick,
  icon,
  title,
  isOpen,
  children,
  footer,
  width = 450,
  position = "center",
  handleClose,
}: Props) {

  const id: string = useId();
  
  // 🔒 Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      
    };
  }, [isOpen]);


  useEffect(() => {
    
    if (!isOpen) return;

    pushModal(id);

    return () => {
      popModal(id);
    };

  }, [isOpen]);

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (isTopModal(id)) {
        handleClose(false);
      }
    }
  };


  useEffect(() => {
    
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      // clear all stuff here
      document.removeEventListener('keydown', handleEsc);
    };

  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-modern-overlay"
      onClick={() => {
        if (backdropClick != undefined && backdropClick) {
          if (isTopModal(id)) {
            handleClose(false);
          }
        }
      }}
    >
      <div
        className={`modal-modern-container ${
          position === "start" ? "align-start" : "align-center"
        }`}
      >
        <div
          className="modal-modern-content bg-base-100 shadow-xl"
          style={{ width }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}