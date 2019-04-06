//created names and foods 
let names = ['Greg', 'Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
    'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'
];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon',
    'bread', 'avocado', 'cake', 'fish', 'carrot', 'chicken', 'steak', 'ice-cream'
];




let urls = [
    'url(https://png.pngtree.com/element_pic/16/11/03/cd52d8393a2f9f211e1056c2d6163a3c.jpg)',
    'url(http://pngimg.com/uploads/apple/apple_PNG12455.png)',
    'url(https://icon2.kisspng.com/20180327/izq/kisspng-korean-taco-junk-food-fast-food-vegetarian-cuisine-tacos-5aba84673ebf85.575845881522173031257.jpg)',
    'url(https://png.pngtree.com/element_pic/17/02/23/8a1ce248ab44efc7b37adad0b7b2d933.jpg)',
    'url(http://www.sclance.com/pngs/peanuts-png/peanuts_png_998688.jpg)',
    'url(https://banner2.kisspng.com/20180129/tle/kisspng-watermelon-seed-fruit-vegetable-watermelon-5a6eaadc992509.7018593115172021406273.jpg)',
    'url(https://banner2.kisspng.com/20180206/wrw/kisspng-bakery-baguette-white-bread-baking-bread-png-image-5a794d2cdf62f9.756529391517899052915.jpg)',
    'url(https://c7.uihere.com/files/381/546/423/avocado-guacamole-euclidean-vector-fruit-avocado.jpg)',
    'url(https://banner2.kisspng.com/20171127/0f3/birthday-cake-png-clip-art-image-5a1c2f51907c66.2617623015117965615918.jpg)',
    'url(http://pngimg.com/uploads/fish/fish_PNG25137.png)',
    'url(https://www.culturedfoodlife.com/wp-content/uploads/2017/04/Carrot.png)',
    'url(http://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14109.png)',
    'url(https://png.pngtree.com/element_pic/00/16/07/0957805b9b6c3de.jpg)',
    'url(http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1bd.png)'
];


class Customer {
    constructor(name, food, cash) {
        this.name = name;
        this.food = food;
        this.cash = cash;
    }
}




const game = {

    client: [],

    cash: 50,

    randomFood: [],

    patience: 7,

    timer: 0,

    gameOver:false,

    round:10,

    // for game play -- kitchen sends out 4 random items
    getRandomFood: function () {

        // foodCopy = foods; 
        let foodCopy = Array.from(foods); //shallow copy 

        for (let i = 0; i < 4; i++) {

            let r = Math.floor(Math.random() * (foodCopy.length));
            // SPLICE FOOD COPY 
            this.randomFood.push(foodCopy[r]);
            foodCopy.splice(r, 1);
        }
    },
    //creacte 14 customers with 4 items of food each
    createClient: function () {

        for (let i = 0; i < names.length; i++) {
            this.getRandomFood();
            this.client.push(new Customer(names[i], this.randomFood, 50));
            this.randomFood = [];
        }
    },


    //starting the time, to keep track of timer when game starts
    startGame() {
        this.intervalId = setInterval(() => {
            this.timer++;
            this.roundTimer();
            for(let i = 0; i < urls.length; i++){
                $cards = $('.card').get(i);
                $($cards).css('background-image', urls[i]);
                // $($cards).attr('class', data.)
            } 
        }, 1000)
    },

    roundTimer(){
        $round = this.round-=1;
        console.log($round);    
        $('.timer').text($round);
        },

    //The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.	
    shuffleImages(urls) {

        var currentIndex = urls.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = urls[currentIndex];
            urls[currentIndex] = urls[randomIndex];
            urls[randomIndex] = temporaryValue;
        }
    },


    clearTimeout() {
        clearInterval(this.intervalId);
    },

    insertNameOrder() {
        // for(let i=0; i < )
    }

}

    game.createClient();


// $('form').on('click', (e)=>{
// 	e.preventDefault();
// 	const inputValue = $('#players').val();
// 	// game.startGame();
// });

$('.container').on('click', (e) => {
    console.log($(e.target).css('background-image'));
 if($(e.target).attr('class') === 'card btn'){
    	game.startGame();
    }
});





//add class to current square when you give it url


// const data = {

// names:['bill', 'jack'],

// foods:[{
//     item:'Pizza',
//     img:'url(1)'
// },
//     {
//     item:'Bread',
//     img:'url(2)'

// }]

// }


//foodsItem:[14item];
//clients[name, 4 foodItems]
//urls[14]


// loop thgrough foods array;
// isert data into divs and give them class of foods item



































