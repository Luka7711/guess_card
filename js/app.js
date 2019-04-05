


//created names and foods 

let names = ['Greg','Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon', 
'bread', 'avacado', 'cake', 'fish', 'carrot', 'chicken', 'meat', 'ice-cream'];



class Customer {
	constructor(name, food) {
		this.name = name;
		this.food = food;
	}
	// addFood(food) {
	// 	// push food into this foods array
	// }
}




const game = {

	client:[],
	
	cash:50,

	randomFood:[],


	// for game play -- kitchen sends out 4 random items
	getRandomFood: function() {

		// "refill" the foodCopy

		// foodCopy = foods; 
		let foodCopy = Array.from(foods); //shallow copy 
		
		for(let i=0; i < 4; i++){

			let r = Math.floor(Math.random()*(foodCopy.length));
			// SPLICE FOOD COPY 
			this.randomFood.push(foodCopy[r]);
			foodCopy.splice(r, 1);
	 	}
	},

	createClient: function(){
		
		for(let i=0; i < names.length; i++){
			this.getRandomFood();
			this.client.push(new Customer(names[i], this.randomFood));
			this.randomFood = [];
		}
	},

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







