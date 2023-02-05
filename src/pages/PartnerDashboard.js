import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AuthContext from "../context/AuthContext";

const PartnerDasboard = () => {
    const authCtx = useContext(AuthContext);

    return (


        <Layout>
            <h2>Dashboard Partner</h2>
            <div className="container">
                <Link
                    className="btn btn-primary btn-car"
                    to={`${authCtx.userId}`}
                >
                    Manage Menu
                </Link>
                <div>
                <Link
                    className="btn btn-primary btn-car"
                    to={`order/${authCtx.userId}`}
                >
                    Order
                </Link>
                </div>
            </div>


        </Layout>

    )
}
export default PartnerDasboard;