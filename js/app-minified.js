var app=angular.module("hackalist",[]);app.controller("hackathonEvents",["$http","$scope",function(a,b){a.get("../api/1.0/2014/08.json").success(function(a){b.august14=a}),a.get("../api/1.0/2014/09.json").success(function(a){b.september14=a}),a.get("../api/1.0/2014/10.json").success(function(a){b.october14=a}),a.get("../api/1.0/2014/11.json").success(function(a){b.november14=a}),a.get("../api/1.0/2014/12.json").success(function(a){b.december14=a}),a.get("../api/1.0/2015/01.json").success(function(a){b.january15=a}),a.get("../api/1.0/2015/02.json").success(function(a){b.february15=a}),a.get("../api/1.0/2015/03.json").success(function(a){b.march15=a}),a.get("../api/1.0/2015/04.json").success(function(a){b.april15=a}),a.get("../api/1.0/2015/07.json").success(function(a){b.july15=a})}]);