define(['jquery'] ,function($){
	var rhBaseQuery ={
			url:{
					getUrlParam:function(name) {
						var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
						var r = window.location.search.substr(1).match(reg);
						if (r !== null) {
							return decodeURI(r[2]);
						}
						return null;
					}
				},
			input:{
					setViewData: function (){
				        $("span[data-rule='valueView']").each(function(){
				            var objName=$(this).attr("forName");
				            var html=$(":input[name='"+objName+"']").val();
				            $(this).html(html);
				        });
				    }
				}
	}
	return rhBaseQuery;
})