define(['jquery','rhBaseQuery'] ,function($,rhBaseQuery){
	var policyGrpDelInfoByPersonalc ={
		init:function(){
			this.getData();
		},
		getData:function(){
			var grpContNo = rhBaseQuery.url.getUrlParam("grpContNo");
            var contNo = rhBaseQuery.url.getUrlParam("contNo");
            $.ajax({
                type:"GET",
                async:"true",
                url:"/official-web/api/policy/g/"+grpContNo+"/detail/"+contNo,
                dataType:"json",
                success:function(jsonData){
                    if(jsonData.resCode==0){
                        $("span[data-rule='valueView']").each(function(){
                            var arrObj=$(this).attr("forName").split(".");
                            var tmpData = jsonData.resData;
                            for (var i = 0; i < arrObj.length; i++) {
                                tmpData=tmpData[arrObj[i]]
                            }
                            $(this).html(tmpData);
                        });
                        var benefData=jsonData.resData.beneficiaries;
                        for (var i = 0; i < benefData.length; i++) {
                            $("#benefData").append(
                                "<tr>"
                                +"<th>"+benefData[i].bnfTypeDesc+"</th>"
                                +"<td>"+benefData[i].name+"</td>"
                                +"<th>"+benefData[i].idTypeDesc+"</th>"
                                +"<td>"+benefData[i].idNo+"</td>"
                                +"<th>"+benefData[i].bnfNo+"</th>"
                                +"<td>"+benefData[i].bnfLot+"</td>"
                                +"</tr>"
                            );
                        }
                        if(jsonData.addRisks && jsonData.addRisks.length>0){
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
	return policyGrpDelInfoByPersonalc;
})