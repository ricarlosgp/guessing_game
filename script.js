alert(`Olá, me chamo ricarlosgp@gmail.com e sou estudante de desenvolvimento web front-end. Nesse script você vai ter que adivinhar o número que estou pensando entre 0 a 10.
Boa sote!`)

let player = prompt("Digite seu nome para jogar.")

let result = prompt("Advinhe o número que estou pensando de 0 a 10.")
  const randomNumber = Math.round(Math.random() * 10)
  
  let xAttempts = 1
  
  while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente:")
    xAttempts++
  }  

alert(`Parabéns ` +player+`! Pensei justamente no número ${randomNumber} e você advinhou em ${xAttempts} tentativas.`)



