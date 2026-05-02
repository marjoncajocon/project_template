import React, { type ReactNode } from 'react';

export enum ModalSize {
    Small = 'sm',
    Large = 'lg',
    ExtraLarge = 'xl',
    FullScreen = 'fullscreen'
}

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void; // A function to flip the state back to false
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize
}

const Modal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children, footer, size = ModalSize.Large }) => {
  // If not open, return nothing (removes it from DOM)
  if (!isOpen) return null;

  const sizeClass = size === ModalSize.FullScreen 
        ? 'modal-fullscreen' 
        : `modal-${size}`;

  return (
    <>
      {/* 1. The Backdrop (Dimmed background) */}
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose} 
        style={{ zIndex: 1050 }}
      />

      {/* 2. The Modal Dialog */}
      <div 
        className="modal fade show" 
        style={{ display: 'block', zIndex: 1055 }} 
        tabIndex={-1} 
        role="dialog"
      >
        <div className={`modal-dialog ${sizeClass}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">{title}</h6>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              {footer || (
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;