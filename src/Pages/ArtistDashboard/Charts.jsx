import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
    return (
        <PieChart
            colors={['Yellow', 'red', 'green']}
            series={[
                {
                    data: [
                        { id: 0, value: 55, label: 'series A' },
                        { id: 1, value: 34, label: 'series B' },
                        { id: 2, value: 11, label: 'series C' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />
    );
}