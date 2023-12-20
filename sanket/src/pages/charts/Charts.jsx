import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Gauge from '../../components/gauge/Gauge'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured';
import Pie from '../../components/pie/Pie';
import Bar from '../../components/bar/Bar' 
import Sidebar from '../../components/sidebar/Sidebar';
import { useState , useEffect } from "react"
import './charts.scss'
// import ThingSpeakData from '../../utils/fetchFromApi'
import { fetchData } from '../../utils/sender';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  
  
  export default function Charts() {

    const [field1,setField1] = useState("")
    const [field2,setField2] = useState()
    const [field3,setField3] = useState("")
    const [field4,setField4] = useState("")

    useEffect(() => {
      fetchData()
      .then((data) => setField1(data.feeds[0].field1))
    },[field1])

    useEffect(() => {
      fetchData()
      .then((data) => setField2(data.feeds[0].field2))
    },[field2])

    useEffect(() => {
      fetchData()
      .then((data) => setField3(data.feeds[0].field3))
    },[field3])

    useEffect(() => {
      fetchData()
      .then((data) => setField4(data.feeds[0].field4))
    },[field4])

    return (
      <div className="home">
      <Sidebar/>
      <div className="homeContainer">
          <div className="widgets">
            <Featured value={field4} title={'Temperature'} text={field1+'%'}/>
            <Chart width={850} value={Number(field3)}/>
              
          </div>
          <div className="charts">
              <div className="gauge">
                <h1>Air Quality</h1>
                <Gauge value={field2/100}/>
              </div>
              <h1>Workers</h1>
              <Pie/>
          </div>
          <div className="bar">
          <h1>Equipment</h1>
          <Bar/>
          </div>
      </div>
    </div>
    );
  }