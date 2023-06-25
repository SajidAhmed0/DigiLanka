import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../BcStyle/AllBcRegUsers.css';

export default function AllDcRegistrations() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        function getUsers() {
            axios.get("http://localhost:8090/deathUser/").then((res) => {
                setUsers(res.data);
                setsID(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getUsers();
    }, []); 

    function handleDelete(id) {
        console.log(id)
        axios
           .delete(`http://localhost:8090/deathUser/delete/${id}`)
           
           .then((res) => {
            alert("Death Certificate deleted");
            setUsers(users.filter((deathcertificate) => deathcertificate._id !== id));
           })
           .catch((err) => {
            alert(err.message);
           });
    }

    const [searchText, setSearchText] = useState("")
    const [userID, setsID] = useState([])

    console.log("search text", searchText);

    function searchHandler(){
        if(searchText.trim()){
            let searchResult
            searchResult = users.filter((users) => {
                return users._id.toLowerCase().startsWith(searchText.trim().toLowerCase())
            })
            setUsers(searchResult)
        }
        else{
            setUsers(userID)
        }
    }

    useEffect(() => {
        searchHandler()
    },[searchText])


    return(
        
        <div className='topUpper' style={{height : '100vh'}}>
            <nav id="homeNav">
        <ul>
            <li><Link to='/dc/adddc'>Create DC</Link></li>
            <li><Link to='/dc/dc'>All DC</Link></li>
            <li><Link to='/dc/reportdc'>Report</Link></li>
        </ul>
    </nav>
            <div>
                <a href = "/dc/reportdc">
                <button onClick={() => {alert('Generating report...')}}>Generate Report</button></a>
            </div>
            <div>
                <input type = "text" placeholder = "Search User" onChange={(event )=> setSearchText(event.target.value)}/>
            </div>
            <table>
      <thead>
        <tr>
          <th>Death Certificate ID</th>
          <th>Full Name</th>
          <th>Place of Death</th>
          <th>Death Death</th>
          <th>Reason for the death</th>
          <th>Death Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.fullName}</td>
            <td>{user.placeOfDeath}</td>
            <td>{user.deathDate}</td>
            <td>{user.reasonForDeath}</td>
            <td>{user.deathCategory}</td>
            <td>
                <button onClick={() => handleDelete(user._id)} style={{background : 'red'}}>DELETE</button>
                <Link to={'/dc/updatedc'} state={user}><button>UPDATE</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
    )
}