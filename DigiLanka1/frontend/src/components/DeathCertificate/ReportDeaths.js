import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function ReportDeaths() {
  const [users, setDeaths] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [dcID, setdcID] = useState([]);

  useEffect(() => {
    function getDeaths() {
      const fromDate = new Date("1920-01-01");
      const toDate = new Date("2022-12-31");
      const deathCount = "Count";
      const url = `http://localhost:8090/deathUser/?date[gte]=${fromDate}&date[lte]=${toDate}&service=${deathCount}`;

      axios
        .get(url)
        .then((res) => {
          setDeaths(res.data);
          setdcID(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getDeaths();
  }, []);

  function searchHandler() {
    if (searchText.trim()) {
      let searchResult;
      searchResult = users.filter((users) =>
        users.deathDate
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase())
      );
      setDeaths(searchResult);
    } else {
        setDeaths(dcID);
    }
  }

  useEffect(() => {
    searchHandler();
  }, [searchText]);

  const counts = users.reduce((obj, user) => {
    const date = new Date(user.deathDate);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    //const day = date.getDate();
    const deathCount = user.deathCount;
    const key = `${year}-${month}`;

    obj[key] = obj[key] ? obj[key] + 1 : 1;
    return obj;
  }, {});

  function exportToPDF() {
    const doc = new jsPDF();
    doc.addImage('/topDc.png', 0,0,210,50);
    doc.autoTable({ html: '#my-table', startY: 50});
    doc.save('Death-counts in each month.pdf');
  }
  
  
  return (
    <div className="deathlist topUpper" style={{height : '100vh'}}>
      <nav id="homeNav">
        <ul>
            <li><Link to='/dc/adddc'>Create DC</Link></li>
            <li><Link to='/dc/dc'>All DC</Link></li>
            <li><Link to='/dc/reportdc'>Report</Link></li>
        </ul>
    </nav>
      <h2>Death Counts</h2>

      <div className="btnline">
        <div class="search-container">
          <form id="q1">
            <input
              type="text"
              placeholder="Search death count"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <div className="deathbtn">
            <a href="#">
              <button class="add-death-button" onClick={exportToPDF}>Export to PDF</button>
            </a>
          </div>
        </div>
      </div>

      <div class="grid">
        <table className="table-report" id="my-table">
          <thead>
            <tr>
              <th>Death Year</th>
              <th>Death Month</th>
              
              <th>Death Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(counts).sort((a, b) => {
              // Sort the entries by year, then by month
              const [, monthA, yearA] = a[0].split("-");
              const [, monthB, yearB] = b[0].split("-");
              return yearA - yearB || new Date(Date.parse(`01 ${monthA} 2000`)) - new Date(Date.parse(`01 ${monthB} 2000`));
              }).map(([key, count]) => {
               
  
                const [ year , month ] = key.split("-");
                return (
                    <tr key={key}>
                    <td>{year}</td>
                    <td>{month}</td>
                    
                    <td>{count}</td>
                    </tr>
                    );
                    })}
            </tbody>
          </table>
          
        </div>
      </div>
    );
  }
  
