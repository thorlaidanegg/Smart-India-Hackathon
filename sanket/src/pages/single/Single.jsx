import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import Featured from "../../components/featured/Featured";
import { fetchData } from '../../utils/sender';
import { useState , useEffect } from "react"
import Gauge from '../../components/gauge/Gauge'
import EngineeringIcon from '@mui/icons-material/Engineering';
import Pie from '../../components/pie/Pie'

const Single = () => {

    const [field1,setField1] = useState("")
    const [field2,setField2] = useState()
    const [field3,setField3] = useState("")
    const [field4,setField4] = useState("")

    const useInterval = (callback, delay) => {
      useEffect(() => {
        const intervalId = setInterval(callback, delay);
    
        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [callback, delay]);
    };



    const field1Data=() => {
      fetchData()
      .then((data) => setField1(data.feeds[0].field1))
      if(field1===1)
      {
        alert("Fall detected on Jacket number 1");
      }
    }

    const field2Data=() => {
      fetchData()
      .then((data) => setField2(data.feeds[0].field2))
    }

    const field3Data=() => {
      fetchData()
      .then((data) => setField3(data.feeds[0].field3))
    }

    const field4Data = () => {
      fetchData()
      .then((data) => setField4(data.feeds[0].field4))
    }

    useInterval(field4Data, 1000);
    useInterval(field3Data, 1000);
    useInterval(field2Data, 1000);
    useInterval(field1Data, 1000);

    

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AhpEryE_jhLCat32_TZOFEmiG0JvYU2EkaygmnCqfA&s"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Sonu Kumar Mishra</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sonuMishra007@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    123, ABC Street, Mumbai, India
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
            <EngineeringIcon className={field2==1 ?"icon-g":"icon"} fontSize="large"/>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} width={800} />
          </div>
        </div>

        <div className="meters">
          {/* <Featured value={field3} title={'Field 3'} text={field3+'%'}/> */}
            <Featured className="f" value={field4} title={'Temperature'} text={field4+'°C'}/>
            <div className="gauges">
            <Gauge className="gauge1" value={field1} title={"Fall Detection"}/>
            <Gauge className="gauge1" value={field3} title={"Hazardous Gas"}/>
            </div>
            <Pie/>
        </div>
      
        <div className="bottom">
        <h1 className="titles">Workers</h1>
        <Datatable/>
        </div>
      </div>
    </div>
  );
};

export default Single;