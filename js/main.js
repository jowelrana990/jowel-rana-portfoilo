$(document).ready(function(){
	$(window).scroll(function(){
		var x=$(window).scrollTop();
		if(x>800){
			$('#scrollicon').fadeIn();
		}
		else{
			$('#scrollicon').fadeOut();
		}
	});
				
	$('#scrollicon').click(function(){
		$('html').animate({scrollTop:0},1500);
	});
	
	$(window).scroll(function(){
		$('.my-skill').location.reload();
	});
	
	
});