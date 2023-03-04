function Pessoa (first, nick, last) {
    this.first = first;
    this.nick = nick
    this.last = last
}

const first = new Pessoa('Matheus')
const nick = new Pessoa('Teut')
const last = new Pessoa('Reinheimer')

console.log(first.first)