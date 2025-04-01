import "./movie.css"
// import { useNavigate } from "react-router-dom";
import MovieDetails from "../components/movieDetails"


const Movie = () => {

    // const navigate = useNavigate();

 
    return (
        
     <>
            <MovieDetails>
            {/* <button className="btn btn-outline-warning text-white px-4" onClick={()=>{navigate("/movies")}}>close</button> */}
            </MovieDetails>
     </>
      
            
    );

    
}

export default Movie;