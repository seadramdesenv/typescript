var message = "Help me";
console.log(message);
var episode = 4;
console.log("Episodio é " + 4);
episode = episode + 1;
console.log("proximo Episodio é " + episode);
var favorite;
favorite = 'BB-8';
console.log("Meu droide favorito é " + favorite);
var MF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " passa a MF em segundos? " + (MF(distance) ? 'SIM' : 'NÃO') + " ");
var call = function (name) { return console.log("Do you copy, " + name); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
console.log("Git deu certo");
