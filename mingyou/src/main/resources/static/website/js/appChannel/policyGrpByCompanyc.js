define(['jquery','msgEven'] ,function($,msgEven){
	var policyGrpByCompanyc ={
		init:function(){
			$("#orgCode").focus();
	        this.event();
		},
		event:function(){
			var grpName;
            var orgCode;
            var mobileNo;
            var grpContNo;
            $("#getVerifyCode").click(function(){
                grpName = $("#grpName").val();
                orgCode = $("#orgCode").val();
                mobileNo = $("#mobileNo").val();
                grpContNo = $("#grpContNo").val();
                $.ajax({
                    type:"POST",
                    async:"fasle",
                    url:"/official-web/api/sms/send",
                    data:"type=G&grpName="+grpName+"&mobileNo="+mobileNo+"&orgCode="+orgCode+"&grpContNo="+grpContNo,
                    dataType:"json",
                    success:function(jsonData){
                        if(jsonData.resCode == 0){
                            $("#getVerifyCode").removeClass("btn_col_blue").addClass("btn_col_green");
                            $("#getVerifyCode").html("验证码已发送");
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
                    data:"type=G&smsCode="+smsCode,
                    dataType:"json",
                    success:function(jsonData){
                        if(jsonData.resCode == 0){
                            window.location.href="policyGrpInfo.html?type=G&grpName="+grpName+"&mobileNo="+mobileNo+"&orgCode="+orgCode+"&grpContNo="+grpContNo;
                        }else{
                            alert("验证码错误！");
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                    }
                });
            });
		}
	}
	return policyGrpByCompanyc;
})