import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function UpdatePerson(){
    const [people, setPeople] = useState([]);
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8090/nic/${id}`)
        .then((res)=> {
            console.log(res.data);
            setPeople(res.data);
        })
        .catch((err)=>console.log(err));
    },[]);

    function handleApi(){
        
        const addPeopleForm = document.getElementById('addPeople');
        const formData = new FormData(addPeopleForm);
        console.log(addPeopleForm);
        addPeopleForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            console.log(addPeopleForm);
            const formData = new FormData(addPeopleForm);
            console.log(formData);
            axios.put(`http://localhost:8090/nic/update/${people[0]._id}`,formData).then((res)=>console.log(res));
            navigate('/nic/allPeople');
        });

        
    }
    function changeImage(){
        const profilePic = document.getElementById("up-profile-pic");
        const inputFile = document.getElementById("up-input-file");

        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
   
    return(
        <div>
            <h1 className="hea">Update NIC</h1>
            {
            people.map((item)=>{
                const check = (item.gender == 'M') ? true : false;
                
              const base64String =btoa(new Uint8Array(item.image.data.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, ''));
              return (
                
                <form action="" method="post" id="addPeople" className="login-form" key={item._id}>

                    {/* <img src={`data:image/png;base64,${base64String}`} alt="pic" width="300px "/>
                
                <input type="file" name="testImage"/> */}
                
            <label htmlFor="up-input-file"><img src={`data:image/png;base64,${base64String}`} alt='profile-pic' id="up-profile-pic" style={{ marginLeft: "25%"}}/></label>
            <input type="file" name="testImage" accept="image/jpeg, image/png, image/jpg" id="up-input-file" style={{display:"none"}} onChange={changeImage}/>
            <br></br>
            <br></br>
            <div className="inputField">
                <p>Name :</p>
                <input id="name" type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="name" defaultValue={item.name} required/>
            </div>
            <div className="inputField">
                <p>Other name :</p>
                <input id="oname" type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="otherName" defaultValue={item.otherName}/>
            </div>

            <div className="inputField">
                <p>Birth of Date :</p>
                <input id="bdate" type="date" name="birthDate" defaultValue={item.birthDate} required/>
            </div>

            <div className="inputField">
                <p>Birth Place :</p>
                <input id="bplace" type="text" pattern="[A-Z a-z]{1,50}" title="charactors only" name="birthPlace" defaultValue={item.birthPlace} required/>
            </div>
            <div className="inputField">
                <p>Gender :</p>
                <input id="rm" type="radio" name="gender" value="M" defaultChecked={check} required/> <p>Male</p>
                <input id="rf" type="radio" name="gender" value="F" defaultChecked={!check}/><p>Female</p>
            </div>
            <div className="inputField">
                <p>NIC no :</p>
                <input id="nic" type="text" pattern="[0-9]{12}" title="12 digits only" name="nic" defaultValue={item.nic} required />
            </div>

            <div className="inputField">
                <p>Published Date :</p>
                <input type="date" name="publishedDate" defaultValue={item.publishedDate} required />
            </div>

            <div className="inputField">
                <p>Address :</p>
                <input id="address" type="text" name="address" defaultValue={item.address} required />
            </div>

            <div className="inputField">
                <Link to='/nic/allPeople'><button type="button" className="backBtn">Back</button></Link>
                
                <button type="submit" onClick={handleApi} className="submitBtn">Submit</button>
            </div>
    
                </form>
              ); 
            })
          }
            
        </div>
    )
}

export default UpdatePerson;