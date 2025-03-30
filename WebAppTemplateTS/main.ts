import { button, Widget, Window } from "./plugin/core/core.ts";



const MyApp = new Window();

const btn = new button().html("hellow this is a string");

if (btn instanceof Widget) {
  MyApp.navigate(btn);
}
MyApp.run();

export default MyApp;