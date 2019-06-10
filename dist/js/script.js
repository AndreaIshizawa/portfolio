//manu tabs
var menu = {
	btn: document.querySelectorAll('.btn'),
	home: document.querySelector('#page-home'),
	cv: document.querySelector('#page-cv'),
	work: document.querySelector('#page-work')
};
menu.cv.style.display = 'none';
menu.work.style.display = 'none';

menu.btn.forEach(function(e){
	e.addEventListener('click', function(){

		console.log(e);
		if(e.getAttribute('id') == "home"){			
			menu.home.style.display = 'flex';
			menu.cv.style.display = 'none';
			menu.work.style.display = 'none';
			e.classList.add('--select');
		}

		else if(e.getAttribute('id') == "cv"){
			menu.home.style.display = 'none';
			menu.cv.style.display = 'flex';
			menu.work.style.display = 'none';
			e.classList.add('--select');
			
		} else {
			menu.home.style.display = 'none';
			menu.cv.style.display = 'none';
			menu.work.style.display = 'flex';
			e.classList.add('--select');
		}

	});
});


//hover
var btn = document.querySelectorAll('[data-hover="hover"]');
(function(){
	btn.forEach(function(event){
		
		event.addEventListener("mouseenter", function(event){
			(this).classList.add('--select');
		});

		event.addEventListener("mouseleave", function(){
			(this).classList.remove('--select');
		});
		
	});
})();


