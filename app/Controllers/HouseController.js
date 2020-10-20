import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HouseService.js"

function _draw() {
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(h => template += h.HouseTemplate)
    document.getElementById("houses").innerHTML = template
}

export default class HousesController {
    constructor() {
        // console.log("cars controller")
        // console.log(ProxyState.cars)
        _draw()
        ProxyState.on("houses", _draw)
    }

    createHouse() {
        event.preventDefault();
        // console.log("car creating")
        let form = event.target
        // console.log(form)
        let rawHouse = {
            // @ts-ignore
            address: form.address.value,
            // @ts-ignore
            cost: form.cost.value,
            // @ts-ignore
            size: form.size.value,
            // @ts-ignore
            houseDescription: form.houseDescription.value,
            // @ts-ignore
            houseImgUrl: form.houseImgUrl.value
        }
        // console.log(rawCar)
        housesService.createHouse(rawHouse)
    }

    delete(id) {
        housesService.removeHouse(id)
    }

    // bid(id) {
    //     housesService.buy(id)
    // }
} 