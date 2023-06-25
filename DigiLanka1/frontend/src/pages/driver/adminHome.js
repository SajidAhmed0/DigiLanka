import { useEffect, useState} from "react";
import { useDriverContext } from "../../hooks/useDriverContext";
import axios from "axios"


//page components
import DriverDetails from "../../components/driver/driversDetails";
import DriverForm from "../../components/driver/driverForm";
import BarChart from "../../components/driver/barChar";
import { Link } from "react-router-dom";
import '../../DriverStyle/driverCss.css'


const AdminDriver = () => {
  const {driver, dispatch} = useDriverContext();
  const [search , setSearch] = useState('');
  const [filter , setFilter] = useState('All');
  const [data, setData] = useState(null);
  useEffect(()=>{

    const getAllDrivers = async ()=> {
      await axios.get("http://localhost:8090/api/driver/get?keyword=" + search)
      .then((res)=>{
        const json = res.data
        setData(json.driver);
        dispatch({type:'SET_DRIVER', payload: json.driver});
      })
      .catch((err=>console.log(err)))
      
    }

    if(filter !== 'All' && filter !== null && data != null){
      // getAllDrivers();
      dispatch({type:'FILTER_DRIVER', payload: data, filter:filter});
      
    }else{
      getAllDrivers();
    }
  
  },[driver,filter,search])

  // console.log(driver);

  return (
    <div className="pages add-form">
      <div className="home">
        <div className="driver">
          <Link to={'/driver/report'} state={driver}><button >Generate Report</button></Link>
          <input type="text" placeholder="Search here" onChange={(e)=>setSearch(e.target.value)}/>
          <select  onChange={(e)=>setFilter(e.target.value)}>
            <option value= "All" >All</option>
            <option value= "Motor cycle" >Motor Cycle</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Auto">Auto</option>
            
          </select>
          {driver && driver.map((val , index)=> (
            <DriverDetails key={index} driver={val} />
          ))}
        </div>
        <div className="form">
          <div><DriverForm/></div><br/><br/><br/><br/>
        <div><BarChart driver={driver}/></div>
        </div>
      </div>
    </div>
  );
}

export default AdminDriver;