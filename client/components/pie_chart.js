import React from 'react';
import _ from 'lodash';
import {Pie} from 'react-chartjs-2';

const PieChart = (props) => {
    const labels = _.map(props.stat.options, 'option');
    const votes = _.map(props.stat.options, 'votes');
    let zeroFlag = true;
    votes.map(vote => {
        if(!vote === 0) {
            zeroFlag = false;
        }
    });
    zeroFlag = false;
    const chartData = {
        labels,
        datasets: [
            {
                label: 'Votes',
                data: [4,5,6,8],
                backgroundColor: [
                    '#E95E61',
                    '#91D2E5',
                    '#ECE65C',
                    '#4B63A4',
                    '#88C05D'
                ]
            }
        ]
    };
    const data = zeroFlag ? <h2 className='no-data-messsage'>No Data To Display</h2> : <Pie
    data={chartData}
    width={520}
    height={220}
    options={{
        responsive: true,
        maintainAspectRatio: false,
    }}
/>
    return(
        <div className='pie-chart'>
            {data}
        </div>
    );
};

export default PieChart;