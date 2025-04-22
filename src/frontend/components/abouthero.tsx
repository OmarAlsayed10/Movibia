import { Box, Container, Typography } from '@mui/material';
const Abouthero = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{height:"100vh",position:"absolute",top:"0"}}>
                <Box component="img" src="src/assets/images/about-hero.jpeg"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    objectFit:"cover",
                }}
                ></Box>
        <Box sx={{
            position:"absolute",
            top:0,
            left:0,
            height:"100%",
            width:"100%",
            background: "linear-gradient(to left,rgba(0, 0, 0, 0.26) 10%,rgba(0, 0, 0, 0.97) 100%)" 

                }}>

                </Box>
                <Box
        sx={{
            position:"absolute",
            top:"30%",
            left:"5%",
            color:"white"
        }}
        >
        <Typography variant="h4" sx={{fontWeight:"bold"}}>When you’re here, you’re home.</Typography>
        <Typography variant="h6" sx={{fontWeight:"100",width:"80%",padding:"20px 0"}}>(And so is all your entertainment.)</Typography>
        </Box>
        </Container>
        </>
    );
}

export default Abouthero;
