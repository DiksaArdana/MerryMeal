import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import OAuth2RedirectHandler from "./components/Auth/OAuth2/OAuth2RedirectHandler";
import Profile from "./pages/Profile";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import AdminDasboard from "./pages/AdminDashboard";
import PartnerDasboard from "./pages/PartnerDashboard";
import RiderDasboard from "./pages/RiderDashboard";
import RegisterList from "./pages/RegisterList";
import CampaignAdd from "./components/Layout/form/CampaignAdd";
import CampaignList from "./pages/CampaignList";


function App() {
  const authUser = useContext(AuthContext);
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/signup/:name/:roleId" element={<Register />} />
      {!authUser.isLoggedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterList />} />
        </>
      )}
      
      <Route path="/add-campaign" element={authUser.role.includes("admin") ? <CampaignAdd /> : <Navigate to="/login" />}/>
      <Route path="/admin-dashboard" element={authUser.role.includes("admin") ? <AdminDasboard /> : <Navigate to="/login" />}/>
      <Route path="/partner-dashboard" element={authUser.role.includes("partner") ? <PartnerDasboard /> : <Navigate to="/login" />}/>
      <Route path="/rider-dashboard" element={authUser.role.includes("rider") ? <RiderDasboard /> : <Navigate to="/login" />}/>
      <Route path="/campaign-list" element={authUser.isLoggedIn ? <CampaignList /> : <Navigate to="/login" />}/>
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
      <Route
        path="/profile"
        element={authUser.isLoggedIn ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>

  );
}

export default App;

