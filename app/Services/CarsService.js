import { ProxyState } from "../AppState.js"
import { Car } from '../Models/Car.js'

class CarsService{
    constructor() {
        console.log('carsService')
    }

    bid(id, bidAmount) {
        let temp = ProxyState.cars
        if (bidAmount > 0) {
            let car = temp.find(c => c.id == id)
            car.price += parseInt(bidAmount)
            ProxyState.cars = temp
        }
    }

    removeCar(id) {
        let temp = ProxyState.cars
        let carIndex = temp.findIndex(c => c.id == id)
        temp.splice(carIndex, 1)
        ProxyState.cars = temp
    }

    createCar(rawCar) {
        let newCar = new Car(rawCar)
        let cars = [...ProxyState.cars, newCar]
    }

}

export const carsService = new CarsService()