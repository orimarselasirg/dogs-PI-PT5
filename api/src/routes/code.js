const PESO = () => {
    if (peso) {
      perrosfiltrados.sort(function (a, b) {
        setPeso(!peso)
        if (Number(a.weight.metric.slice(0, 2)) > Number(b.weight.metric.slice(0, 2))) {
          return 1;
        }
        if (Number(a.weight.metric.slice(0, 2)) < Number(b.weight.metric.slice(0, 2))) {
          return -1;
        }
        return 0;
      })
    } else {
      setPeso(!peso)
      perrosfiltrados.sort(function (b, a) {
        if (Number(a.weight.metric.slice(0, 2)) 




        router.get("/breeds", async (_req, res) => {
            const DBdogs = await Dog.findAll(
              {
                include: [
                  {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                      attributes: []
                    }
                  }
                ]
              }
            )



            const DBdogsok = DBdogs.map(dog => {
                var arraytemps = []                    // variable auxiliar
                for (let i = 0; i < dog.temperaments.length; i++) {
                  dog.temperaments[i] = dog.temperaments[i].name
                  arraytemps.push(dog.temperaments[i])
                }
                return {
                  id: dog.id,
                  name: (dog.name.charAt(0).toUpperCase() + dog.name.slice(1)),
                  temperament: arraytemps.toString(),
                  height: dog.height,
                  weight: dog.weight,
                  life_span: dog.life_span,
                  image: do




    const APIdogs = await axios.get("https://api.thedogapi.com/v1/breeds")
    .catch((error) => {                          // Si hay un error, devolver un mensaje de error
      return res.status(500).send(error);
    });
  const dogs = await DBdogsok.concat(APIdogs.data);// Concatenar los perros de la base de datos con los de la API
  dogs.sort(
a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  })
  res.send(dogs);
});
