import {auth, firebase} from '../firebase'



//Data inicial
const initialData = {
    loading: false,
    active: false
}

//types
const LOADING = 'LOADING'
const USER_ERROR = 'USER_ERROR'
const USER_SUCCESS = 'USER_SUCCESS'
const LOG_OUT = 'LOG_OUT'

//reducer
export default function userReducer(state = initialData, action){
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}
        case USER_ERROR:
            return {...initialData}
        case USER_SUCCESS:
            return {...state, loading: false, user: action.payload, active: true}    
        case LOG_OUT:
            return {...initialData}    
        default:
            return {...state};
    }
}

//actions
export const loginUserAction = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        dispatch({
            type: USER_SUCCESS,
            payload: {
                uid: res.user.uid,
                email: res.user.email
            }
        })
        localStorage.setItem('user', JSON.stringify({
            uid: res.user.uid,
            email: res.user.email
        }))

    } catch (error) {
       console.log('error'); 
       dispatch({
           type: USER_ERROR
       })
    }
}


export const readActiveUser = () => (dispatch) => {
    if(localStorage.getItem('user')){
        dispatch({
            type: USER_SUCCESS,
            payload: JSON.parse(localStorage.getItem('user'))
        })
    }
}


export const logOutAction = () => (dispatch) => {
    auth.signOut();
    localStorage.removeItem('user');
    dispatch({
        type: LOG_OUT
    })
}