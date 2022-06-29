export const GET_ALL_RACES = "GET_ALL_RACES";
export const SEARCH_RACE = "SEARCH_RACE";
export const ADD_FAVORITE_BREED = "ADD_FAVORITE_BREED";
export const REMOVE_FAVORITE_BREED = "REMOVE_FAVORITE_BREED";
export const CREATE_RACE = "CREATE_RACE";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";


export function getAllRaces() {
  return function (dispatch) {
    fetch('http://localhost:3002/dogs')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_ALL_RACES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}

export function addFavorite(id){
  return ({
    type : ADD_FAVORITE_BREED,
    payload : id
  })
}

export function removeFavorite(id){
  return ({
    type : REMOVE_FAVORITE_BREED,
    payload: id
  })
}

export function searchRace(name) {
  // const state = useSelector(state => state.races) // aqui tengo als razas
  return function (dispatch) {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: SEARCH_RACE,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}

 export function createRace(input){
   return async function(dispatch){
     await fetch('http://localhost:3002/dogs', {
       method : 'POST',
       body: JSON.stringify(input),
       headers: {'Content-Type': 'application/json'}
     })
     .then(res => res.json())
     .then(response =>{
      //  console.log(response)
       dispatch({
         type : CREATE_RACE,
         payload: [{
           id : response.id,
           name : response.name,
         }]
       })
     })
     .catch(err => console.log(err))
   }
 }

 export function getTemperaments(){
  return async function(dispatch){
    await fetch('http://localhost:3002/temperaments')
    .then(res => res.json())
    .then(response =>{
      dispatch({
        type : GET_TEMPERAMENTS,
        payload : response
      })
    })
    .catch(err => console.log(err))
  }
}