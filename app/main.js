//import ValuesController from "./Controllers/ValuesController.js";
import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js"
import JobController from "./Controllers/JobController.js"

class App {
  carController = new CarController()
  houseController = new HouseController()

  jobController = new JobController()

}

let cButton = document.getElementById('carButton')
let hButton = document.getElementById('houseButton')
let jButton = document.getElementById('jobButton')

let cars = document.getElementById('carContainer')
let houses = document.getElementById('houseContainer')
let jobs = document.getElementById('jobContainer')

function showCars() {
  if (cars.classList.contains('hidden')) {
    cars.classList.remove('hidden')
  };
  if (!houses.classList.contains('hidden')) {
    houses.classList.add('hidden')
  }
  if (!jobs.classList.contains('hidden')) {
    jobs.classList.add('hidden')
  }
}

function showHouses() {
  if (houses.classList.contains('hidden')) {
    houses.classList.remove('hidden')
  };
  if (!cars.classList.contains('hidden')) {
    cars.classList.add('hidden')
  }
  if (!jobs.classList.contains('hidden')) {
    jobs.classList.add('hidden')
  }
}

function showJobs() {
  if (jobs.classList.contains('hidden')) {
    jobs.classList.remove('hidden')
  };
  if (!cars.classList.contains('hidden')) {
    cars.classList.add('hidden')
  }
  if (!houses.classList.contains('hidden')) {
    houses.classList.add('hidden')
  }
}

cButton.addEventListener("click", showCars)
hButton.addEventListener("click", showHouses)
jButton.addEventListener("click", showJobs)



window["app"] = new App();