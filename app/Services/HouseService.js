import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "../Services/AxiosService.js"

class HouseService {

    constructor() {
        this.getHouses()
    }

    getHouses() {
        api.get("houses").then(res => {
            ProxyState.houses = res.data.data.map(rawHouseData => new House(rawHouseData))
        }).catch(err => console.error(err))
    }
    
    deleteHouse(id) {
        api.delete("houses/" + id).then(res => {
            this.getHouses()
        }).catch(err => console.error(err))
    }

    postHouse(newHouse) {
        api.post("houses", newHouse).then(res => {
            this.getHouses()
        }).catch(err => console.error(err))
    }

    editHouse(editedHouse) {
        api.put("houses/" + editedHouse._id, editedHouse).then(res => {
            this.getHouses()
        }).catch(err => console.error(err))
    }

}

export const houseService = new HouseService()