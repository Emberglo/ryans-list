//import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js";

class App {
  carsController = new CarController()

}

window["app"] = new App();