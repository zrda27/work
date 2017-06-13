define(['jquery','rhBaseQuery'] ,function($,rhBaseQuery){
	var policyPersonalDetailc ={
		init:function(){
			this.getData();
		},
		getData:function(){
            var contNo = rhBaseQuery.url.getUrlParam("contNo");
            var type = rhBaseQuery.url.getUrlParam("type");
            var grpContNo = rhBaseQuery.url.getUrlParam("grpContNo");
            var getUrl = "/official-web/api/policy/"+contNo+"/detail";
            if(type=="G"){
                $('.-appinfo-p').hide();
                $('.-appinfo-g').show();
                getUrl = "/official-web/api/policy/g/"+grpContNo+"/detail/"+contNo;
            }
            $.ajax({
                type:"GET",
                async:"true",
                url:getUrl,
                dataType:"json",
                success:function(jsonData){
                	if(jsonData.resCode>-1){
	                    jsonData = jsonData.resData;
	                    $("span[data-rule='valueView']").each(function(){
	                        var arrObj=$(this).attr("forName").split(".");
	                        var tmpData = jsonData;
	                        for (var i = 0; i < arrObj.length; i++) {
	                            tmpData=tmpData[arrObj[i]]
	                        }
	                        $(this).html(tmpData);
	                    });
	                    var benefData=jsonData.beneficiaries;
	                    for (var i = 0; i < benefData.length; i++) {
	                        $("#benefData").append(
	                            "<tr>"
	                            +"<td>"+benefData[i].bnfTypeDesc+"</td>"
	                            +"<td>"+benefData[i].name+"</td>"
	                            +"<td>"+benefData[i].idTypeDesc+"</td>"
	                            +"<td>"+benefData[i].idNo+"</td>"
	                            +"<td>"+benefData[i].bnfNo+"</td>"
	                            +"<td>"+benefData[i].bnfLot+"</td>"
	                            +"</tr>"
	                        );
	                    }
	                    if(jsonData.addRisks.length>0){
	                        $("#policyAddedInfo").removeClass("btn_col_grey").addClass("btn_col_blue");
	                    }
	                }
                }
            });
            $("#policyAddedInfo").click(function(){
                if($(this).hasClass("btn_col_blue")){
                    window.location.href="policyAddedInfo.html?contNo="+rhBaseQuery.url.getUrlParam("contNo");;
                }

            });
		}
	}
	return policyPersonalDetailc;
})