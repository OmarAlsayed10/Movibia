import {memo, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Movie} from "../interfaces/interface";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store/store";
import "./componentStyle.css"
import { addToWatchList } from "../redux/slices/watchlistSlice";
import { Button } from "@mui/material";




const MovieDetails = () => {
    
   const dispatch = useDispatch<AppDispatch>();
    const { movies } = useSelector((state:RootState) => state.movies);

    
    const userId = Number(localStorage.getItem("id"));
    
    const handleAdd = (movie:any)=>{
        
        if(userId){
           dispatch(addToWatchList({userId:userId,movie}))
        }

    }

    useEffect(()=>{
        dispatch(movieAction())
    },[dispatch])
    
    const { id } = useParams();
 
    const [movie,setmovie]=useState<Movie|null>(null)

    useEffect(()=>{
        if(movies.length>0){

            const foundMovie = movies.find((m:any)=>m.id === Number(id) )
            setmovie(foundMovie || null)
        }
    },[id,movies])

    if (!movies.length) return <h2 className="text-center text-white">Loading movies...</h2>;
    if (!movie) return <h2 className="text-center text-white">Movie not found</h2>;

    return (

        <div className="container wrapper-container mt-5">
           <div className="container wrapper-container" >
            <div className="row p-5">
            <div className="image-container col-md-6">
                    <div className="image-card rounded-3 d-flex justify-content-center justify-content-lg-start">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
            </div>
            <div className="col-md-6 text-white">
                <h3 className="fs-1 text-lg-start text-center mt-4">{movie.title}</h3>
                <div className="d-flex gap-2 py-4 justify-content-center justify-content-lg-start">
                <small className=" text-white bg-secondary pt-1 px-2 pt-0 mt-2 h-100 pb-0 rounded-1">{movie.adult ? "NC-17" : "PG"}</small>
                    <small className="text-white p-1 mt-2" title='release date'><i className='bi bi-calendar pe-2 text-danger'></i>{movie.release_date}</small>
                    <small className="text-white p-1 mt-2" title='rate'><i className='bi bi-ticket-perforated-fill pe-2 text-warning'></i>{movie.vote_average}</small>
                </div>
                <p className="text-lg-start text-center">{movie.overview}</p>
                <div className="d-flex gap-3 pt-4 justify-content-center justify-content-lg-start">
                <Button onClick={()=>{ handleAdd(movie); }} variant="contained" color="primary" title='add to watch list'><i className='bi bi-bookmark-plus pe-2'></i>Add to Watch List</Button>
                </div>
                
            </div>
            </div>
        </div>
    
            <div className="wrapper"></div>
            </div>
            
   
   

    );
}

export default memo(MovieDetails);
