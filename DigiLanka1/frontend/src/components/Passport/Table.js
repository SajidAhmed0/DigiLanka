import { useEffect, useState } from "react";
import "./Table.css";
import { Link, useNavigate } from "react-router-dom";

const Table = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  const [empdata, empdatachange] = useState(null);

  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/passport/show/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/passport/update/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8090/passport/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8090/passport/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <body style={{height : '100vh'}}>
        <div class="container-lg">
          <div class="table-responsive">
            <div class="table-title">
              <div class="row">
                <div class="wrap">
                  {/* <div class="search">
                    <input
                      type="text"
                      class="searchTerm"
                      placeholder="Enter NIC?"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" class="searchButton">
                      <i class="fa fa-search"></i>
                    </button>
                  </div> */}
                </div>
                <div class="col-sm-8">
                  <h2>
                    passport <b>Holders</b>
                  </h2>
                </div>

                <div class="col-sm-4">
                  <Link type="button" to="/passport/add" class="btn btn-info add-new">
                    <i class="fa fa-plus"></i> Add New
                  </Link>
                </div>
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata
                    .filter((item) => {
                      return search.toLowerCase() == ""
                        ? item
                        : item.name.toLowerCase().includes(search);
                    })
                    .map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Address}</td>
                        <td>
                          <a
                            onClick={() => {
                              LoadEdit(item._id);
                            }}
                            class="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i class="material-icons">&#xE254;</i>
                          </a>
                          <a
                            onClick={() => {
                              LoadDetail(item._id);
                            }}
                            class="edit"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i class="material-icons eye">
                              &#xE250;
                            </i>
                          </a>
                          <a
                            onClick={() => {
                              Removefunction(item._id);
                            }}
                            class="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i class="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </>
  );
};

export default Table;
