import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'
import { NavLink } from 'react-router-dom';


const Product = () => {
    const [product, setProduct] = useState([]);
    const [ sort, setSort] = useState('sort=name')
    const sortItem = ['Price: Low to High','Price: High to Low','Newest Arrivals','Oldest Arrivals']

    const dataCollector = async () => {
        const productList = await axios.get(`http://localhost:4000/product?${sort}`);
        const refinedArray = productList.data.data.products;
        setProduct(refinedArray);
    }
    
    const changeSort = (e) => {
        // e.preventDefault();
        let sortName = e.target.name;
        console.log(sortName);
        if(sortName === 'Price: Low to High'){
            setSort('sort=price')
        }else if(sortName === 'Price: High to Low'){
            setSort('sort=-price')
        }else if(sortName === 'Newest Arrivals'){
            setSort('sort=-created')
        }else if(sortName === 'Oldest Arrivals'){
            setSort('sort=created')
        }
        dataCollector();
    }
    useEffect(() => {
        dataCollector();
        console.log(sort);
    }, [])
    
    return (
        <>
            <div className='drop-down'>
                <div class="btn-group drop-down-child">
                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
                    </button>
                    <div class="dropdown-menu">     
                    {
                        sortItem.map( el=>(
                            <button onClick={changeSort} name={el} class="dropdown-item">{el}</button>
                        ))
                    }                  
                    </div>
                </div>
            </div>


            <div class="row" style={{ marginTop: "1rem" }} >
                {
                    product.map((item) => (
                       <NavLink to={`/product/${item._id}`}> <div className="col-lg-3 product-card" style={{ marginTop: "2rem" }} >

                            <div className="card shadow-sm mx-auto" style={{ width: "18rem" }} >
                                <img src={ item.image} className="card-img-top" alt="item image" style={{width:"100%", height:"200px"}} />
                                <div className="card-body">
                                    <h5 className="card-title">  {item.name} </h5>

                                    <p className="card-text" style={{height:"50px" ,overflow: "hidden"}} > {item.description} </p>
                                    <h5 className="card-title">$ {item.price} </h5>
                                  
                                </div>
                            </div>
                        </div>
                        </NavLink>
                    )
                    )
                }
            </div>

        </>



    )
}

export default Product