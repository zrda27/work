requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyGrpByPersonalListC','leftMenuc'],function(policyGrpByPersonalListc,leftMenuc){
		leftMenuc.init();
		policyGrpByPersonalListc.init();
	});
})