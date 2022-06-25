const { Dog, Temperament, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('*should work when its a valid name', () => {
        Dog.create({ name: 'Rami' });
      });
      it('*life_span must be a number', res =>{
        Dog.create({
          name: 'Rami',
          life_Span : 1
        })
        .then(()=> res(new Error('Life_span must be a number')))
        .catch(()=> res())
      })
    });
  });
});

describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Temperaments Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('Temperaments', () => {
      it('*should accept null values', (done) => {
        Temperament.create({})
          .then(() => done())
          .catch(() => done(new Error('the model does not allow null values')));
      });
      it('*should work when its a valid name', () => {
        Temperament.create({ temperament: 'Rami' });
      });
      it('*the temperaments id must be a number', res =>{
        Temperament.create({
          id: 1,
        })
        .then(()=> res())
        .catch(()=> res(new Error('error')))
      })
    });
  });
});