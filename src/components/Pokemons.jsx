import React from 'react'
import Detail from './Detail';
import { useDispatch, useSelector } from 'react-redux';
import {getPokemonAction, nextPokemonAction, previousPokemonAction, pokeDetailAction} from '../redux/pokeDucks';

const Pokemons = () => {

     const dispatch = useDispatch()

    const pokemons = useSelector(store => store.pokemons.results);
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    return (
     
    <div className="row mt-5">
           
            
        <div className="col-md-6">
                    
            <h3>Lista de Pokémon</h3>

            <ul className="list-group mt-4">
                    {
                        pokemons.map(item=>(
                            <li key={item.name} className="list-group-item text-uppercase">{item.name}
                            <button className="btn btn-dark btn-sm float-right" onClick={()=> dispatch(pokeDetailAction(item.url))}>Info</button>
                            </li>
                        ))
                    }
                </ul>

            
               <div className="d-flex justify-content-between mt-4">
               {
                    pokemons.length === 0 && 
                    <button onClick={()=>dispatch(getPokemonAction())} className='btn btn-dark mt-3'>Obtener Pokémon</button>
                }

                {
                    previous &&             <button onClick={()=>dispatch(previousPokemonAction())} className='btn btn-dark'>Anterior</button>
                }

                {
                    next && <button onClick={()=>dispatch(nextPokemonAction())} className='btn btn-dark'>Siguiente</button>
                }   

                
                
               </div>
                

                
            </div>         
            
            <div className="col-md-6">
                <h3>Detalle del Pokémon</h3>
                <Detail />
            </div>   

                
    </div>
    )
}

export default Pokemons;
