import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListVolunteer } from "../services/StoreService";
const AdminDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listVolunterr, setListVolunteer] = useState([]);

    // Get List Car
    useEffect(() => {
        getListVolunteer(
          (data) => {
            console.log(data);
            setListVolunteer(data);
          },
          (error) => {
            console.log(error);
          }
        );
  
      return () => {};
    });
    return (
        
        <div>
            <Layout>
                <h2>Dashboard Admin</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Campaign</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {listVolunterr.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.campaignId.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.phone}</td>
                            <td>{cam.email}</td>
                        </tr>
                        ))}
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default AdminDasboard;