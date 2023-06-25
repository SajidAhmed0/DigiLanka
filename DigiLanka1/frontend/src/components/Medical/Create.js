import React, { useState } from "react";
import "./Reji.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [id, idchange] = useState("");
  const [DOX, DOXchange] = useState("");
  const [DOI, DOIchange] = useState("");
  const [name, namechange] = useState("");
  const [nic, nicchange] = useState("");
  const [passport, passportchange] = useState("");
  const [age, agechange] = useState("");
  const [occupation, occupationchange] = useState("");
  const [sex, sexchange] = useState("");
  const [phone, phonechange] = useState("");
  const [address, addresschange] = useState("");
  const [Height, Heightchange] = useState("");
  const [weight, weightchange] = useState("");
  const [blood_g, blood_gchange] = useState("");
  const [remarks, remarkschange] = useState("");
  const [raight_v, raight_vchange] = useState("");
  const [left_v, left_vchange] = useState("");
  const [squint, squintchange] = useState("");
  const [Hearing, Hearingchange] = useState("");
  const [pulse, pulsechange] = useState("");
  const [pulse_s, pulse_schange] = useState("");
  const [blood_p, blood_pchange] = useState("");
  const [heart_m, heart_mchange] = useState("");
  const [Present, Presentchange] = useState("");
  const [cns, cnschange] = useState("");
  const [ps, pschange] = useState("");
  
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, DOX, DOI, nic, passport, age, occupation, sex, phone, address, Height, weight, blood_g, remarks, raight_v, left_v, squint, 
      Hearing, pulse, pulse_s, blood_p, heart_m, Present, cns, ps};

    fetch("http://localhost:8090/medical/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/medical/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function handleApiNic(){
    
    const nicNo = document.getElementById('nic-holder');

    axios.get(`http://localhost:8090/nic/nic/${nicNo.value}`)
    .then((res)=> {
        console.log(res.data[0][0].name);
       
        namechange(res.data[0][0].name);
        nicchange(res.data[0][0].nic)
        // Dobchange(res.data[0][0].birthDate);
        addresschange(res.data[0][0].address);
        if(res.data[0][0].gender == 'F'){
          sexchange('female')
        }else{
          sexchange('male');
        }
        
    })
    .catch((err)=>console.log(err));

       
  }

  return (
    <body>
      <h1>Medical Examination Report</h1>
      {" "}
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="text" class="searchTerm" placeholder="Enter NIC?" id="nic-holder"/>
              <button type="button" onClick={handleApiNic}>Retrieve Data</button>
          <h3>A. PERSONAL INFORMATION</h3>  
          <div class="formbold-input-flex">
            <div class="formbold-mb-3">
              <label for="doe" class="formbold-form-label">
                {" "}
                Date of Examination{" "}
              </label>
              <input
                type="date"
                value={DOX}
                onChange={(e) => DOXchange(e.target.value)}
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
                value={DOI}
                onChange={(e) => DOIchange(e.target.value)}
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
                value={name}
                onChange={(e) => namechange(e.target.value)}
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
                  value={nic}
                  onChange={(e) => nicchange(e.target.value)}
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
                  value={passport}
                  onChange={(e) => passportchange(e.target.value)}
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
                  value={age}
                  onChange={(e) => agechange(e.target.value)}
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
                  value={occupation}
                  onChange={(e) => occupationchange(e.target.value)}
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
                value={sex}
                onChange={(e) => sexchange(e.target.value)}
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
                  value={phone}
                  onChange={(e) => phonechange(e.target.value)}
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
                value={address}
                onChange={(e) => addresschange(e.target.value)}
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
                  value={Height}
                  onChange={(e) => Heightchange(e.target.value)}
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
                  value={weight}
                  onChange={(e) => weightchange(e.target.value)}
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
                  value={blood_g}
                  onChange={(e) => blood_gchange(e.target.value)}
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
                value={remarks}
                onChange={(e) => remarkschange(e.target.value)}
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
                  value={raight_v}
                  onChange={(e) => raight_vchange(e.target.value)}
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
                  value={left_v}
                  onChange={(e) => left_vchange(e.target.value)}
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
                  value={squint}
                  onChange={(e) => squintchange(e.target.value)}
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
                value={Hearing}
                onChange={(e) => Hearingchange(e.target.value)}
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
                  value={pulse}
                  onChange={(e) => pulsechange(e.target.value)}
                  name="pulse"
                  id="pulse"
                  placeholder=""
                  class="formbold-form-input formbold-w-45"
                />
                <br></br>

                <select
                  class="formbold-form-input"
                  value={pulse_s}
                  onChange={(e) => pulse_schange(e.target.value)}
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
                  value={blood_p}
                  onChange={(e) => blood_pchange(e.target.value)}
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
                  value={heart_m}
                  onChange={(e) => heart_mchange(e.target.value)}
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
                  value={Present}
                  onChange={(e) => Presentchange(e.target.value)}
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
                  value={cns}
                  onChange={(e) => cnschange(e.target.value)}
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
                  value={ps}
                  onChange={(e) => pschange(e.target.value)}
                  name="pulse"
                  id="pulse"
                  placeholder=""
                  class="formbold-form-input formbold-w-45"
                />
                <br></br>
              </div>
              <br />
            
              
            </div>

            

            
            <Link to="/" class="formbold-btn">
              Back
            </Link>
            <button class="formbold-btn">Submit</button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Create;
