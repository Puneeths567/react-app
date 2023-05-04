import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Home from "./Home";
import { Button } from "@mui/material";
import { Http } from "@mui/icons-material";
import "./ADD.css";

const RoasterADD = () => {
  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    const roasterData = { empid, name, role, date };
    console.log(roasterData);
    fetch("http://192.168.64.9:8080/RoasterData/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(roasterData),
    }).then(() => {
      console.log("New Roaster added");
    });
    window.history.go(-1);
  };

  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          label="Employee ID"
          variant="outlined"
          className="employ"
          value={empid}
          onChange={(e) => setEmpid(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          style={{ marginBottom: "10px", marginLeft: "10px" }}
          variant="outlined"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Role"
          className="role"
          variant="outlined"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="date"
          className="date"
          onChange={(e) => setDate(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          className="btn"
          onClick={handleClick}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default RoasterADD;
