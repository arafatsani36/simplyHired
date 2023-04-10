import React from 'react';
import './JobCategory.css'

const JobCategory = ({jobCategory}) => {
    return (
        <div className='mt-8 jobCategory'>
           <img className=' rounded-lg' src={jobCategory.picture} alt="" />
           <h4 className='mt-5 jobCategory-title'>{jobCategory.name}</h4>
           <p className='jobCategory-p'>{jobCategory.available}</p>
        </div>
    );
};

export default JobCategory;