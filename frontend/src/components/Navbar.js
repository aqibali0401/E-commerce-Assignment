import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' class="navbar-brand" >Carselona Daily</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/product" class="nav-link" >Products <span class="sr-only">(current)</span></Link>
                        </li> 
                        <li class="nav-item active">
                            <Link to="/getproduct" class="nav-link" >Add Product <span class="sr-only">(current)</span></Link>
                        </li>
                        
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                    <Link to='/login' class="nav-link" >Login<span class="sr-only">(current)</span></Link>
                    <Link to='/signup' class="nav-link">SignUp<span class="sr-only">(current)</span></Link>
                    </form>

                </div>
            </nav>
        </div>
    )
}

export default Navbar