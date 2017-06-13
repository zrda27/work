requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyGrpByPersonalC','jHeadBar','leftMenuc'],function(policyGrpByPersonalc,jHeadBar,leftMenuc){
		policyGrpByPersonalc.init();
		jHeadBar.init();
		leftMenuc.init();
	});
})