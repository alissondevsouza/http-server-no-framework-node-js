import { randomUUID } from 'crypto';

export default class Product {
    constructor( id, name, price, description ) {
      this.id = id || randomUUID() + Date.now();
      this.name = this.#validateStringInput(name, 'name');
      this.price = this.#validateNumberInput(price, 'price');
      this.description = this.#validateStringInput(description, 'description');
    }


    #validateStringInput(value, fieldName) {
        if (typeof value !== 'string') {
            throw new Error(`The ${fieldName} field must be a non-empty string`);
        }

        return value;
    }

    #validateNumberInput(value, fieldName) {

        
        if (typeof value !== 'number' || value <= 0 || Number.isNaN(value)) {
            throw new Error(`The ${fieldName} field must be a positive number`);
        }

        return value;
    }

    setName(newName) {
        const validateName = this.#validateStringInput(newName, 'name');
        this.name = validateName.trim();
    }

    setPrice(newPrice) {
        const validatePrice = this.#validateNumberInput(newPrice, 'price');
        this.price = validatePrice;
    }

    setDescription(newDescription) {
        const validateDescription = this.#validateStringInput(newDescription, 'description');
        this.description = validateDescription.trim();
    }

    updateName(newName) {
        this.setName(newName);
    }

    updatePrice(newPrice) {
        this.setPrice(newPrice);
    }
    
    updateDescription(newDescription) {
        this.setDescription(newDescription);
    }

    showProduct() {
        const { id, name, price, description } = this;

        return {
            id,
            name,
            price,
            description
        }
    }
}


  