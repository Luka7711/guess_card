//created names and foods 
let names = ['Greg', 'Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
    'Justin', 'Tanya', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'
];

let foods = ['pizza', 'taco', 'burger', 'apple', 'peanuts', 'watermelon',
    'bread', 'avocado', 'cake', 'fish', 'carrot', 'chicken', 'steak', 'ice-cream'
];




const urls = [

    'url(https://png.pngtree.com/element_pic/16/11/03/cd52d8393a2f9f211e1056c2d6163a3c.jpg)',
    'url(https://icon2.kisspng.com/20180327/izq/kisspng-korean-taco-junk-food-fast-food-vegetarian-cuisine-tacos-5aba84673ebf85.575845881522173031257.jpg)',
    'url(https://png.pngtree.com/element_pic/17/02/23/8a1ce248ab44efc7b37adad0b7b2d933.jpg)',
    'url(http://pngimg.com/uploads/apple/apple_PNG12455.png)',
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


//creating class to get an object of food names and images

class Data {
    constructor(item, img) {
        this.item = item;
        this.img = img;
    }
}

//to get an object of clients with certain choice of orders
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

    gameOver: false,

    round: 15,

    gameOn: false,

    data: [],

    winningPoints:null,

    currentClientOrder:[],

    profit:0,

    served:0,


    //pushing food names & urls to append to divs element(class, backg-img)
    dataForClasses: function () {
        for (let i = 0; i < foods.length; i++) {
            this.data.push(new Data(foods[i], urls[i]));
        }
    },

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
    startTimer() {
        this.intervalId = setInterval(() => {
            this.timer++;
            this.roundTimer();
            // console.log(this.timer);

            if (this.timer === 5) {
                $('.card').css({
                    'background-image': 'none',
                    'background-color': 'white'
                });
            }
            //when timer of round reaches 0 game is over
            if (this.round === 0) {
                alert('game over');
                this.clearTimeout();
                this.gameOn = false;
            }
            //if game on turn off the button show cards
            if(this.gameOn === true){
                $('.hint').off('click');

              if(this.currentClientOrder.length === 0){
                game.clearTimeout();
                $('.profit').text(this.profit+=this.cash);
                $('.served').text(this.served+=1);
            }
            }

          

        }, 1000)
    },
    addingImgAndClassToDiv() {
        for (let i = 0; i < urls.length; i++) {
            $cards = $('.card').get(i);
            $($cards).addClass(this.data[i].item);
            $($cards).css({
                'background-image': this.data[i].img,
                'background-color': 'lightblue',
                'display': 'none'
            });
        }
    },
    roundTimer() {
        $round = this.round -= 1;

        $('.timer').text($round);
    },

    //The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.  
    shuffleImages(data) {

        let currentIndex = this.data.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.data[currentIndex];
            this.data[currentIndex] = this.data[randomIndex];
            this.data[randomIndex] = temporaryValue;
        }
    },

    shuffleClients(client) {
        let currentIndex = this.client.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.client[currentIndex];
            this.client[currentIndex] = this.client[randomIndex];
            this.client[randomIndex] = temporaryValue;

        }
    },

    clearTimeout() {
        clearInterval(this.intervalId);
    },

    sliceClassLeaveFoodItem() {
        this.foodItem = this.foodClass.slice(5);

    },

    displayImg() {
        $('.card').css('display', 'block');

    },

    displayClientsInWindow(){
        this.shuffleClients();
        $li = $('<li/>');
        $('.orders').append($($li));
        $($li).text(this.client[0].name);
        
            for(let i=0; i < this.client[0].food.length; i++){
                $li = $('<li/>');
                $($li).addClass('checkOut');
                $('.orders').append($($li));
                $($li).text(this.client[0].food[i]);
                this.currentClientOrder.push(this.client[0].food[i]);
         }

    },

    checkForSameItem() {
    let $li = $('.checkOut');
    for (let i = 0; i < this.currentClientOrder.length; i++) {
        if (this.foodItem === this.currentClientOrder[i]) {
            this.currentClientOrder.splice(i, 1);
        }
        if (this.foodItem === $($li[i]).text()) {
            $($li[i]).remove();
        }

    }
    console.log(this.foodItem);
    console.log(this.currentClientOrder);
}

}






$('body').on('click', (e) => {
    if (game.gameOn !== true) {
        if ($(e.target).attr('class') === 'start') {
            $('.start').css('display', 'none');
            game.createClient();
            game.displayClientsInWindow();
            game.dataForClasses();
            game.shuffleImages();
            game.addingImgAndClassToDiv()
            console.log("Be ready, press 'show cards button'");

        }
        if ($(e.target).attr('class') === 'hint') {
            game.gameOn = true;
            game.displayImg();
            game.startTimer();
        }

                                            
    }  if ($(e.target).attr('class') === 'card burger'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card taco'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card steak'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card chicken'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card fish'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card ice-cream'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card cake'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card avocado'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card apple'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card peanuts'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card watermelon'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card carrot'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card bread'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }

        if ($(e.target).attr('class') === 'card pizza'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
        }
});



   



























































