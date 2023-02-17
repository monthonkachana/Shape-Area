import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import HeaderComp from "../HeaderComp";
function Square() {
  const [areaTriangle, setAreaTriangle] = useState(0);
  const [bases, setBases] = useState(0);
  const [highs, setHighs] = useState(0);

  useEffect(() => {
    calTriangleArea();
  }, [bases, highs]);

  const handleChageBases = (e) => {
    e.target.value === "" ? setBases(0) : setBases(e.target.value);
  };
  const handleChageHight = (e) => {
    e.target.value === "" ? setHighs(0) : setHighs(e.target.value);
  };
  const calTriangleArea = () => {
    setAreaTriangle(((parseFloat(bases) * parseFloat(highs)) / 2).toFixed(2));
  };
  return (
    <>
      <HeaderComp />
      <span>ป้อนฐาน : </span>
      <input type="text" onChange={handleChageBases} placeholder="0.00" />
      <br />
      <br />
      <span>ป้อนสูง : </span>
      <input type="text" onChange={handleChageHight} placeholder="0.00" />
      <br />
      <br />
      <button onClick={calTriangleArea}>คำนวนพื้นที่สี่เหลื่ยม</button>
      <br />
      <br />
      <span>พื้นที่สี่เหลื่ยม : {areaTriangle}</span>
      <Footer />
    </>
  );
}

export default Square;
