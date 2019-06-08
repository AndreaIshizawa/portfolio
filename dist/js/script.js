//skill bar
jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.bar')
        .animate({ width: jQuery(this)
        .attr('data-percent') }, 2000);
    });
});


//circle bar
$(".circle-percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round-per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
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