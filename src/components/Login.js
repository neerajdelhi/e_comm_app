import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    
    useEffect(()=>{
        let auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });
    const handleLogin = async ()=>{
        // console.info(email, password);
        let result = await fetch("http://localhost:5000/login", {
            method:"post",
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        }
        );

        result = await result.json();
        console.info(result[0].email);
        if(result[0].email){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/');
        }else{
            console.error('Please enter correct details.')
        }
        
    }
    return (
        <div>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password"/>
            <center><button onClick={handleLogin}>Login</button></center>
        </div>
        
    );
}

export default Login;