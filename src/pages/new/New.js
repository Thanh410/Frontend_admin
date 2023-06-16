import "./New.scss";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://th.bing.com/th/id/OIP.aV3_1sg9QEdADlu5byNWbwAAAA?pid=ImgDet&rs=1"
              }
              alt=""
              className="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined />
                </label>
                <input
                  type="file"
                  id="file"
                  className="icon"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                ></input>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                  ></input>
                </div>
              ))}

              <button className="btnSend">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
