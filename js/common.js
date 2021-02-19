var btn_modal = document.querySelector('.btn-ratting');
var modal = document.querySelector('.modal-wrap');
var close_modal = document.querySelector('.modal-close');
var content_table = document.querySelector('.table-wrap');

btn_modal.onclick = function(e) {
	e.preventDefault();
	modal.classList.toggle('active');
	document.body.classList.toggle('body-overflow');
}

close_modal.onclick = function(e) {
	e.preventDefault();
	modal.classList.remove('active');
	document.body.classList.remove('body-overflow');
}

const data = {
	"rating": [
	{
		"id": "123",
		"img": "img/male.png",
		"name": "Владимир",
		"lastName": "Ларионов",
		"points": "463"
	},
	{
		"id": "9",
		"img": "img/male.png",
		"name": "Владимир",
		"lastName": "Сергеев",
		"points": "521"
	},
	{
		"id": "231",
		"img": "img/male.png",
		"name": "Вениамин",
		"lastName": "Васильев",
		"points": "865"
	},
	{
		"id": "321",
		"img": "img/female.png",
		"name": "Мария",
		"lastName": "Логинова",
		"points": "865"
	},
	{
		"id": "492",
		"img": "img/male.png",
		"name": "Борис",
		"lastName": "Казанцев",
		"points": "784"
	},
	{
		"id": "452",
		"img": "img/female.png",
		"name": "Полина",
		"lastName": "Калинина",
		"points": "225"
	},
	{
		"id": "796",
		"img": "img/male.png",
		"name": "Даниил",
		"lastName": "Воробьёв",
		"points": "642"
	},
	{
		"id": "4",
		"img": "img/male.png",
		"name": "Эрик",
		"lastName": "Аксёнов",
		"points": "150"
	},
	{
		"id": "1155",
		"img": "img/male.png",
		"name": "Иван",
		"lastName": "Иванов",
		"points": "100"
	},
	{
		"id": "12145",
		"img": "img/male.png",
		"name": "Артем",
		"lastName": "Алексеев",
		"points": "1000"
	}
	],
	"friends": [
	{
		"id": "9",
		"img": "img/male.png",
		"name": "Владимир",
		"lastName": "Сергеев",
		"points": ""
	},
	{
		"id": "4",
		"img": "img/male.png",
		"name": "Эрик",
		"lastName": "Аксёнов",
		"points": ""
	},
	{
		"id": "15411",
		"img": "img/female.png",
		"name": "Ирина",
		"lastName": "Чеснокова",
		"points": ""
	},
	{
		"id": "15564",
		"img": "img/female.png",
		"name": "Дарина",
		"lastName": "Боброва",
		"points": ""
	}
	]
}


console.log(data.friends);
/*	
const name_fr = data.friends.map(activity => activity.name)
const lastname_fr = data.friends.map(activity => activity.lastName)
console.log(lastname_fr)


modal.append(name_fr, lastname_fr);


var ul = document.createElement('ul');
for (elem in data.friends){
	var li = document.createElement('li');
	var a = document.createElement('a');
	li.append(name_fr, lastname_fr);
	ul.append(li);
	lis_modal.append(ul);
}

for (let i=0; i < data.friends.length - 1; i++) {
	console.log(data.friends[i])
}

*/

function createTable( caption, arrObj)
{
	let newTable  = document.createElement('table')

	, colNames  = Object.keys(arrObj[0])
	, tableHead = newTable.createTHead()
	, tableBody = newTable.createTBody()
	;

	content_table.append(newTable) 


  //newTable.createCaption().textContent = caption

 // let H_Row = tableHead.insertRow()
 // colNames.forEach(cName => H_Row.insertCell().textContent = cName )

 arrObj.forEach(lineObj =>
 {
 	let newRow = tableBody.insertRow()
 	colNames.forEach(cName =>
 	{
 		if ( cName != 'img')
 			newRow.insertCell().textContent = lineObj[cName]
 		else
 			newRow.insertCell().innerHTML = `<img src="${lineObj[cName]}">`
 	})
 })
}

for (let name in data) createTable( name, data[name] )


	/*route*/
var btn_route = document.querySelector('.btn-route');
var person = document.querySelector('.person');



btn_route.onclick = function(e) {
	e.preventDefault();
	person.classList.add('step-1');
	btn_route.classList.add('btn-step-1');
	var btn_step1 = document.querySelector('.btn-step-1');

	btn_step1.onclick = function(e) {
		e.preventDefault();
		person.classList.add('step-2');
		btn_route.classList.add('btn-step-2');
		btn_route.classList.remove('btn-step-1');
		var btn_step2 = document.querySelector('.btn-step-2');
		btn_step2.onclick = function(e) {
			e.preventDefault();
			person.classList.add('step-3');
			btn_route.classList.add('btn-step-3');
			btn_route.classList.remove('btn-step-2');
			person.classList.remove('step-2');
			var btn_step3 = document.querySelector('.btn-step-3');
			btn_step3.onclick = function(e) {
				e.preventDefault();
				person.classList.add('step-4');
				btn_route.classList.add('btn-step-4');
				btn_route.classList.remove('btn-step-3');
				person.classList.remove('step-3');
				var btn_step4 = document.querySelector('.btn-step-4');
				btn_step4.onclick = function(e) {
					e.preventDefault();
					person.classList.add('step-5');
					btn_route.classList.add('btn-step-5');
					btn_route.classList.remove('btn-step-4');
					person.classList.remove('step-4');
					var btn_step5 = document.querySelector('.btn-step-5');
					btn_step5.onclick = function(e) {
						e.preventDefault();
						person.classList.add('step-6');
						btn_route.classList.add('btn-step-6');
						btn_route.classList.remove('btn-step-5');
						person.classList.remove('step-5');
						var btn_step6 = document.querySelector('.btn-step-6');
						btn_step6.onclick = function(e) {
							e.preventDefault();
							person.classList.add('step-7');
							btn_route.classList.add('btn-step-7');
							btn_route.classList.remove('btn-step-6');
							person.classList.remove('step-6');
							var btn_step7 = document.querySelector('.btn-step-7');
							btn_step7.onclick = function(e) {
								e.preventDefault();
								person.classList.add('step-8');
								btn_route.classList.add('btn-step-8');
								btn_route.classList.remove('btn-step-7');
								person.classList.remove('step-7');
								var btn_step8 = document.querySelector('.btn-step-8');
							}
						}
					}
				}
			}
			
		}
	}
}


/*slider*/
new Splide( '#splide', {
	perPage: 8,
	rewind : false,
	pagination  : false,
} ).mount();