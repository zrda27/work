requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyGrpInfoC','leftMenuc'],function(policyGrpInfoc,leftMenuc){
		policyGrpInfoc.init();
		leftMenuc.init();
	});
})