import { GetComponent } from "./src/app.js";
import {createUtilsFolder} from './src/script.js';

class DivUi {
  constructor(Apikey) {
    this.Apikey = Apikey;
  }

  GetComponent = GetComponent;
}
(async () => {
  await createUtilsFolder();
})();

export {DivUi};