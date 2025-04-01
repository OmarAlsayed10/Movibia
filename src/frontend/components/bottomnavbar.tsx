import { Link } from "react-router-dom";

const BottomNavbar = () => {
    return (
        <>
  
  <nav className="navbar navbar-expand-lg d-flex bg-light m-auto rounded-3 shadow" style={{width:"95%"}}>
        <div className="container-fluid">
          <button className="navbar-toggler" style={{borderColor:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{filter:"invert(1)"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav mb-2 mb-lg-0  d-flex justify-content-center align-items-center w-100 gap-3 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Action</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Anime</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Comedy</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Romance</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Drama</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Family</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Horror</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Music</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Reality</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Sci-Fi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">War</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/browse">Music</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
}


export default BottomNavbar;
