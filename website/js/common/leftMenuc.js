define(['jquery'] ,function($){
	var leftMenuc={
		init:function(){
			//$("#leftMenus").find("ul").hide();//隐藏子集
			this.goActive();
			this.toggleMenu();
		},
		toggleMenu:function(){
			var that =this;
			$("#leftMenus").on("click",".icons_btn",function(){
				var isOpenUlDom =$(this).parent().next();
				if($(isOpenUlDom).is('ul')){
					that.isOpen(this,isOpenUlDom);//修改图标，显示隐藏子菜单	
				}
			})
		},
		isOpen:function(dom,isOpenUlDom){
			var iconDom =$(dom).find(".iconimg");
			var classStr =$(iconDom).attr("class");
			
			if(classStr.indexOf("openMenuIcon")>0){//打开就关闭
				if(classStr.indexOf("openMenuIconT")>0)
					$(iconDom).removeClass("openMenuIconT").addClass("closeMenuIconT");
				else
					$(iconDom).removeClass("openMenuIconD").addClass("closeMenuIconD");

					$(isOpenUlDom).hide();
			}else{//关闭就打开
				if(classStr.indexOf("closeMenuIconT")>0)
					$(iconDom).removeClass("closeMenuIconT").addClass("openMenuIconT");
				else
					$(iconDom).removeClass("closeMenuIconD").addClass("openMenuIconD");

				$(isOpenUlDom).show();
			}
		},
		goActive:function(){
			//找到所有要打开的Ul
			$("#leftMenus").find(".active").parents("ul").show();
			var parentsUl =$("#leftMenus").find(".active").parents("ul");
			//修改图标为打开
			$(parentsUl).prev(".head_menu_t").find(".iconimg").removeClass("closeMenuIconT").addClass("openMenuIconT");
			$(parentsUl).prev(".head_menu").find(".iconimg").removeClass("closeMenuIconD").addClass("openMenuIconD");
			
		}
	}
	return leftMenuc;
})