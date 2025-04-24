import {Box, Button, Container, Link, Typography } from "@mui/material"

const Error = () => {
    return (
        <Container sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"40px",height:"80vh",marginTop:"30px"}}>
        <Typography align="center" variant="h3" color="warning"><i className="bi bi-exclamation-diamond"></i> ERROR 404</Typography>
        <Typography color="white" align="center" width="50%">You may have mistyped the address or the page may be still under production.
             Let us take you to the main page and we can start all over again, shall we?</Typography>
        <Link underline="none" color="white" href="/">
        <Button variant="contained" sx={{backgroundColor:"orange"}} >
                Go Home
       </Button>
        </Link>
        <Box
        component="img"
        src="src/assets/images/maintaince.png"
        alt="maintenance"
        sx={{
          width: { xs: "80%", sm: "60%", md: "40%", lg: "30%" },
          maxWidth: "500px",
        }}
      />
       
        </Container>
    );
}

export default Error;
