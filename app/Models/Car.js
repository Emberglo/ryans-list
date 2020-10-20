export default class Car {
    constructor(data) {
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description || "Unknown"
        this._id = data._id
    }

    get Template() {
        return /*html*/`<div class="col-12 col-md-4 col-lg-2 border border-gray shadow-lg rounded p-3 m-3">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h3>${this.make}</h3>
            <h3>${this.model}</h3>
            <h5>$${this.price}</h5>
            <p>${this.year}</p>
            <p>${this.description}</p>
            <button class="btn btn-danger btn-block" onclick="app.carController.deleteCar('${this._id}')">Delort</button>
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editCarModal-${this._id}">
            Edit
        </button>
        ${this.Modal}
        </div>
        `
    }

    get Modal() {
        return /*html*/` 
        <div class="modal fade" id="editCarModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit ${this.make} - ${this.model}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="container-fluid" onsubmit="app.carController.editCar(event, '${this._id}')">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.make}" name="make" id="make">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.model}" name="model" id="model">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" value="${this.year}" class="form-control" name="year"
                                            id="year">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.imgUrl}" name="imgUrl" id="imgUrl">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="number" min="1" class="form-control" value="${this.price}" name="price" id="price">
                                    </div>
                                    <div class="col-sm-12">
                                        <textarea name="description" class="form-control" id="" cols="30" rows="10">${this.description}</textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <button type="submit" class="btn btn-primary ml-3">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
            `

    }
}