import { b, button, div, hr, p, span } from "./../../plugin/core/core.js";
import { Button, Label, ModalV2, Panel } from "./mcontrol.js";


class Dialog extends div {
  constructor(width = null) {
    super();
    this.class("core-dialog");

    
    this.square = new div().class(["core-dialog-sq", "c-fade"]);
    
    if (width != null) {
      if (!/[0-9]/g.test(width)) {
        this.square.style({
          width: `${width}px`
        });
      } else {
        this.square.style({
          width: `${width}`
        });
      }
    }

    this.resolve = null;
    this.reject = null;

    super.add([
      this.square
    ]);
  }

  async show() {
    this.body.appendChild(this.control);

    const promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    return promise;
  }

  add(widget) {
    this.square.add(widget);
  } 
  
  hide(resolve = null) {
    this.delete();
    setTimeout(() => {
      this.resolve(resolve);
    }, 100);
  }

}


class Dialog2 extends div {
  constructor(width = null) {
    super();
    this.style({
      "z-index": "5000",
      "width": "100%",
      "background-color": "rgba(0, 0, 0, 0.2)",
      "width": "100%",
      "height": "100%",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "overflow-y": "auto"
    });

    
    this.square = new div().class(["c-fade"]).style({
      "width": "480px",
      "min-height": "200px",
      "margin": "auto",
      "margin-top": "5%",
      "background-color": "white",
      "max-width": "94%",
      "margin-bottom": "5%",
      "box-shadow": "3px 3px 3px rgba(0, 0, 0, 0.3)",
      "border-radius": "5px",
      "padding-bottom": "20px"
    });
    
    if (width != null) {
      if (!/[0-9]/g.test(width)) {
        this.square.style({
          width: `${width}px`
        });
      } else {
        this.square.style({
          width: `${width}`
        });
      }
    }

    this.resolve = null;
    this.reject = null;

    super.add([
      this.square
    ]);
  }

  async show() {
    this.body.appendChild(this.control);

    const promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    return promise;
  }

  add(widget) {
    this.square.add(widget);
  } 
  
  hide(resolve = null) {
    this.delete();
    setTimeout(() => {
      this.resolve(resolve);
    }, 100);
  }

}

class DialogModal2 extends Dialog2 {
  constructor(title = null, icon = null, width = null) {
    super(width);

    const header = new div().style({
      width: "100%",
      padding: "10px",
      position: "relative",
      lefft: 0,
      top: 0,
      zIndex: "10",
      backgroundColor: "white"
    });

    if (icon != null) {
      header.add(new b().class([ "fa", `fa-${icon}` ]).style({ letterSpacing: "2px" }));
    }
    header.add(new b().html(title).style({ marginLeft: "5px" }).style({ letterSpacing: "2px" })).add(
      new button().html(`X`).style({
        position: "absolute",
        right: "5px",
        top: "5px",
        width: "30px",
        height: "30px",
        border: "1px solid #ddd",
        backgroundColor: "#ff5656",
        color: "white",
        borderRadius: "3px"
      }).action("click", () => {
        this.hide(null);
      })
    );

    this.content = new div();


    super.add([
      header,
      this.content
    ]);
  }

  add(obj) {
    this.content.add(obj);
    return this;
  }
}



class DialogModal extends Dialog {
  constructor(title = null, icon = null, width = null) {
    super(width);

    const header = new div().style({
      width: "100%",
      padding: "10px",
      position: "sticky",
      lefft: 0,
      top: 0,
      zIndex: "10",
      backgroundColor: "white"
    });

    if (icon != null) {
      header.add(new b().class([ "fa", `fa-${icon}` ]).style({ letterSpacing: "2px" }));
    }
    header.add(new b().html(title).style({ marginLeft: "5px" }).style({ letterSpacing: "2px" })).add(
      new button().html(`X`).style({
        position: "absolute",
        right: "5px",
        top: "5px",
        width: "30px",
        height: "30px",
        border: "1px solid #ddd",
        backgroundColor: "#ff5656",
        color: "white",
        borderRadius: "3px"
      }).action("click", () => {
        this.hide(null);
      })
    );

    this.content = new div();


    super.add([
      header,
      this.content
    ]);
  }

  add(obj) {
    this.content.add(obj);
    return this;
  }
}




