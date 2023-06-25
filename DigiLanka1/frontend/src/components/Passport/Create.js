import React, { useState } from "react";
import "./Table.css";
// import { useForm } from "react-hook-form";
import "./Reji.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [age, agechange] = useState("");
  const [Dob, Dobchange] = useState("");
  const [residence, residencechange] = useState("");
  const [gender, genderchange] = useState("");
  const [height, heightchange] = useState("");
  const [blood_group, blood_groupchange] = useState("");
  const [colourohair, colourohairchange] = useState("");
  const [colouroeye, colouroeyechange] = useState("");
  const [zip, zipchange] = useState("");
  const [Phone, Phonechange] = useState("");
  const [Email, Emailchange] = useState("");
  const [Address, Addresschange] = useState("");
  const [city, citychange] = useState("");
  const [img, imgchange] = useState("");
  const [nic, setNic] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {
      id,
      name,
      Phone,
      Email,
      Address,
      age,
      Dob,
      residence,
      gender,
      height,
      blood_group,
      colourohair,
      colouroeye,
      zip,
      Phone,
      Email,
      Address,
      city,
      img,
    };

    fetch("http://localhost:8090/passport/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/passport/");
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
        Dobchange(res.data[0][0].birthDate);
        Addresschange(res.data[0][0].address);
        if(res.data[0][0].gender == 'F'){
          genderchange('female')
        }else{
          genderchange('male');
        }
        
    })
    .catch((err)=>console.log(err));

       
  }

  return (
    <body>
      {" "}
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <form
            action="https://formbold.com/s/FORM_ID"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div class="formbold-mb-3">
              <input type="text" class="searchTerm" placeholder="Enter NIC?" id="nic-holder"/>
              <button type="button" onClick={handleApiNic}>Retrieve Data</button>
              <br />
              <label for="age" class="formbold-form-label">
                {" "}
                Name of Bearer{" "}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => namechange(e.target.value)}
                name="Name"
                id="name"
                placeholder="ex:Mohomed Rizmaan"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3">
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
                placeholder="ex:25"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3">
              <label for="dob" class="formbold-form-label">
                {" "}
                Date of Birth{" "}
              </label>
              <input
                type="date"
                value={Dob}
                onChange={(e) => Dobchange(e.target.value)}
                name="dob"
                id="dob"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3">
              <label for="age" class="formbold-form-label">
                {" "}
                Residence{" "}
              </label>
              <input
                type="text"
                value={residence}
                onChange={(e) => residencechange(e.target.value)}
                name="Residence"
                id="Residence"
                placeholder="ex:SriLanka"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3">
              <label class="formbold-form-label">Gender</label>

              <select
                class="formbold-form-input"
                name="occupation"
                id="occupation"
                value={gender}
                onChange={(e) => genderchange(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div class="formbold-mb-3 formbold-input-wrapp">
              <div>
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Height{" "}
                </label>

                <input
                  type="text"
                  value={height}
                  onChange={(e) => heightchange(e.target.value)}
                  name="Height"
                  id="Height"
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
                  name="occupation"
                  id="occupation"
                  value={blood_group}
                  onChange={(e) => blood_groupchange(e.target.value)}
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

              <div>
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Colour of hair{" "}
                </label>

                <input
                  type="text"
                  value={colourohair}
                  onChange={(e) => colourohairchange(e.target.value)}
                  name="hair"
                  id="hair"
                  placeholder=""
                  class="formbold-form-input formbold-w-45"
                />

                <br></br>
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Colour of eyes{" "}
                </label>

                <input
                  type="text"
                  value={colouroeye}
                  onChange={(e) => colouroeyechange(e.target.value)}
                  name="eyes"
                  id="eyes"
                  placeholder=""
                  class="formbold-form-input formbold-w-45"
                />
              </div>
            </div>
            <div class="formbold-mb-3">
              <label for="email" class="formbold-form-label">
                {" "}
                Email{" "}
              </label>

              <input
                type="email"
                name="email"
                value={Email}
                onChange={(e) => Emailchange(e.target.value)}
                id="email"
                placeholder="example@email.com"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3">
              <label for="address" class="formbold-form-label">
                {" "}
                Address{" "}
              </label>

              <input
                type="text"
                name="address"
                value={Address}
                onChange={(e) => Addresschange(e.target.value)}
                id="address"
                placeholder="Street address"
                class="formbold-form-input formbold-mb-3"
              />

              <input
                type="text"
                name="address2"
                id="address2"
                placeholder="Street address line 2"
                class="formbold-form-input"
              />
            </div>
            <div class="formbold-mb-3 formbold-input-wrapp">
              <label for="phone" class="formbold-form-label">
                {" "}
                Phone{" "}
              </label>

              <div>
                <input
                  type="text"
                  name="Phone"
                  id="Phone"
                  placeholder="Area code"
                  class="formbold-form-input formbold-w-45"
                />

                <input
                  type="text"
                  name="phone"
                  value={Phone}
                  onChange={(e) => Phonechange(e.target.value)}
                  id="phone"
                  placeholder="Phone number"
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-input-flex">
              <div>
                <label for="post" class="formbold-form-label">
                  {" "}
                  Post/Zip code{" "}
                </label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => zipchange(e.target.value)}
                  name="post"
                  id="post"
                  placeholder="ex:8976"
                  class="formbold-form-input"
                />
              </div>
              <div>
                <label for="city" class="formbold-form-label">
                  {" "}
                  City{" "}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => citychange(e.target.value)}
                  name="city"
                  id="city"
                  placeholder="ex: New York"
                  class="formbold-form-input"
                />
              </div>
            </div>
            <div class="formbold-mb-3">
              <label for="upload" class="formbold-form-label">
                Upload image
              </label>
              <input
                type="file"
                value={img}
                onChange={(e) => imgchange(e.target.value)}
                name="upload"
                id="upload"
                class="formbold-form-input formbold-form-file"
              />
            </div>
            <div class="formbold-checkbox-wrapper">
              <label for="supportCheckbox" class="formbold-checkbox-label">
                <div class="formbold-relative">
                  <input
                    type="checkbox"
                    id="supportCheckbox"
                    class="formbold-input-checkbox"
                  />
                  <div class="formbold-checkbox-inner">
                    <span class="formbold-opacity-0">
                      <svg
                        width="11"
                        height="8"
                        viewBox="0 0 11 8"
                        class="formbold-stroke-current"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.81868 0.688604L4.16688 5.4878L2.05598 3.29507C1.70417 2.92271 1.1569 2.96409 0.805082 3.29507C0.453266 3.66742 0.492357 4.24663 0.805082 4.61898L3.30689 7.18407C3.54143 7.43231 3.85416 7.55642 4.16688 7.55642C4.47961 7.55642 4.79233 7.43231 5.02688 7.18407L10.0696 2.05389C10.4214 1.68154 10.4214 1.10233 10.0696 0.729976C9.71776 0.357624 9.17049 0.357625 8.81868 0.688604Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                I agree to the defined
                <a href="#"> terms, conditions, and policies</a>
              </label>
            </div>
            <button class="formbold-btn">Submit</button>\
            <Link to="/passport/" class="formbold-btn">
              Back
            </Link>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Create;
