import { Alert, Box, Button, Divider, Link, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {


  const navigate = useNavigate()

  const [form,setForm] = useState({
    email:"",
    username:"",
    password:""
  })

  const [open,setOpen] = useState(false)

  const [message,setMessage] = useState({text:"",type:"success"})

  const handleSubmit= async(e:React.FormEvent)=>{

    e.preventDefault()

    try {

      await axios.post("http://localhost:3000/auth/sign-up",form)
      setMessage({text:"you have registered successfully",type:"success"})  

      setInterval(() => {
        navigate("/login")    
      }, 3000);
      
      
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

<Typography variant="h5" color="white" sx={{fontWeight:"bold",marginBottom:"20px",textAlign:"center"}}>Sign up now</Typography>


    <TextField
      label="email"
      name="email"
      required
      sx={{margin:"10px 0 "}}  
      value={form.email}
      onChange={handleChange}
      
      />

      <TextField
        label="username"
        name="username"
        required
        sx={{margin:"20px 0 "}}        
        value={form.username}
        onChange={handleChange}
      />
      <TextField
        label="password"
        name="password"
        required
        sx={{marginTop:"10px"}}
        value={form.password}
        onChange={handleChange}
        
        />
        <Button variant="contained" sx={{my:"20px" }} onClick={handleSubmit} >Create an Account</Button>
        <Divider sx={{ width: "80%", bgcolor: "white", my: 2 }} />
        <Typography color="white">Already have an account? <Link sx={{fontWeight:"bold"}} href="/login">Sign in</Link></Typography>
        </Box>
        <Snackbar autoHideDuration={4000} open={open} onClose={() => setOpen(false)}>
        <Alert severity={message.type as "success" | "error"} sx={{ width: "100%" }}>
           {message.text}
        </Alert>
        </Snackbar>
    </Box>
  );
};

export default Register;
