import { Alert, Box, Button, Divider, Link, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [userform , setuserform] = useState({
    email:"",
    username:"",
    password:""
  })

  const [success,setsuccess] = useState("")
  const [error,seterror] = useState("")
  const [open , setopen] = useState(false)

  const navigate = useNavigate()

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{

    setuserform({...userform,[e.target.name]:e.target.value})
   

   }

   const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault()
    seterror("")
    setsuccess("")
    try {
     const res = await axios.post("http://localhost:3000/auth/signup",userform)
      setsuccess(res.data.message)
      setopen(true)
      setTimeout(() => {
        
        navigate('/login')
      }, 3000);
   } catch (error:any) {
    seterror(error.response.data.error)
    setopen(true)
   }

    
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
      value={userform.email}
      required
      onChange={handleChange}
      sx={{margin:"10px 0 "}}  
      
      />

      <TextField
        label="username"
        name="username"
        value={userform.username}
        required
        onChange={handleChange}
        sx={{margin:"20px 0 "}}        
      />
      <TextField
        label="password"
        name="password"
        value={userform.password}
        required
        onChange={handleChange}
        sx={{marginTop:"10px"}}
        
        />
        <Button variant="contained" sx={{my:"20px" }} onClick={handleSubmit} >Create an Account</Button>
        <Divider sx={{ width: "80%", bgcolor: "white", my: 2 }} />
        <Typography color="white">Already have an account? <Link sx={{fontWeight:"bold"}} href="/login">Sign in</Link></Typography>
        </Box>
        <Snackbar open={open} autoHideDuration={4000} onClose={() => setopen(false)}>
        <Alert severity={error ? "error" : "success"} sx={{ width: "100%" }}>
          {error || success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
