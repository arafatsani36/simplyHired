import { getShoppingCart } from "../utilities/fakeDB";

export const apply = async() => {
    const jobdata = await fetch('/featuredjobs.json')
    const jb = await jobdata.json()
    let newJob = [];
    const storeJobs = getShoppingCart();
    for(const id in storeJobs){
        const fp = jb.find(jobs => jobs.id === id);
        if(fp){
            fp.quantity = storeJobs[id]
            newJob.push(fp)
        }
    }
    return {newJob, jb};
}