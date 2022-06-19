// funcion para ordenar por peso maximo
export function sortWeightMaxAsc (setWeight, array){
    setWeight(false)
    array.sort(function(a,b){
      if(Number(a.weight.metric.slice(0,2)) < Number(b.weight.metric.slice(0,2))){ //valido que si los dos primero
        return 1
      } else {
        if(Number(a.weight.metric.slice(0,2)) > Number(b.weight.metric.slice(0,2))){
          return -1
      }
    }})}

// funcion para ordenar por peso minimo
  export function sortWeightMaxDesc (setWeight, array){
    setWeight(true)
    array.sort(function(b,a){
      if(Number(a.weight.metric.slice(0,2)) < Number(b.weight.metric.slice(0,2))){ //valido que si los dos primero
        return 1
      } else {
        if(Number(a.weight.metric.slice(0,2)) > Number(b.weight.metric.slice(0,2))){
          return -1
      }
    }
  })}

  // funcion para ordenar por altura maxima
  export function sortHeightMaxAsc (setHeight, array){
    setHeight(false)
    array.sort(function(a,b){
      if(Number(a.height.metric.slice(0,2)) < Number(b.height.metric.slice(0,2))){ //valido que si los dos primero
        return 1
      } else {
        if(Number(a.height.metric.slice(0,2)) > Number(b.height.metric.slice(0,2))){
          return -1
      }
    }})}

// funcion para ordenar por altura minima
  export function sortHeightMaxDesc (setHeight, array){
    setHeight(true)
    array.sort(function(b,a){
      if(Number(a.height.metric.slice(0,2)) < Number(b.height.metric.slice(0,2))){ //valido que si los dos primero
        return 1
      } else {
        if(Number(a.height.metric.slice(0,2)) > Number(b.height.metric.slice(0,2))){
          return -1
      }
    }
  })}