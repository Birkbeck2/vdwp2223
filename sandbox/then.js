const beingNice = true

function sayHello(resolve, reject) {
  if (beingNice) {
    resolve('hello')
  }
}

const beNice = new Promise(sayHello)

beNice
.then( hello => {
  console.log(hello)
  return 'a new string'
})
.then( a_new_string => {
  console.log(a_new_string)
  return 'a longer string'
})
.then( a_longer_string => {
  console.log(a_longer_string)
})
