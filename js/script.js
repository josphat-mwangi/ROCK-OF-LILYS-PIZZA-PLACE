class  pizza {
    constructor(type, size, crust, toppings, quality, delivery){
        this.type = type;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quality = quality;
        this.delivery = delivery;
    }
}
typePrice(){
    if (this.type == "CHICKEN SUPREME") {
        this.price = 800;
        return this.price;
    } else {
        return this.price;
    }
}

priceBySize(){
    if (this.size == "jumble") {
        return 4400;
    } else if (this.size == "large") {
        return 2200;
    } else if (this.size == "medium") {
        return 1100;
    
    } else {
        return 500;
    }
}

crustPrice(){
    if (this.crust == "stuffed") {
        return 850;
    } else if (this.crust == "cripsy") {
        return 1200;
    
    } else {
        return 600;
    }
}

toppingsPrice(){
    if (this.toppings == "Extra Beef") {
        return 200;
    } else if (this.toppings == "Extra Ham") {
        return 300;
    } else if (this.toppings == "Extra Cheese Mozarella") {
        return 400;
    } else if (this.toppings == "Extra Becon") {
        return 500;
    } else if (this.toppings == "Extra Sausages") {
        return 600;
    } else if (this.toppings == "Extra Chicken") {
        return 700;
    } else if (this.toppings == "Extra Spinach") {
        return 800;
    } else if (this.toppings == "Extra Onions") {
        return 900;
    } else if (this.toppings == "Extra Mushroom") {
        return 1000;
    } else {
        return 1100;
    }
}    
