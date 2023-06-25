import './App.css';
import CreateNewBc from './components/BirthCertificate/createNewBc';
import AllBcRegUsers from './components/BirthCertificate/AllBcRegUsers';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

// BC and DC 
import UpdateBC from './components/BirthCertificate/UpdateBc';
import UpdateDC from './components/DeathCertificate/UpdateDc';
import CreateNewDeath from './components/DeathCertificate/CreateNewDeath';
import AllDcRegistrations from './components/DeathCertificate/AllDeathCertificates';
import ReportBirths from './components/BirthCertificate/ReportBirths';
import ReportDeaths from './components/DeathCertificate/ReportDeaths';

// Nic pages
import AddPeople from './components/Nic/AddPeople';
import GetAllPeople from './components/Nic/allPeople';
import GetPeople from './components/Nic/onePeople';
import Nic_home from './components/Nic/Nic_home';
import UpdatePerson from './components/Nic/UpdatePerson';
import GetPerson from './components/Nic/GetPerson';
import Search from './components/Nic/Search';
import ReportGeneration from './components/Nic/ReportGeneration';
import Navbar from './components/Nic/Navbar';

// Driver pages
import AdminDriver from './pages/driver/adminHome';
import EditForm from './pages/driver/editForm';
import GenerateReport from './pages/driver/generateReport';
import './DriverStyle/driverCss.css'

// Passport pages
import Detail from "./components/Passport/Detail";
import Table from "./components/Passport/Table";
import Edit from "./components/Passport/Edit";
import Create from "./components/Passport/Create";

// Medical pages
import MedCreate from './components/Medical/Create';
import MedDetail from './components/Medical/Detail';
import MedEdit from './components/Medical/Edit';
import MedTable from './components/Medical/Table';

// navigation
import NavBar from './navigation/NavBar'

// footer
import Footer from './components/Footer'

// home
import Home from './components/Home';

import DlLogin from './components/DlLogin';


function App() {
  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
            {/* Home */}
            <Route path="/" Component={Home}></Route>

              {/* Bc and Dc  */}
              <Route path= "/bc/" exact Component={AllBcRegUsers}></Route>
              <Route path= "/bc/add" exact Component={CreateNewBc}></Route>
              <Route path= "/bc/update" exact Component={UpdateBC}></Route>
              <Route path= "/dc/updatedc" exact Component={UpdateDC}></Route>
              <Route path= "/dc/adddc" exact Component={CreateNewDeath}></Route>
              <Route path= "/dc/dc" exact Component={AllDcRegistrations}></Route>
              <Route path= "/bc/reportbc" exact Component={ReportBirths}></Route>
              <Route path= "/dc/reportdc" exact Component={ReportDeaths}></Route>
              <Route path= "/login" exact Component={DlLogin}></Route>

              {/* NIC */}
            <Route exact path='/nic/' Component={Nic_home}/>
            <Route path='/nic/allPeople' Component={GetAllPeople}/>
            <Route path='/nic/people/:id' Component={GetPeople}/>
            <Route path='/nic/addPeople' Component={AddPeople}/>
            <Route path='/nic/people/update/:id' Component={UpdatePerson}/>
            <Route path='/nic/getPerson' Component={GetPerson}/>
            <Route path='/nic/search' Component={Search}/>
            <Route path='/nic/reportGeneration' Component={ReportGeneration}/>

            {/* Driver */}
            <Route path='/driver' element={<AdminDriver/>}/>
            <Route path='/driver/edit' element={<EditForm/>}/>
            <Route path='/driver/report' element={<GenerateReport/>} />

            {/* Passport */}
            <Route path="/passport/" exact Component={Table}></Route>
            <Route path="/passport/add" exact Component={Create}></Route>
            <Route path="/passport/show/:id" exact Component={Detail}></Route>
            <Route path="/passport/update/:id" exact Component={Edit}></Route>
            <Route path= "/passport/reportp" exact Component={ReportBirths}></Route>

            {/* Medical */}
            <Route path="/medical/" element={<MedTable />}></Route>
            <Route path="/medical/create" element={<MedCreate />}></Route>
            <Route path="/medical/detail/:id" element={<MedDetail />}></Route>
            <Route path="/medical/edit/:id" element={<MedEdit />}></Route>
          
      </Routes>
      <Footer></Footer>
   </BrowserRouter>
    
      
      
    
    
  );
}

export default App;
