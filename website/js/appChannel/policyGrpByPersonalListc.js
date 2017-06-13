define(['jquery','rhBaseQuery'] ,function($,rhBaseQuery){
	var policyGrpByPersonalListc ={
		init:function(){
			this.getData();
		},
		getData:function(){
            var grpContNo = rhBaseQuery.url.getUrlParam("grpContNo");
            var idNo = rhBaseQuery.url.getUrlParam("idNo");
            $.ajax({
                type:"GET",
                asycn:"false",
                url:"/official-web/api/policy/g/"+grpContNo+"/list",
                data:"idType=0&idNo="+idNo,
                dataType:"json",
                success:function(jsonData){
                    if(jsonData.resCode==0){
                        var policyList=jsonData.resData.polList;
                        for(var i=0; i<policyList.length; i++){
                            var p=policyList[i];
                            $("#policyList").append(
                                "<tr>"
                                    +"<td>"+p.contNo+"</td>"
                                    +"<td>"+p.appClient.name+"</td>"
                                    +"<td>"+p.appFlagDesc+"</td>"
                                    +"<td>"+p.riskName+"</td>"
                                    +"<td>"+p.cvaliDate+"</td>"
                                    +"<td>"+p.endDate+"</td>"
                                    +"<td><a href='policyGrpDelInfoByPersonal.html?contNo="+p.contNo+"&grpContNo="+grpContNo+"'>查看</a></td>"
                                +"</tr>"
                            );
                        }
                    }
                }
            });
		}
	}
	return policyGrpByPersonalListc;
});