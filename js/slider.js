$(function(){
				
	var circlelist = $(".banner_list>ol>li");//获取小圆点集合
	
	var photolist = $(".banner_photo>img");//获取图片集合
	
	var circleTag = 0;
	
	var autoTag = 0;
		
	circlelist.each(function(i){
		$(this).mouseover(function(){
			circlelist.eq(i).addClass("active");
			
			circlelist.not(circlelist.eq(i)).removeClass("active");
			
			photolist.eq(i).stop(false,true).fadeIn(500);
			
			photolist.not(photolist.eq(i)).stop(false,true).fadeOut(500);
			
			circleTag = i;
			
		})
	})
	
	
	var time = setInterval(action,3000);
	
	function action(){
		circlelist.eq(autoTag).trigger("mouseover");
		
		autoTag++;
		
		if(autoTag>photolist.length-1){
			
			autoTag=0;
		}
	}
	
})
