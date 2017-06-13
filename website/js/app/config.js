define([],function(){
	return{
		baseUrl:'../js',
		paths:{
			'jquery':'lib/jquery-1.7.2.min',
			'slider':"lib/slider",
			'rhBaseQuery':"common/rhBaseQuery",
			'baseData':"common/baseData",
			'baseDataQuery':"common/baseDataQuery",
			'sSelect':"common/jquery.select-1.3.6",
			'jHeadBar':"common/jQuery-head-bar",
			'leftMenuc':'common/leftMenuc',
			'msgEven':'common/msgEven',
			
			'index':'app/index',
			'policyPersonal':'app/policyPersonal',
			'policyGrpByCompany':'app/policyGrpByCompany',
			'policyPersonalList':'app/policyPersonalList',
			'policyGrpByPersonalList':'app/policyGrpByPersonalList',
			'policyPersonalDetail':'app/policyPersonalDetail',
			'policyGrpInfo':'app/policyGrpInfo',
			
			'indexC':'appChannel/indexc',
			'policyPersonalC':'appChannel/policyPersonalc',
			'policyGrpByCompanyC':'appChannel/policyGrpByCompanyc',
			'policyPersonalListC':'appChannel/policyPersonalListc',
			'policyGrpByPersonalListC':'appChannel/policyGrpByPersonalListc',
			'policyPersonalDetailC':'appChannel/policyPersonalDetailc',
			'policyGrpInfoC':'appChannel/policyGrpInfoc',
			'policyGrpByPersonalC':'appChannel/policyGrpByPersonalc',
			'policyGrpDelInfoByPersonalC':'appChannel/policyGrpDelInfoByPersonalc'
		},
		shim: {
				"jquery": {
					"exports": "$"
				},
				"sSelect":{
					"deps": ['jquery']
				}
		}
	}
});


// requirejs.config({
// 	baseUrl:'../js',
// 	paths:{
// 		jquery:'lib/jquery',
// 		index:'app/index'
// 	}
// });
// requirejs(['jquery'],function($){
// 	alert("a");
// })
