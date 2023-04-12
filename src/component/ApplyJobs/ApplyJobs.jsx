import React from 'react';
import './ApplyJobs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ApplyJobs = ({job}) => {
    return (
        <div className='container'>
            <div className='grid lg:grid-cols-2  gap-6 mt-10 justify-between justify-items-center items-center singlejob'>
                <div className='flex items-center gap-10'>
                    <div>
                        <img className=' w-32' src={job.logo} alt="" />
                    </div>
                    <div>
                        <h2 className='job-title'>{job.title}</h2>
                        <h4 className='job-name'>{job.name}</h4>
                        <div className='flex mt-5'>
                            <button className='job-remote mr-5'>{job.remote}</button>
                            <button className='job-fulltime'>{job.fulltime}</button>
                        </div>
                        <div className='flex mt-5'>
                            <p className='jobs-location mr-5'><FontAwesomeIcon icon={faLocationDot}/> {job.location}</p>
                            <p className='job-salary'><FontAwesomeIcon icon={faDollarSign}/> Salary :{job.salary}</p>
                        </div>
                        
                    </div>
                </div>

                <div>
                  <Link to={`/JobDetails/${job.id}`}><button className="rounded-lg btn mt-8">View Details</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default ApplyJobs;