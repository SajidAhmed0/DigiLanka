import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default function ReportBirths() {
  const [users, setBirths] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [bcID, setbcID] = useState([]);

  useEffect(() => {
    function getBirths() {
      const fromDate = new Date("1920-01-01");
      const toDate = new Date("2022-12-31");
      const birthCount = "Count";
      const url = `http://localhost:8090/user/?date[gte]=${fromDate}&date[lte]=${toDate}&service=${birthCount}`;

      axios
        .get(url)
        .then((res) => {
          setBirths(res.data);
          setbcID(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getBirths();
  }, []);

  function searchHandler() {
    if (searchText.trim()) {
      let searchResult;
      searchResult = users.filter((users) =>
        users.birthCount
          .toLowerCase()
          .startsWith(searchText.trim().toLowerCase())
      );
      setBirths(searchResult);
    } else {
      setBirths(bcID);
    }
  }

  useEffect(() => {
    searchHandler();
  }, [searchText]);

  const counts = users.reduce((obj, user) => {
    const date = new Date(user.birthDate);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    //const day = date.getDate();
    const birthCount = user.birthCount;
    const key = `${year}-${month}`;

    obj[key] = obj[key] ? obj[key] + 1 : 1;
    return obj;
  }, {});

  function exportToPDF() {
    const doc = new jsPDF();
    doc.addImage('/topBc.png', 0,0,210,50);
    doc.autoTable({ html: '#my-table', startY: 50 });
    doc.save('Birth-counts.pdf');
  }
  
  
  return (
    <div className="birthlist topUpper" style={{height : '100vh'}}>
      <nav id="homeNav">
        <ul>
            <li><Link to='/bc/add'>Create BC</Link></li>
            <li><Link to='/bc/'>All BC</Link></li>
            <li><Link to='/bc/reportbc'>Report</Link></li>
        </ul>
    </nav>
      <h2>Birth Counts</h2>

      <div className="btnline">
        <div class="search-container">
          <form id="q1">
            <input
              type="text"
              placeholder="Search birth count"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
          <div className="birthbtn">
            <a href="#">
              <button class="add-birth-button" onClick={exportToPDF}>Export to PDF</button>
            </a>
          </div>
        </div>
      </div>

      <div class="grid">
        <table className="table-report" id="my-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Month</th>
              
              <th>Count</th>
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
  
