import { useState, useEffect } from "react";
import { useDriverContext } from "../../hooks/useDriverContext";
import './form.css'
import axios from "axios";


const DriverForm = () => {

  const {dispatch} = useDriverContext();

  const [name, setName] = useState('');
  const[address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [blood, setBlood] = useState('');
  const [category, setCategory] = useState([]);
  const [issue, setIssue] = useState('');
  const [expire, setExpire] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [validate, setValidate] = useState(null);
  const [nic, setNic] = useState([]);
  const [maxDate , setMaxDate] = useState('');
  const [minDate , setMinDate] = useState('');

  const handleChange = (event)=>{
    const {value,checked} = event.target;

    if(checked){
      setCategory(pre => [...pre, value])
    } else {
      setCategory((prev) => prev.filter((item) => item !== value));
    }
  }

  useEffect(()=>{

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // let cyear = parseInt(issue.slice(0,4));
    // let cmonth = parseInt(issue.slice(5,7))
    // let cday = parseInt(issue.slice(8,10))

    if(month < 9) {
      month = '0' + month;
    }
    if(day < 9) {
      day = '0' + month
    }
    let minYear = year - 8;
    let max = year + '-' + month + '-' + day
    let min = minYear + '-' + month + '-' + day
    // console.log(max);
    setMaxDate(max);
    setMinDate(min);
    let ex = parseInt(issue.slice(0,4));
    let ex2 = ex + 8;
    let ex1 = issue;
    ex2 = ex2.toString();
    setExpire(ex1.replace(ex, ex2));

   
  },[issue]);
// console.log(minDate);
  useEffect(()=> {

    if(nic.length === 12){
      const get = async ()=>{
        await axios.get("http://localhost:8090/nic/nic/"+ nic)
        .then((res)=>{
          const data = res.data[0][0]
          if(data != null){
            setName(data.name);
            setAddress(data.address);
            setDob(data.birthDate);
          }else{
            setName('');
            setAddress('');
            setDob('');
          }
          // console.log(data);
        })
        .catch((err=>console.log(err)))
      }
      get();
    }else{
      setName('');
      setAddress('');
      setDob('');
    }

  },[nic])

  // console.log(nic);
  const handleDate =(e) => {
    setIssue(e.target.value);
    
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();



    if(name.length === 0 || address.length === 0 || dob.length === 0 || blood.length === 0 || category.length === 0 || issue.length === 0 || status.length === 0 || nic.length < 12) {
      setValidate(true);
    }

    const driver = {name, address, dob, blood, category, issue, expire, status};
    //console.log(driver);

    await axios.post("http://localhost:8090/api/driver/new", driver)
      .then((res)=>{
        setError(null);
        setName('');
        setAddress('');
        setBlood('');
        setCategory([]);
        setDob('');
        setIssue('');
        setExpire('');
        setStatus('');
        setValidate(null);
        setNic([]);
        maxDate('');
        const json = res.data
        dispatch({type:'CREATE_DRIVER', payload: json.driver})
      })
      .catch((err=>console.log(err)))

    // const response = await fetch('api/driver/new', {
    //   method: 'POST',
    //   body: JSON.stringify(driver),
    //   headers: {'Content-Type' : 'application/json'}
    // })

    // const json = await response.json();

    // if(!response.ok) {
    //   setError(json.error);
    //   console.log(driver);
      
    // }else {
    //   setError(null);
    //   setName('');
    //   setAddress('');
    //   setBlood('');
    //   setCategory([]);
    //   setDob('');
    //   setIssue('');
    //   setExpire('');
    //   setStatus('');
    //   setValidate(null);


    //   console.log(driver);
    //   console.log(`successfully created ${json.driver}`);
    //   dispatch({type:'CREATE_DRIVER', payload: json.driver})
    // }
  }
 
  // console.log(category);
  //console.log(expire);
  return(
    <form onSubmit={handleSubmit} className="add-form">
      <center><h3>Add New Driver</h3></center>
      <label>NIC No:</label>
      <input 
        type="text"
        onChange= {(e)=> setNic(e.target.value)}
        value={nic}
        maxLength={12}
        />
      {validate && nic.length !== 12 ? 
        <label className="error">NIC required</label>:''}<br/>
      <label>Name:</label>
      <input 
        type="text"
        onChange={(e)=> setName(e.target.value)}
        value={name}
        readOnly
        />
        {validate && name.length === 0? 
          <label className="error">name required</label>:''}<br/>
      <label>Address:</label>
      <input 
        type="text"
        onChange={(e)=> setAddress(e.target.value)}
        value={address}
        readOnly
      />
      {validate && address.length === 0? 
          <label className="error">address required</label>:''}<br/>
      <label>Date of Birth:</label>
      <input 
        type="date"
        onChange={(e)=> setDob(e.target.value)}
        value={dob}
        readOnly
      />
      {validate && dob.length === 0? 
          <label className="error">Please select the Date of birth</label>:''}<br/>
      <label>Blood Type:</label>
      <input 
        type="text"
        onChange={(e)=> setBlood(e.target.value)}
        value={blood}
      />
      {validate && blood !== 'O+' && blood !== 'A+' && blood !== 'A-' && blood !== 'AB+' && blood !== 'AB-' && blood !== 'B-' && blood !== 'B+'? 
          <label className="error">Blood type required</label>:''}<br/>
      <label>Category:</label>
      <div className="wrapper">
        <input 
          type="checkbox"
          onChange={handleChange}
          value="Motor cycle"
          checked = {category.includes("Motor cycle")}
          className="check"
        />
        <label>Motor cycle</label>
        <input 
          type="checkbox"
          onChange={handleChange}
          value="Car"
          checked = {category.includes("Car")}
          className="check"
        />
        <label>Car</label>
        <input 
          type="checkbox"
          onChange={handleChange}
          value="Bus"
          checked = {category.includes("Bus")}
          className="check"
        />
        <label>Bus</label>
        <input 
          type="checkbox"
          onChange={handleChange}
          value="Auto"
          checked = {category.includes("Auto")}
          className="check"
        />
        <label>Auto</label><br/>
        {validate && category.length === 0? 
          <label className="error">Please select the category</label>:''}
        <br/>
      </div>
      <label>Issued Date:</label>
      <input 
        type="date"
        onChange={handleDate }
        value={issue}
        max= {maxDate}
        min={minDate}
      />
      {validate && issue.length === 0? 
          <label className="error">Please select the issue date</label>:''}<br/>
      <label>Status:</label>
      <select onChange={(e)=> setStatus(e.target.value)}>
        <option></option>
        <option value= "approved" >approved</option>
        <option value="suspended">suspended</option>
        <option value="canceled">canceled</option>
      </select>
      {validate && status.length === 0? 
          <label className="error">Please select status</label>:''}<br/>
      <input type="submit" value="Add Driver"/>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default DriverForm;