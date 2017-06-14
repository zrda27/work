define(['jquery','rhBaseQuery'] ,function($,rhBaseQuery){
	var policyGrpInfoc ={
		init:function(){
			var grpContNo = rhBaseQuery.url.getUrlParam("grpContNo");
	        var orgCode = rhBaseQuery.url.getUrlParam("orgCode");
	        var grpName = rhBaseQuery.url.getUrlParam("grpName");

            $.ajax({
                type:"GET",
                asycn:"false",
                //url:"../../Json/group_list_org.json",
                url:"/official-web/api/policy/g/"+grpContNo+"/list",
                data:"orgCode="+orgCode+"&grpName="+encodeURI(encodeURI(grpName)),
                dataType:"json",
                success:function(jsonData){
                    if(jsonData.resCode==0){
                        jsonData = jsonData.resData;
                        $("span[data-rule='valueView']").each(function(){
                            var arrObj=$(this).attr("forName").split(".");
                            var tmpData = jsonData;
                            for (var i = 0; i < arrObj.length; i++) {
                                tmpData=tmpData[arrObj[i]]
                            }
                            $(this).html(tmpData);
                        });
                        //保单下载地址
                        //onclick='require(\"policyPersonalListC\").exportfile(\""+p.policyPdfUrl+"\")'
                        //$('#policyPdfUrl').attr("href",jsonData.grpInfo.grpPolicyPdfUrl);
                        $('#policyPdfUrl').attr('onclick','require("policyGrpInfoC").exportfile("'+jsonData.grpInfo.grpPolicyPdfUrl+'")');
                        
                        var policyList=jsonData.polList;
                        for(var i=0; i<policyList.length; i++){
                            var p=policyList[i];
                            $("#subPolicyList tbody").append(
                                "<tr>"
                                    +"<td>"+p.contNo+"</td>"
                                    +"<td>"+p.insClient.name+"</td>"
                                    +"<td>"+p.insClient.sexDesc+"</td>"
                                    +"<td>"+p.insClient.birthday+"</td>"
                                    +"<td>"+p.insClient.idNo+"</td>"
                                    +"<td><a href='policyPersonalDetail.html?type=G&contNo="+p.contNo+"&grpContNo="+grpContNo+"'>查看</a></td>"
                                +"</tr>"
                            );
                        }
                    }
                }
            });
	       
		},
		exportfile:function(url){
		//	var url ='/official-web/api/policy/policypdf/0000000567641666';
			$.ajax({
				type:'get',
				url:url,
				success:function(data){
					if(data.resCode && data.resCode =='-1'){
						alert("文件不存在");						
					}else{
						window.location.href=url;
					}
					
				},
				error:function(){
					alert("下载失败，请联系管理员");
				}
			})
		}
		
	}
	return policyGrpInfoc;
})