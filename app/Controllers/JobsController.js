import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(j => template += j.JobTemplate)
    document.getElementById("jobs").innerHTML = template
}

export default class JobsController {
    constructor() {
        // console.log("cars controller")
        // console.log(ProxyState.cars)
        _draw()
        ProxyState.on("jobs", _draw)
    }

    createJob() {
        event.preventDefault();
        // console.log("car creating")
        let form = event.target
        // console.log(form)
        let rawJob = {
            // @ts-ignore
            name: form.name.value,
            // @ts-ignore
            title: form.title.value,
            // @ts-ignore
            salary: form.salary.value,
            // @ts-ignore
            jobDescription: form.jobDescription.value,
        }
        // console.log(rawCar)
        jobsService.createJob(rawJob)
    }

    delete(id) {
        jobsService.removeJob(id)
    }

    // apply(id) {
    //     jobsService.apply(id)
    // }
} 