import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store/store";
import { useEffect } from "react";
import { getWatchList, removeFromWatchList } from "../redux/slices/watchlistSlice";
import { Box, Card, CardActions, CardContent, CardMedia, Container, Link, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const SaveList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    if (storedId) {
      const userId = Number(storedId);
      dispatch(getWatchList({ userId }));
    }
  }, [dispatch]);

//   useEffect(()=>{
//     const storedId = localStorage.getItem("id")
//     const userId = Number(storedId)
//     dispatch(removeFromWatchList({userId,movieId:movie.id}))
// },[dispatch])

  return (
    <Container maxWidth="xl">
      {watchlist.length === 0 ? (
        <Typography>No movies in watchlist</Typography>
      ) : (
        <Box sx={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
          {watchlist.map((movie) => (
            <>
          <Link href={`/movie/${movie.id}`} sx={{width:"22%",height:"auto",textDecoration:"none"}}>
            <Card sx={{display:"flex",justifyContent:"space-between",backgroundColor:"rgb(37, 37, 44)"}}>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <CardContent>
            <Typography color="white">{movie.title}</Typography>
              </CardContent>
              <CardActions>
              <DeleteIcon/>
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

export default SaveList;
