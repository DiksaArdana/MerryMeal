import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListMember } from "../services/StoreService";
const CaregiverDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listMember, setListMember] = useState([]);

    // Get List Car
    useEffect(() => {
        getListMember(
          (data) => {
            console.log(data);
            setListMember(data);
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
                <h2>Caregiver Dashboard</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                        {listMember.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.email}</td>
                            <td>{cam.phone}</td>
                            <td>{cam.address}</td>
                            
                        </tr>
                        ))}
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default CaregiverDasboard;