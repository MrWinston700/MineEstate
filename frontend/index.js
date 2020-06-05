class User {
    constructor(username, houses_own, houses_sold) {
        this.username = username;
        this.houses_own = houses_own;
        this.houses_sold = houses_sold
    }
};

class House {
    constructor(price, description, size, style, neighborhood) {
        this.price = price;
        this.description = description;
        this.size = size;
        this.style = style;
        this.neighborhood = neighborhood
    }
};
document.addEventListener("DOMContentLoaded", function() { 
    
    
    document.addEventListener("submit", function(e){
        
        e.preventDefault();
        const price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;
        const size = document.querySelector("#size").value;
        const style = document.querySelector("#style").value;
        const neighborhood = document.querySelector("#neighborhood").value;

        console.log(price);
        console.log(description);

        
    
    })

})


