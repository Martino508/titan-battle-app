const headsButton = document.querySelector('#headsButton')
const tailsButton = document.querySelector('#tailsButton')
const playButton = document.querySelector('#playButton')

//Selection Buttons

const userTitan = document.querySelectorAll('.user')

headsButton.addEventListener('click', function (){
   userChoiceSet('heads')
   buttonSelectStyle('heads')
})

tailsButton.addEventListener('click', function (){
   userChoiceSet('tails')
   buttonSelectStyle('tails')
})

playButton.addEventListener('click', function (){

   setTimeout(coinFlip, 1000, userChoice)
})


//Matching userInput to true or false
let userChoice = null
function userChoiceSet(input) {
   if (input === 'heads') {
      userChoice = input
      console.log(input)
      return userChoice
   } else if (input == 'tails') {
      userChoice = input
      console.log(input)
      return userChoice
   }
}

//Coin Flip function

let win
function coinFlip (userChoice) {
   let result = Math.random() * 1 >= 0.5 ? 'heads' : 'tails'
   if (result === userChoice) {
      console.log(`The coin flip was: ${result} \nYour choice: ${userChoice} \nResult: Win`)
      coinImg(result)
      win = true
   } else if(result !== userChoice && (userChoice == 'heads' || userChoice == 'tails')) {
      console.log(`The coin flip was: ${result} \nYour choice: ${userChoice} \nResult: Lose`)
      coinImg(result)
   } else if (userChoice == null) {
      console.log('Please press the Heads or Tails button')
   }

}

function coinImg (result) {
   if (result === 'heads') {
      document.querySelector('#coinImg').src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6036eb0-c6eb-48d7-94cf-598214e40994/d8tb1zf-07e344bd-0276-4f67-b28e-686be20d3f30.png/v1/fill/w_1024,h_1211/military_police_aot_crest_by_jackspade2012_d8tb1zf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMSIsInBhdGgiOiJcL2ZcL2Q2MDM2ZWIwLWM2ZWItNDhkNy05NGNmLTU5ODIxNGU0MDk5NFwvZDh0YjF6Zi0wN2UzNDRiZC0wMjc2LTRmNjctYjI4ZS02ODZiZTIwZDNmMzAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q4fNjdWa1_5WCf06XpT0E8PKkxGBENTmS5PVh-q6dhA'
   } else if(result === 'tails') {
      document.querySelector('#coinImg').src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/15052ba1-2999-4e0c-9d2c-f70c04d02703/dccywo5-6d4ce34a-74a2-4cc1-b36c-b5f12c9365d4.png/v1/fill/w_1024,h_1177,q_80,strp/attack_on_titan___scouting_legion_emblem_by_metayoutou_dccywo5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NyIsInBhdGgiOiJcL2ZcLzE1MDUyYmExLTI5OTktNGUwYy05ZDJjLWY3MGMwNGQwMjcwM1wvZGNjeXdvNS02ZDRjZTM0YS03NGEyLTRjYzEtYjM2Yy1iNWYxMmM5MzY1ZDQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.431gIaITsclGwJUN_-OwHhTjdMAkr0_vAcLN72nsYjU'
   }
}

function buttonSelectStyle(buttonId) {
   if (buttonId === 'heads') {
      headsButton.classList.add('bg-sky-700');
      headsButton.classList.remove('bg-gray-500');
      tailsButton.classList.add('bg-gray-500');
      tailsButton.classList.remove('bg-sky-700');
   } else if (buttonId === 'tails') {
      tailsButton.classList.add('bg-sky-700');
      tailsButton.classList.remove('bg-gray-500');
      headsButton.classList.add('bg-gray-500');
      headsButton.classList.remove('bg-sky-700');
   }
}

// CRUD REQUESTS

// user select
Array.from(userTitan).forEach((el)=>{
   el.addEventListener('click', userCharacter)
})

async function userCharacter(){
   const userSelect = this.parentNode.dataset.id
   console.log(userSelect)
   try{
      const response = await fetch('/userCharacter', {
         method: 'put',
         headers: {'Content-type': 'application/json'},
         body: JSON.stringify({
            'titanID': userSelect
         })
      })
      const data = await response.json()
      console.log(data)
      // location.reload()
   }catch(err){
      console.log(err)
   }
}
