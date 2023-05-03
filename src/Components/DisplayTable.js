import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./DisplayTable.css";

function DisplayTable() {
  const [column, setColumn] = useState([]);
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(-1);
  const [empid, usetEmpid] = useState("");
  const [name, usetName] = useState("");
  const [role, usetRole] = useState("");
  const [date, usetDate] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    getRoaster();
  }, []);

  function getRoaster() {
    fetch("http://localhost:8080/RoasterData/getAll")
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data));
        setRecord(data);
      });
  }

  const handleEdit = (index, id) => {
    //     fetch("http://localhost:8080/RoasterData/" + id)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);

    usetEmpid(record[index].empid);
    usetName(record[index].name);
    usetRole(record[index].role);
    usetDate(record[index].date);
    console.log();
    //       })
    //       .catch((er) => console.log(er));
    setEditId(id);
  };

  const handleUpdate = (id) => {
    // fetch("http://localhost:8080/RoasterData/" + id, {
    //   empid: uempid,
    //   name: uname,
    //   role: urole,
    //   date: udate,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setEditId(record.id);
    //   })
    //   .catch((err) => console.log(err));

    const items = { id, empid, name, role, date };
    console.log(items);
    fetch("http://localhost:8080/RoasterData/" + id, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    })
      .then((response) => {
        response.json().then((resp) => {
          console.log(resp);
          setItems(resp);
        });
      })
      .catch((e) => {
        console.log("e", e);
      });
    window.location.reload();
  };

  // const handleDelete = (id) => {
  //   alert("delete");
  //   fetch(`http:localhost:8080/RoasterData/${id}`, {
  //     method: "DELETE",
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //       // window.location.reload();
  //     });
  //   });
  // };

  function handleDelete(id) {
    fetch(`http://localhost:8080/RoasterData/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
    window.location.reload();
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          RoasterData
          <tr>
            <th>ID</th>
            <th>Emp Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((record, index) =>
            record.id === editId ? (
              <tr>
                <td>{record.id}</td>
                <td>
                  <input
                    type="text"
                    value={empid}
                    onChange={(e) => usetEmpid(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => usetName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => usetRole(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => usetDate(e.target.value)}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(record.id)}>
                    Update
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{record.id}</td>
                <td>{record.empid}</td>
                <td>{record.name}</td>
                <td>{record.role}</td>
                <td>{record.date}</td>
                <td>
                  <button onClick={() => handleEdit(index, record.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(record.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayTable;
