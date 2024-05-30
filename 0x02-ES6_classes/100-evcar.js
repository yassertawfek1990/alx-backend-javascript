import Car from '10-car.js';

class EVCar extends Car {
 constructor(brand, motor, color, range) {
   super(brand, motor, color);
   this._range = range;
 }

 get range() {
   return this._range;
 }

 set range(value) {
   this._range = value;
 }

 cloneCar() {
   const Species = super.constructor[Symbol.species];
   return new Species();
 }
}

export default EVCar;
