import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { id: 0, value: 10, label: 'Carpenters' },
    { id: 1, value: 15, label: 'BrickLayers' },
    { id: 2, value: 20, label: 'Electricians' },
    { id: 3, value: 20, label: 'Plumbers' }
  ];
  
  export default function Pie() {
    return (
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={360}
      />
    );
  }