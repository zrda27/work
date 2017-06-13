requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['policyGrpByCompanyC','jHeadBar','leftMenuc'],function(policyGrpByCompanyc,jHeadBar,leftMenuc){
		policyGrpByCompanyc.init();
		jHeadBar.init();
		leftMenuc.init();
	});
})