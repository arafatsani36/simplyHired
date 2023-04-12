import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJobs from '../ApplyJobs/ApplyJobs';


const AppliedJobs = () => {
    const {newJob} = useLoaderData();
   
console.log(newJob)
    return (
        <div className='container'>
            {
               newJob.map(job => <ApplyJobs job={job} key={job.id}></ApplyJobs>) 
            }
        </div>
    );
};

export default AppliedJobs;