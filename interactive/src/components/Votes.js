import { useState, useEffect } from "react";
import Card from "./Card";
import jsonData from "../assets/data.json";

const Votes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const isLocal = localStorage.getItem("jsonData");
    const loadedData = isLocal ? JSON.parse(isLocal) : jsonData;
    localStorage.removeItem("jsonData");
    localStorage.setItem("jsonData", JSON.stringify(loadedData));
    setData(loadedData);
  }, []);

  return (
    <div>
      <h2 className="pl-3">Votes</h2>
      <div className="row m-0 div__cards">
        {data.length ? (
          <>
            <Card data={data[0]} />
            <Card data={data[1]} voted={true} />
            <Card data={data[2]} />
            <Card data={data[3]} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Votes;
