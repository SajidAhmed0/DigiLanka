import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";
import '../../NicStyle/nic-add-form.css';

function AddPeople(){

    const [bc, setBc] = useState([]);

    const navigate = useNavigate();

    function handleApiBc(){
        
        const getNicForm = document.getElementById('getNic-form');

        getNicForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            const bcNo = document.getElementById('bcNo');
            axios.get(`http://localhost:8090/nic/getBc/${bcNo.value}`)
        .then((res)=> {
            console.log(res.data);
            setBc(res.data.user);
        })
        .catch((err)=>console.log(err));
        })
    }

    function handleApi(){
        const addPeopleForm = document.getElementById('addPeople');
        const formData = new FormData(addPeopleForm);
        console.log(addPeopleForm.isConnected);
        addPeopleForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            console.log(addPeopleForm);
            const formData = new FormData(addPeopleForm);
            console.log(formData);
            axios.post('http://localhost:8090/nic/add',formData).then((res)=>console.log(res));
            navigate('/nic/allPeople');
        });
    }

    function changeImage(){
        const profilePic = document.getElementById("profile-pic");
        const inputFile = document.getElementById("input-file");

        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
   
    return(
        <div >
            <h1 className="hea">Create NIC</h1>
            <form id="getNic-form">

           Enter BC id <input type="text" name="bcNo" title="12 digits only" id="bcNo"/>
           <button type="submit" onClick={handleApiBc}>Retrieve Data</button>
            </form>
            <form action="" method="post" id="addPeople" className="login-form">
            <label htmlFor="input-file" className="profile-pic"><img src="/image/profile.png" alt='profile-pic' id="profile-pic"/></label>
            <input type="file" name="testImage" accept="image/jpeg, image/png, image/jpg" id="input-file" style={{display:"none"}} onChange={changeImage} required/>
            <br></br>
            <br></br>
               
            <div className="inputField">
                <p>Name :</p>
                <input type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="name" defaultValue={bc.fullName} required />
            </div>
            <div className="inputField">
                <p>Other name :</p>
                <input type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="otherName" />
            </div>

            <div className="inputField">
                <p>Birth of Date :</p>
                <input type="date" name="birthDate" max={`2023-05-${new Date().getDate()}`} title="enter correct dob" defaultValue={bc.birthDate} required />
            </div>

            <div className="inputField">
                <p>Birth Place :</p>
                <input type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="birthPlace" defaultValue={bc.birthPlace} required />
            </div>
            <div className="inputField">
                <p>Gender :</p>
                <input type="radio" name="gender" value="M" required /> <p>Male</p>
                <input type="radio" name="gender" value="F"/><p>Female</p>
            </div>
            <div className="inputField">
                <p>Address :</p>
                <input type="text" name="address" required/>
            </div>
            <div className="inputField">
                <p>NIC no :</p>
                <input type="text" name="nic" pattern="[0-9]{12}" title="12 digits only" required/>
            </div>

            <div className="inputField">
                <p>Published Date :</p>
                <input type="date" name="publishedDate" max={`2023-05-${new Date().getDate()}`} title="enter correct published date" required />
            </div>
    
            
            <div className="inputField">
                <Link to='/nic/allPeople'><button type="button" className="backBtn">Home</button></Link>
                
                <button type="submit"  onClick={handleApi} className="submitBtn">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default AddPeople;