/**
 * @author Tommy Walderhaug, June 2015
 */

var model = {
	sights: [
		{
		name	: 'Nidarosdomen',
		location: 'Nidaros Domkirke, Bispegata 11, 7012 Trondheim',
		url		: 'http://www.nidarosdomen.no/en-GB/'
		},{
		name	: 'Norwegian University of Science and Technology',
		location: 'Høgskoleringen 1, 7034 Trondheim',
		url		: 'http://www.ntnu.edu/'
		}

	]
};

var Sight = function(data){
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);	
	this.url = ko.observable(data.url);
};

var ViewModel = function(){
	var self = this;
	
	this.displayItemList = ko.observable(false);
	self.toggleVisibility = function() {
		self.displayItemList(!self.displayItemList());
    };
	this.sightList = ko.observableArray([]);
	
	model.sights.forEach(function(sightItem){
		self.sightList.push(new Sight(sightItem));
	});
	
	this.currentSight = ko.observable(this.sightList()[0]);

	this.setCurrentSight = function(sight) {
		codeAddress(sight.location());
	};
};

ko.bindingHandlers.fadeVisible = {
    init: function(element, valueAccessor) {
        // Initially set the element to be instantly visible/hidden depending on the value
        var value = valueAccessor();
        $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
    },
    update: function(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
};


var map;
var geocoder;
var marker;
function initialize() {
	geocoder = new google.maps.Geocoder();
	
	var mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(63.430487, 10.395061),
    	zoomControlOptions: {
        	style: google.maps.ZoomControlStyle.SMALL,
        	position: google.maps.ControlPosition.LEFT_BOTTOM
    	},
    	streetViewControlOptions: {
        	position: google.maps.ControlPosition.BOTTOM_CENTER
    	}
	  };
	
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	

}

function codeAddress(address) {
  //var address = model.sights[1].location;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      	//map.setCenter(results[0].geometry.location);
      	map.panTo(results[0].geometry.location);
      	if(marker){
      		marker.setMap(null);
      	}
		marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location,
			animation: google.maps.Animation.DROP
		});
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}




google.maps.event.addDomListener(window, 'load', initialize);
ko.applyBindings(new ViewModel());

/*	// Show menu button
	$("#menuButton").attr('top',($(window).height() - $("#menuButton").height()));
	$("#menuButton").attr('visibility','visible');
	console.log($(window).height() - $("#menuButton").height());*/