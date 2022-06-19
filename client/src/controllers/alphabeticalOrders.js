export function az(setAsc, array) {
    setAsc(false);
    array.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }  
  export function za(setAsc, array) {
    setAsc(true);
    array.sort(function (b, a) {
      if(a.name < b.name){
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  // funciones de ordenamiento alfabeticos por nombre

