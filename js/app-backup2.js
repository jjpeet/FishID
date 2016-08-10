(function (){

/* global angular */
var app = angular.module('fishData', []);

app.controller('FishdataController', function(){
    this.items = fish;
});

var fish = [
    {
        commonName: 'Northern whiting',
        familyName: 'Whiting',
        minSize: "23",
        maxSize: "N/A",
        also: "Sand whiting",
        bagLimit: "N/A",
        image1: 'http://app.fisheries.qld.gov.au/images/northern-whiting.jpg',
    },   
    {
        commonName: 'Amberjack',
        familyName: 'Trevally, queenfish, kingfish and tailor',
        minSize: "50",
        maxSize: "N/A",
        also: "Common amberjack",
        bagLimit: "N/A",
        image1: 'http://app.fisheries.qld.gov.au/images/amberjack.jpg',
    }
];

})();


  

