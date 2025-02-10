import {Ui} from "./src/app.js";


function printMsg() {
  console.log("This is a message from the demo package");
}

async function loadComponent() {
  const Component = await Ui("Button01");
  console.log("Component", Component);
}
loadComponent();

export {
  Ui,
  printMsg
}
