/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog,Temperament, conn } = require('../../src/db.js');
var supertest = require('supertest-as-promised')(require('../../src/app'))


const agent = session(app);
const dog = {
  name: 'Pug',
  height: 5,
  weight: 5,
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
  });
});

describe('Routes', ()=>{
  describe('/temperaments', ()=>{
    it('*must return all temperaments', ()=>{
      return supertest
      .get('/temperaments').expect(200)      
    });
    it('*id temperament must be a number', ()=>{
      return supertest
      .get('/temperaments').expect(res =>{
        expect(typeof(res.body[0].id)).to.be.equal('number')
      })      
    })
  })
  describe('/dogs', ()=>{
    it('*must return status code 200 when the route is called', ()=>{
      return supertest
      .get('/dogs')
      .expect(200)
    });
    it('*the response must be in JSON format', ()=>{
      return supertest
      .get('/dogs')
      .expect('Content-Type', /json/)
    })

  })
})
