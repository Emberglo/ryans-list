import { generateId } from "../Utils/GenerateId.js"

export default class House {

    constructor({ address, cost, size, houseImgUrl, houseDescription}) {
        this.address = address
        this.cost = cost
        this.size = size
        this.houseImgUrl = houseImgUrl
        this.houseDescription = houseDescription
        this.id = generateId()
    }

    get HouseTemplate() {
        return `<div class="col-4">
    <div id="${this.id}" class="card">
        <img class="card-img-top img-fluid" src="${this.houseImgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.address} ${this.address}</h4>
            <p class="card-text">${this.size} ${this.houseDescription}</p>
            <form onsubmit="app.carsController.buy('${this.id}')">
                <div class="form-group p-1">
                    <input type="number" class="form-control" name="buy" id="buy" aria-describedby="helpId" placeholder="Buy">
                </div>
                <button class="btn btn-success" type="submit" >Bid</button>
            </form>
            <button class="btn btn-danger" onclick="app.housesController.delete('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
    }

    get SoldTemplate() {
        return `<div class="col-4">
    <div id="${this.id}" class="card">
        <img class="card-img-top img-fluid" src="${this.houseImgUrl}" alt="">
        <div class="card-body">
            <h4>Sold!</h4>
            <button class="btn btn-danger" onclick="app.housesController.delete('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
    }


}