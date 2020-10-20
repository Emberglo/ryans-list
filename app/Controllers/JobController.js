import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/JobService.js"

function _draw() {
    let jobs = ProxyState.jobs
    let template = ""
    jobs.forEach(j => template += j.jobTemplate)
    document.getElementById("jobs").innerHTML = template
}

export default class JobsController {
    constructor() {
        ProxyState.on("jobs", _draw)
        _draw()
    }

    postJob(event) {
        event.preventDefault();
        // console.log("car creating")
        let form = event.target
        // console.log(form)
        let newJob = {
        // @ts-ignore
            jobTitle : form.jobTitle.value,
            company : form.company.value,
            rate : form.rate.value,
            hours : form.hours.value,
            description : form.description.value || "Unknown",
        }
        // @ts-ignore
        $('#jobModal').modal('toggle')
        jobService.postJob(newJob)
    }

    editJob(event, id) {
        event.preventDefault();
        let form = event.target
        let editedJob = {
            jobTitle: form.jobTitle.value,
            company: form.company.value,
            rate: form.rate.value,
            hours: form.hours.value,
            description: form.description.value || "Unknown",
            _id: id
        }
        // @ts-ignore
        $('#editJobModal-' + id).modal('toggle')
        jobService.editJob(editedJob)
    }

    deleteJob(id) {
        jobService.deleteJob(id)
    }

} 