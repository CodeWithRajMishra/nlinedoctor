import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DoctroDashBoard from "./DoctorDashBoard";
import PatientList from "./pages/PatientList";
import SearchDoctor from "./pages/SearchDoctor";
import SearchByCity from "./pages/SearchByCity";
import SearchBySpecialization from "./pages/SearchBySpecialization";
import ContactUs from "./pages/ContactUs";
import GetAppointment from "./pages/GetAppointment";
const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="home" element={<Home/>}/>
             <Route path="searchdoctor" element={<SearchDoctor/>}/>
             <Route path="searchbycity" element={<SearchByCity/>}/>
             <Route path="searchbyspeciality" element={<SearchBySpecialization/>}/>
             <Route path="contactus" element={<ContactUs/>} />
             <Route path="getappointment/:id" element={<GetAppointment/>} />
             </Route>
          </Routes>  
          <Routes>
            <Route path="/doctordashboard" element={<DoctroDashBoard/>}>
               <Route path="patientlist" element={<PatientList/>} />  
            </Route>  
          </Routes>        
        </BrowserRouter>
    </>
  )
}
export default App;