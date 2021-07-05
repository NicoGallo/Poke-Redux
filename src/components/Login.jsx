import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {loginUserAction} from '../redux/userDucks';

import { withRouter } from 'react-router-dom';



const Login = (props) => {
    const dispatch = useDispatch();

    const loading = useSelector(store => store.user.loading);
    const active = useSelector(store => store.user.active);
    console.log(active);


    useEffect(() =>{
       
        if(active){
            props.history.push('/')
        }
    }, [active, props.history])


    return (
        <div className="mt-5 text-center">
            <h3>Ingreso de usuarios</h3>
            <hr/>
            <button className="btn btn-dark" onClick={() => dispatch(loginUserAction())} disabled={loading}>Ingreso con Google</button>
        </div>
    )
}



export default withRouter(Login)
