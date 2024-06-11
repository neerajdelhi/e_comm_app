import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async () => {
        console.warn(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
         result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const UpdateProduct = async ()=> {
        console.warn(name, price, category, company);
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="type product name" className='inputBox' />
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="type product price" className='inputBox'/>
            <input type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="type product category" className='inputBox'/>
            <input type="text"  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="type product company" className='inputBox'/>
            <center><button onClick={UpdateProduct} className='appButton'>Update Product</button></center>
        </div>
    )
}

export default UpdateProduct;