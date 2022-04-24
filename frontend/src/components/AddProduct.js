import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

const AddProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const submitHandler = async (e) => {

        e.preventDefault();
        try{
            const product = await axios.post('http://localhost:4000/product',{name,price,description,image});
            console.log(product);
            navigate('/product')

        }catch(err){
            console.log(err);
        }
    }
    return (
        <div><div class="row">
            <div class="col-md-5 mx-auto">
                <div class="card p-3 shadow-sm m-2">
                    <h1 class="display-6">Add Product</h1>
                    <form onSubmit={submitHandler}>
                        <div class="mb-3">
                            <label class="form-label" for="product name">Product Name</label>
                            {/* <input class="form-control" type="text" name="username" id="username" placeholder="Username" /> */}
                            <input type="text"
                                name="name"
                                id="Name"
                                placeholder='Product Name'
                                class="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="price">Price</label>
                            {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                            <input type="text"
                                name="price"
                                id="price"
                                value={price}
                                placeholder="Price"
                                class="form-control"
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="description">Description</label>
                            {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                            <input type="text"
                                name="description"
                                id="description"
                                value={description}
                                class="form-control"
                                placeholder='Description'
                                onChange={(e) => setDescription(e.target.value)}
                                required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="description">Image Link</label>
                            {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                            <input type="text"
                                name="image"
                                id="image"
                                value={image}
                                class="form-control"
                                placeholder='Image Link'
                                onChange={(e) => setImage(e.target.value)}
                                required />
                        </div>
                        <button type="submit" class="btn btn-success btn-block btn-small">Add Product</button>
                    </form>
                </div>
            </div>
        </div>


        </div>
    )
}

export default AddProduct