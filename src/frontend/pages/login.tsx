import { Alert, Box, Button, Divider, Link, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [userform , setuserform] = useState({
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

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
    setsuccess("")
    seterror("")
    
    try {
      const res = await axios.post("http://localhost:3000/auth/login",userform)
      setsuccess(res.data.message)
      setopen(true)

      setTimeout(() => {
        navigate("/")
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

<Typography variant="h5" color="white" sx={{fontWeight:"bold",marginBottom:"20px",textAlign:"center"}}>Sign in</Typography>


      <TextField
        label="username"
        sx={{margin:"10px 0 "}}
        name="username"
        value={userform.username}
        required
        onChange={handleChange}
      />
      <TextField
        label="password"
        name="password"
        value={userform.password}
        required
        onChange={handleChange}
        sx={{marginTop:"20px "}}
              />
        <Button variant="contained" sx={{my:"20px" }} onClick={handleSubmit} >Login</Button>
        <Divider sx={{ width: "80%", bgcolor: "white", my: 2 }} />
        <Typography color="white">dont have an account? <Link sx={{fontWeight:"bold"}} href="/signup">Sign up</Link></Typography>
        </Box>

        <Snackbar autoHideDuration={3000} open={open} onClose={()=>setopen(false)}>
        <Alert severity={error?"error":"success"} sx={{width:"100%"}}>
          {success||error}
        </Alert>

        </Snackbar>
    </Box>
  );
};

export default Login;
