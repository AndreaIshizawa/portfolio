
//manu tabs
var menu = {
	btn: document.querySelectorAll('.btn'),
	home: document.querySelector('#home'),
	cv: document.querySelector('#cv'),
	work: document.querySelector('#work'),
	select: document.querySelectorAll('[data-select="select"]')
};

var page = {
	home: document.querySelector('#page-home'),
	cv: document.querySelector('#page-cv'),
	work: document.querySelector('#page-work'),	
};


// animação de skillbars
var animabar = document.querySelectorAll('[data-bar]');
var animacircle = document.querySelectorAll('[data-circle]');

function criarBarra(data, id){

	var bar = new ProgressBar.Line(id, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 1400,
		color: '#38bf92',
		trailColor: '#eee',
		trailWidth: 4,
		svgStyle: {width: '100%', height: '100%'},
		text: {
		style: {
			color: '#999',
			position: 'absolute',
			right: '0',
			top: '30px',
			padding: 0,
			margin: 0,
			transform: null
		},
		autoStyleContainer: false
		},
		from: {color: '#FFEA82'},
		to: {color: '#ED6A5A'},
		step: (state, bar) => {
		bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});

	menu.btn.forEach(function(e){
		e.addEventListener('click', function(){
			if(menu.cv.getAttribute('id') == e.getAttribute('id')){
				bar.animate(data);  // Number from 0.0 to 1.0
				
			} else {
				bar.animate(0.0, {duration: 0});
			}
		});
	});
}

animabar.forEach(function(e){
	criarBarra((e.dataset.bar/100).toFixed(2), "#" + e.getAttribute("id"));
});	



// animação de skillcircle
function criarCirculo(data, id){
	var bar = new ProgressBar.Circle(id, {
			color: '#38bf92',
			// This has to be the same size as the maximum width to
			// prevent clipping
			strokeWidth: 10,
			trailWidth: 10,
			easing: 'easeInOut',
			duration: 1400,
			text: {
			autoStyleContainer: false
		},

		step: (state, bar) => {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		  }
		
	});
	
	menu.btn.forEach(function(e){
		e.addEventListener('click', function(){
			if(menu.cv.getAttribute('id') == e.getAttribute('id')){
				bar.animate(data);  // Number from 0.0 to 1.0
				
			} else {
				bar.animate(0.0, {duration: 0});
			}
		});
	});
}

animacircle.forEach(function(e){
	criarCirculo((e.dataset.circle/100).toFixed(2), "#" + e.getAttribute("id"));
});	

