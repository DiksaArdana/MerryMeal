import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {
  getListMenu,
} from "../services/StoreService";

const MenuList = () => {
  const [listMenu, setListMenu] = useState([]);

  // Get List Car
  useEffect(() => {
      getListMenu(
        (data) => {
          setListMenu(data);
        },
        (error) => {
          console.log(error);
        }
      );

    return () => {};
  });




  return (
<Layout>
  <div className="container my-5">
      <div className="mt-3 row">
        
        {listMenu.map((menus) => (
          <div className="col-12 col-md-6 col-md-4 col-lg-3 mb-3">
          <div className="card">
            <img className="card-img-top" src={menus.image} alt={menus.name} />
            <div className="card-body d-flex justify-content-between flex-column">
              <p className=" fw-bold m-1">
                 {menus.name} 
              </p>
              
              <Link
                className="btn btn-primary btn-car"
                to={`${menus.name}/${menus.id}`}
              >
                Menu Detail
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
</Layout>
  );
};

export default MenuList;