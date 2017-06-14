requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['jHeadBar'],function(jHeadBar){
		jHeadBar.init();
	});
})