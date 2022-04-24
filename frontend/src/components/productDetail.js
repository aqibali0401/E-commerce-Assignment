import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const initialize = {
  name:'',
  description:'',
  price:''
}
const ProductDetail = ({ match }) => {
  const [item, setItem] = useState({});
  const [description, setDescription] = useState('')
  const [edit, setEdit] = useState(false)
  const navigation = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {

        const user = await axios.get(`http://localhost:4000/product/${id}`);
        setItem(user.data.data.product)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])
  const clickhandler = async (e) => {
    e.preventDefault()
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/product/${id}`)
    } catch (err) {
      console.log(err.response);
    }
    navigation('/product')
  }
  const changehandler =(e)=>{
      setDescription({ ...description, [e.target.name]: e.target.value})
  }
  const clickSave = async (e) => {
    e.preventDefault();
    try {
      console.log(description);
     const data = await axios.patch(`http://localhost:4000/product/${id}`, {description})
      console.log(data);
      navigation('/product')
    } catch (err) {
      console.log(err.response);
    }
  }
  return (
    <>
      {!edit ?
        <>
          <div class="row" style={{ margin: '0px auto' }} >
            <div className="col-lg-3 product-card" style={{ marginTop: "2rem" }} >

              <div className="card shadow-sm mx-auto" style={{ width: "18rem" }} >
                <img src={item.image} className="card-img-top" alt="item image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <h5 className="card-title">  {item.name}   </h5>
                  <p className="card-text" style={{ height: "50px", overflow: "hidden" }} > {item.description} </p>
                  <h5 className="card-title">{item.price} </h5>
                  <button onClick={() => setEdit(true)} className="btn btn-success btn-sm">Edit</button>
                  <button onClick={clickhandler} className="btn btn-danger btn-sm delete-button">Delete</button>                          </div>
              </div>
            </div>
          </div></>
        : <>
          <div class="row" style={{ margin: '0px auto' }} >
            <div className="col-lg-3 product-card" style={{ marginTop: "2rem" }} >

              <div className="card shadow-sm mx-auto" style={{ width: "18rem" }} >
                <img src={item.image} className="card-img-top" alt="item image" style={{ width: "100%", height: "200px" }} />
                <div className="card-body">
                  <h5 className="card-title">  {item.name}   </h5>
                  <textarea name="description" className='textDesc' cols="30" rows="2" placeholder='Description ....'  onChange={changehandler}></textarea>
                  <h5 className="card-title">{item.price} </h5>
                  <button onClick={clickSave} className="btn btn-success btn-sm">Save</button>
                  <button onClick={clickhandler} className="btn btn-danger btn-sm delete-button">Delete</button>                          </div>
              </div>
            </div>
          </div></>}
    </>
  )
}

export default ProductDetail