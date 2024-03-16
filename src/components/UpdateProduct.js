import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleProduct = async ()=>{
        console.info(name, price, category, company);
    }

    return (
        <div>
            <h1 className='center'>Add Product</h1>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="type product name" />
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="type product price"/>
            <input type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="type product category"/>
            <input type="text"  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="type product company"/>
            <center><button onClick={handleProduct}>Add Product</button></center>
        </div>
    )
}

export default UpdateProduct;