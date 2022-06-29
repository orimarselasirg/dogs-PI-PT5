import {GET_ALL_RACES, SEARCH_RACE, ADD_FAVORITE_BREED, REMOVE_FAVORITE_BREED, CREATE_RACE, GET_TEMPERAMENTS} from './actions'


const initialState ={
    races : [],
    created : [],
    favorites : [],
    // temperaments: []
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case GET_ALL_RACES: {
            return {
                ...state,
                races : action.payload
            };  
        }

        case SEARCH_RACE : {
            return {
                ...state,
                races : action.payload
            };
        }

        case ADD_FAVORITE_BREED: {
            return {
                ...state,
                favorites : [...state.favorites, action.payload]
            };
        }
        
        case REMOVE_FAVORITE_BREED : {
            return{
                ...state,
                favorites : state.favorites.filter(race => race.id !== action.payload)
            };
        }

        case CREATE_RACE: {
            return {
                ...state,
                created : [...state.created, action.payload ]
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