
export const loadData= async()=>{
    const catagoryRes = await fetch("catagorys.json")
    const catagoryData = await catagoryRes.json();

    // https://emon3455.github.io/demo-picture/json-file/all-jobs/jobs.json?fbclid=IwAR2CFEczVbfyxiUHFT1dycL9NRnzf52XajPDVilk0tJOmPHm3NqTr_EUrBU
    const jobRes = await fetch("job.json");
    const jobData = await jobRes.json();

    return {catagoryData, jobData};
}

