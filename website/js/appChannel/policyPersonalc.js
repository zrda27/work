define(['jquery','baseDataQuery','sSelect','msgEven'] ,function($,baseDataQuery,sSelect,msgEven){
	var policyPersonalc ={
		init:function(){	
			 $('body,html').animate({'scrollTop':300},1000);
			
	        this.event();
	        this.getSelectData();
	      /*  this.initLeftMenu();*/
		},
		/*initLeftMenu:function(){
			var icon_right ='<span class="iconimg right_arrows_icon"></span>';
			var tempUrl ='<div class="main"><span class="iconimg house_icon"></span>'
				+'<a>首页</a>'+icon_right+'<a>客户服务</a>'+icon_right
				+'<a>保单查询</a>'+icon_right+'<a>团体保单查询</a>'+icon_right;
			var bln =window.location.href.indexOf("type=policyGrpByPersonal")>0 ?true:false;			
			if(bln){
				$(".left_menu").find("li").removeClass("active");
				$("#grpByPsl").addClass("active");
								
				tempUrl	=tempUrl+'<a class="active">按个人信息查询</a></div>';			
				$("#mainTitle").html("按个人信息查询");
				$("#menuUrl").html(tempUrl);
			}else{
				$("#grpByPsl").removeClass("active");
			}
		},*/
		event:function(){
			/*var bln =window.location.href.indexOf("type=policyGrpByPersonal")>0 ?true:false;*/
			
			var datas={};
			$("#getVerifyCode").click(function(){
            	datas.mobileNo = $("#mobileNo").val();
            	datas.idType = $("#idType").val();
            	datas.idNo = $("#idNo").val();
                
            	/*var noString="";*/
            	/*if(bln){
            		datas.grpContNo = $("#contNo").val();
            		noString ="grpContNo="+datas.grpContNo;
            	}else{}*/
            	datas.contNo = $("#contNo").val();
            	var	noString ="contNo="+datas.contNo;
            	
            				
                $.ajax({
                    type:"POST",
                    async:"fasle",
                    url:"/official-web/api/sms/send",
                    data:"type=P&"+noString+"&mobileNo="+datas.mobileNo+"&idType="+datas.idType+"&idNo="+datas.idNo,
                    dataType:"json",
                    success:function(jsonData){
                        if(jsonData.resCode == 0){
                            $("#getVerifyCode").removeClass("btn_col_blue").addClass("btn_col_green");
                            $("#getVerifyCode").html("验证码已发送");
                            //alert("验证码发送成功！");
                            msgEven.init();
                        }else{
                            $("#getVerifyCode").html("重新获取验证码");
                            alert(jsonData.resMsg);
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){

                    }
                });
            });

            $("#querySubmit").click(function(){
                var smsCode = $("#smsCode").val();
                $.ajax({
                    type:"GET",
                    async:"fasle",
                    url:"/official-web/api/sms/validation",
                    data:"type=P&smsCode="+smsCode,
                    dataType:"json",
                    success:function(jsonData){
                        if(jsonData.resCode == 0){
                        	/*var url="";
                        	if(bln)
                        		url="policyGrpByPersonalList.html?grpContNo="+datas.grpContNo+"&mobileNo="+datas.mobileNo+"&idType="+datas.idType+"&idNo="+datas.idNo;
                        	else*/
                        	var	url ="policyPersonalList.html"
                            window.location.href=url;
                        }else{
                            alert("验证码错误！");
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                    }
                });
            });
//            var that =this;
//            $("#idType").on('click',function(){
//            	if($("#idType").find("option").length==0){
//            		$("select").sSelect();
//                	that.getSelectData();
//                	$(this).parent().click()
//            	}
//            	
//            });
		},
		getSelectData:function(){
			$.ajax({
                type:"GET",
                async:"false",
                url:"/official-web/api/static/codes/idtype",
                dataType:"json",
                success:function(jsonData){
                    baseDataQuery.initSelect("idType",jsonData.resData,"0");
                    
                }
            })
		}
	}
	return policyPersonalc;
})