function User(){
    this.name="",
    this.life= 100;
    this.giveLife= function giveLife(targetPlayer){
        targetPlayer.life +=1;
        console.log(this.name +"give life to "+targetPlayer.name)
    }
}
var naveen = new User();
var cooper = new User();
naveen.name="naveen";
cooper.name="cooper";
naveen.giveLife(cooper)
console.log("naveen: "+ naveen.life)
console.log("cooper: "+ cooper.life)

//you can add functons to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -=3;
        console.log(this.name +"uppercut life to "+targetPlayer.name)
}
cooper.uppercut(naveen);
console.log("naveen: "+ naveen.life)
console.log("cooper: "+ cooper.life)

//you can add properties to users
User.prototype.magic =60
console.log(naveen.magic)
console.log(cooper.magic)