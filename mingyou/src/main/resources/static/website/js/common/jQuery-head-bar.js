define(['jquery'] ,function($){
	// 头部动态效果
	var jHeadBar ={
			init:function(){
				this.headNav();
				this.defaultStatus();
			},
			headNav :function(){
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
			}
	}
	return jHeadBar;
})

