import React from "react";
import {Link} from 'react-router-dom';

const Nic_home = () => {
    return <nav id="homeNav">
        <ul>
            <li><Link to='/nic/addPeople'>Create NIC</Link></li>
            <li><Link to='/nic/allPeople'>All NIC</Link></li>
            <li><Link to='/nic/getPerson'>Get a NIC</Link></li>
            <li><Link to='/nic/search'>Search</Link></li>
            <li><Link to='/nic/reportGeneration'>Report</Link></li>
        </ul>
    </nav>
}

export default Nic_home;