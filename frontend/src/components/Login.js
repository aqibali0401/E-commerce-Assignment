import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerts, setAlert] = useState({})
    const submitHandler = async (e) => {
        try {

            e.preventDefault();
            const data = await axios.post('http://localhost:4000/login', { email, password })
            const { status, message } = data.data;
            console.log(data.data);
            setAlert({ type: status, msg: message })
            setTimeout(() => {
                setAlert(false)
                navigate('/')
            }, 2000);
            localStorage.setItem('status',JSON.stringify(data))
        } catch (err) {
            console.log(err.response);
            setAlert({ type: 'error', msg: 'failed login' })
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        }
    }

    return (
        <div>
            <div className={`alert alert--${alerts.type}`}>{alerts.msg}</div>
            <div class="row">
                <div class="col-md-5 mx-auto">
                    <div class="card p-3 shadow-sm m-2">
                        <h1 class="display-6">Login</h1>
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
                            <input type="submit" className="btn btn-success btn-block btn-small" />
                            <p class="fw-light mt-2">Don't have an account yet ? <a href="/signup">SignUp</a> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login