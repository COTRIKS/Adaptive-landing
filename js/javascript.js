// Работа с клиентом на сайте
let imgUp = document.querySelector('.up')
imgUp.onclick = () => {
  if(imgUp.src === 'img/jetpack.svg') {
    imgUp.src = 'img/jetpack-up.svg'
  } else {
    imgUp.src = 'img/jetpack.svg'
  }
}

let burgerOpen = document.querySelector('.menu__open')
let burgerClose = document.querySelector('.burger__close')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')

burgerOpen.addEventListener('click', function() {
  burger.style.transform = 'translateX(0)'
})

burgerClose.addEventListener('click', function() {
  burger.style.transform = 'translateX(100%)'
})

// Практика
const closure = name => {
  return lastName => `${name} ${lastName}`
}

const allNames = closure('Peter')
console.log(allNames('Alex'))

const text1 = `Hello world, it\'s my first string`
const masText = text1.split(' ')
const index = masText.indexOf('my')
masText[index] = 'your'
const text2 = masText.join(' ')
console.log(text2)
// const reverseText = text.split(' ').reverse().join(' ')
// console.log(reverseText)

const people = [
  {name: 'Danya', years: 17},
  {name: 'Sveta', years: 13},
  {name: 'Katya', years: 18},
  {name: 'Vlad', years: 15}
]

let findedPerson1

for (const person of people) {
  if(person.years === 18) {
    findedPerson1 = person
  }
}

console.log(findedPerson1)

const findedPerson2 = people.find(findedPerson2 => findedPerson2.years === 15)
console.log(findedPerson2)

const tt = name => `Hello ${name}`

console.log(tt('Smail'))

const adultsPeople = people.filter(person => person.years >= 16).map(person => `Welcome ${person.name}`.toUpperCase())
console.log(adultsPeople)

// Объекты
let student = {
  name: n => {
    if(typeof n === 'string') {
      return n
    } else {
      return 'Enter your name in letters'
    }
  },
  years: y => {
    if(typeof y === 'number') {
      return y
    } else {
      return 'Enter your years in numbers'
    }
  },
  isProgrammer: p => {
    if(p === true) {
      return `${p} and it's very cool!`
    } else if(p === false && years < 16) {
      return `${p} but all still ahead!`
    } else {
      return `${p} OMG, please, don't show me this option!!!`
    }
  },
  hobbies: (h1, h2, h3) => {
    if(typeof h1 === 'string' && typeof h2 === 'string' && typeof h3 === 'string') {
      return `${h1}, ${h2}, ${h3}`
    } else if(typeof h1 !== 'string') {
      return 'Enter your first hobby in letters '
    } else if(typeof h2 !== 'string') {
      return 'Enter your second hobby in letters '
    } else if(typeof h3 !== 'string') {
      return 'Enter your third hobby in letters '
    } else {
      return 'Enter your years in letters'
    }
  }
}

const nameStudent = student.name('Alex')
const years = student.years(16)
const programmer = student.isProgrammer(true)
const hobbies = student.hobbies('dance', 'pin-pong', 'programming')

const student_info = [nameStudent, years, programmer, hobbies]

setTimeout(() => console.log(student_info.join(`\n`).toUpperCase()), 3500)



setTimeout(function showNumbers (num = 1) {
  console.log(num)
  let timeId = setTimeout(showNumbers, 500, ++num)
  if(num === 6) {
    clearTimeout(timeId)
  }
}, 500)

  const footerText = document.querySelector('.footer__text')

  const addTextStyles = (node, textColor) => {
    node.style.transform = 'scale(1.6)'
    node.style.color = textColor
    node.style.textTransform = 'none'
    node.style.textDecoration = 'underline'
  }

  setTimeout(() => addTextStyles(footerText, 'green'), 3000)