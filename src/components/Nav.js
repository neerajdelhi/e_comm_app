import React from 'react';
import  {Link, useNavigate } from 'react-router-dom';

const Nav = () =>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate("/signup");
    }

    return (
        <div className='nav-div'>
            <img alt="logo" src='https://coretechops.com/storage/2023/10/Black-White-Minimalist-Business-Logo-Copy.png' />
            {
                auth ?
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/profile">profile</Link></li> 
                <li><Link onClick={logout} to="/signup">Logout | { JSON.parse(auth)[0].name } </Link></li>         
            </ul>
            : 
            <ul className='nav-ul left'> 
                <li><Link to="/signup">Sign up</Link></li> 
                <li> <Link to="/login">Login</Link></li>
            </ul>
            }
        </div> 
    )
} 

export default Nav;
