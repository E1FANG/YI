$(function(){
	$(".sidebar li").click(function(){
		
		var index =$(this).index();
		
		$(".content").css("display","none").eq(index).css("display","block");
	})

})