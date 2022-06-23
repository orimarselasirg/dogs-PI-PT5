// funcion para ordenar por peso maximo
// export function sortWeightMaxAsc (setWeight, array){
//     setWeight(true)
//     array.sort(function(a,b){
//       let num_a = parseInt(a.weight.metric.slice(5,7))
//       let num_b = parseInt(b.weight.metric.slice(5,7)) 
//       // if(num_a < num_b){ //valido que si los dos primero
//         return num_a-num_b
      
//       // else {
//       //   return 1
//       // }
//     })}
//     export function sortWeightMaxDesc (array){
//       // setWeight(false)
//       array.sort(function(a,b){
//         if(Number(a.weight.metric.slice(5,7)) < Number(b.weight.metric.slice(5,7))){ //valido que si los dos primero
//           return -1
//         } 
//         // else {
//         //   return 1
//         // }
//     })}
//     export function sortWeightMinAsc(setWeight, array){
//       setWeight(true)
//       array.sort(function (a,b){
//         if(Number(a.weight.metric.slice(0,2)) < Number(b.weight.metric.slice(0,2))){
//           return -1
//         } else {return 1}
//         // else {
//         //   if(Number(a.weight.metric.slice(5,7)) > Number(b.weight.metric.slice(5,7))){
//         //     return -1
//         // }}
//       })}
      
//       export function sortWeightMinDesc (setWeight, array){
//         setWeight(true)
//         array.sort(function(a,b){
//           if(Number(a.weight.metric.slice(0,2)) > Number(b.weight.metric.slice(0,2))){ //valido que si los dos primero
//             return 1
//           } else {
//             return -1
//           }
//           // else {
//           //   if(Number(a.weight.metric.slice(0,2)) > Number(b.weight.metric.slice(0,2))){
//           //     return -1
//           // }}
//       })}


//////////////////////////////////////////////////////////////////////////////////////////
// export function sortWeightMaxAsc (setWeight, array){
//       setWeight(true)
//       array.sort(function(a,b){
//         if(Number(a.weight.metric.slice(0,2)) < Number(b.weight.metric.slice(0,2))) return 1//valido que si los dos primero

//       })}

  // export function sortWeightMinAsc(setWeight, array){
  //   setWeight(false)
  //   array.sort(function (a,b){
  //     if(Number(a.weight.metric.slice(5,7)) > Number(b.weight.metric.slice(5,7))){
  //       return -1
  //     }
  //   })}
//////////////////////////////////////////////////////////////////////////////////////////

// funcion para ordenar por peso minimo
  // export function sortWeightMaxDesc (setWeight, array){
  //   setWeight(true)
  //   array.sort(function(b,a){
  //     if(Number(a.weight.metric.slice(0,2)) < Number(b.weight.metric.slice(0,2))){ //valido que si los dos primero
  //       return 1
  //     } else {
  //       if(Number(a.weight.metric.slice(0,2)) > Number(b.weight.metric.slice(0,2))){
  //         return -1
  //     }
  //   }
  // })}



/////////////////////////////////////////////////////////////////////////////
//FUNCIONE DE ORDENAMIENTO POR PESO ASC Y DESC POR MIN O MAX - 100% FUNCIONAL

// Funcion ordenamiento ascendete por peso maximo
export function sortWeightMaxAsc(setWeight, array){
  setWeight(false)
  array.sort(function(a,b){
    let numA = parseInt(a.weight.metric.slice(4,8))
    let numB = parseInt(b.weight.metric.slice(4,8))
    if(numA <numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento descendente por peso maximo
export function sortWeightMaxDesc(setWeight, array){
  setWeight(true)
  array.sort(function(a,b){
    let numA = parseInt(a.weight.metric.slice(4,8))
    let numB = parseInt(b.weight.metric.slice(4,8))
    if(numA > numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento ascendete por peso minimo
export function sortWeightMinAsc(setWeight, array){
  setWeight(false)
  array.sort(function(a,b){
    let numA = parseInt(a.weight.metric.slice(0,2))
    let numB = parseInt(b.weight.metric.slice(0,2))
    if(numA <numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento descendente por peso minimo
export function sortWeightMinDesc(setWeight, array){
  setWeight(true)
  array.sort(function(a,b){
    let numA = parseInt(a.weight.metric.slice(0,2))
    let numB = parseInt(b.weight.metric.slice(0,2))
    if(numA > numB){
      return -1
    } else {
      return 1
    }
  })
}

/////////////////////////////////////////////////////////////////////////////
//FUNCIONE DE ORDENAMIENTO POR ALTURA ASC Y DESC POR MIN O MAX - 100% FUNCIONAL

// Funcion ordenamiento ascendete por altura maxima
export function sortHeightMaxAsc(setHeight, array){
  setHeight(false)
  array.sort(function(a,b){
    let numA = parseInt(a.height.metric.slice(4,8))
    let numB = parseInt(b.height.metric.slice(4,8))
    if(numA <numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento descendente por altura maximo
export function sortHeightMaxDesc(setHeight, array){
  setHeight(true)
  array.sort(function(a,b){
    let numA = parseInt(a.height.metric.slice(4,8))
    let numB = parseInt(b.height.metric.slice(4,8))
    if(numA > numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento ascendete por altura minimo
export function sortHeightMinAsc(setHeight, array){
  setHeight(false)
  array.sort(function(a,b){
    let numA = parseInt(a.height.metric.slice(0,2))
    let numB = parseInt(b.height.metric.slice(0,2))
    if(numA <numB){
      return -1
    } else {
      return 1
    }
  })
}
// Funcion ordenamiento descendente por altura minimo
export function sortHeightMinDesc(setHeight, array){
  setHeight(true)
  array.sort(function(a,b){
    let numA = parseInt(a.height.metric.slice(0,2))
    let numB = parseInt(b.height.metric.slice(0,2))
    if(numA > numB){
      return -1
    } else {
      return 1
    }
  })
}

  // funcion para ordenar por altura maxima
//   export function sortHeightMaxAsc (setHeight, array){
//     setHeight(false)
//     array.sort(function(a,b){
//       if(Number(a.height.metric.slice(0,2)) < Number(b.height.metric.slice(0,2))){ //valido que si los dos primero
//         return 1
//       } else {
//         if(Number(a.height.metric.slice(0,2)) > Number(b.height.metric.slice(0,2))){
//           return -1
//       }
//     }})}

// // funcion para ordenar por altura minima
//   export function sortHeightMaxDesc (setHeight, array){
//     setHeight(true)
//     array.sort(function(b,a){
//       if(Number(a.height.metric.slice(0,2)) < Number(b.height.metric.slice(0,2))){ //valido que si los dos primero
//         return 1
//       } else {
//         if(Number(a.height.metric.slice(0,2)) > Number(b.height.metric.slice(0,2))){
//           return -1
//       }
//     }
//   })}