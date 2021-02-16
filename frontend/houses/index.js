
class House {
    constructor(price, description, size, style, neighborhood, myHouse, ident) {
        this.price = price;
        this.description = description;
        this.size = size;
        this.style = style;
        this.neighborhood = neighborhood
        this.myHouse = myHouse
        this.ident = ident
    }
};

let instances = []

const HOUSES_URL = "http://localhost:3000/houses"
const USERS_URL = "http://localhost:3000/users"
const SESSIONS_URL = "http://localhost:3000/sessions"
const SESSIONS_LOGOUT_URL = "http://localhost:3000/logout"


document.addEventListener("DOMContentLoaded", function() { 
  
    const signupForm = document.querySelector("#signupForm");
    const signinForm = document.querySelector("#signinForm");
    const uploadForm = document.querySelector("#uploadForm");
    const logoutForm = document.querySelector("#logoutForm");
    const main = document.querySelector("#body");
    
    uploadForm.addEventListener("submit", function(e){
        
        e.preventDefault();
        console.log("it worked!!")
        let price = document.querySelector("#price").value;
        const description = document.querySelector("#description").value;
        const size = document.querySelector("#size").value;
        const style = document.querySelector("#style").value;
        const neighborhood = document.querySelector("#neighborhood").value;
        const pics = document.querySelector("#files").all;
        
        let configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              'price': `${price}`,
              'description': `${description}`,
              'size': `${size}`,
              'style': `${style}`,
              'neighborhood': `${neighborhood}`,
              'pictures': `${pics}`

            })
          };
    
          fetch(HOUSES_URL, configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(json){
            mimicReset(json);
            document.querySelector("#price").value = ""
            document.querySelector("#description").value = ""
            document.querySelector("#size").value = ""
            document.querySelector("#style").value = ""
            document.querySelector("#neighborhood").value = ""

          })

        

        
    
    });

    signinForm.addEventListener("submit", function(e){
      e.preventDefault();
      let login_username = document.querySelector("#login_username").value;
      let login_password = document.querySelector("#login_password").value; 
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          'username': `${login_username}`,
          'password': `${login_password}`,
          

        })
      };

      fetch(SESSIONS_URL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        mimicReset(json)
        document.querySelector("#login_username").value = ""
        document.querySelector("#login_password").value = ""
      })
      
    });

    signupForm.addEventListener("submit", function(e){
      e.preventDefault();
      const signup_username = document.querySelector("#signup_username").value;
      const signup_password = document.querySelector("#signup_password").value;
      const email = document.querySelector("#email").value;
      const country = document.querySelector("#country").value;
      const state = document.querySelector("#state").value;
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          'username': `${signup_username}`,
          'password': `${signup_password}`,
          'email': `${email}`,
          'country': `${country}`,
          'state': `${state}`,
        })
      };

      fetch(USERS_URL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        mimicReset(json);
        
      })
    });

    logoutForm.addEventListener("submit", function(e){
      e.preventDefault();
      let configObj = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
        
      };

      fetch(SESSIONS_LOGOUT_URL, configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        if (json === "good") {
          deleteAllCard();
          alert("You've been Logged out!")
        } else {
          alert("Log out failed?")
        }
      })
    });

    // mimic rendering the page and clearing the fields
    function mimicReset(json){
      document.querySelector("#signup_username").value = ""
      document.querySelector("#signup_password").value = ""
      document.querySelector("#email").value = ""
      document.querySelector("#country").value = ""
      document.querySelector("#state").value = ""
      deleteAllCard()
        instances = []
        json.map(house => {
          let tempHouse  = new House(house.price, house.description, house.size, house.style, house.neighborhood, house.user.session, house.id);
          instances.push(tempHouse);
        })

        instances.map(house => {
          createHouse(house);
        })
    };
  
    // sets up an empty card
    function createHouse(house){
      let card = document.createElement("div");
      let info = document.createElement("div");
      let pictureTab = document.createElement("div");
      let ul = document.createElement("ul");
      let li1 = document.createElement("li");
      let li2 = document.createElement("li");
      let li3 = document.createElement("li");
      let li4 = document.createElement("li");
      let textnode1 = document.createTextNode("PRICE: " + house.price);
      let textnode2 = document.createTextNode("SIZE: " + house.size);
      let textnode3 = document.createTextNode("NEIGHBORHOOD: " + house.neighborhood + "/10");
      let textnode4 = document.createTextNode("DESCRIPTION: " + house.description);
      appendCard(ul,li1,li2,li3,li4,info,card,house, textnode1, textnode2, textnode3, textnode4, pictureTab);
      
    };

    // this function will add the house cards to the dom with all their info
    function appendCard(ul,li1,li2,li3,li4,info,card,house,textnode1,textnode2,textnode3,textnode4,pictureTab){
      li1.appendChild(textnode1);
      li2.appendChild(textnode2);
      li3.appendChild(textnode3);
      li4.appendChild(textnode4);
      ul.appendChild(li1);
      ul.appendChild(li4);
      ul.appendChild(li2);
      ul.appendChild(li3);
      info.appendChild(ul);
      card.appendChild(pictureTab);
      card.appendChild(info);
      card.classList.add("card");
      info.classList.add("info");
      pictureTab.classList.add("pictureTab");
      main.appendChild(card);
      addDeleteButton(house, info);

    }

    // adds delete functionality to the cards
    function addDeleteButton(house, info){
      if (house.myHouse === 1) {
        let delete_button = document.createElement("button");
        let label = document.createTextNode("delete");
        delete_button.setAttribute("house_id", house.ident);
        delete_button.appendChild(label);
        info.appendChild(delete_button);
        delete_button.addEventListener("click", function(){
          console.log(house.ident)
          let configObj = {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
          }
        
          fetch(HOUSES_URL + `/${house.ident}`, configObj);
          delete_button.parentNode.parentNode.remove();
        })
      }
    } 

    function deleteAllCard(){
      main.querySelectorAll('*').forEach(n => n.remove());
    }
      

})


