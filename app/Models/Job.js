import { generateId } from "../Utils/GenerateId.js"

export default class Job {

    constructor({ name, title, salary, jobDescription }) {
        this.name = name
        this.title = title
        this.salary = salary
        this.jobDescription = jobDescription
        this.id = generateId()
    }

    get JobTemplate() {
        return `<div class="col-4">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${this.name} ${this.title}</h4>
            <p class="card-text">${this.salary} ${this.jobDescription}</p>
            <form onsubmit="app.carsController.apply('${this.id}')">
                <div class="form-group p-1">
                    <input type="number" class="form-control" name="apply" id="apply" aria-describedby="helpId" placeholder="Apply">
                </div>
                <button class="btn btn-success" type="submit" >Apply</button>
            </form>
            <button class="btn btn-danger" onclick="app.jobsController.delete('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
    }

    get AppliedTemplate() {
        return `<div class="col-4">
    <div id="${this.id}" class="card">
        <img class="card-img-top img-fluid" src="${this.title}" alt="">
        <div class="card-body">
            <h4>Applied!</h4>
            <button class="btn btn-danger" onclick="app.jobsController.delete('${this.id}')">Delete</button>
        </div>
    </div>
</div>`
    }


}