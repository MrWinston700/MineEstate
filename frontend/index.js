class User {
    constructor(username, houses_own, houses_sold) {
        this.username = username;
        this.houses_own = houses_own;
        this.houses_sold = houses_sold
    }
}

class House {
    constructor(price, description, size, style, neighborhood) {
        this.price = price;
        this.description = description;
        this.size = size;
        this.style = style;
        this.neighborhood = neighborhood
    }
}
