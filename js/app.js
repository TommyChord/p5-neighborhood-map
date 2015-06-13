/**
 * @author Tommy Walderhaug, June 2015
 */

var model = {
	sights: [
		{
		name	: "Nidarosdomen",
		location: "Nidaros Domkirke, Bispegata 11, 7012 Trondheim",
		url		: "http://www.nidarosdomen.no/en-GB/",
		category: "churches"
		},{
		name	: 'Norwegian University of Science and Technology',
		location: 'Høgskoleringen 1, 7034 Trondheim',
		url		: 'http://www.ntnu.edu/',
		category: 'education'
		},{
		name	: 'Rockheim',
		location: 'Brattørkaia 14, 7010 Trondheim',
		url		: 'http://www.rockheim.no/english/',
		category: 'museums'
		},{
		name	: 'The Old City bridge',
		location: 'Bubrua, 7013 Trondheim',
		url		: 'http://www.trondheim.no/content/631863/The-Old-Town-Bridge?language=3',
		category: 'landmarks'
		},{
		name	: 'Pirbadet',
		location: 'Stiftelsen Trondheim Pirbad, Havnegata 12, 7010 Trondheim',
		url		: 'http://www.pirbadet.com/',
		category: 'bathing_area'
		},{
		name	: 'Vår Frue kirke',
		location: 'Vår Frue kirke, Kongens gate 5',
		url		: 'http://www.kirkesok.no/eng/kirker/Vaar-Frue-kirke-Trondheim',
		category: 'churches'
		},{
		name	: 'Trondheim United Methodist Church ',
		location: 'Krambugata 6, 7406 Trondheim',
		url		: 'http://www.metodistkirken.no/trondheim/frame.php?page=64',
		category: 'churches'
		},{
		name	: 'St. Olav Catholic Parish',
		location: 'Schirmers gate 1, 7012 Trondheim',
		url		: 'http://trondheim.katolsk.no/en/home-page/',
		category: 'churches'
		},{
		name	: 'Salem Menighet',
		location: 'Prinsens Gate 22B, 7012 Trondheim',
		url		: 'http://salemmenighet.no/',
		category: 'churches'
		},{
		name	: 'Betel Pinsemenighet',
		location: 'Prinsens Gate 10B, 7012 Trondheim',
		url		: 'http://www.beteltrondheim.no/',
		category:	'churches'
		},{
		name	: 'Trondheim Baptistmenighet',
		location: 'Prinsens Gate 2D, 7012 Trondheim',
		url		: '',
		category:	'churches'
		},{
		name	: 'Ilen kirke',
		location: 'Ilen kirke, 7012 Trondheim',
		url		: 'http://www.kirkesok.no/eng/kirker/Ilen-kirke',
		category:	'churches'
		}
	]
};

var Sight = function(data){
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);	
	this.url = ko.observable(data.url);
	this.category = ko.observable(data.category);
};

var ViewModel = function(){
	var self = this;
	
	this.displayItemList = ko.observable(false);
	
	
	self.toggleVisibility = function() {
		self.displayItemList(!self.displayItemList());
    };
	this.sightList = ko.observableArray([]);
	
	this.typeToShow = ko.observable("all");
	self.filter = function (cat) {
        self.typeToShow(cat);
   	};
	this.categoriesToShow = ko.pureComputed(function() {
        // Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow();
        //console.log(desiredType);
        if (desiredType == "all") return this.sightList();
        return ko.utils.arrayFilter(this.sightList(), function(cat) {
            return ko.unwrap(cat.category) == desiredType;
        });
    }, this);
    
    
	model.sights.forEach(function(sightItem){
		self.sightList.push(new Sight(sightItem));
	});
	
	this.currentSight = ko.observable(this.sightList()[0]);

	this.setCurrentSight = function(sight) {
		codeAddress(sight.location());
	};
	
	// Category filtering
	
	this.typeToShow = ko.observable("all");
	
	
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
        ko.unwrap(value) ? $(element).fadeIn(200) : $(element).fadeOut(200);
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
      	/*if(marker){
      		marker.setMap(null);
      	}*/
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
