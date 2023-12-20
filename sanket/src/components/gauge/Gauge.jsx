import React from 'react'
import GaugeChart from 'react-gauge-chart'

const Gauge = ({value,title}) => {
  return (
    <div>
      <h1>{title}</h1>
    <div className="gauge">
        <GaugeChart id="gauge-chart1"
            nrOfLevels={1}
            arcsLength={[1, 1]}
            colors={['#5BE12C',  '#EA4228']}
            percent={value}
            arcPadding={0.04}
            textColor='#fffff'
        />
    </div>
    </div>

  )
}

export default Gauge

