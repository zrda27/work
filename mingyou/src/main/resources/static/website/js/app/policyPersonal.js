requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyPersonalC','jHeadBar','leftMenuc'],function(policyPersonalc,jHeadBar,leftMenuc){
		policyPersonalc.init();
		jHeadBar.init();
		leftMenuc.init();
	});
})