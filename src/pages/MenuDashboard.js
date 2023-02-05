import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { getListMenuPartner } from "../services/StoreService";
const MenuDasboard =()=>{

    const [listMenu, setListMenu] = useState([]);
    
    const params = useParams();
    // Get List Car
    useEffect(() => {
      
        getListMenuPartner(
          params.pid,
          (data) => {
            console.log(data);
            setListMenu(data);
          },
          (error) => {
            console.log(error);
          }
        );
  
      return () => {};
    },[params.pid]);
    return (
        
        <div>
            <Layout>
                <h2>Dashboard Menu Partner</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                        {listMenu.map((cam) => (
                        <tr>
                            <td>{cam.id}</td>
                            <td>{cam.name}</td>
                            <td>{cam.desc}</td>
                            <td>{cam.status}</td>
                        </tr>
                        ))}
                    </table>
                </div>
                

            </Layout>
        </div>
    )
}
export default MenuDasboard;