class Vehicle {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    getDetails() {
        return `${this.brand} - ${this.price}`;
    }
}

class Car extends Vehicle {
    constructor(brand, price, fuelType) {
        super(brand, price);
        this.fuelType = fuelType;
    }

    getDetails() {
        return `${super.getDetails()} - ${this.fuelType}`;
    }
}

const car1 = new Car("Toyota", 1000000, "Petrol");
console.log(car1.getDetails());