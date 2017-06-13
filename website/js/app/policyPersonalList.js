requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyPersonalListC','leftMenuc'],function(policyPersonalListc,leftMenuc){
		leftMenuc.init();
		policyPersonalListc.init();
		
	});
})