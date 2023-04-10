import React from 'react';
import './HomePage.css'
import banner from "../../../image/banner.avif";

const HomePage = () => {
    return (
        <div className='banner'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 container items-center justify-center pt-10'>
                <div>
                    <h1 className='banner-title'>One Step Closer To Your <span>Dream Job</span></h1>
                    <p className='banner-p'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button class="rounded-lg btn mt-8">Get Started</button>
                </div>
                <div>
                    <img className=' w-full' src={banner} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;