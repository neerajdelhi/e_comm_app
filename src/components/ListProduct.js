import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListProduct = () =>{
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        getproduct();
    },[]);

    const getproduct = async () =>{
        let result = await fetch('http://localhost:5000/list-product');
        result = await result.json();
        setProduct(result);
        console.info("products",product);
    };

    const deleteProduct = async (id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        result = await result.json();
        if(result){
            alert('record is deleted');
            getproduct();
        }
    }

    return (
        <div className='block'>
        <h1>List Product</h1>
        <table border={1}>
            <tr>
            <th>Sr. No.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>category</th>
            <th>Company</th>
            <th>Actions</th>
            </tr>
            {
                product.map((item, index)=>
                    <tr>
                        <td>{ index+1}</td>
                        <td>{ item.name }</td>
                        <td>{ item.price }</td>
                        <td>{ (item.category) ? item.category : "Null" }</td>
                        <td>{ (item.company) ? item.company : "Null" }</td>
                        <td>
                            <button className='table-button' onClick={()=>deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/"+item._id}>Update</Link>

                        </td>
                    </tr>
                )
            }
        </table>
        </div>
    );
}

export default ListProduct;