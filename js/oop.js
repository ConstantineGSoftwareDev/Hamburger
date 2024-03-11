const output = document.getElementById('output');


// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function Hamburger(name,bun, vegetables, cheese, protein,sauces,garnishes,stackSize)
 {
    this.name = name;
    this.bun = bun;
    this.vegetables = vegetables;
    this.cheese = cheese
    this.garnishes = garnishes;
    this.protein = protein;
    this.sauces = sauces;
    this.stackSize = stackSize;
    this.describe = function() {
        var description = document.createElement("div");

        var mainTitle = document.createElement("h1");
        mainTitle.textContent = this.name;

        var mainContent = document.createElement("div");
        var contentText = `With a Marvelous ${this.bun} Bun, `;
        
        // Adding vegetables
       
        
        // Adding cheese
        contentText += `Topped with the finest ${this.cheese} Cheese, `;
        
        // Adding protein

        contentText += `a stunning ${this.stackSize} stacked ${this.protein}, `;
        
        contentText += "Fresh "+ this.vegetables.join(", ") + ", ";
        // Adding sauces
        contentText += `served with `;
        contentText += this.sauces.join(", ") + "";
        
        // Adding garnishes
        contentText += `, finally garnished with `;
        for (var i = 0; i < this.garnishes.length; i++) {
            if (i === this.garnishes.length - 1) {
                contentText += "and " + this.garnishes[i] + ".";
            } else {
                contentText += this.garnishes[i] + ", ";
            }
        }

        mainContent.textContent = contentText;
        description.appendChild(mainTitle);
        description.appendChild(mainContent);

        return description;
    };
  }

  var MyBurger = new Hamburger("The Mega Burger","Brioche",["Onions","Lettuce","Hot Peppers"],"American Chedder","Wagyu Beef Patty",["Ketchup","Mustard", "Mayo"],["Fresh Garlic","Truffle Oil" ], "Double");

  output.appendChild(MyBurger.describe())  ;

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS