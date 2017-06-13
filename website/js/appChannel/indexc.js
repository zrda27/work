define(['jquery','slider'] ,function($,slider){
	var indexChannel ={
		init:function(){
			this.headNav();
			this.defaultStatus();
			this.bannerAnimation();
			this.evens();
		},
		// 头部动态效果
		headNav:function(){
			var that = this;
			$('.list-li').hover(function(){
				var left = [];
				$('.list-li').each(function(index,el){
					left[index]=parseInt($(this).width()+40);
				});
				var liWid = parseInt($(this).width()+40),index = $(this).index(),allLeft=0;
				if(index==0){
					left[index]=0;
				}else{
					for(var i=0;i<index;i++){
						allLeft+=left[i];
					} 
					if (liWid>67) {
						left[index] =parseInt(allLeft+($(this).width()-28)/2);
					}else{
						left[index] = parseInt(allLeft+67);
					}
				}
				var liLeft = left[$(this).index()];
				$('.list-bar').stop().animate({'left':liLeft},100);
			},function(){
				//鼠标离开后回初始状态
				that.defaultStatus();
			});
		},
		//初始状态
		defaultStatus:function(){
			var that = this;
			var left = [];
			$('.list-li').each(function(index,el){
				left[index]=parseInt($(this).width()+40);
				if($(this).hasClass('cur')){
					var liWid = parseInt($(this).width()+40),index = $(this).index(),allLeft=0;
					if(index==0){
						left[index]=0;
					}else{
						for(var i=0;i<index;i++){
							allLeft+=left[i];
						} 
						if (liWid>67) {
							left[index] =parseInt(allLeft+($(this).width()-28)/2);
						}else{
							left[index] = parseInt(allLeft+67);
						}
					}
					var liLeft = left[$(this).index()];
					$('.list-bar').stop().animate({'left':liLeft},100,function(){$(this).show()});
				}
			});
		},
		bannerAnimation:function(){
			$('#slides').slidesjs({
				height:520,
				preload: true,
				preloadImage: '../image/loading.gif',
				play: {
		          active: true,
		          auto: true,
		          interval: 4000,
		          swap: true
		        },
				hoverPause: true,
				generateNextPrev: false
			});
		},
		evens:function(){
			//新闻中心tab
			var modelNew_li =$("#modelNew li");
			$(modelNew_li).on("click",function(){
				if(!$(this).is(".active")){
					$(modelNew_li).removeClass("active");
					$(this).addClass("active");
				}
			});
		}

	}
	return 	indexChannel;
});