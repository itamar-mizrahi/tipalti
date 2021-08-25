export class Name {
    constructor(firstName ,lastName ) {
      this.firstName  = firstName;
      this.lastName  = lastName ;
    }
    get firstName() {
      return this._firstName;
    }
  
    set firstName(newFirstName) {
      this._firstName = newFirstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(newLastName) {
      this._lastName = newLastName;
    }
  }