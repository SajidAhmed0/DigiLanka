import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import jsPDF from 'jspdf';

function ReportGeneration(){
    const [peoples , setPeoples] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8090/nic/')
        .then((res)=>setPeoples(res.data))
        .catch((err)=> console.log(err, 'it has an error'));
    }, [peoples]);

    function getNicCount(peoples){
        var count = 0;
        peoples.map((people) => {
            
            count++;
            
        })
        return count;
    }

    function getMaleCount(peoples){
        var count = 0;
        peoples.map((people) => {
            if(people.gender == 'M'){
                count++;
            }
        })
        return count;
    }

    function getFemaleCount(peoples){
        var count = 0;
        peoples.map((people) => {
            if(people.gender == 'F'){
                count++;
            }
        })
        return count;
    }

    function getDistinctDates(peoples){
        var date = [... peoples.map((people)=> {return people.publishedDate})]
        const set = new Set(date);
        date = [... set];
        return date;
    }
    
    function getDateCount(peoples, date){
        var count = 0;
        peoples.map((people) => {
            if(people.publishedDate == date){
                count++;
            }
        })
        return count;
    }
   

    const generateReport = async () => {
        // var doc = new jsPDF('portrait', 'px', 'a4');
        // const data = await document.getElementById('reportData');
        // doc.html(data).then(()=>{
        //     doc.getStyle(document.styleSheets);
        //     doc.save(`NicReport.pdf`);
        // });
        const doc = new jsPDF();
        doc.addImage('/topNic.png', 0,0,210,50);
    doc.autoTable({ html: '#reportData', startY : 50 });
    doc.save('nicReport.pdf');
    }

    

    return (
        
        <div className="peoples" style={{height : '100vh'}}>

<nav id="homeNav">
        <ul>
            <li><Link to='/nic/addPeople'>Create NIC</Link></li>
            <li><Link to='/nic/allPeople'>All NIC</Link></li>
            <li><Link to='/nic/getPerson'>Get a NIC</Link></li>
            <li><Link to='/nic/search'>Search</Link></li>
            <li><Link to='/nic/reportGeneration'>Report</Link></li>
        </ul>
    </nav>

            <button type="button" id="reportBtn" onClick={generateReport}>Generate Report</button>

            <table border={2} id="reportData">
              <tr>
                <th>Description</th>
                <th>Count</th>
              </tr>
                <tr>
                    <td>Total Nic</td>
                    <td>{getNicCount(peoples)}</td>  
                </tr>
                <tr>
                    <td>Total Male</td>
                    <td>{getMaleCount(peoples)}</td>  
                </tr>
                <tr>
                    <td>Total Female</td>
                    <td>{getFemaleCount(peoples)}</td>  
                </tr>
                {
                    getDistinctDates(peoples).map((date) => {
                        return(
                            <tr>
                                <td>Total NIC on {date}</td>
                                <td>{getDateCount(peoples, date)}</td>
                            </tr>
                        )
                    })
                }
                
          </table>
        </div>
      );
}

export default ReportGeneration;