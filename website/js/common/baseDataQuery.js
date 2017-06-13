define(['jquery'] ,function($){
	var baseDataQuery ={
			initSelect:function(selId,data,defaultVal){
				var html=$("#"+selId).html();
				for(var i=0,size=data.length;i<size;i++){
					var code=data[i].CODE;
					var desc=data[i].CODENAME;
					html+="<option value='";
					
					html+=code;
					html+="' ";
					if(defaultVal==code){
						html+=" selected='selected' ";
					}
					html+=">";
					html+=desc;
					html+="</option>";	
				}
				$("#"+selId).html(html);
			}
	}
	return baseDataQuery;
});