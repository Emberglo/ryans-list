import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]}*/
  cars = [new Car({ make: "Honda", model: "Accord", year: 2002, price: 5000, img: "//placehold.it/200x200", description: "This is a red honda." })]

  /** @type {House[]}*/
  houses = [new House({ address: "123 Main St", size: "1200sqft", houseImgUrl: "https://placehold.it/200x200", houseDescription: "Beautiful house in center of town"})]

  /** @type {Job[]}*/
  jobs = [new Job({ name: 'Micron', title: 'Engineer', salary: '100000', jobDescription: "Build innovative products" })]
}
// new Car("Jeep", "Rango",1990, 10000, "//placehold.it/200x200", "A nice jeep")

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})