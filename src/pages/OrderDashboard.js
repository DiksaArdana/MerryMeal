import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { getListOrderPartner } from "../services/StoreService";
const OrderDasboard =()=>{

    const [listOrder, setListOrder] = useState([]);
    
    const params = useParams();
    // Get List Car
    useEffect(() => {
      
        getListOrderPartner(
          params.pid,
          (data) => {
            setListOrder(data);
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
                <h2>Order Request</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>member</th>
                            <th>menu</th>
                        </tr>
                        {listOrder.map((orders) => (
                            <tr>
                                <td>{orders.id}</td>
                                <td>{orders.datetime}</td>
                                <td>{orders.status}</td>
                                
                            </tr>
                        ))}
                        
                    </table>
                </div>
                

            </Layout>
        </div>
    )
}
export default OrderDasboard;