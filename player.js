function Player(game){
    this.game = game;
    this.img = new Image();
    this.img.src = "images/supermario.png"

    //physical properties
    this.x = 100;
    this.y = 250;
    this.width = 120;
    this.height = 90;
    this.dy = 0;
    this.gravity = 0.2;
    this.userPull = 0;
    this.pressed = false;
    this.setListeners();
}

Player.prototype.draw = function(){
    this.game.ctx.drawImage(this.img,
                            this.x,
                            this.y,
                            this.width,
                            this.height);
}

Player.prototype.move = function(delta){  
    if (this.pressed){
        this.userPull = 0.04;
    } else {
        this.userPull = 0;
    }
    var g = this.gravity / delta;
    var pull = this.userPull;
    this.dy += g - pull;
    this.y += this.dy * delta; 
}

 Player.prototype.setListeners = function(){
    document.onkeydown = function (e){
        if (e.keyCode === 32) {
            this.userPull = 0.04;
        }
    }.bind(this);
    document.onkeyup = function (e){
        if (e.keyCode === 32) {
            this.userPull = 0;
        }
    }.bind(this);

    $(canvas).on("mousedown", function(){
        this.pressed = true
    }.bind(this));
    $(canvas).on("mouseup", function(){
        this.pressed = false;
    }.bind(this));
} 

