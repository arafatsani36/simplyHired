import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';

const Statistics = () => {

    const Marks = [
        {
          name: 'Assignment 1',
          m: 60,
          
        },
        {
          name: 'Assignment 2',
          m: 59,
          
        },
        {
          name: 'Assignment 3',
          m: 58,
          
        },
        {
          name: 'Assignment 4',
          m: 60,
          
        },
        {
          name: 'Assignment 5',
          m: 55,
          
        },
        {
          name: 'Assignment 6',
          m: 58,
          
        },
        {
          name: 'Assignment 7',
          m: 60,
          
        },
        {
          name: 'Assignment 8',
          m: 60,
            
          },
      ];




    return (
        <div className='container mt-10'>
           <AreaChart width = {1200} height = {500} data = {Marks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="m" stroke="#8884d8" fill="#8884d8" />
           </AreaChart>
        </div>
    );
};

export default Statistics;