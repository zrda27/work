define(['jquery'] ,function($){
	var policyPersonalListc ={
		init:function(){
			$.ajax({
                type:"GET",
                asycn:"false",
                url:"/official-web/api/policy/list",
                data:"type=P",
                dataType:"json",
                success:function(jsonData){
                    if(jsonData.resCode==0){
                        var policyList=jsonData.resData;
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
                                    +"<td><a href='policyPersonalDetail.html?contNo="+p.contNo+"'>查看</a></td>"
                                    +"<td><a  href='javascript:void(0);'  class='export_btn' onclick='require(\"policyPersonalListC\").exportfile(\""+p.policyPdfUrl+"\")'>下载</a></td>"
                                +"</tr>"
                            );
                        }
                    }else{
                        alert(jsonData.resMsg);
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
	return policyPersonalListc;
})