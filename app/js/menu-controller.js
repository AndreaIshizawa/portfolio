(function(){
	
	const menu = [
		{
			button: document.querySelector('#home'),
			target: document.querySelector('#page-home')
		},
		{
			button: document.querySelector('#cv'),
			target: document.querySelector('#page-cv')
		},
		{
			button: document.querySelector('#work'),
			target: document.querySelector('#page-work')
		}
	]
	
	menu.forEach(function(menu){
		menu.button.addEventListener('click', function() {
			deselectButtonAndHiddenContainer()
			activeSelectButton(menu.button);
			displaySelectContainer(menu.target);

		})
	})

	function activeSelectButton(btn){
		btn.classList.add('--select');
	}

	function displaySelectContainer(content){
		content.classList.remove('hidden');
	}

	function deselectButtonAndHiddenContainer(){
		menu.forEach(function(obj){
			obj.button.classList.remove('--select');
			obj.target.classList.add('hidden');
		})
	}

})();
