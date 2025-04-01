import { memo } from "react";
import Movies from "../components/movies";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Browse = () => {

  return (
    <>
    <Container maxWidth="xl">
      
      <div className="most-watched">
    <h4 className="my-4 mb-4 text-white text-center text-lg-start ms-0 ms-xl-4 mt-5 " >
      Most Watched This Week
      <Link className="nav-item text-white" to={"top-watchedlist"}><i className="bi bi-arrow-bar-right ps-2"></i></Link>
      </h4>
    <Movies/>
      </div>
      <div className="coming-soon">
    <h4 className="my-4 mb-4 text-white text-center text-lg-start ms-0 ms-xl-4 mt-xl-5 ">
      Coming Soon
      <Link className="nav-item text-white" to={"top-watchedlist"}><i className="bi bi-arrow-bar-right ps-2"></i></Link>
      </h4>
    <Movies/>
      </div>
      <div className="released-this-week">
    <h4 className="my-4 mb-4 text-white text-center text-lg-start ms-0 ms-xl-4 mt-xl-5 ">
      Released This Week
      <Link className="nav-item text-white" to={"top-watchedlist"}><i className="bi bi-arrow-bar-right ps-2"></i></Link>
      </h4>
    <Movies/>
      </div>

    </Container>
    
    </>
  );
};

export default memo(Browse);
