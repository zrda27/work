requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyPersonalDetailC','leftMenuc'],function(policyPersonalDetailc,leftMenuc){
		leftMenuc.init();
		policyPersonalDetailc.init();
	})
})