//Draw player and enemy
Object.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player position when reset
Object.prototype.reset = function() {
    player.x = 300;
    player.y = 550;
};

//The enemy
var Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';

//Position and speed of enemy
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 300) + 50);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //reset enemy on offscreen
    if (this.x <= 725){
        this.x += this.speed * dt * .8;
    } else {
        this.x = -102;
    }

    //Reset when player and enemy get too close
    if (player.x >= this.x - 60 && player.x <= this.x + 60){
        if (player.y >= this.y - 60 && player.y <= this.y + 60){            
            //reset and subtract 1 point from score on collision
            function modify_qty() {
                var qty = document.getElementById('qty').value;
                var new_qty = parseInt(qty,10) - 1;

                if (new_qty < 0) {
                    new_qty = 0;
                }

                document.getElementById('qty').value = new_qty;
                return new_qty;
            }
            modify_qty();
            this.reset();
        }
    }
};

//Player image and position on start
var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 300;
    this.y = 550;
};

//Update player position
Player.prototype.update = function(){
    //Move character from one block to the next on keyup
    if (this.move === "right" && this.x < 600){
        this.x += 100;
    } else if (this.move === "left" && this.x > 0){
        this.x -= 100;
    } if (this.move === "up" && this.y > 0){
        this.y -= 83;
    } else if (this.move === "down" && this.y < 550){
        this.y += 83;
    }
    this.move = null;
    
    //Reset and add 1 to score on finish
    if (this.y < 25){
        function modify_qty() {
            var qty = document.getElementById('qty').value;
            var new_qty = parseInt(qty,10) + 1;

            document.getElementById('qty').value = new_qty;

            if (new_qty === 1) {
                document.getElementById('1-1').style.visibility = "visible";
            } else if (new_qty === 2) {
                document.getElementById('1-2').style.visibility = "visible";
            } else if (new_qty === 3) {
                document.getElementById('1-3').style.visibility = "visible";
            } else if (new_qty === 5) {
                document.getElementById('1-4').style.visibility = "visible";
            } else if (new_qty === 7) {
                document.getElementById('1-5').style.visibility = "visible";
            } else if (new_qty === 10) {
                document.getElementById('1-6').style.visibility = "visible";
            } else if (new_qty === 11) {
                document.getElementById('2-1').style.visibility = "visible";
            } else if (new_qty === 12) {
                document.getElementById('2-2').style.visibility = "visible";
            } else if (new_qty === 13) {
                document.getElementById('2-3').style.visibility = "visible";
            } else if (new_qty === 15) {
                document.getElementById('2-4').style.visibility = "visible";
            } else if (new_qty === 17) {
                document.getElementById('2-5').style.visibility = "visible";
            } else if (new_qty === 20) {
                document.getElementById('2-6').style.visibility = "visible";
            } else if (new_qty === 21) {
                document.getElementById('3-1').style.visibility = "visible";
            } else if (new_qty === 22) {
                document.getElementById('3-2').style.visibility = "visible";
            } else if (new_qty === 23) {
                document.getElementById('3-3').style.visibility = "visible";
            } else if (new_qty === 25) {
                document.getElementById('3-4').style.visibility = "visible";
            } else if (new_qty === 27) {
                document.getElementById('3-5').style.visibility = "visible";
            } else if (new_qty === 30) {
                document.getElementById('3-6').style.visibility = "visible";
            } else if (new_qty === 31) {
                document.getElementById('4-1').style.visibility = "visible";
            } else if (new_qty === 32) {
                document.getElementById('4-2').style.visibility = "visible";
            } else if (new_qty === 33) {
                document.getElementById('4-3').style.visibility = "visible";
            } else if (new_qty === 35) {
                document.getElementById('4-4').style.visibility = "visible";
            } else if (new_qty === 37) {
                document.getElementById('4-5').style.visibility = "visible";
            } else if (new_qty === 40) {
                document.getElementById('4-6').style.visibility = "visible";
            } else if (new_qty === 41) {
                document.getElementById('5-1').style.visibility = "visible";
            } else if (new_qty === 42) {
                document.getElementById('5-2').style.visibility = "visible";
            } else if (new_qty === 43) {
                document.getElementById('5-3').style.visibility = "visible";
            } else if (new_qty === 45) {
                document.getElementById('5-4').style.visibility = "visible";
            } else if (new_qty === 47) {
                document.getElementById('5-5').style.visibility = "visible";
            } else if (new_qty === 50) {
                document.getElementById('5-6').style.visibility = "visible";
            } else if (new_qty === 51) {
                document.getElementById('6-1').style.visibility = "visible";
            } else if (new_qty === 52) {
                document.getElementById('6-2').style.visibility = "visible";
            } else if (new_qty === 53) {
                document.getElementById('6-3').style.visibility = "visible";
            } else if (new_qty === 55) {
                document.getElementById('6-4').style.visibility = "visible";
            } else if (new_qty === 57) {
                document.getElementById('6-5').style.visibility = "visible";
            } else if (new_qty === 60) {
                document.getElementById('6-6').style.visibility = "visible";
            }
            return new_qty;
        }
        modify_qty();
        this.reset();
    }
};

//Input handler for player
Player.prototype.handleInput = function(e){
    this.move = e;
};

//Change sprite on click
function char_select1() {
    player.sprite = 'images/char-boy.png';
}
function char_select2() {
    player.sprite = 'images/char-cat-girl.png';
}
function char_select3() {
    player.sprite = 'images/char-horn-girl.png';
}
function char_select4() {
    player.sprite = 'images/char-pink-girl.png';
}
function char_select5() {
    player.sprite = 'images/char-princess-girl.png';
}


//Set player and enemy on board
var allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-102, 60));
    allEnemies.push(new Enemy(-102, 60));
    allEnemies.push(new Enemy(-102, 145));
    allEnemies.push(new Enemy(-102, 145));
    allEnemies.push(new Enemy(-102,310));
    allEnemies.push(new Enemy(-102,310));
    allEnemies.push(new Enemy(-102,390));
    allEnemies.push(new Enemy(-102,390));
}())

var player = new Player();



// listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});