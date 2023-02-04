import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";
const AdminDasboard =()=>{
    const authCtx = useContext(AuthContext);
    return (
        
        <div>
            <Layout>
                <h2>Dashboard Admin</h2>
                <div className="container">
                    <table>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
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
export default AdminDasboard;