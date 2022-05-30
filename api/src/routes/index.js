const { Router } = require('express');
const { Dog, Temperament } = require('../db')
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
                attributes : ['image','name','temperament','weight']
            })
            if(!race) return res.status(404).send('La raza no existe, por favor cree la raza')
            res.status(200).send(race)
            
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const races = await Dog.findAll({attributes: ['image','name', 'temperament','weight']})
            if(races.length === 0) return res.status(400).send('no existe perritos en las base de datos')
            res.status(201).send(races)
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



router.post('/dogs', async (req, res) => {
    let {name, height, weight, life_span, temperament} = req.body
    try {
        if(!name || !height || !weight) return res.status(401).send('Falta algun dato obligatorio para crear la raza')
        const race = await Dog.create({name,height, weight, life_span, temperament})
        res.status(201).send(race)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
