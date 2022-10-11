import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';
import './DataChart.css'


const DataChart = ({ ChartData }) => {
    const { data } = ChartData;
    console.log(data)
    const { name, id, total } = data;

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 590,
    //         pv: 800,
    //         amt: 1400,
    //         cnt: 490,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 868,
    //         pv: 967,
    //         amt: 1506,
    //         cnt: 590,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 1397,
    //         pv: 1098,
    //         amt: 989,
    //         cnt: 350,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 1480,
    //         pv: 1200,
    //         amt: 1228,
    //         cnt: 480,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1520,
    //         pv: 1108,
    //         amt: 1100,
    //         cnt: 460,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 1400,
    //         pv: 680,
    //         amt: 1700,
    //         cnt: 380,
    //     },
    // ];
    return (

        <div>
            <div className='container mt-5 mb-3'>
                <div className='d-flex justify-content-center align-items-center' >
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