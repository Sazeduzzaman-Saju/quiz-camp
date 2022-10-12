import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import './DataChart.css'


const DataChart = ({ ChartData }) => {
    const { data } = ChartData;
    const { name } = data;

    return (

        <div>
            <div className='container mt-5 mb-3'>
                <div className='d-flex justify-content-center align-items-center wrapper' >

                    <RadarChart outerRadius={190} width={730} height={550} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={30} domain={[0, 10]} />
                        <Radar name={name} dataKey="id" stroke="var(--secondary-color)" fill="#8884d8" fillOpacity={0.6} />
                        <Radar name={name} dataKey="total" stroke="var(--main-color)" fill="#82ca9d" fillOpacity={0.6} />
                        <Tooltip />
                        <Legend />
                    </RadarChart>
                </div>
            </div>
        </div>
    );;
};

export default DataChart;