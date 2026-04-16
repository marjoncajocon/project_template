//////////
import { createRoot } from "react-dom/client";
import React, { type ReactNode } from "react";
import ModalModern from "~/component/ModalModern";
import { createPortal } from "react-dom";

type ConfirmOptions = {
  title?: string;
  message: string;
};

export function confirm(options: ConfirmOptions | string): Promise<boolean> {
  const opts =
    typeof options === "string"
      ? { title: "Confirm", message: options }
      : options;

  return new Promise((resolve) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    const handleClose = (result: boolean) => {
      resolve(result);
      setTimeout(() => {
        root.unmount();
        container.remove();
      }, 0);
    };

    root.render(
      <ModalModern
        isOpen={true}
        title={opts.title ?? "Confirm"}
        handleClose={() => handleClose(false)}
        footer={
          <>
            <button
              className="btn btn-secondary"
              onClick={() => handleClose(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleClose(true)}
            >
              Confirm
            </button>
          </>
        }
      >
        <p>{opts.message}</p>
      </ModalModern>
    );
  });


}



const DialogHeader = ({children}: {children: ReactNode}) => {

  return <div className="modal-modern-header">
           {children}
    </div>
};

const DialogBody = ({children}: {children: ReactNode}) => {

  return <div className="modal-modern-body">
      {children}
  </div>
};


const DialogFooter = ({children}: {children: ReactNode}) => {

  return <div className="modal-modern-footer">
    {children}
  </div>
};


type DialogOptions<T = any> = {
  width?: number,
  position?: 'start' | 'center',
  backDropClick?: boolean,
  render: (helpers: {
    close: (value: T) => void;
  }) => ReactNode;
};


export function dialog<T = any>(options: DialogOptions<T>): Promise<T> {
  return new Promise<T>((resolve) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    const close = (value: T) => {
      resolve(value);
      setTimeout(() => {
        root.unmount();
        container.remove();
      }, 0);
    };

    root.render(
      <ModalModern
        backdropClick={options.backDropClick}
        position={options.position}
        width={options.width}
        isOpen={true}
        title={""}
        handleClose={() => close(undefined as T)}
        footer={null} // optional, let render handle buttons
      >
        {options.render({ close })}
      </ModalModern>
    );
  });
}





type DialogOptions2<T = any> = {
  title?: string|ReactNode;
  width?: number,
  position?: 'start' | 'center',
  render: (helpers: {
    close: (value: T) => void;
  }) => ReactNode;
};


export function dialog2<T = any>(options: DialogOptions2<T>): Promise<T> {
  return new Promise<T>((resolve) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    const close = (value: T) => {
      resolve(value);
      setTimeout(() => {
        root.unmount();
        container.remove();
      }, 0);
    };

    root.render(
      createPortal(<div className="backdrop">
        {options.render({ close })}
      </div>, document.body)
    );
  });
}



export {
  DialogHeader,
  DialogBody,
  DialogFooter
}