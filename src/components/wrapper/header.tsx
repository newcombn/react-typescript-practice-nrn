import React from "react";
import WeightChart from '../../chart.gif';

function Header(){
  return (
    <header>
        <img src={WeightChart} id="weight-chart" alt="BMI weight chart"/>
        <h1><a href="../../index.tsx">SkillSoft Weight Tracker</a></h1>
        <nav>
            <ul>
                <li><a href="../../index.tsx">home</a></li>
                <li><a href="enterweight.html">enter weight</a></li>
                <li><a href="myweights.html">my weight</a></li>
                <li><a href="teamweights.html">team weights</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
