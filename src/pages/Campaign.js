
import Layout from "../components/Layout/Layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCampaign } from "../services/StoreService";
import VolunteerAdd from "../components/Layout/form/VolunteerAdd";
const Campaign = () => {
  const [cam, setCampaign] = useState({
    name: "",
    desc:"",
    image:"",
    campaignid:""
  });

  const params = useParams();

  useEffect(() => {
    // Get Store Detail
    getCampaign(
      params.camId,
      (dta) => {
        setCampaign({
          title: dta.title,
          desc: dta.desc,
          image: dta.image,
          campaignid: dta.id,

        });
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {};
  }, [params.camId]);

    return (
      <Layout>
        <img className="card-img-top" src="https://brainmd.com/blog/wp-content/uploads/boost-happiness-by-helping-others-1.jpg"alt="" />
        <h2>{cam.title}</h2>
        <p>{cam.desc}</p>
        <VolunteerAdd {...cam} />
      </Layout>
    );
  };
  
  export default Campaign;