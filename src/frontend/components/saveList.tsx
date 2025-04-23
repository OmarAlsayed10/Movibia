import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { memo, useEffect } from "react";
import { getWatchList, removeFromWatchList } from "../redux/slices/watchlistSlice";
import { Box, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Link, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const SaveList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);
  const loading = useSelector((state: RootState) => state.watchlist.loading);
  const storedId = localStorage.getItem("id");
  const userId = Number(storedId);

  useEffect(() => {
    if (storedId) {
      dispatch(getWatchList({ userId }));
    }
  }, [dispatch]);

  const handleRemove = (movieId: number) => {
    if (storedId) {
      dispatch(removeFromWatchList({ userId, movieId }));
    }
  };

if (loading) {
   return (
     <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
       <CircularProgress color="primary" />
     </Container>
   );
 }

  return (
    <Container maxWidth="xl">
      {watchlist.length === 0 ? (
        <Box sx={{display:"flex" , flexDirection:"column",alignItems:"center",gap:"30px"}}>
          <Typography variant="h4" color="white">No movies in watchlist</Typography>
          <Typography color="white">Browse movies and begin your journey !</Typography>
        </Box>
      ) : (
        <Box sx={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
          {watchlist.map((movie) => (
            <>
          <Link href={`/movie/${movie.id}`} sx={{width:"22%",height:"auto",textDecoration:"none"}}>
            <Card sx={{display:"flex",justifyContent:"space-between",backgroundColor:"rgb(37, 37, 44)"}}>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <CardContent>
            <Typography mb={2} variant="h6" color="white">{movie.title}</Typography>
            
            </CardContent>
              <CardActions>
              <DeleteIcon
              sx={{cursor: "pointer", color: "white"}} 
              onClick={(e:any) => {
                e.preventDefault();
                handleRemove(movie.id);
              }}
              />
          </CardActions>
              </Box>
            <CardMedia
            component="img"
            sx={{width:"120px"}}
            image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            />
            </Card>
          </Link>
          </>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default memo(SaveList);
