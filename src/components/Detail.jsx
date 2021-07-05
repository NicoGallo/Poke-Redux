import React, {useEffect} from 'react'

import {useDispatch, useSelector } from 'react-redux';
import { pokeDetailAction } from '../redux/pokeDucks'
 
const Detail = () => {

     const dispatch = useDispatch()

     useEffect(()=>{
        const fetchData = () =>{
            dispatch(pokeDetailAction())
        }
        fetchData();
     }, [dispatch]) 

     const pokemon = useSelector(store => store.pokemons.aPokemon)
     console.log(pokemon);

    return pokemon ? (
        <div className="card mt-4">
            <div className="card-body text-center">
                <img src={pokemon.photo} className="img-fluid" alt="" />
                <div className="div card-title text-uppercase">{pokemon.name}</div>
                <p className="card-text">Alto: {pokemon.height} | Ancho: {pokemon.weight} </p>
            </div>
        </div>
    ) : null
}

export default Detail
