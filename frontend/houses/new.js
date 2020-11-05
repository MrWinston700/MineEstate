const HOUSES_URL = "http://localhost:3000/houses"
document.addEventListener("DOMContentLoaded", function() { 
    
    
    document.addEventListener("submit", function(e){
        
        e.preventDefault();
        const price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;
        const size = document.querySelector("#size").value;
        const style = document.querySelector("#style").value;
        const neighborhood = document.querySelector("#neighborhood").value;
        let login_username = document.querySelector("#login_username").value;
        let login_password = document.querySelector("#login_password").value;
        if (login_username == "" || login_password == "") {
        const signup_username = document.querySelector("#signup_username").value;
        const signup_password = document.querySelector("#signup_password").value;
        }
        console.log(signup_username)
        let current_house = new House(price,description,size,style,neighborhood);
        
        
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              'username': `${login_username}`,
              'password': `${login_password}`,
              'price': `${price}`,
              'description': `${description}`,
              'size': `${size}`,
              'style': `${style}`,
              'neighborhood': `${neighborhood}`
            })
          };
        debugger
          fetch(HOUSES_URL, configObj)
          .then(function(response) {
            return response.json();
          });

        

        
    
    })

})