// gsap.registerPlugin()
// const 
// gsap.registerPlugin(ScrollTrigger)

// console.log(gsap)

// gsap.from(".card", {
//     x:200,
//     duration:1,
//     scrollTrigger:'.card'
// })


const selectSubject = document.querySelectorAll(".subject");
const selectQuestionNo = document.querySelector(".question-no");
const selectTimer = document.querySelector(".choose-time");
const selectPlayers = document.querySelectorAll(".players");
const startBtn = document.querySelector(".start-btn");
const gameContainer = document.querySelector(".started-game");
const gameOptions = document.querySelector(".game-options");


document.addEventListener('DOMContentLoaded', () => {

	let subject;
	let timer = 5;
	let questionsNo = 10;
	let players = 1;

	selectSubject.forEach(ev => ev.addEventListener('click', (e) => {
		subject = e.target.id
	}))
	

	// select question number
	selectQuestionNo.addEventListener('change', e => questionsNo = e.target.value)
	
	// choose timer
	selectTimer.addEventListener('change', e => timer = e.target.value)
	
	// SELECT PLAYER
	selectPlayers.forEach(radio => {
		radio.addEventListener('change', (e) => {
			players = e.target.value
		})
	})


	// START GAME
	startBtn.addEventListener('click' , () => {
		gameOptions.style.display = 'none';

		let selectedSubject = quizData[subject];
		
		let header = document.createElement('h2');
		header.classList.add('text-3xl')
		header.innerHTML = selectedSubject.title;
		gameContainer.appendChild(header);


		let div = document.createElement('div')
		selectedSubject.questions.map(sub => {
			let divider = document.createElement('div')
			divider.classList.add('mb-8')
			let header = document.createElement('h4')
			const list = createOptionList(sub.options)

			header.textContent =  sub.text
			gameContainer.appendChild(header)
			gameContainer.appendChild(list)
			gameContainer.appendChild(divider)

		})


		function createOptionList(options){
			let ul = document.createElement('ul')
			
			options.map(op => {
				let li = document.createElement('li')
				li.innerHTML = `<input type='checkbox' /> ${op}`;
				ul.appendChild(li)
			})

			return ul
		}
	})

})



const quizData = {
	html:{
		title:'HTML Quiz',
		questions:[
			{
				id:1,
				text:'What is HTML?',
				options:[
					'Hyper Text Markup Language',
					'test Lang',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
			{
				id:2,
				text:'What is div?',
				options:[
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
			{
				id:3,
				text:'How to add tag?',
				options:[
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
		]
	},
	css:{
		title:'CSS Quiz',
		questions:[
			{
				id:1,
				text:'What is css?',
				options:[
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
			{
				id:2,
				text:'What is div?',
				options:[
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
			{
				id:3,
				text:'What is HTML?',
				options:[
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
					'Hyper Text Markup Language',
				],
				correct_ans:'Hyper Text Markup Language'
			},
		]
	},
}


