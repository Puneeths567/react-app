import { AppBar, Button, Paper } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import img1 from "../Images/wallapaper.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <form>
        <div className="input-group">
          <h1 style={{ color: "darkblue" }}>Roaster Operations</h1>
          <Button
            onClick={() => navigate("addRoaster")}
            className="addroaster"
            variant="contained"
            style={{ textAlign: "center" }}
          >
            Add Roaster
          </Button>
          <div className="input-group">
            <Button
              onClick={() => navigate("fetchRoaster")}
              className="fetchroaster"
              variant="contained"
            >
              Fetch Roaster
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Home;
