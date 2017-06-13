requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['indexC'],function(indexc){
		indexc.init();
	});
})