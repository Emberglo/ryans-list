export default class Car {
    constructor(data) {
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description || "Unknown"
        this._id = data._id
    }

    get jobTemplate() {
        return /*html*/`<div class="col-12 col-md-4 col-lg-2 border border-gray shadow-lg rounded p-3 m-3">
            <h3>${this.jobTitle}</h3>
            <h3>${this.company}</h3>
            <h5>$${this.rate}</h5>
            <p>${this.hours}</p>
            <p>${this.description}</p>
            <button class="btn btn-danger btn-block" onclick="app.jobController.deleteJob('${this._id}')">Delort</button>
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editJobModal-${this._id}">
            Edit
        </button>
        ${this.jobModal}
        </div>
        `
    }

    get jobModal() {
        return /*html*/` 
        <div class="modal fade" id="editJobModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit ${this.jobTitle}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="container-fluid" onsubmit="app.jobController.editJob(event, '${this._id}')">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.jobTitle}" name="jobTitle" id="jobTitle">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.company}" name="company" id="company">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.rate}" name="rate" id="rate">
                                    </div>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.hours}" name="hours" id="hours">
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