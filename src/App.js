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
import Campaign from "./pages/Campaign";
import MenuAdd from "./components/Layout/form/MenuAdd";
import MenuList from "./pages/MenuList";
import Menu from "./pages/Menu";
import MenuDasboard from "./pages/MenuDashboard";
import OrderDasboard from "./pages/OrderDashboard";
import DeliveryDasboard from "./pages/DeliveryDashboard";
import CaregiverDasboard from "./pages/CaregiverDashboard";


function App() {
  const authUser = useContext(AuthContext);
  return (
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/campaign" element={<CampaignList />} />
      <Route path="/campaign/:name/:camId" element={<Campaign />} />
      <Route path="/signup/:name/:roleId" element={<Register />} />
      {!authUser.isLoggedIn && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegisterList />} />
        </>
      )}
      <Route path="/menu" element={authUser.role.includes("member") ? <MenuList/> : <Navigate to="/login" />}/>
      <Route path="/menu/:name/:menId" element={authUser.role.includes("member") ? <Menu /> : <Navigate to="/login" />}/>
      <Route path="/menu/delivery/:meId" element={authUser.role.includes("member") ? <DeliveryDasboard /> : <Navigate to="/login" />}/>
      <Route path="/caregiver-dashboard" element={authUser.role.includes("caregiver") ? <CaregiverDasboard /> : <Navigate to="/login" />}/>
      <Route path="/add-campaign" element={authUser.role.includes("admin") ? <CampaignAdd /> : <Navigate to="/login" />}/>
      <Route path="/admin-dashboard" element={authUser.role.includes("admin") ? <AdminDasboard /> : <Navigate to="/login" />}/>
      <Route path="/partner-dashboard" element={authUser.role.includes("partner") ? <PartnerDasboard /> : <Navigate to="/login" />}/>
      <Route path="/add-menu" element={authUser.role.includes("partner") ? <MenuAdd /> : <Navigate to="/login" />}/>
      <Route path="/partner-dashboard/:pid" element={authUser.role.includes("partner") ? <MenuDasboard /> : <Navigate to="/login" />}/>
      <Route path="/partner-dashboard/order/:pid" element={authUser.role.includes("partner") ? <OrderDasboard /> : <Navigate to="/login" />}/>
      <Route path="/rider-dashboard" element={authUser.role.includes("rider") ? <RiderDasboard /> : <Navigate to="/login" />}/>
      
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

