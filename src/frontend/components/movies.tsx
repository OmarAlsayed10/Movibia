import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store/store";
import {Box, Button, Container, Typography, useMediaQuery } from "@mui/material";

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

            
                    <Box
                     sx={{
                        width:"80px",
                         height:"92%",
                         display:"flex",
                         alignItems:"center",
                         justifyContent:"center",
                         cursor:"pointer",
                        position:"absolute",
                        backdropFilter:"blur(1px)",
                        background: "linear-gradient(to right,rgba(0, 0, 0, 0.4) 50%,rgba(0, 0, 0, 0.004) 90%)" ,
                        color:"white",
                        left:"4.3%",
                        top:"4.1%",
                        transform:"translate(-50%)",
                        zIndex:"10"
                        }}
                        onClick={()=>scrollMovies("left")}

                        >
                            <i className="bi bi-arrow-left"></i>
                        </Box>
                        
                    )}

                    {!isMobile &&(

                    <Box  sx={{
                        width:"80px",
                        height:"92%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        cursor:"pointer",
                        position:"absolute",
                        backdropFilter:"blur(1px)",
                        background: "linear-gradient(to left,rgba(0, 0, 0, 0.4) 50%,rgba(0, 0, 0, 0.004) 90%)" ,
                        color:"white",
                        right:"-1.2%",
                        top:"4.1%",
                        transform:"translate(-50%)",
                        zIndex:"10"
                    }}
                    
                    onClick={()=>scrollMovies("right")}
                    
                    >
                            <i className="bi bi-arrow-right"></i>
                        </Box>
                        )}
                    

            <div className="d-flex flex-row gap-4 movies-container" ref={scrollRef}>
                {movies.map((movie) => (
                    <div className="my-3 movie-card position-relative"
                     key={movie.id}
                     onMouseEnter={()=>setHoveredItem(movie.id)}
                     onMouseLeave={()=>setHoveredItem(null)}
                     >
                        <Link to={`/movie/${movie.id}`} className="text-white">
                        <div className="card shadow-sm bg-black" style={{ width: "15rem" }}>
                            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div 
                                className="card position-absolute top-0 text-white d-flex flex-column align-items-center justify-content-center"
                                style={{
                                    height: "100%",
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    opacity: hoveredItem === movie.id ? 1 : 0,
                                    transition: "opacity 0.3s ease-in-out",
                                }}
                            >
                                <h5 className="card-title text-center p-2">{movie.title}</h5>
                                <small className="px-2 truncate-2-lines">
                                    {movie.overview}
                                </small>
                                <div className="d-flex gap-3 py-3 pt-3">
                                    <Button variant="contained" color="primary" title="Add to watch list">
                                        <i className="bi bi-bookmark"></i>
                                    </Button>
                                    <Button variant="contained" color="primary"  title="Share">
                                        <i className="bi bi-share"></i>
                                    </Button>
                                </div>
                                <div className="d-flex gap-3 text-center align-items-center">
                                <small className=" text-white bg-secondary pt-2 px-1 mt-2 h-100 pb-0 rounded-1">{movie.adult ? "NC-17" : "PG"}</small>
                    <small className="text-white p-1 mt-2" title='release date'><i className='bi bi-calendar pe-2 text-danger'></i>{movie.release_date}</small>
                    <small className="text-white p-1 mt-2" title='rate'><i className='bi bi-ticket-perforated-fill pe-2 text-warning'></i>{movie.vote_average}</small>
                                </div>
                            </div>
                       
                            </Link>
                    </div>
                ))}
            </div>
        </Container>
        </>
    );
};

export default memo(Movies);
