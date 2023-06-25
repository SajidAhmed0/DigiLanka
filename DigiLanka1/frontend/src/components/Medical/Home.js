import "./Home.css"

function Home(){

    return(

        <body>
    
        <div id="login-form-wrap">
          <h2>Login</h2>
          <br></br>
          <form id="login-form">
            <p>
            <input type="text" id="username" name="username" placeholder="Username" required/><i class="validation"><span></span><span></span></i>
            </p>
            <br></br>
            <p>
            <input type="Password" id="Password" name="Password" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
            </p>
            <br></br>
            <p>
            <input type="submit" id="login" value="Login"  />
            </p>
          </form>
          <br></br>
          </div>
        </body>
    )


}


export default Home;