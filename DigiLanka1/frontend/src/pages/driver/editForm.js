import { useLocation, useNavigate } from "react-router-dom"
import { useState , useEffect} from "react";
import { useDriverContext } from "../../hooks/useDriverContext";
import './editForm.css'
import axios from "axios";

const EditForm = () => {

  const location = useLocation();
  const driver = location.state;
  const {dispatch} = useDriverContext();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const[address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [blood, setBlood] = useState('');
  const [category, setCategory] = useState([]);
  const [issue, setIssue] = useState('');
  const [expire, setExpire] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [oldCategory, setOldCategory] = useState([]);
  const [oldStatus, setOldStatus] = useState('');
  const [validate, setValidate] = useState(null);
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    setName(driver.name);
    setAddress(driver.address);
    setDob(driver.dob)
    setBlood(driver.blood);
    setIssue(driver.issue);
    setOldCategory(driver.category);
    setOldStatus(driver.status);
      

  },[]);

  useEffect(()=> {

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

    let max = year + '-' + month + '-' + day
    // console.log(max);
    setMaxDate(max)

    let ex = parseInt(issue.slice(0,4));
    let ex2 = ex + 8;
    let ex1 = issue;
    ex2 = ex2.toString();
    setExpire(ex1.replace(ex, ex2));

  },[issue])


  const handleChange = (event)=>{
    const {value,checked} = event.target;

    if(checked){
      setCategory(pre => [...pre, value])
    }else {
      setCategory((prev) => prev.filter((item) => item !== value));
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(name.length === 0 || address.length === 0 || dob.length === 0 || blood.length === 0 || category.length === 0 || issue.length === 0 || status.length === 0) {
      setValidate(true);
    }

    const newDriver = {name, address, dob, blood, category, issue, expire, status};

    await axios.put("http://localhost:8090/api/driver/get/" + driver._id  , newDriver)
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
        setOldCategory([]);
        setValidate(null);
        const json = res.data
        dispatch({type:'UPDATE_DRIVER', payload:json.driver});
        navigate('/driver')
      })
      .catch((err=>console.log(err)))

    // const response = await fetch('../api/driver/get/' + driver._id , {
    //   method:'PUT', 
    //   body:JSON.stringify(newDriver),
    //   headers: {'Content-Type': 'application/json'}
    // });

    // const json = await response.json();

    // if(!response.ok) {
    //   setError(json.error);
    //   console.log(newDriver);
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
    //   setOldCategory([]);
    //   setValidate(null);

    //   console.log(newDriver);
    //   dispatch({type:'UPDATE_DRIVER', payload:json.driver});
    //   navigate('/driver')
    // }
  }


  return(
    <div className="edit-form">
      <form onSubmit={handleSubmit} className="edit">
        <center><h3>Update Driver</h3></center>
        <label>Name:</label><br/>
        <input 
          type="text"
          onChange={(e)=> setName(e.target.value)}
          value={name}
          readOnly
        /><br/>
        {validate && name.length === 0? 
          <label className="error">name required</label>:''}<br/>
        <label>Address:</label><br/>
        <input 
          type="text"
          onChange={(e)=> setAddress(e.target.value)}
          value={address}
          readOnly
        /><br/>
        {validate && address.length === 0? 
          <label className="error">address required</label>:''}<br/>
        <label>Date of Birth:</label><br/>
        <input 
          type="date"
          onChange={(e)=> setDob(e.target.value)}
          value={dob}
          readOnly
        /><br/>
        {validate && dob.length === 0? 
          <label className="error">Please select the Date of birth</label>:''}<br/><br/>
        <label>Blood Type: </label><br/>
        <input 
          type="text"
          onChange={(e)=> setBlood(e.target.value)}
          value={blood}
        /><br/>
        {validate && blood !== 'O+' && blood !== 'A+' && blood !== 'A-' && blood !== 'AB+' && blood !== 'AB-' && blood !== 'B-' &&  blood !== 'B+'? 
        <label className="error">Blood type required</label>:''}<br/>
        <label>Category: <span className="edtspn">{oldCategory.map((val)=> `${val} , `)}</span></label><br/>
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
          <br/>
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
        <label>Issued Date:</label><br/>
        <input 
          type="date"
          onChange={(e) => setIssue(e.target.value)}
          value={issue}
          max={maxDate}
        />
        {validate && issue.length === 0? 
            <label className="error">Please select the issue date</label>:''}<br/>
        <label>Status: <span className="edtspn"> {oldStatus}</span></label><br/>
        <select onChange={(e)=> setStatus(e.target.value) }>
          <option></option>
          <option value='approved' >approved</option>
          <option value="suspended">suspended</option>
          <option value="canceled">canceled</option>
        </select>
        {validate && status.length === 0? 
            <label className="error">Please select status</label>:''}<br/>
        <input type="submit" value="Update Driver"/>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )

}

export default EditForm;