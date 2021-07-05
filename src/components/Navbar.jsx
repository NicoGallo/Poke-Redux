import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {logOutAction} from '../redux/userDucks';

import { withRouter } from 'react-router-dom';
 
const Navbar = (props) => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logOutAction())
        props.history.push('/login')
    }

    const active = useSelector(store => store.user.active);

    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Poke API</Link>
            <div>
                <div className="d-flex">
                    {
                        active ? (
                    <>        
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/"
                        exact
                    >
                        Pokemon
                    </NavLink>

                    <button
                        className="btn btn-dark"
                        onClick={() => logOut()}
                    >
                        cerrar Sesión
                    </button>
                    </>
                        ) : (
                            <NavLink 
                            className="btn btn-dark mr-2" 
                            to="/login"
                            exact
                            >
                                Login
                            </NavLink>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)