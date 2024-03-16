import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ()=>{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleProduct = async ()=>{
        // console.info(name, price, category, company);

        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        const auth = localStorage.getItem('user');
        const customerId = JSON.parse(auth)[0]._id;
        let result = await fetch("http://localhost:5000/add-product",
        {
            method:"post",
            body: JSON.stringify({name, price, category, company, customerId}),
            headers: {
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        console.log(result);

        if(result){
            navigate('/');
        }

    }

    return (
        <div>
            <h1 className='center'>Add Product</h1>
            <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="type product name" />
            { error &&  !name && <span class="error">Please enter valid name</span> }
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="type product price"/>
            { error && !price && <span class="error">Please enter valid price</span> }
            <input type="text"  value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="type product category"/>
            { error && !category && <span class="error">Please enter valid category</span> }
            <input type="text"  value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="type product company"/>
            { error && !company && <span class="error">Please enter valid company</span> }
            <center><button onClick={handleProduct}>Add Product</button></center>
        </div>
    )
}

export default AddProduct;