import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                <h2>Dashboard Partner</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>menu name</th>
                            <th>Desc</th>
                            <th>Status</th>
                        </tr>
                        {listMenu.map((menus) => (
                            <tr>
                                <td>{menus.id}</td>
                                <td>{menus.name}</td>
                                <td>{menus.desc}</td>
                                <td>{menus.status}</td>
                                
                            </tr>
                        ))}
                        
                    </table>
                </div>
                

            </Layout>
        </div>
    )
}
export default MenuDasboard;