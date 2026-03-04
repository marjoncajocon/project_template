import { createPortal } from "react-dom";
import { type ReactNode, useEffect } from "react";
import "./style.css";

type Props = {
  children?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  icon?: string;
  title: string|ReactNode;
  width?: number;
  position?: "start" | "center";
  handleClose: (v: boolean) => void;
};

export default function ModalModern({
  icon,
  title,
  isOpen,
  children,
  footer,
  width = 450,
  position = "center",
  handleClose,
}: Props) {
  
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

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-modern-overlay"
      onClick={() => handleClose(false)}
    >
      <div
        className={`modal-modern-container ${
          position === "start" ? "align-start" : "align-center"
        }`}
      >
        <div
          className="modal-modern-content"
          style={{ width }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER */}
          <div className="modal-modern-header">
            <div className="modal-modern-title">
              { typeof(title) == 'string' ? <>
              {
                icon && <i className={`fa fa-${icon}`}></i>}
                  <span>{title}</span>
                </>: title
              }
            </div>
            <button
              className="modal-modern-close"
              onClick={() => handleClose(false)}
            >
              <i className="fa fa-close"></i>
            </button>
          </div>

          {/* BODY (scrollable) */}
          <div className="modal-modern-body">
            {children}
          </div>

          {/* FOOTER */}
          {footer && (
            <div className="modal-modern-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}