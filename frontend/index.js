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

        fetch('http://127.0.0.1:5500/frontend/index.html')
        .then(function(response) {
        return response.json();
        }).then(function(json) {
        console.log(json);
        });

        const price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;

    
    })

console.log(price)
})


