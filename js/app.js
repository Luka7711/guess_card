//created names and foods 
let names = ['Greg', 'Bill', 'Anil', 'Porter', 'Thiago', 'Lana', 'Wes',
    'Justin', 'Tania', 'Zack', 'Clayton', 'Connaught', 'Reuben', 'Jacob'
];

let foods = ['pizza', 'taco', 'burger', 'fish', 'fries', 'watermelon',
    'bread', 'coffee', 'cake', 'sushi', 'beer', 'chicken', 'steak', 'ice-cream'
];




const urls = [
    'url(./images/pizza.jpg)',
    'url(./images/taco.jpg)',
    'url(./images/burger.jpg)',
    'url(./images/fish.jpg)',
    'url(./images/fries.jpg)',
    'url(./images/watermelon.jpg)',
    'url(./images/bread.png)',
    'url(./images/coffee.png)',
    'url(./images/cake.png)',
    'url(./images/sushi.png)',
    'url(./images/beer.png)',
    'url(./images/chicken.jpg)',
    'url(./images/steak.jpg)',
    'url(./images/ice-cream.png)'
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

    timer: 0,

    gameOver: false,

    round: 15,

    gameOn: false,

    data: [],

    currentClientOrder: [],

    profit: 0,

    served: 0,

    clicked: false,

    nextClicked: false,

    progressValue: 0,


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

            if (this.timer > 10) {
                $('.card:not(:last-child)').not('.card_btn').css({
                    'background-image': 'none',
                    'background-color': 'white'
                });
            }


            //when timer of round reaches 0 game is over
            //if game on turn off the button show cards

            if (this.currentClientOrder.length === 0) {
                this.clearTimeout();
                this.gameOn = false;

                $('.profit').text(this.profit+=this.cash);
                $('.served').text(this.served+=1);
                $('progress').attr('value', this.progressValue+=50);
                $('.next').css('display', 'block');
            }
              if (this.round === 0) {
                this.clearTimeout();
                this.displayGameOver();
                this.timer = 0;
                this.progressValue = 0;
                this.currentClientOrder = [];
                this.gameOn = false;
                this.gameOver = true;
                this.removeNameAndFoodOrders();
                this.removeImagesAndClass();
             
            }
            if (this.nextClicked === true) {
                $('.next').css('display', 'none');
                this.nextClicked = false;
            }

            if (this.gameOver === true) {
                $('.play_again').css('display', 'block');
            }
            // if(this.clicked === true){
            //     $('.play_again').css('display', 'none');
            // }
        
        }, 1000)
    },

    addingImgAndClassToDiv() {
        for (let i = 0; i < urls.length; i++) {
            $cards = $('.card').get(i);
            $($cards).addClass(this.data[i].item);
            $($cards).css({
                'background-image': this.data[i].img,
                'background-color': 'lightblue'
                // 'display': 'none'
            });
        }
    },
    roundTimer() {
        $round = this.round -= 1;

        $('.timer').text(`:${$round}`);
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

    displayClientsInWindow() {
        this.shuffleClients();
        $li = $('<li/>');
        $($li).addClass('client_name');
        $('.orders').append($($li));
        $($li).text(this.client[0].name);

        for (let i = 0; i < this.client[0].food.length; i++) {
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
    },

    restartForNextRound() {
        this.timer = 0;
        this.round = 15;
        $('.client_name').remove();
        $('.timer').text(this.round);
        this.removeImagesAndClass();
        this.displayClientsInWindow();
        this.shuffleImages();
        this.addingImgAndClassToDiv();
        this.startTimer();
    },

    startGame() {
        $('.start').css('display', 'none');
        this.showImagesInDivs();
        this.createClient();
        this.displayClientsInWindow();
        this.dataForClasses();
        this.shuffleImages();
        this.addingImgAndClassToDiv();
    },
    showImagesInDivs() {
        this.gameOn = true;
        this.startTimer();
    },

    removeImagesAndClass() {
        // set class attr to 'card'
        // set css background-images for each card to none
        $('.container div').attr('class', 'card');
        $('.container div:not(:last-child)').css('background-image', 'none');
    },

    displayGameOver() {
        $div = $('<div/>');
        $($div).addClass('game_over');
        $('body').append($div);
        $h1 = $('<h1/>');
        $div.append($h1);
        $($h1).text("Game Over");
        $button = $('<button/>');
        $($button).addClass('play_again');
        $div.append($button);
        $($button).text('Play again');
        $('.game_over').css('display', 'block');
    },

    removeNameAndFoodOrders() {
        $('.client_name').remove();
        $('.checkOut').remove();
    },
    playAgain(){
        $('.profit').text(0);
        $('.served').text(0);
        $('progress').attr('value', this.progressValue);
        this.restartForNextRound();
        this.clicked = true;
         
    },

    animateCook(){
    $('.cook').animate({
        top:'1%'
    }, 200);
    $('.cook').animate({
        top:'5%'
    }, 200);
    }
}





$('body').on('click', (e) => {
    if (game.gameOn !== true) {

        if ($(e.target).attr('class') === 'start') {
            game.startGame();
        }
        if ($(e.target).attr('class') === 'play_again') { 
            $('.game_over').remove();
            game.playAgain();
        }

        if($(e.target).attr('class') === 'next'){
            $('.next').css('display', 'none');
            game.restartForNextRound();
            game.nextClicked = true;
            
        }
                                            
    }  if ($(e.target).attr('class') === 'card burger') {
        game.foodClass = $(e.target).attr('class');
        game.sliceClassLeaveFoodItem();
        game.checkForSameItem();
    }
        if ($(e.target).attr('class') === 'card steak'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card chicken'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card sushi'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card ice-cream'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card cake'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card coffee'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card fish'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card fries'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card watermelon'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card beer'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card bread'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

        if ($(e.target).attr('class') === 'card pizza'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }

          if ($(e.target).attr('class') === 'card taco'){
            game.foodClass = $(e.target).attr('class');
            game.sliceClassLeaveFoodItem();
            game.checkForSameItem();
                        game.animateCook();

        }


});





































