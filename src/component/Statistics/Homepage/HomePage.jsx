import React, { useEffect, useState } from 'react';
import './HomePage.css'
import banner from "../../../image/banner.avif";
import JobCategory from '../../JobCategory/JobCategory';

const HomePage = () => {


    const [jobCategory, SetJobCategory] = useState([]);
    useEffect(() => {
        fetch('jobcategory.json')
        .then(res => res.json())
        .then(data => SetJobCategory(data))
    },[])


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
            
            
        </div>
    );
};



export default HomePage;