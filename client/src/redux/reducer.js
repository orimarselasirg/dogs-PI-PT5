import {GET_ALL_RACES, SEARCH_RACE, GET_RACE_DETAILS, ADD_FAVORITE_RACE, DELETE_RACE, REMOVE_FAVORITE_RACE, CREATE_RACE, GET_TEMPERAMENTS} from './actions'


const initialState ={
    races : [],
    created : [],
    details : {},
    favorites : [],
    temperaments: []
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_RACES: {
            return {
                ...state,
                races : action.payload
            };  
        }
        // case GET_ALL_RACES2: {
        //     return {
        //         ...state,
        //         created : action.payload
        //     };  
        // }
        case SEARCH_RACE : {
            return {
                ...state,
                races : action.payload
            };
        }
        case GET_RACE_DETAILS: {
            return {
                ...state,
                details : action.payload
            };
        }
        case ADD_FAVORITE_RACE: {
            return {
                ...state,
                favorites : [...state.favorites, action.payload]
            };
        }
        case DELETE_RACE: {
            return {
                ...state,
                races : state.races.filter(race => race.id !== action.payload)
            };
        }
        case REMOVE_FAVORITE_RACE : {
            return{
                ...state,
                favorites : state.favorites.filter(race => race.id !== action.payload)
            };
        }
        // case MODIFY_RACE : {
        //     return {
        //         ...state,
        //         races : action.payload
        //     };
        // }

        case CREATE_RACE: {
            return {
                ...state,
                races : [action.payload]
            }
        }
        case GET_TEMPERAMENTS : {
            return {
                ...state,
                temperaments : action.payload
            }
        }
        default:{
            return {...state};
        }
    }
}