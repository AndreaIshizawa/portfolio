//variaveis estao no arquivo skillbar.js

//select page
(function(){

	page.cv.style.display = 'none';
	page.work.style.display = 'none';

	menu.btn.forEach(function(e){
		e.addEventListener('click', function(){
			if(menu.home.getAttribute('id') == e.getAttribute('id')){
				removeClass();
				displayNone();
				addClass(menu.home);
				displayFlex(page.home);
			} 

			else if(menu.cv.getAttribute('id') == e.getAttribute('id')){
				removeClass();
				displayNone();
				addClass(menu.cv);
				displayFlex(page.cv);
			} 

			else if(menu.work.getAttribute('id') == e.getAttribute('id')){
				removeClass();
				displayNone();
				addClass(menu.work);
				displayFlex(page.work);
			} 
		});
	});

})();

function removeClass(){
	menu.btn.forEach(function(e){
		e.classList.remove('--select');
	});	
}

function addClass(e){
	e.classList.add('--select');
}

function displayFlex(e){
	e.style.display = 'flex';
}

function displayNone(){
	page.home.style.display = 'none';
	page.cv.style.display = 'none';
	page.work.style.display = 'none';
}

