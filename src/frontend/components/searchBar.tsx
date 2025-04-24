import {
    Box,
    IconButton,
    TextField,
    Typography,
    Paper,
    Card,
    CardMedia,
    CardContent,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { AppDispatch, RootState } from "../redux/store/store";
  import { useEffect, useState } from "react";
  import { Movie } from "../interfaces/interface";
  import { movieAction } from "../redux/slices/movieSlice";
  import SearchIcon from "@mui/icons-material/Search";
  import { useNavigate } from "react-router-dom";
  
  const SearchBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movies } = useSelector((state: RootState) => state.movies);
    const [searchItem, setSearchItem] = useState("");
    const navigate = useNavigate();
  
    useEffect(() => {
      dispatch(movieAction());
    }, [dispatch]);
  
    const filteredMovies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchItem.toLowerCase())
    );
  
    const visibleMovies = filteredMovies.slice(0, 4);
    const hasMore = filteredMovies.length > 4;
  
    const handleMovieClick = (id: number) => {
      navigate(`/movie/${id}`);
      setSearchItem("");
    };
  
    return (
      <Box sx={{ position: "relative", width: "100%", maxWidth: "500px", zIndex: 1500 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <TextField
            variant="outlined"
            placeholder="Search movies..."
            value={searchItem}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearchItem(e.target.value)}
            sx={{
                backgroundColor: "rgb(50, 49, 56)",
              borderRadius: "4px",
              width: "100%",
              height:"25px",
              justifyContent:"center",
              color:"white"
            }}
            inputProps={{
                sx:{
                    color:"white"
                }
            }}
           
          />
        </Box>
  
        {searchItem && (
          <Paper
            elevation={4}
            sx={{
              position: "absolute",
              top: "40px",
              left: "-50%",
              width:"350px",
              backgroundColor: "rgb(25, 24, 29)",
              padding: 2,
              borderRadius: "8px",
              
            }}
          >
            {filteredMovies.length > 0 ? (
              <>
                {visibleMovies.map((movie: Movie) => (
                  <Card
                    key={movie.id}
                    onClick={() => handleMovieClick(movie.id)}
                    sx={{
                      display: "flex",
                      mb: 1,
                      cursor: "pointer",
                    backgroundColor: "rgb(50, 49, 56)",
                    width:"320px",
                      borderRadius: 2,
                      color:"white",
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      sx={{ width: 70, objectFit: "cover"}}
                    />
                    <CardContent sx={{ padding: 1 }}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
                      <Typography fontWeight="bold">{movie.title}</Typography>
                    <Typography fontSize="0.85rem" color="text.white"> PG: {movie.adult ? "18+" : "PG"}</Typography>
                       <Typography> Release: {movie.release_date || "N/A"}</Typography>
                       <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "orange",
                        borderRadius: 1,
                        width: "50px",
                        pl: 1,
                      }}
                    >
                      {movie.vote_average}
                    </Typography>
                    </Box>
                    </CardContent>
                  </Card>
                ))}
                {hasMore && (
                  <Typography
                    sx={{
                      textAlign: "center",
                      paddingY: 1,
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                    onClick={() => navigate(`/search-results?q=${searchItem}`)}
                  >
                    View all results
                  </Typography>
                )}
              </>
            ) : (
              <Typography sx={{ padding: 1 }}>No movies found</Typography>
            )}
          </Paper>
        )}
      </Box>
    );
  };
  
  export default SearchBar;
  