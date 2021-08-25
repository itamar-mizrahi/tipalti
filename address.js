export class Address {
    constructor(street ,city ) {
      this.street = street;
      this.city  = city ;
    }
    get street() {
      return this._street;
    }
  
    set street(newStreet) {
      this._street = newStreet;
    }
  
    get city() {
      return this._city;
    }
  
    set city(newCity) {
      this._city = newCity;
    }
  }