import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
const RiderDasboard =()=>{
    const authCtx = useContext(AuthContext);
    return (
        
        <div>
            <Layout>
                <h2>Dashboard Rider</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>menu</th>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </div>
      

            </Layout>
        </div>
    )
}
export default RiderDasboard;