requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyGrpDelInfoByPersonalC','leftMenuc'],function(policyGrpDelInfoByPersonalc,leftMenuc){
		leftMenuc.init();
		policyGrpDelInfoByPersonalc.init();
	})
})