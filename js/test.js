/**
 * @author Tommy Walderhaug, June 2015
 */


var model = {
	sights: [
		{
		name	: 'Nidarosdomen',
		location: 'Nidaros Domkirke, Bispegata 11, 7012 Trondheim',
		url		: 'http://www.nidarosdomen.no/en-GB/',
		category: 'churches', 
        coordinate: {
			latitude : 63.427165, 
			longitude : 10.396897
			}
		},{
		name	: 'Norwegian University of Science and Technology',
		location: 'Høgskoleringen 1, 7034 Trondheim',
		url		: 'http://www.ntnu.edu/',
		category: 'education', 
        coordinate: {
			latitude : 63.419571, 
			longitude : 10.401875
			}
		},{
		name	: 'Rockheim',
		location: 'Brattørkaia 14, 7010 Trondheim',
		url		: 'http://www.rockheim.no/english/',
		category: 'museums', 
        coordinate: {
			latitude : 63.438935, 
			longitude : 10.401295
			}
		},{
		name	: 'The Old City bridge',
		location: 'Bubrua, 7013 Trondheim',
		url		: 'http://www.trondheim.no/content/631863/The-Old-Town-Bridge?language=3',
		category: 'landmarks', 
        coordinate: {
			latitude : 63.428206, 
			longitude : 10.401714
			}
		},{
		name	: 'Pirbadet',
		location: 'Stiftelsen Trondheim Pirbad, Havnegata 12, 7010 Trondheim',
		url		: 'http://www.pirbadet.com/',
		category: 'bathing_area', 
        coordinate: {
			latitude : 63.440245, 
			longitude : 10.400673
			}
		},{
		name	: 'Vår Frue kirke',
		location: 'Vår Frue kirke, Kongens gate 5',
		url		: 'http://www.kirkesok.no/eng/kirker/Vaar-Frue-kirke-Trondheim',
		category: 'churches', 
        coordinate: {
			latitude : 63.430174, 
			longitude : 10.397476
			}
		},{
		name	: 'Trondheim United Methodist Church ',
		location: 'Krambugata 6, 7406 Trondheim',
		url		: 'http://www.metodistkirken.no/trondheim/frame.php?page=64',
		category: 'churches', 
        coordinate: {
			latitude : 63.43242, 
			longitude : 10.401274
			}
		},{
		name	: 'St. Olav Catholic Parish',
		location: 'Schirmers gate 1, 7012 Trondheim',
		url		: 'http://trondheim.katolsk.no/en/home-page/',
		category: 'churches', 
        coordinate: {
			latitude : 63.425528, 
			longitude : 10.392551
			}
		},{
		name	: 'Salem Menighet',
		location: 'Prinsens Gate 22B, 7012 Trondheim',
		url		: 'http://salemmenighet.no/',
		category: 'churches', 
        coordinate: {
			latitude : 63.429804, 
			longitude : 10.392219
			}
		},{
		name	: 'Betel Pinsemenighet',
		location: 'Prinsens Gate 10B, 7012 Trondheim',
		url		: 'http://www.beteltrondheim.no/',
		category:	'churches', 
        coordinate: {
			latitude : 63.428562, 
			longitude : 10.392251
			}
		},{
		name	: 'Trondheim Baptistmenighet',
		location: 'Prinsens Gate 2D, 7012 Trondheim',
		url		: '',
		category:	'churches', 
        coordinate: {
			latitude : 63.425927, 
			longitude : 10.392519
			}
		},{
		name	: 'Ilen kirke',
		location: 'Ilen kirke, 7012 Trondheim',
		url		: 'http://www.kirkesok.no/eng/kirker/Ilen-kirke',
		category:	'churches', 
        coordinate: {
			latitude : 63.429992, 
			longitude : 10.376265
			}
		}
	]
};

var Sight = function(data){
	var self = this;
	//var marker;
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);
	this.latitude  = ko.observable(data.coordinate.latitude);
	this.longitude  = ko.observable(data.coordinate.longitude);
	this.url = ko.observable(data.url);
	this.category = ko.observable(data.category);
	
	marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(this.latitude, this.longitude)//,
		//animation: google.maps.Animation.DROP
	});
	
	this.isVisible = ko.observable(false);

	this.isVisible.subscribe(function(currentState) {
		if (currentState) {
			marker.setMap(map);
		} else {
			marker.setMap(null);
		}
	});

	this.isVisible(true);
};
/*
// Map marker filtering
var Pin = function Pin(data) {
	var marker;
	var latLon = codeAddress(data.location);
  this.name = ko.observable(data.name);
  this.lat  = ko.observable(latLon.A);
  this.lon  = ko.observable(latLon.B);
  //this.text = ko.observable(text);

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lon),
    animation: google.maps.Animation.DROP
  });

  this.isVisible = ko.observable(false);

  this.isVisible.subscribe(function(currentState) {
    if (currentState) {
      marker.setMap(map);
    } else {
      marker.setMap(null);
    }
  });

  this.isVisible(true);
};
*/

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
	
	// -- Filtering
	// Initially, show everything
	this.typeToShow = ko.observable("all");
	
	// set category to show based on the click
	self.filter = function (cat) {
        self.typeToShow(cat);
   	};
   	// Do the atual filtering and return the filtered array
	this.categoriesToShow = ko.pureComputed(function() {
        var desiredType = this.typeToShow();

        if (desiredType == "all") return this.sightList();
        return ko.utils.arrayFilter(this.sightList(), function(cat) {
            return ko.unwrap(cat.category) == desiredType;
        });
    }, this);

	
	
	this.currentSight = ko.observable(this.sightList()[0]);

	this.setCurrentSight = function(sight) {
		codeAddress(sight.location());
	};
	
/*	self.filterPins = ko.computed(function () {
    var search  = self.query().toLowerCase();

    return ko.utils.arrayFilter(self.pins(), function (pin) {
        var doesMatch = pin.name().toLowerCase().indexOf(search) >= 0;

        pin.isVisible(doesMatch);

        return doesMatch;
    });
});*/
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
var geocoder = new google.maps.Geocoder();
var marker;

function initialize() {
	
	
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
	ko.applyBindings(new ViewModel());
}

function codeAddress(address) {
	geocoder.geocode( { 'address': address}, function(results, status) {
		console.log("status: " + status);
		//console.log(results);
		if (status == google.maps.GeocoderStatus.OK) {
			
			var latitude = results[0].geometry.location.lat();
			var longitude = results[0].geometry.location.lng();
			console.log("latitude:" + latitude + " -- longitude: " + longitude);
			return {
				lat: latitude,
				lon: longitude
			};
		} else {
			console.log("Error");
		}
	});
}




google.maps.event.addDomListener(window, 'load', initialize);

