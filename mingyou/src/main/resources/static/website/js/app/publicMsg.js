requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['leftMenuc'],function(leftMenuc){
		leftMenuc.init();
	});
})