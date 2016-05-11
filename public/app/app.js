var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactCtrl'
        })
        .when('/gallery', {
            templateUrl: 'views/gallery.html',
            controller: 'galleryCtrl'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'productsCtrl'
        })
        .when('/products/clearGlassBalustrade', {
            templateUrl: 'views/products/clearGlassBalustrade.html'
        })
        .when('/products/steelGlassBalustrade', {
            templateUrl: 'views/products/steelGlassBalustrade.html'
        })
        .when('/products/glassChannel', {
            templateUrl: 'views/products/glassChannel.html'
        })
        .when('/products/juliet', {
            templateUrl: 'views/products/juliet.html'
        })
        .when('/products/staircaseHandrails', {
            templateUrl: 'views/products/staircaseHandrails.html'
        })
        .when('/products/balcony', {
            templateUrl: 'views/products/balcony.html'
        })
        .when('/quote', {
            templateUrl: 'views/quote.html',
            controller: 'quoteCtrl'
        })
        .when('/products/prodTemplate',{
            templateUrl: 'views/products/prodTemplate.html',
            controller: 'prodTemplateCtrl'
        }).otherwise({
            redirectTo: '/home'
        });
                       
}]);

app.controller('prodTemplateCtrl', ['$scope', '$http', function ($scope, $http) {
    // $scope.viewedProduct = $scope.$parent.parentValue;  
    // $scope.someData = ""; 
    // $scope.$parent.products["glassInFill"].name;
}]);


app.controller('bodyCtrl', ['$scope','$http', function ($scope, $http) {
    
    $scope.contactNumber = '01706 557856';
    $http.get('model/product.json').success(function(data){
        $scope.products = data;
    });
    
    $scope.parentValue = "No Item yet Clicked";
    $scope.clicked = function(clickedItem) {
        $scope.parentValue = clickedItem;
        console.log(clickedItem);
    };
    
    
}]);



app.controller('contactCtrl', ['$scope', function ($scope) {
    
}]);

app.controller('homeCtrl', ['$scope','$http', function ($scope, $http) {
    
    $http.get('model/product.json').success(function(data){
        $scope.products = data;
    });
    
}]);

app.controller('galleryCtrl', ['$scope','$http', function ($scope, $http) {
    
    $http.get('model/product.json').success(function(data){
        $scope.products = data;
    });
    
}]);

app.controller('productsCtrl', ['$scope', function ($scope) {
    
}]);

app.controller('quoteCtrl', ['$scope','$http', function ($scope, $http) {

}]);

app.controller('questionCtrl', ['$scope','$http', function ($scope, $http) {

}]);


               
    
