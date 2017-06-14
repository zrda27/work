define(['jquery'] ,function($){
	var msgEven ={
		init:function(){
			$("button#getVerifyCode").addClass("bg_gd").html("<span id='times'>60</span>s，验证码已发送");
			$("button#getVerifyCode").attr("disabled","disabled");
			this.timesChange();
		},
		timesChange:function(){
			var times =59;
			var mysetTime =setInterval(function(){
				$("#times").text(times);
				
				if(times ==0){
					clearInterval(mysetTime);
					$("button#getVerifyCode").removeAttr("disabled");
					$("button#getVerifyCode").removeClass("bg_gd");
				}
				
				times--;		
				
			},1000)
			
		}
	}
	return msgEven;
})