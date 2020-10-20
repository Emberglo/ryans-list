import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"

class JobsService {

    constructor() { }

    // apply(id) {
    //     let temp = ProxyState.jobs
    //     // let house = temp.find(h => h.id == id)
    //     document.getElementById("id").innerHTML = AppliedTemplate
    //     ProxyState.jobs = temp
    // }

    removeJob(id) {
        let temp = ProxyState.jobs
        let jobIndex = temp.findIndex(j => j.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.jobs = temp
    }

    createJob(rawJob) {
        let newJob = new Job(rawJob)
        let jobs = [...ProxyState.jobs, newJob]
        ProxyState.jobs = jobs
    }

}

export const jobsService = new JobsService()