import React from 'react';
import banner from "../../../image/banner.avif";

const HomePage = () => {
    return (
        <div>
            <div className='flex container'>
                <div>
                    <h1>One Step Closer To Your <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button class="rounded-lg btn">Get Started</button>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;