import React, { useEffect, useState } from "react";
import axios from "axios";

function GetPeople(){
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8090/nic/643dc34708c72d054d2a0e8c')
        .then((res)=> {
            setPeople(res.data);
        })
        .catch((err)=>console.log(err));
    },[]);
    
    return(
        <div className="peoples">
          {
            people.map((item)=>{
              const base64String =btoa(new Uint8Array(item.image.data.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, ''));
              return (
                <div>
                <img src={`data:image/png;base64,${base64String}`} alt="pic" width="300px "/>
                <h1>{item.name}</h1>
                <h3>{item.otherName}</h3>
                <h3>{item.birthDate}</h3>
                <h3>{item.birthPlace}</h3>
                <h3>{item.gender}</h3>
                <h3>{item.address}</h3>
                </div>
              ); 
            })
          }
        </div>
    );
}

export default GetPeople;