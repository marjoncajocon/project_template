import React, { type ReactNode, useEffect, useId, useState } from 'react';
import { createRoot } from 'react-dom/client';

type DialogOptions<T = any> = {
  title?: string | ReactNode;
  width?: string | number;
  height?: number,
  position?: 'start' | 'center';
  render: (helpers: {
    close: (value: T) => void;
  }) => ReactNode;
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

// Internal wrapper to manage the 'open' attribute state
const ModalWrapper = ({ 
  options, 
  onExited 
}: { 
  options: DialogOptions, 
  onExited: (value: any) => void 
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const id: string = useId();

  // Trigger the 'open' attribute on mount to start entry animation
  useEffect(() => {
    setIsOpen(true);
    pushModal(id);

    // ESC key listener
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isTopModal(id)) {
          handleClose(undefined);
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    
    // Cleanup listener on unmount
    return () => { 
      window.removeEventListener('keydown', handleEsc);
      popModal(id);
    };
  }, []);

  const handleClose = (value: any) => {
    setIsOpen(false); // Removes the 'open' attribute
    // Wait for daisyUI transition (usually 200-300ms) before unmounting
    setTimeout(() => onExited(value), 200);
  };

  return (
    <dialog 
      open={isOpen} 
      className={`modal ${isOpen ? 'modal-open' : ''} ${options.position === 'start' ? 'modal-top' : 'modal-middle'}`}
    >
      <div 
        className="modal-box relative p-0" 
        style={{ maxWidth: options.width ?? '32rem' }}
      >
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => handleClose(undefined)}
        >
          ✕
        </button>
        
        <div className={`flex flex-col justify-between sm:h-[calc(100vh-100px)] h-[calc(100vh-200px)] w-full`}>
          {options.render({ close: handleClose })}
        </div>
      </div>

      {/* Backdrop click */}
      <div className="modal-backdrop" onClick={() => handleClose(undefined)}>
        <button className="cursor-default">close</button>
      </div>
    </dialog>
  );
};

const DialogHeader = ({children}: {children: ReactNode}) => {

  return <div className="h-14 shadow flex flex-row items-center px-2 gap-2">
      {children}
  </div>
};

const DialogBody = ({children}: {children: ReactNode}) => {

  return <div className="flex-1 overflow-y-auto w-full p-2">
      {children}
  </div>
};


const DialogFooter = ({children}: {children: ReactNode}) => {

  return <div className="h-14 shadow flex flex-row items-center px-2 gap-2">
      {children}
  </div>
};

export function dialog<T = any>(options: DialogOptions<T>): Promise<T> {
  return new Promise<T>((resolve) => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const root = createRoot(container);

    const finalize = (value: T) => {
      resolve(value);
      root.unmount();
      container.remove();
    };

    root.render(
      <ModalWrapper options={options} onExited={finalize} />
    );
  });
}

export {
  DialogHeader,
  DialogBody,
  DialogFooter
}