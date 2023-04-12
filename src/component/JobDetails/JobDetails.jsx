import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakeDB';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    let {id} =useParams()

    const [jobs , setJobs] = useState({})
    useEffect(() => {
        if(jobDetails){ 
            const data = jobDetails.find(dt => dt.id == id);
            setJobs(data)
        }
    })

    const handleapplybtn = (id) => {
        console.log(id);
        addToDb(id)
    }
    
    return (
        <div className='container text-center'>
            <h1 className='mt-5 -title'>job details</h1>
            <div className='grid lg:grid-cols-2  gap-6 mt-10'>
                <div>
                    <h4 className='jobs'>Job Description: <span>{jobs.jobdescription}</span></h4>
                    <h4 className='jobs mt-5'>Job Responsibility: <span>{jobs.jobresponsibility}</span></h4>
                    <h4 className='jobs mt-5'>Educational Requirements: <span>{jobs.educationalrequirements}</span></h4>
                    <h4 className='jobs mt-5'>Experiences: <span>{jobs.experiences}</span></h4>
                </div>
                <div>
                    <div className='job-info'>
                        <h2 className='jobs job-details'>job details</h2>
                        <div>
                            <h4 className='jobs mt-5'><FontAwesomeIcon icon={faDollarSign}/> Salary: <span>{jobs.salary}</span></h4>
                            <h4 className='jobs mt-3'><FontAwesomeIcon icon={faCalendar}/> Job Title : <span>{jobs.title}</span></h4>
                        </div>
                        <h2 className='jobs mt-5'>Contact Information</h2>
                        <div>
                            <h4 className='jobs mt-5'><FontAwesomeIcon icon={faPhone}/> Phone: <span>{jobs.phone}</span></h4>
                            <h4 className='jobs mt-3'><FontAwesomeIcon icon={faEnvelope} /> Email : <span>{jobs.email}</span></h4>
                            <h4 className='jobs mt-3'><FontAwesomeIcon icon={faLocationDot} /> Address : <span>{jobs.address}</span></h4>
                        </div>
                    </div>
                    
                    <button onClick={() => handleapplybtn(id)} className="rounded-lg btn mt-8">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;