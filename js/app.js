


//created names and foods 

let names = ['Greg','Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon', 
'bread', 'avocado', 'cake', 'fish', 'carrot', 'chicken', 'meat', 'ice-cream'];



class Customer {
	constructor(name, food, cash) {
		this.name = name;
		this.food = food;
		this.cash = cash;
		}
	// addFood(food) {
	// 	// push food into this foods array
	// }
}




const game = {

	client:[],
	
	cash:50,

	randomFood:[],

	patience:7, 

	timer: null,


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
			this.client.push(new Customer(names[i], this.randomFood, 50));
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

	 },
	//starting the time, to keep track of timer when game starts
	startGame(){
		this.intervalId = setInterval(()=>{
			this.timer++;
			console.log(`timer runs ${this.timer}`);
		}, 2000)
	}
}

game.createClient();


//start button clicked

//







































































