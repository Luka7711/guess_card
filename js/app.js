


//created names and foods 

let names = ['Greg','Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon', 
'bread', 'avacado', 'cake', 'fish', 'carrot', 'chicken', 'meat', 'ice-cream'];




class Customer {
	constructor(name, food) {
		this.name = name;
		this.foods = [];
	}
	addFood(food) {
		// push food into this foods array
	}
}




const game = {

	client:[],
	
	cash:50,

	randomFood:[],

	// for game play -- kitchen sends out random item
	getRandomFood: function() {
		// for(let i = 0; i < foods.length; i)
		// this.randomFood = ["meat", "chicken", "ice-cream"];
		for(let i=0; i < 4; i++){
		let r = Math.floor(Math.random()*(13-1))+1;
		this.randomFood.push(foods[r]);
		// get a random string from the foods array
		// return it
	 }
	},

	// createClient: function(){
	// 	this.getRandomFood()
	// 	for(let i=0; i < names.length; i++){
	// 		this.client.push(new Customer(names[i], this.randomFood));
	// 	}
	// }

	createClients() {
		// method in game object:
		/// for each name
			// create client new Client
			// create a "shallow" copy of food array -- check out Array.from() or Array.slice()
			// 4 times 
				// get length of copy of array
				// get rand index into that array
				// splice out that item -- remove it from the array
				// client.addFood(what you spliced out)

	}
}


game.getRandomFood();









// const customers = [

// {name: 'Greg',
//  food:['sushi', 'burger', 'fish', 'carrot']},

// {name: 'Bill',
//  food:['apple', 'pizza', 'bread', 'soda']},


// {name: 'Anill',
//  food:['soda', 'bread', 'avocado', 'meat']},


// {name: 'Porter',
//  food:['peanuts', 'apple', 'burger', 'ice-cream']},


// {name: 'Thiago',
//  food:['taco', 'pizza', 'watermelon', 'soda']},


// {name: 'Lana',
//  food:['avocado', 'burger', 'ice-cream', 'bread']},


// {name: 'Wes',
//  food:['burger', 'watermelon', 'fish', 'carrot']},



// {name: 'Porter',
//  food:['watermelon', 'chicken', 'ice-cream', 'cake']},



// {name: 'Porter',
//  food:['fish', 'taco', 'pizza', 'soda']},



// {name: 'Justin',
//  food:['peanuts', 'meat', 'cake', 'burger']},

// ]

//list of food u have to guess

//1. ice cream
//2. pizza
//3. taco
//4. burger
//5. apple
//6. peanuts
//7. watermelon
//8. bread
//9. avacado
//10. cake
//11. fish
//12. carrot
//13. chicken
//14. meat





// class Clients{
// 	constructor(name, cash, food){
// 		this.name = name;
// 		this.cash = cash;
// 		this.food = food;
// 	}
// 	orderFood(){
// 		for(let i=0; i<this.food.length; i++){
// 		console.log(`Hey i want some ${food[i]}`);
// 	}
//   }
// }
