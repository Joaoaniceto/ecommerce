import React from 'react'
import {useState ,useEffect} from 'react'
import AdminNav from '../../components/Nav/AdminNav'
import AdminProductCard from '../../components/cards/adminProductCard'
import {getProductsbyCount} from '../../API/product.js'


const AdminDashboard = ()=>{


const [products, setproducts] = useState([])
const [loading, setloading] = useState(false);


const loadAllProducts = ()=>{
    setloading(true);
    getProductsbyCount(100)
    .then(
        (res)=>{
            
            console.log(res.data)
            setproducts(res.data);
             setloading(false)
        }
    )
    .catch((err)=>{
        console.log(err)
         setloading(false)
    })
}

useEffect(()=>{
    loadAllProducts()
},[])



    return(
        <div className="container-fluid">
<div className="row"> 
<div className="col-md-2">
    <AdminNav />
</div>
<div className="col">
<h4 >Dasheboard</h4>
</div>
</div>
    </div>
    )
}

export default AdminDashboard