


//created names and foods 

let names = ['Greg','Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon', 
'bread', 'avocado', 'cake', 'fish', 'carrot', 'chicken', 'meat', 'ice-cream'];


let images = [],

let urls = [
'url(https://png.pngtree.com/element_pic/16/11/03/cd52d8393a2f9f211e1056c2d6163a3c.jpg)',
'url(http://pngimg.com/uploads/apple/apple_PNG12455.png)', 
'url(https://icon2.kisspng.com/20180327/izq/kisspng-korean-taco-junk-food-fast-food-vegetarian-cuisine-tacos-5aba84673ebf85.575845881522173031257.jpg)',
'url(https://png.pngtree.com/element_pic/17/02/23/8a1ce248ab44efc7b37adad0b7b2d933.jpg)',
'url(http://www.sclance.com/pngs/peanuts-png/peanuts_png_998688.jpg)',
'url(https://banner2.kisspng.com/20180129/tle/kisspng-watermelon-seed-fruit-vegetable-watermelon-5a6eaadc992509.7018593115172021406273.jpg)',
'url(https://banner2.kisspng.com/20180206/wrw/kisspng-bakery-baguette-white-bread-baking-bread-png-image-5a794d2cdf62f9.756529391517899052915.jpg)',
'url()'
 ]


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


	//starting the time, to keep track of timer when game starts
	startGame(){
		this.intervalId = setInterval(()=>{
			this.timer++;
			console.log(`timer runs ${this.timer}`);
		}, 2000)
	},

	createDivCards(){
		for(let i=0; i < foods.length; i++){
			let $card = $('.card').get()
		}
	}
}

game.createClient();


// $('form').on('click', (e)=>{
// 	e.preventDefault();
// 	const inputValue = $('#players').val();
// 	// game.startGame();
// });

$('.container').on('click', (e)=> {

	let $card1 = $('.card').get(0);
	
	if($(e.target).attr('class') === 'card 1'){
		
		$($card1).css('background-image', 'url(https://banner2.kisspng.com/20171127/382/pineapple-png-vector-clipart-image-5a1c46718ae5b2.5079999715118024815689.jpg)');
	}
});
















































