import { Alert, Box, Button, Divider, Link, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Login = () => {

  const [form,setForm] = useState({
    email:"",
    password:""
  })

  const [open,setOpen] = useState(false)

  const [message,setMessage] = useState({text:"",type:"success"})

  const handleSubmit= async(e:React.FormEvent)=>{

    e.preventDefault()

    try {

     const response= await axios.post("http://localhost:3000/auth/sign-in",form)

      const { token, user } = response.data;

            localStorage.setItem("email", user.email);
            localStorage.setItem("token", token);
            localStorage.setItem("username",user.username)
            localStorage.setItem("id",user.id)


      setMessage({text:"you have logged in successfully",type:"success"})  

      setInterval(() => {
        window.location.href="/"
      }, 1000);
      
      
    } catch (error:any) {
      const errorMessage = error.response?.data?.message || "An error occurred!";
      setMessage({ text: errorMessage, type: "error" });
    }
    finally{
      setOpen(true)
    }
    
  }

  const handleChange = async(e:React.ChangeEvent<HTMLInputElement>)=>{

    setForm({...form,[e.target.name]:e.target.value})

  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height:"80vh",   
      }}
      >
        <Box
        sx={{
            width:"50%",
            height:"100%",
           background: "rgba(0, 0, 0, 0.5)",backdropFilter:"blur(10px)",borderBottom:"1px solid (255,255,255,0.1)",
                display: "flex",
            flexDirection:"column",
            paddingTop:"40px",
            alignItems: "center",
            borderRadius:"20px"

        }}>

<Typography variant="h5" color="white" sx={{fontWeight:"bold",marginBottom:"20px",textAlign:"center"}}>Sign in</Typography>


      <TextField
        label="email"
        sx={{margin:"10px 0 "}}
        name="email"
        required
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="password"
        name="password"
        sx={{marginTop:"20px "}}
        required
        value={form.password}
        onChange={handleChange}
              />
        <Button variant="contained" sx={{my:"20px" }} onClick={handleSubmit} >Login</Button>
        <Divider sx={{ width: "80%", bgcolor: "white", my: 2 }} />
        <Typography color="white">dont have an account? <Link sx={{fontWeight:"bold"}} href="/signup">Sign up</Link></Typography>
        </Box>

         <Snackbar autoHideDuration={4000} open={open} onClose={() => setOpen(false)}>
                <Alert severity={message.type as "success" | "error"} sx={{ width: "100%" }}>
                   {message.text}
                </Alert>
                </Snackbar>
    </Box>
  );
};

export default Login;