class DialogConfirm2 extends Dialog {
  constructor(label = "Confirm", ok_msg = "Yes", cancel_msg = "No") {
    super();

    const content = new div().style({
      width: "100%",
      height: "100%",
      borderRadius: "5px"
    });


    const header = new div().style({
      width: "100%",
      backgroundColor: "rgb(255, 212, 0)",
      textAlign: "center",
      letterSpacing: "5px",
      fontWeight: "bold",
      padding: "5px",
      borderRadius: "5px 5px 0 0"
    })
    .html("CONFIRM");
    
    const body = new div().style({
      width: "100%",
      minHeight: "30px",
      verticalAlign: "bottom",
      padding: "20px 20px 0 20px",
      letterSpacing: "3px"
    }).add(new p().text(label));

    const yes = new button().html(ok_msg).class(["c-btn1"]).style({
      color: "#3adb3a",
      fontWeight: "bold",
      letterSpacing: "3px"
    });

    const no = new button().html(cancel_msg).class(["c-btn1"]).style({
      marginLeft: "2px",
      color: "#ff4646",
      fontWeight: "bold",
      letterSpacing: "3px"
    });

    const foot = new p().add([
      yes, no
    ]).style({
      padding: "20px"
    });

    yes.action("click", () => {
      this.hide(true);
    });

    no.action("click", () => {
      this.hide(false);
    });

    content.add([
      header,
      body,
      foot
    ]);

    this.add(content);

  } 
}


class DialogAlert2 extends Dialog {
  constructor(label = "", ok_msg = "OK", cancel_msg = "CLOSE") {
    super();

    const content = new div().style({
      width: "100%",
      height: "100%",
      borderRadius: "5px"
    });


    const header = new div().style({
      width: "100%",
      backgroundColor: "rgb(243, 243, 243)",
      textAlign: "center",
      letterSpacing: "5px",
      fontWeight: "bold",
      padding: "5px",
      borderRadius: "5px 5px 0 0"
    })
    .html("ALERT");
    
    const body = new div().style({
      width: "100%",
      minHeight: "30px",
      verticalAlign: "bottom",
      padding: "20px 20px 0 20px",
      letterSpacing: "3px"
    }).add(new p().html(label));

    const yes = new button().html(ok_msg).class(["c-btn1"]).style({
      color: "#3adb3a",
      fontWeight: "bold",
      letterSpacing: "3px"
    });

    // const no = new button().html(cancel_msg).class(["c-btn1"]).style({
    //   marginLeft: "2px",
    //   color: "#ff4646",
    //   fontWeight: "bold",
    //   letterSpacing: "3px"
    // });

    const foot = new p().add([
      yes
    ]).style({
      padding: "20px"
    });

    yes.action("click", () => {
      this.hide(true);
    });

    // no.action("click", () => {
    //   this.hide(false);
    // });

    content.add([
      header,
      body,
      foot
    ]);

    this.add(content);

  } 
}

class DialogConfirm extends ModalV2 {

  constructor(title) {
    super("Confirm", "question");
    


    const label = new Label(title).setStyle({
      marginTop: "50px",
      marginLeft: "2px"
    });

    const yes = new Button("Ok", "success", "check");

    const no = new Button("Cancel", "danger", "close").setStyle({
      marginLeft: "5px"
    });

    yes.addEventListener("click", async () => {
      this.hide(true);
    });

    no.addEventListener("click", async () => {
      this.hide(false);
    });


    this.add(new Panel().add(label)).add(new Panel().add(yes).add(no).setStyle({
      marginTop: "20px"
    }));

  }



}


class DialogAlert extends ModalV2 {
  constructor(title) {

    super("Alert", "exclamation");
    
    this.resolve = true;

    const label = new Label(title).setStyle({
      marginTop: "50px",
      marginLeft: "2px"
    });

    const yes = new Button("Ok", "success", "check");


    yes.addEventListener("click", async () => {
      this.hide(true);
    });

    

    this.add(new Panel().add(label)).add(new Panel().add(yes).setStyle({
      marginTop: "20px"
    }));

  }
  
}




const Alert = async (title) => {

  const dialog = new DialogAlert2(title);
  return await dialog.show();
};


const Confirm = async (title) => {

  const dialog = new DialogConfirm2(title);

  return await dialog.show();
};


export { Alert, Confirm, DialogModal, DialogModal2 };
