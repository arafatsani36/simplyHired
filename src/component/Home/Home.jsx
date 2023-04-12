import React, { useEffect, useState } from 'react';
import './Home.css'
import JobCategory from '../JobCategory/JobCategory';
import banner from "../../image/banner.avif";
import { useLoaderData } from 'react-router-dom';
import SingleJobs from '../SingleJobs/SingleJobs';


const Home = () => {

    const [jobCategory, SetJobCategory] = useState([])

    useEffect(() => {
        fetch('jobcategory.json')
        .then(res => res.json())
        .then(data => SetJobCategory(data))
    },[])

    const jobs = useLoaderData();

    return (
            <div>
            <div className='banner'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 container items-center justify-center pt-10'>
                    <div>
                        <h1 className='banner-title'>One Step Closer To Your <span>Dream Job</span></h1>
                        <p className='banner-p'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="rounded-lg btn mt-8">Get Started</button>
                    </div>
                    <div>
                        <img className=' w-full' src={banner} alt="" />
                    </div>
                </div>
            </div>

            <div className='job-Category-container container'>
                <h2 className='mt-10 text-center job-Category-title'>Job Category List</h2>
                <p className='text-center job-Category-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='Job-Category grid lg:grid-cols-4  gap-4'>
                    {
                        jobCategory.map(jobCategory => <JobCategory key={jobCategory.id} jobCategory={jobCategory}></JobCategory>)
                    }
                </div>
                
            </div>

            <div className='jobs-featured container'>
                <h2 className='mt-10 text-center job-Category-title'>Featured Jobs</h2>
                <p className='text-center job-Category-p'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid lg:grid-cols-2  gap-4 mt-10'>
                    {
                       jobs.map(job => <SingleJobs key={job.id} job={job}></SingleJobs>)
                    }
                </div>
            </div>
            
            
        </div>
        
    );
};

export default Home;