angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state){
	var myEl = angular.element(document.querySelectorAll( '.login-form'));
	myEl.attr('class','login-form ng-show');
	var mycl = angular.element(document.querySelectorAll( '.txt-login'));
	mycl.attr('class','txt-login active');
	var mycl = angular.element(document.querySelectorAll( '.txt-regi'));
	mycl.attr('class','txt-regi deactive');

	var my = angular.element(document.querySelectorAll( '.regi-form'));
	my.attr('class','regi-form ng-hide');
	$scope.login = function()
	{
		var myEl = angular.element(document.querySelectorAll( '.login-form'));
		myEl.attr('class','login-form ng-show');
		var my = angular.element(document.querySelectorAll( '.regi-form'));
		my.attr('class','regi-form ng-hide');
        console.log(my.attr('class'));

        var mycl = angular.element(document.querySelectorAll( '.txt-login'));
		mycl.attr('class','txt-login active');
		var mycl = angular.element(document.querySelectorAll( '.txt-regi'));
		mycl.attr('class','txt-regi deactive');
		
	}
	$scope.regi = function()
	{
		var myEl = angular.element(document.querySelectorAll( '.login-form'));
		myEl.attr('class','login-form ng-hide');
		var my = angular.element(document.querySelectorAll( '.regi-form'));
		my.attr('class','regi-form ng-show');
        console.log(my.attr('class'));

         var mycl = angular.element(document.querySelectorAll( '.txt-login'));
		mycl.attr('class','txt-login deactive');
		var mycl = angular.element(document.querySelectorAll( '.txt-regi'));
		mycl.attr('class','txt-regi active');
	}

	$scope.go =function()
	{
		$state.go('cashgame');
	}
})
.controller('CashCtrl', function($scope,$state){
	$scope.back = function ()
	{	
		$state.go('login');
	}
	$scope.pointrummy = function ()
	{	
		$state.go('pointrummy');
	}
	$scope.poolrummy = function ()
	{	
		$state.go('poolrummy');
	}
	$scope.dealrummy = function ()
	{	
		$state.go('dealrummy');
	}
})
.controller('MainCtrl', function($scope,$state){
	$scope.back = function ()
	{	
		$state.go('login');
	}
	$scope.pointrummy = function ()
	{	
		$state.go('pointrummy');
	}
	$scope.poolrummy = function ()
	{	
		$state.go('poolrummy');
	}
	$scope.dealrummy = function ()
	{	
		$state.go('dealrummy');
	}
})
.controller('PointrummyCtrl', function($scope,$state){
	$scope.volume=0;
	$scope.back = function ()
	{
		$state.go('cashgame');
	}
})
.controller('PoolrummyCtrl', function($scope,$state){
	$scope.volume=0;
	$scope.back = function ()
	{
		$state.go('cashgame');
	}
})
.controller('DealrummyCtrl', function($scope,$state){
	$scope.volume=0;
	
	$scope.back = function ()
	{
		$state.go('cashgame');
	}
});