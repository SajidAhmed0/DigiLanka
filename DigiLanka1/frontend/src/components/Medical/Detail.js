import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Reji.css"

const Detail = () => {
  const params = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch(" http://localhost:8090/medical/get/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp.user)
        empdatachange(resp.user);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);

  return (
    <div>
      {empdata && (
           <body>
           <h1>Medical Examination Report</h1>
           {" "}
           <div class="formbold-main-wrapper">
             <div class="formbold-form-wrapper">
               <form
                 action="https://formbold.com/s/FORM_ID"
                 method="POST"
                 
               >
               <h3>A. PERSONAL INFORMATION</h3>  
               <div class="formbold-input-flex">
                 <div class="formbold-mb-3">
                   <label for="doe" class="formbold-form-label">
                     {" "}
                     Date of Examination{" "}
                   </label>
                   <input
                     type="date"
                     value={empdata.DOX}
                    
                     name="doe"
                     id="doe"
                     class="formbold-form-input"
                   />
                 </div>
                 <div class="formbold-mb-3">
                   <label for="doi" class="formbold-form-label">
                     {" "}
                     Date of Issue{" "}
                   </label>
                   <input
                     type="date"
                     value={empdata.DOI}
                     
                     name="doi"
                     id="doi"
                     class="formbold-form-input"
                   />
                 </div>
               </div>
                 <div class="formbold-mb-3">
                   <label for="age" class="formbold-form-label">
                     {" "}
                     Full Name{" "}
                   </label>
                   <input
                     type="text"
                     value={empdata.name}
                     
                     name="Name"
                     id="name"
                     placeholder="ex:Janith Kaushalya"
                     class="formbold-form-input"
                   />
                 </div>
                 <div class="formbold-input-flex">
                   <div>
                     <label for="nic" class="formbold-form-label">
                       {" "}
                       NIC No{" "}
                     </label>
                     <input
                       type="text"
                       value={empdata.nic}
                       
                       name="nic"
                       id="nic"
                       placeholder="xxxxxxxxxxxx"
                       class="formbold-form-input"
                     />
                   </div>
                   <div>
                     <label for="pno" class="formbold-form-label">
                       {" "}
                       Passport No{" "}
                     </label>
                     <input
                       type="text"
                       value={empdata.passport}
                       
                       name="pno"
                       id="pno"
                       placeholder="xxxxxxxxxxxx"
                       class="formbold-form-input"
                     />
                   </div>
                 </div>
                 <div class="formbold-input-flex">
                   <div>
                     <label for="age" class="formbold-form-label">
                       {" "}
                       Age{" "}
                     </label>
                     <input
                       type="text"
                       value={empdata.age}
                       
                       name="age"
                       id="age"
                       placeholder="ex:18"
                       class="formbold-form-input"
                     />
                   </div>
                   <div>
                     <label for="occ" class="formbold-form-label">
                       {" "}
                       Occupation{" "}
                     </label>
                     <input
                       type="text"
                       value={empdata.occupation}
                       
                       name="occ"
                       id="occ"
                       placeholder="ex:Software Engineer"
                       class="formbold-form-input"
                     />
                   </div>
                 </div>
                 
                 <div class="formbold-mb-3">
                   <label class="formbold-form-label">Sex</label>
     
                   <select
                     class="formbold-form-input"
                     name="sex"
                     value={empdata.sex}
                     
                     id="sex"
                   >
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                     <option value="others">Others</option>
                   </select>
                 </div>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                   <label for="phone" class="formbold-form-label">
                     {" "}
                     Phone{" "}
                   </label>
     
                   <div>
                     
                     <input
                       type="text"
                       name="phone"
                       value={empdata.phone}
                       
                       id="phone"
                       placeholder="Phone number"
                       class="formbold-form-input"
                     />
                   </div>
                   <br></br>
                   <div class="formbold-mb-3">
                   <label for="address" class="formbold-form-label">
                     {" "}
                     Address{" "}
                   </label>
     
                   <input
                     type="text"
                     name="address"
                     value={empdata.address}
                     
                     id="address"
                     placeholder=""
                     class="formbold-form-input"
                   />
                 </div>
                 </div>
                 
                 <h3>B. PHYSICAL EXAMINATION</h3>
                 <h4>l.General Examination</h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
                     <label for="height" class="formbold-form-label">
                       {" "}
                       Height(Ft){" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.Height}
                       
                       name="height"
                       id="height"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
     
                     <br></br>
                     <label for="weight" class="formbold-form-label">
                       {" "}
                       Weight(KG){" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.weight}
                       
                       name="weight"
                       id="weight"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
                     <br></br>
                     <label for="phone" class="formbold-form-label">
                       {" "}
                       Blood group{" "}
                     </label>
     
                     <select
                       class="formbold-form-input"
                       value={empdata.blood_g}
                      
                       name="occupation"
                       id="occupation"
                     >
                       <option value="">Select Blood group</option>
                       <option value="O+">O+</option>
                       <option value="A+">A+</option>
                       <option value="B+">B+</option>
                       <option value="AB+">AB+</option>
                       <option value="O-">O-</option>
                       <option value="A-">A-</option>
                       <option value="B-">B-</option>
                       <option value="AB-">AB-</option>
                     </select>
                   </div>
                   <br />
     
                   
                 </div>
                 <div class="formbold-mb-3">
                   <label for="remarks" class="formbold-form-label">
                     {" "}
                     Remarks:{" "}
                   </label>
     
                   <input
                     type="remarks"
                     value={empdata.remarks}
                     
                     name="remarks"
                     //value={Email}
                     //onChange={(e) => Emailchange(e.target.value)}
                     id="remarks"
                     placeholder=""
                     class="formbold-form-input"
                   />
                 </div>
                 
                 <h4>ll.Vision</h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
                     
                 <label for="rvision" class="formbold-form-label">
                       {" "}
                       Right vision{" "}
                     </label>
     
                     <select
                       class="formbold-form-input"
                       value={empdata.raight_v}
                      
                       name="rvision"
                       id="rvision"
                     >
                       <option value="Very Good">Very Good</option>
                       <option value="Good">Good</option>
                       <option value="Bad">Bad</option>
                       
                     </select>
                     <br></br>
     
                     <label for="lvision" class="formbold-form-label">
                       {" "}
                       Left vision{" "}
                     </label>
     
                     <select
                       class="formbold-form-input"
                       value={empdata.left_v}
                       
                       name="lvision"
                       id="lvision"
                     >
                       <option value="Very Good">Very Good</option>
                       <option value="Good">Good</option>
                       <option value="Bad">Bad</option>
                       
                     </select>
                     <label for="squint" class="formbold-form-label">
                       {" "}
                       Squint{" "}
                     </label>
     
                     <select
                       class="formbold-form-input"
                       value={empdata.squint}
                       
                       name="squint"
                       id="squint"
                     >
                       <option value="Yes">YES</option>
                       <option value="No">NO</option>
                       
                     </select>
                   </div>
                   <br />
     
                 <h4>lll.Hearing</h4>
                 <div class="formbold-mb-3">
                   <label class="formbold-form-label">Hearing Status</label>
     
                   <select
                     class="formbold-form-input"
                     value={empdata.Hearing}
                    
                     name="hear"
                     id="hear"
                   >
                     <option value="satisfactory">Satisfactory</option>
                     <option value="unatisfactory">Unatisfactory</option>
                     
                   </select>
                 </div>
     
                 <h4>lV.Cardiovascular System</h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <label for="pulse" class="formbold-form-label">
                       {" "}
                       Pulse(/min){" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.pulse}
                       
                       name="pulse"
                       id="pulse"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
                     <br></br>
     
                     <select
                       class="formbold-form-input"
                       value={empdata.pulse_s}
                       
                       name="satis"
                       id="satis"
                     >
                       
                       <option value="Regular">Regular</option>
                       <option value="Irregular">Irregular</option>
                     
                     </select>
                   </div>
                   <br />
     
                   
                 </div>
     
                 </div>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <label for="bp" class="formbold-form-label">
                       {" "}
                       Blood Pressure(mm. Hg){" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.blood_p}
                      
                       name="bp"
                       id="bp"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
                   
     
                   </div>
                   <br />
     
                   
                 </div>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <label for="pulse" class="formbold-form-label">
                       {" "}
                       Heart murmurs{" "}
                     </label>
     
                     
     
                     <select
                       class="formbold-form-input"
                       name="heart"
                       value={empdata.heart_m}
                       
                       id="heart"
                     >
                       
                       <option value="present">Present</option>
                       <option value="absent">Absent</option>
                     
                     </select>
                   </div>
                   <br />
     
                   
                 </div>
     
                 <h4>V.Respiratory System: Any lung disease: </h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <select
                       class="formbold-form-input"
                       name="res"
                       value={empdata.Present}
                       
                       id="res"
                     >
                       
                       <option value="present">Present</option>
                       <option value="absent">Absent</option>
                     
                     </select>
                   </div>
                   <br />
     
                   
                 </div>
     
                 <h4>Vl.Central Nervous System </h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <label for="pulse" class="formbold-form-label">
                       {" "}
                       Normal or Abnormal{" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.cns}
                       
                       name="pulse"
                       id="pulse"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
                     <br></br>
                   </div>
                   <br />
     
                   
                 </div>
                 
                 <h4>Vll.Psychological Status </h4>
                 <div class="formbold-mb-3 formbold-input-wrapp">
                 <div>
     
                     <label for="pulse" class="formbold-form-label">
                       {" "}
                       Stable or unstable{" "}
                     </label>
     
                     <input
                       type="text"
                       value={empdata.ps}
                       
                       name="pulse"
                       id="pulse"
                       placeholder=""
                       class="formbold-form-input formbold-w-45"
                     />
                     <br></br>
                   </div>
                   <br />
     
                   
                 </div>
     
                 
     
                 
                 <Link to="/medical/" class="formbold-btn">
                   Back
                 </Link>
                 
               </form>
             </div>
           </div>
         </body>
      )}
    </div>
  );
};

export default Detail;
