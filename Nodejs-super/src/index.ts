const name: string = 'NNT'
console.log(name)
const person: { name: string } = { name: 'haha' }
type Hendle = () => Promise<string>
const fullname = 'nguyen ngoc truong'

const hendle: Hendle = () => Promise.resolve(fullname)

hendle().then(console.log)
