
export const loadData= async()=>{
    const catagoryRes = await fetch("catagorys.json")
    const catagoryData = await catagoryRes.json();

    const jobRes = await fetch("job.json");
    const jobData = await jobRes.json();

    return {catagoryData, jobData};
}

