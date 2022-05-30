const axios = require('axios')
const {Temperament} = require('../db')

async function databaseLoader(){
    const races = (await axios.get('https://api.thedogapi.com/v1/breeds?api_key=1b14a352-ff51-4e91-be90-977e124c425b')).data
    let array = races.map(e => e.temperament).toString().split(/\s*,\s*/) // regular expression para hacer split de espacios y comas
    let final = [...new Set(array)] // hago un set para quitar duplicados y lo encierro con [] para hacerlo un array

    const prueba = final.map(e => ({
        temperament : e
    }))

    await Temperament.bulkCreate(prueba)
}

module.exports = databaseLoader





// para convertir un string en un array  string.split(',')

// var a = [{string : "a,b,c,d,e", id: 3},{string :"a,e,f,g,h", id: 3},{string :"i,e,f,u,p", id: 3},{string :"i,e,f,u,p", id: 3}]

// let array = races.map(e => e.temperament).toString().split(',')
