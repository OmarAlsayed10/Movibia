import { Box, Button, Container, Link, Typography } from "@mui/material";




const Hero = () => {
    return (
        <>
    <Container maxWidth="xl" sx={{height:"100vh",position:"relative",top:"-100px"}}>
        <video
        autoPlay
        loop
        muted
        style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "120%",
            objectFit: "cover",
            opacity:"0.5"
        }}
        >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <Box sx={{
            position:"absolute",
            top:0,
            left:0,
            height:"100%",
            width:"100%",
            background: "linear-gradient(to left,rgba(113, 87, 87, 0.06) 40%,rgba(42, 42, 101, 0.38) 100%)" 
                }}></Box>
        <Box
        sx={{
            position:"absolute",
            top:"30%",
            left:"5%",
            color:"white"
        }}
        >
        <Typography variant="h4" sx={{fontWeight:"bold"}}>Pay less , watch more</Typography>
        <Typography sx={{fontWeight:"100",width:"60%",padding:"20px 0"}}>Stream over 10,000 movies and TV shows across all genres in high quality, ad-free. Enjoy seamless access anytime, anywhere, with personalized recommendations</Typography>
        <Button variant="contained" color="primary"><Link underline="none" color="white" href="/signup">Sign up</Link></Button>
        </Box>
        </Container>
        </>
    );
}

export default Hero;
