import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../BcStyle/AllBcRegUsers.css';

export default function AllBcRegUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        function getUsers() {
            axios.get("http://localhost:8090/user/").then((res) => {
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
           .delete(`http://localhost:8090/user/delete/${id}`)
           
           .then((res) => {
            alert("User deleted");
            setUsers(users.filter((user) => user._id !== id));
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
            <li><Link to='/bc/add'>Create BC</Link></li>
            <li><Link to='/bc/'>All BC</Link></li>
            <li><Link to='/bc/reportbc'>Report</Link></li>
        </ul>
    </nav>
            <div>
                <a href = "/bc/reportbc">
                <button onClick={() => {alert('Generating report...')}}>Generate Report</button></a>
            </div>
            <div>
                <input type = "text" placeholder = "Search User" onChange={(event )=> setSearchText(event.target.value)}/>
            </div>
            
            <table>
      <thead>
        <tr>
          <th>Birth Certificate ID</th>
          <th>Full Name</th>
          <th>Date of Birth</th>
          <th>Place of Birth</th>
          <th>Father's Name</th>
          <th>Mother's Name</th>
          <th>Date of Registration</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.fullName}</td>
            <td>{user.birthDate}</td>
            <td>{user.birthPlace}</td>
            <td>{user.fatherName}</td>
            <td>{user.motherName}</td>
            <td>{user.bcRegDate}</td>
            <td>
                <button onClick={() => handleDelete(user._id)} style={{background : 'red'}}>DELETE</button>
                <Link to={'/bc/update'} state={user}><button>UPDATE</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

        </div>
    )
}