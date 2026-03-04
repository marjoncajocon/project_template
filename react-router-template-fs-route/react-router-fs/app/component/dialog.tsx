import { createRoot } from "react-dom/client";
import React, { type ReactNode } from "react";
import ModalModern from "~/component/ModalModern";

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


type DialogOptions<T = any> = {
  title?: string|ReactNode;
  width?: number,
  position?: 'start' | 'center',
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
        position={options.position}
        width={options.width}
        isOpen={true}
        title={options.title ?? "Dialog"}
        handleClose={() => close(undefined as T)}
        footer={null} // optional, let render handle buttons
      >
        {options.render({ close })}
      </ModalModern>
    );
  });
}

/*

implementation

const result = await dialog<string>({
    title: "Enter Something",
    render: ({ close }) => {
    let value = "";

    return (
        <div className="d-flex flex-column gap-2">
        <input
            className="form-control"
            placeholder="Type here..."
            onChange={(e) => (value = e.target.value)}
        />
        <div className="d-flex justify-content-end gap-2 mt-2">
            <button
            className="btn btn-secondary"
            onClick={() => close("")}
            >
            Cancel
            </button>
            <button
            className="btn btn-primary"
            onClick={() => close(value)}
            >
            Submit
            </button>
        </div>
        </div>
    );
    },
});

console.log("Dialog result:", result);

*/

/*

to work with useEffect and useState just return the Enner or other components

const result = await dialog<string>({
    title: "Enter Something",
    render: ({ close }) => {
        const Inner = () => {
            const [value, setValue] = useState("");

            useEffect(() => {
                console.log("Mounted!");
            }, []);

            return (
                <div>
                    my sample
                </div>
            );
        }

        return <Inner />
    },
});

console.log("Dialog result:", result);
*/