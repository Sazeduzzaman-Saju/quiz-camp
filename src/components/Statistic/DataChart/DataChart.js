import React from "react";
import './DataChart.css'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';


const DataChart = ({ ChartData }) => {
    const { data } = ChartData;
    const { name } = data;

    return (

        <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer >
                <RadarChart outerRadius={150} width={500} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    <Radar name={name} dataKey="id" stroke="var(--secondary-color)" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name={name} dataKey="total" stroke="var(--main-color)" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );

    // return (

    //     // <div>
    //     //     <div className='container mt-5 mb-3'>
    //     //         <div className='d-flex justify-content-center align-items-center wrapper' >

    //     //             <RadarChart outerRadius={50} width={730} height={550} data={data}>
    //     //                 <PolarGrid />
    //     //                 <PolarAngleAxis dataKey="name" />
    //     //                 <PolarRadiusAxis angle={30} domain={[0, 10]} />
    //     //                 <Radar name={name} dataKey="id" stroke="var(--secondary-color)" fill="#8884d8" fillOpacity={0.6} />
    //     //                 <Radar name={name} dataKey="total" stroke="var(--main-color)" fill="#82ca9d" fillOpacity={0.6} />
    //     //                 <Tooltip />
    //     //                 <Legend />
    //     //             </RadarChart>

    //     //         </div>
    //     //     </div>
    //     // </div>



    // );
};

export default DataChart;