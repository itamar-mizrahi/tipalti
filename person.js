import{Name} from "./name";
import{Address} from "./address";
export class Person {
    constructor(fullName, address) {
      this.fullName = new Name(firstName,lastName);
      this.address = new Address(street ,city);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    set fullName(newFullName) {
      this._fullName = newFullName;
    }
  
    get address() {
      return this._address;
    }
  
    set address(newAddress) {
      this._address = newAddress;
    }
  }
   