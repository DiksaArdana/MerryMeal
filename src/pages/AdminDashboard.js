import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
import { getListUser } from "../services/StoreService";
const AdminDasboard =()=>{
    const authCtx = useContext(AuthContext);
    const [listUser, setListUser] = useState([]);

    // Get List Car
    useEffect(() => {
        getListUser(
          (data) => {
            console.log(data);
            setListUser(data);
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                        {listUser.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.email}</td>
                            <td>{cam.phone}</td>
                            <td>{cam.role}</td>
                        </tr>
                        ))}
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default AdminDasboard;