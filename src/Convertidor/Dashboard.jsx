import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-regular-svg-icons";

function Dashboard() {
  return (
    <div class="card ml-4" style={{ width: "18rem" }}>
      <div class="card-header fw-bolder">Divisa </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {" "}
          <b>EUR:</b> 50
        </li>
        <li class="list-group-item">
          {" "}
          <b>USD: </b> 46.329241534720985
        </li>
        <li class="list-group-item">
          <FontAwesomeIcon
            icon={faTrashCan}
            className=" fa-lg"
            style={{ margin: "2px", color: "black" }}
          />{" "}
          <FontAwesomeIcon
            icon={faEdit}
            className=" fa-lg"
            style={{ margin: "2px", color: "black" }}
          />{" "}
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
