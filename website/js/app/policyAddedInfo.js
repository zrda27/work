requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['jquery','rhBaseQuery'],function($,rhBaseQuery){
	
            var contNo = rhBaseQuery.url.getUrlParam("contNo");
            $.ajax({
                type:"GET",
                async:"true",
                url:"/official-web/api/policy/"+contNo+"/detail",
                //url:"/cmR&H/Json/detJsonData.js",
                dataType:"json",
                success:function(jsonData){
                	var data =jsonData.resData.addRisks;
                    if(data){
                    	var keyData =$("#addedInfoTable").find("[name]");
                    	$(keyData).each(function(idx,item){
                    		$("[name="+item+"]").html(data[item]);
                    	})
                    }
                }
            })
      
	});
})