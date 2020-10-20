import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _draw() {
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(h => template += h.houseTemplate)
    document.getElementById("houses").innerHTML = template
}

export default class HouseController {
    constructor() {
        ProxyState.on("houses", _draw)
        _draw()
    }

    postHouse(event) {
        event.preventDefault();
        let form = event.target
        // console.log(form)
        let newHouse = {
            // @ts-ignore
            bedrooms: form.bedrooms.value,
            // @ts-ignore
            bathrooms: form.bathrooms.value,
            // @ts-ignore
            year: form.year.value,
            // @ts-ignore
            levels: form.levels.value,
            // @ts-ignore
            price: form.price.value,
            // @ts-ignore
            imgUrl: form.imgUrl.value,
            // @ts-ignore
            description: form.description.value || "Unknown"
        }
        // @ts-ignore
        $('#houseModal').modal('toggle')
        houseService.postHouse(newHouse)
    }

    editHouse(event, id) {
        event.preventDefault()
        let form = event.target

        let editedHouse = {
            // @ts-ignore
            bedrooms: form.bedrooms.value,
            // @ts-ignore
            bathrooms: form.bathrooms.value,
            // @ts-ignore
            year: form.year.value,
            // @ts-ignore
            levels: form.levels.value,
            // @ts-ignore
            price: form.price.value,
            // @ts-ignore

            imgUrl: form.imgUrl.value,
            // @ts-ignore

            description: form.description.value || "Unknown",
            // @ts-ignore

            _id: id
        }
            // @ts-ignore
        $('#editHouseModal-' + id).modal('toggle')
        houseService.editHouse(editedHouse)
    }

    deleteHouse(id) {
        houseService.deleteHouse(id)
    }

} 