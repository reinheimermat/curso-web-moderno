const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pega ultima letra da String
console.log(escola.charAt(5))
console.log(escola.charCodeAt(4)) // ?  
console.log(escola.substring(1, 3)) // od
console.log("Escola".concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // Coder
console.log(escola.replace(/\w/g, 'e')) // eeeee
console.log('Ana, Maria, Pedro'.split(',')) // ['Ana']