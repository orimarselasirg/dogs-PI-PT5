const { Router } = require('express');
const { Dog, Temperament, DogsTemps } = require('../db')
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', async (req, res) => {
    let {name} = req.query;    
    if(name){
        try {
            const race = await Dog.findOne({
                where : {name: name},
                attributes : ['image','name','weight'],
                include : [
                    {
                        model : Temperament,
                        attributes: ['temperament'],
                        through:{
                            attributes :[]
                        }
                    }
                ]
            })
            if(!race) return res.status(404).send('La raza no existe, por favor crear la raza')
            res.status(200).send(race)
            
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            // llamo a todos perritos de la DB
            const races = await Dog.findAll(
                {
                attributes: ['id','image','name','weight', 'height', 'life_span'],
                include : [
                    {
                        model : Temperament,
                        attributes: ['temperament'],
                        through:{
                            attributes :[]
                        }
                    }
                ]
                })
                // conversor de atributos BD

                const DbBreed = races.map(breed =>{
                    let temp = [];
                    for(let i = 0; i < breed.temperaments.length; i++){
                        breed.temperaments[i] = breed.temperaments[i].temperament
                        temp.push(breed.temperaments[i])
                    }
                    return{  
                        id: breed.id,
                        name: (breed.name.charAt(0).toUpperCase() + breed.name.slice(1)),
                        temperament: temp.toString(),
                        height: breed.height,
                        weight: breed.weight,
                        life_span: breed.life_span,
                        image: breed.image
                    }})
                    // console.log(DbBreed)

            // llamo a todos los perritos de la API    
            const APIBreeds = await axios.get('https://api.thedogapi.com/v1/breeds')
            .catch(err =>{
                res.status(200).send(err)
            })

            //concateno los perritos
            const breeds = await DbBreed.concat(APIBreeds.data)
            
            //Ordeno los perritos
            breeds.sort(function(a,b){
                if(a.name < b.name)
                return -1
            })


            //verifico que tenga datos en en la concatenacion
            if(breeds.length === 0) return res.status(400).send('no existe perritos en las base de datos')
            res.status(200).send(breeds)
        } catch (error) {
            console.log(error)
        }
    }
})

router.get('/dogs/:id', async (req, res) => {
    let {id} = req.params
    try {
        const race = await Dog.findByPk(id, {attributes : ['image','name','weight','height','life_span', 'temperament']})
        if(!race) return res.status(404).send('el id no existe en la db')
        res.status(200).send(race)
    } catch (error) {
        console.log(error)    
    }
})

router.get('/temperaments', async (req, res) => {
    try {
        let temps = await Temperament.findAll({attributes: ['id','temperament']})
        res.status(200).json(temps)
    } catch (error) {
        console.log(error)
    }
})



// router.post('/dogs', async (req, res) => {
//     let {name, height, weight, life_span, temperament} = req.body
//     try {
//     if(!name || !height || !weight) return res.status(401).send('Falta algun dato obligatorio para crear la raza')
//     const temp = await Temperament.findOne({where : {temperament : temperament}, attributes : ['id']})
//     const breed = await Dog.create({name, height, weight, life_span}) 
//     await breed.addTemperament(temp)
//     res.status(201).send({mesage : 'agregado'})
    
//     } catch (error) {
//     console.log(error)
//     }

// })


router.post('/dogs', async (req, res) => {
    let {name, heightmax, heightmin, weightmax, weightmin, life_span, temperament, image} = req.body
    try {
    if(!name || !heightmax || !heightmin || !weightmax || !weightmin) return res.status(401).send('Falta algun dato obligatorio para crear la raza')
    const breed = await Dog.create({
        name,
        height: { metric :`${heightmax} - ${heightmin}`},
        weight: { metric : `${weightmax} - ${weightmin}`}, 
        life_span,
        image: {url: image}
    }) 
    
    for (let i = 0; i < temperament.length; i++){
        let id = await Temperament.findAll({where : {temperament : temperament[i]}, attributes : ['id']})
        await breed.addTemperament(id)
    }
    res.status(200).send(breed)
    
    } catch (error) {
    console.log(error)
    }

})



module.exports = router;
