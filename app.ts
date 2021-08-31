let message: string = "Help me"
console.log(message);

let episode: number = 4
console.log("Episodio é " + 4)
episode = episode + 1
console.log("proximo Episodio é " + episode)

let favorite: string
favorite = 'BB-8'
console.log("Meu droide favorito é " + favorite)


let MF = function(parsecs: number): boolean{
    return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} passa a MF em segundos? ${MF(distance) ? 'SIM': 'NÃO'} ` )


let call = (name: string) => console.log(`Do you copy, ${name}`)
call('R2')


function inc (speed: number, inc: number = 1): number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)
console.log("Git deu certo")