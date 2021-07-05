import axios from "axios";

//constants
const initialData = {
    offset: 0,
    next: null,
    previous: null,
    results: []
}

const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
const NEXT_POKEMON_SUCCESS = 'NEXT_POKEMON_SUCCESS';
const POKE_INFO_SUCCESS = 'POKE_INFO_SUCCESS';

//reducer

export default function pokeReducer(state = initialData, action){
 switch(action.type){
    case GET_POKEMON_SUCCESS:
        return{...state, ...action.payload}
    case NEXT_POKEMON_SUCCESS: 
        return {...state, ...action.payload}
    case POKE_INFO_SUCCESS: 
        return {...state,  aPokemon: action.payload}
    default: 
        return state;
 }
}


//acciones
export const getPokemonAction = () => async(dispatch) => {

    if(localStorage.getItem('offset=0')){
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        }) 
        return;
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: res.data
        }) 
        localStorage.setItem('offset=0', JSON.stringify(res.data));
    } catch (error) {
        console.log('error');
    }
}

export const nextPokemonAction = () => async(dispatch, getState) => {

    const next = getState().pokemons.next;

    if(localStorage.getItem(next)){
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: JSON.parse(localStorage.getItem(next))
        }) 
        return;
    }

    try {
        const res = await axios.get(next);
        dispatch({
            type: NEXT_POKEMON_SUCCESS,
            payload: res.data
        }) 
        localStorage.setItem(next, JSON.stringify(res.data));
    } catch (error) {
        console.log('error');
    }
}

export const previousPokemonAction = () => async(dispatch, getState) => {

    const {previous} = getState().pokemons;

    if(localStorage.getItem(previous)){
        dispatch({
            type: GET_POKEMON_SUCCESS,
            payload: JSON.parse(localStorage.getItem(previous))
        }) 
        return;
    }

    
    try {
        const res = await axios.get(previous);
        dispatch({
            type: NEXT_POKEMON_SUCCESS,
            payload: res.data
        }) 
        localStorage.setItem(previous, JSON.stringify(res.data));
    } catch (error) {
        console.log('error');
    }

}

export const pokeDetailAction = (url="https://pokeapi.co/api/v2/pokemon/1/") => async(dispatch) => {

    if(localStorage.getItem(url)){
        dispatch({
            type: POKE_INFO_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
        
        return 
    }

    try {
        const res= await axios.get(url)
        dispatch({
            type: POKE_INFO_SUCCESS,
            payload: {
                name: res.data.name,
                weight: res.data.weight,
                height: res.data.height,
                photo: res.data.sprites.front_default
            }
        })
        localStorage.setItem(url, JSON.stringify(
            {
                name: res.data.name,
                weight: res.data.weight,
                height: res.data.height,
                photo: res.data.sprites.front_default
            }
        ));
    } catch (error) {
        console.log('error');
    }
    
} 