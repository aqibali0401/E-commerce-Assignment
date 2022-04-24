import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './loginStyle.css'
// import alert from '../alert/alert';
const LoginSignup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerts,setAlert] = useState({});

    const submitHandler = async (e) => {
        try{

            e.preventDefault();
            console.log(email,password);
            const user = await axios.post('http://localhost:4000/signup', { email, password })
            console.log(user);
            const { status,message} = user.data;
            setAlert({ type: status, msg:message})
            setTimeout(() => {
                setAlert(false);
                navigate('/')
            }, 2000);
        }catch(err){
            console.log(err);
        }
        

    }
    return (
        <>
            <div className={`alert alert--${alerts.type}`}>{alerts.msg}</div>

                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="card p-3 shadow-sm m-2">
                            <h1 class="display-6">SignUp</h1>
                            <form onSubmit={submitHandler}>
                                <div class="mb-3">
                                    <label class="form-label" for="username">Email</label>
                                    {/* <input class="form-control" type="text" name="username" id="username" placeholder="Username" /> */}
                                    <input type="email"
                                        name="email"
                                        id="email"
                                        placeholder='Email'
                                        class="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="password">Password</label>
                                    {/* <input class="form-control" type="password" name="password" id="password" placeholder="Password" /> */}
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        class="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>
                                <button type="submit" class="btn btn-success btn-block btn-small">SignUp</button>
                                <p class="fw-light mt-2">if you already have account ? <a href="/login">Login</a> </p>
                            </form>
                        </div>
                    </div>
                </div>

       </>
    )
}

export default LoginSignup