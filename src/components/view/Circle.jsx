import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import HeaderComp from "../HeaderComp";

function Circle() {
  const [areaCircle, setAreaCircle] = useState(0);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    calCircleArea();
  }, [radius]);

  const handleChageRadius = (e) => {
    e.target.value == "" ? setRadius(0) : setRadius(e.target.value);
  };
  const calCircleArea = () => {
    setAreaCircle(
      (Math.PI * parseFloat(radius) * parseFloat(radius)).toFixed(2)
    );
  };
  return (
    <>
      <HeaderComp />
      <span>ป้อนรัศมี : </span>
      <input type="text" onChange={handleChageRadius} placeholder="0.00" />
      <br />
      <br />
      <button onClick={calCircleArea}>คำนวนพื้นที่วงกลม</button>
      <br />
      <br />
      <span>พื้นที่วงกลม : {areaCircle}</span>
      <Footer />
    </>
  );
}

export default Circle;
