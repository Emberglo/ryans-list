import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"

class HousesService {

    constructor() { }
    
    // buy(id) {
    //     let temp = ProxyState.houses
    //     // let house = temp.find(h => h.id == id)
    //     document.getElementById("id").innerHTML = SoldTemplate
    //     ProxyState.houses = temp
    // }

    removeHouse(id) {
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(h => h.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp
    }

    createHouse(rawHouse) {
        let newHouse = new House(rawHouse)  
        let houses = [...ProxyState.houses, newHouse ]
        ProxyState.houses = houses
    }

}

export const housesService = new HousesService()