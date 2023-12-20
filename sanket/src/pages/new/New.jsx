import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";


  
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  
  // const [Name, setName] = useState("")
  // const [Age, setAge] = useState("")
  // const [Salary, setSalary] = useState("")
  // const [Email, setEmail] = useState("")

  // const handleInputChange = (e) => {
  //   if(e.target.__reactProps$hg9a3v5kwf5.type === "name")
  //   {
  //     setName(e.target.value)
  //   }
  //   if(e.target.__reactProps$hg9a3v5kwf5.type === "age")
  //   {
  //     setAge(e.target.value)
  //   }
  //   if(e.target.__reactProps$hg9a3v5kwf5.type === "salary")
  //   {
  //     setSalary(e.target.value)
  //   }
  //   if(e.target.__reactProps$hg9a3v5kwf5.type === "email")
  //   {
  //     setEmail(e.target.value)
  //   }

  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form > 
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}/>
                </div>
              ))}
              <Link to="/">
              <button type="submit">Add</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default New;