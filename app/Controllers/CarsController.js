import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
    let cars = ProxyState.cars
    let template = ""
    cars.forEach(c => template += c.Template)
    document.getElementById('cars').innerHTML = template
}

export default class CarsController {
    constructor() {
        console.log('cars controller')
        console.log(ProxyState.cars)
        _draw()
        //listens for changes to cars array
        ProxyState.on('cars', _draw)
    }

    createCar(){
        event.preventDefault()
        console.log('car creating')
        let form = event.target
        console.log(form)
        let rawCar = {
            make: form.make.value
            model: form.model.value
            year: form.year.value
            price: form.price.value
            description: form.description.value
            img: form.imgUrl.value
    }
    console.log(rawCar)
        carsService.createCar(rawCar)
    }

    delete(id) {
        carsService.removeCar(id)
    }

    bid(id) {
        event.preventDefault()
        let form = event.target
        console.log(form.bid.value)
        let bid = form.bid.value
        carsService.bid(id, bid)
    }
}