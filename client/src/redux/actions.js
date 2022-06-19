export const GET_ALL_RACES = "GET_ALL_RACES";
export const GET_ALL_RACES2 = "GET_ALL_RACES2";
export const SEARCH_RACE = "SEARCH_RACE";
export const GET_RACE_DETAILS = "GET_RACE_DETAILS";
export const ADD_FAVORITE_RACE = "ADD_FAVORITE_RACE";
export const DELETE_RACE = "DELETE_RACE";
export const REMOVE_FAVORITE_RACE = "REMOVE_FAVORITE_RACE";
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

// export function getAllRaces2() {
//   return async function (dispatch) {
//    await fetch('http://localhost:3002/dogs')
//     .then(res => res.json())
//       .then((data) => {
//         dispatch({
//           type: GET_ALL_RACES2,
//           payload: data,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// }

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
 export function getRaceDetails(name){
  return function (dispatch) {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_RACE_DETAILS,
          payload: data.image,
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
       dispatch({
         type : CREATE_RACE,
         payload : response
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