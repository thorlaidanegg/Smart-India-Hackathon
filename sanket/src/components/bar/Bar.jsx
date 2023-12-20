import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [40, 30, 20, 27];
const xLabels = [
  'tractors',
  'Loader',
  'excavator',
  'Crane',
];

export default function SimpleBarChart() {
  return (
    <BarChart
      width={1200}
      height={600}
      series={[
        { data: uData, label: 'number', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}