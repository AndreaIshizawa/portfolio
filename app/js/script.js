

var animabar = document.querySelectorAll('[data-bar]')
var animacircle = document.querySelectorAll('[data-circle]')

function criarbarra(data, id){

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
		// Text color.
		// Default: same as stroke color (options.color)
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
	bar.animate(data);  // Number from 0.0 to 1.0
}

animabar.forEach(function(e){
	criarbarra((e.dataset.bar/100).toFixed(2), "#" + e.getAttribute("id"))
});	




function criarcirculo(data, id){
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
	bar.animate(data);  // Number from 0.0 to 1.0

}
animacircle.forEach(function(e){
	criarcirculo((e.dataset.circle/100).toFixed(2), "#" + e.getAttribute("id"))
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