import React from 'react';
import './SingleJobs.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleJobs = ({job}) => {

    return (
        <div className='job-featured'>
            <div>
                <img className=" w-1/4" src={job.logo} alt="" />
                <h4 className='job-featured-title'>{job.title}</h4>
                <p className='job-featured-name'>{job.name}</p>
                <div className='flex gap-5 mt-5 mb-4'>
                    <button className='job-featured-btn'>{job.remote}</button>
                    <button className='job-featured-btn'>{job.fulltime}</button>
                </div>
                <div className='flex gap-5'>
                    <p className='location'><FontAwesomeIcon icon={faLocationDot} /> {job.location}</p>
                    <p className='salary'><FontAwesomeIcon icon={faDollarSign} /> {job.salary}</p>
                </div>
              <Link to={`/JobDetails/${job.id}`}><button className="rounded-lg btn mt-6">View Details</button></Link>   
               
            </div>
            
        </div>
    );
};

export default SingleJobs;