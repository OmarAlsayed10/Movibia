import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store/store";
import {Avatar, Container, Typography, useMediaQuery } from "@mui/material";
import {Movie} from "../interfaces/interface";

const Movies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies } = useSelector((state:RootState) => state.movies);
    const [hoveredItem , setHoveredItem] = useState<Number|null>(null)
    const scrollRef = useRef<HTMLDivElement|null>(null)
    const isMobile = useMediaQuery("(max-width:991px)") 

    const scrollMovies = (direction:"left" | "right")=>{
        if(scrollRef.current){
            const scrollSteps = 1100
            scrollRef.current.scrollBy({
                left:direction==="left"? -scrollSteps:scrollSteps,
                behavior:"smooth"
            })
        }
    }

    useEffect(() => {
        dispatch(movieAction());
    }, [dispatch]);

    if (!movies) {
        return <Typography>No movies available</Typography>;
    }


    return (
        <>
        <Container maxWidth="xl" sx={{position:"relative"}}>
            
            {!isMobile && (

                <div style={{display:"flex", justifyContent:"end",gap:"20px"}}>

                    <Avatar  sx={{cursor:"pointer",color:"black",backgroundColor:"white",zIndex:"10" ,width: 25,height: 25}}
                        onClick={()=>scrollMovies("left")}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </Avatar>
                          <Avatar  sx={{cursor:"pointer",color:"black",backgroundColor:"white",zIndex:"10" ,width: 25,height: 25}}
                          onClick={()=>scrollMovies("right")}
                          >
                         <i className="bi bi-arrow-right"></i>
                              </Avatar>
                              </div>
                        
                    )}

                
                    

            <div className="d-flex flex-row movies-container position-relative " style={{gap:"22px"}} ref={scrollRef}>
                {movies.map((movie:Movie) => (
                    <div className="my-3 movie-card position-relative"
                     key={movie.id}
                     onMouseEnter={()=>setHoveredItem(movie.id)}
                     onMouseLeave={()=>setHoveredItem(null)}
                     >
                        <Link to={`/movie/${movie.id}`} className="text-white text-decoration-none">
                        <div className="shadow-sm bg-black" style={{ width: "10rem" }}>
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div 
                                className="top-0 text-white"
                                style={{
                                   
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    opacity: hoveredItem === movie.id ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out",
                                }}
                            >
                               
                            </div>
                            <Typography sx={{padding:"20px 0 20px 10px"}}>{movie.title}</Typography>
                            
                       
                            </Link>
                    </div>
                ))}
            </div>
        </Container>
        </>
    );
};

export default memo(Movies);
