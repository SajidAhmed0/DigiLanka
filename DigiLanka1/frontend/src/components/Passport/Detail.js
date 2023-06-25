import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {} from "react-bootstrap";
import "./Reji1.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8090/passport/get/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp.user);
        empdatachange(resp.user);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);

  return (
    <div>
      <div>
                <a href = "/bc/reportbc">
                <button onClick={() => {alert('Generating report...')}}>Generate Report</button></a>
            </div>
      {
        
        empdata && (
          <body>
            {" "}
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div class="formbold-mb-3">
                    <label for="age" class="formbold-form-label">
                      {" "}
                      Name of Bearer{" "}
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      value={empdata.name}
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
                      value={empdata.age}
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
                      value={empdata.Dob}
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
                      value={empdata.residence}
                      name="Residence"
                      id="Residence"
                      placeholder="ex:SriLanka"
                      class="formbold-form-input"
                    />
                  </div>
                  <div class="formbold-mb-3">
                    <label class="formbold-form-label">Gender</label>

                    <input
                      type="text"
                      value={empdata.gender}
                      name="Residence"
                      id="Residence"
                      placeholder="ex:SriLanka"
                      class="formbold-form-input"
                    />
                  </div>
                  <div class="formbold-mb-3 formbold-input-wrapp">
                    <div>
                      <label for="phone" class="formbold-form-label">
                        {" "}
                        Height{" "}
                      </label>

                      <input
                        type="text"
                        value={empdata.height}
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

                      <input
                        type="text"
                        value={empdata.blood_group}
                        name="Height"
                        id="Height"
                        placeholder=""
                        class="formbold-form-input formbold-w-45"
                      />
                    </div>
                    <br />

                    <div>
                      <label for="phone" class="formbold-form-label">
                        {" "}
                        Colour of hair{" "}
                      </label>

                      <input
                        type="text"
                        value={empdata.colourohair}
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
                        value={empdata.colouroeye}
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
                      value={empdata.Email}
                      name="email"
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
                      value={empdata.Address}
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
                        value={empdata.Phone}
                        name="phone"
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
                        value={empdata.zip}
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
                        value={empdata.city}
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
                      name="upload"
                      id="upload"
                      class="formbold-form-input formbold-form-file"
                    />
                  </div>
                  <div class="formbold-checkbox-wrapper">
                    <label
                      for="supportCheckbox"
                      class="formbold-checkbox-label"
                    >
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
                  <br></br>
                  <Link to="/passport/" class="formbold-btn">
                    Back
                  </Link>
                </form>
              </div>
            </div>
          </body>
        )

        /*<h1>
          name is: {empdata.name} ({empdata.id})
        </h1>*/
      }
    </div>
  );
};

export default Detail;
