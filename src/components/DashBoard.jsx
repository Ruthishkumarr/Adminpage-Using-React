import React from "react";
import Cards from "./Cards";

function DashBoard() {
  let data = [
    {
      title: "EARNINGS (MONTHLY)",
      value: "$40,000",
      color: "primary",
      icon: "fa-calendar",
      isProgress: false,
    },
    {
      title: "EARNINGS (ANNUAL)",
      value: "$215,000",
      color: "success",
      icon: "fa-dollar-sign",
      isProgress: false,
    },
    {
      title: "TASK",
      value: "60",
      color: "info",
      icon: "fa-clipboard-list",
      isProgress: true,
    },
    {
      title: "PENDING REQUEST",
      value: "18",
      color: "warning",
      icon: "fa-commands",
      isProgress: false,
    },
  ];
  return (
    <>
      <div id="wrapper">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
              {data.map((e, i) => {
                return <Cards cardData={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
