
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
} from 'chart.js';
import { useEffect, useState } from 'react';

import {Bar} from 'react-chartjs-2';


const BarChart = ({driver}) => {

  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Title,
    Legend
  );

  const [y2019, setY2019] = useState(0);
  const [y2020, setY2020] = useState(0);
  const [y2021, setY2021] = useState(0);
  const [y2022, setY2022] = useState(0);
  const [y2023, setY2023] = useState(0);

  
  useEffect(()=>{

    var yr2019 = 0;
    var yr2020 = 0;
    var yr2021 = 0;
    var yr2022 = 0;
    var yr2023 = 0;
    const get = ()=> {
      if(driver !== null) {
        driver.map((val) => {
          var year = parseInt(val.issue.slice(0,4))
          if(year === 2019){
            yr2019 = yr2019 + 1;
          }
          if(year === 2020){
            yr2020 = yr2020 + 1;
          }
          if(year === 2021){
            yr2021 = yr2021 + 1;
          }
          if(year === 2022){
            yr2022 = yr2022 + 1;
          }
          if(year === 2023){
            yr2023 = yr2023 + 1;
          }
      })
      }
    }
    get();
    setY2019(yr2019);
    setY2020(yr2020);
    setY2021(yr2021);
    setY2022(yr2022);
    setY2023(yr2023);
    
  },[driver])


  const data = {
    labels: [2019, 2020, 2021, 2022, 2023],
    datasets: [{
      label: 'No of Drivers',
      data: [y2019, y2020, y2021, y2022, y2023],
      backgroundColor: 'aqua',
      borderColor: 'black',
      borderWidth: 1
    }] 
  }

  const options = {
    responsive:true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Driver registered per Year'
      }
    },
    scales: {
      x: {
        title : {
          display: true,
          text: 'Years'
        }
      }
    }
    
  }
  //console.log(y2019,y2020);

  return (
    
    <Bar
      data = {data}
      options = {options}
    />
  );

}

export default BarChart;