import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const collectdata = async ()=> {
        // console.info(name,email, password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-type': 'application/json'
            }
        });

        result = await result.json();
        console.info(result);
        localStorage.setItem('user',JSON.stringify(result));
        navigate('/');
    }
    return (
        <div className='register'>
            <center><h1>Registration</h1></center>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email address" />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Type password" />
            <center><button onClick={collectdata} >Signup</button></center>
        </div>
    )
}

export default Signup;