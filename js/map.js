$(document).ready(function () {   
   ko.applyBindings(viewModel);
});
//var markers = [];


var model = [
		{
		name	: 'Nidarosdomen',
		location: 'Nidaros Domkirke, Bispegata 11, 7012 Trondheim',
		url		: 'http://www.nidarosdomen.no/en-GB/',
		category: 'churches',
		yelpid	: 'nidarosdomen-trondheim',
        coordinate: {
			latitude : 63.427165, 
			longitude : 10.396897
			}
		},{
		name	: 'Norwegian University of Science and Technology',
		location: 'Høgskoleringen 1, 7034 Trondheim',
		url		: 'http://www.ntnu.edu/',
		category: 'education',
		yelpid	: 'ntnu-trondheim',
        coordinate: {
			latitude : 63.419571, 
			longitude : 10.401875
			}
		},{
		name	: 'Rockheim',
		location: 'Brattørkaia 14, 7010 Trondheim',
		url		: 'http://www.rockheim.no/english/',
		category: 'museums',
		yelpid	: 'rockheim-trondheim', 
        coordinate: {
			latitude : 63.438935, 
			longitude : 10.401295
			}
		},{
		name	: 'The Old City bridge',
		location: 'Bubrua, 7013 Trondheim',
		url		: 'http://www.trondheim.no/content/631863/The-Old-Town-Bridge?language=3',
		category: 'landmarks',
		yelpid	: 'gamle-bybro-trondheim', 
        coordinate: {
			latitude : 63.428206, 
			longitude : 10.401714
			}
		},{
		name	: 'Vår Frue kirke',
		location: 'Vår Frue kirke, Kongens gate 5',
		url		: 'http://www.kirkesok.no/eng/kirker/Vaar-Frue-kirke-Trondheim',
		category: 'churches',
		yelpid	: '', 
        coordinate: {
			latitude : 63.430174, 
			longitude : 10.397476
			}
		},{
		name	: 'Trondheim United Methodist Church ',
		location: 'Krambugata 6, 7406 Trondheim',
		url		: 'http://www.metodistkirken.no/trondheim/frame.php?page=64',
		category: 'churches',
		yelpid	: 'metodistkirken-i-norge-trondheim',
        coordinate: {
			latitude : 63.43242, 
			longitude : 10.401274
			}
		},{
		name	: 'St. Olav Catholic Parish',
		location: 'Schirmers gate 1, 7012 Trondheim',
		url		: 'http://trondheim.katolsk.no/en/home-page/',
		category: 'churches',
		yelpid	: '',
        coordinate: {
			latitude : 63.425528, 
			longitude : 10.392551
			}
		},{
		name	: 'Salem Menighet',
		location: 'Prinsens Gate 22B, 7012 Trondheim',
		url		: 'http://salemmenighet.no/',
		category: 'churches',
		yelpid	: 'salem-menighet-normisjon-trondheim-trondheim',
        coordinate: {
			latitude : 63.429804, 
			longitude : 10.392219
			}
		},{
		name	: 'Betel Pinsemenighet',
		location: 'Prinsens Gate 10B, 7012 Trondheim',
		url		: 'http://www.beteltrondheim.no/',
		category:	'churches',
		yelpid	: 'pinsemenigheten-betel-trondheim-trondheim',
        coordinate: {
			latitude : 63.428562, 
			longitude : 10.392251
			}
		},{
		name	: 'Trondheim Baptistmenighet',
		location: 'Prinsens Gate 2D, 7012 Trondheim',
		url		: '',
		category:	'churches',
		yelpid	: 'trondheim-baptistmenighet-trondheim',
        coordinate: {
			latitude : 63.425927, 
			longitude : 10.392519
			}
		},{
		name	: 'Ilen kirke',
		location: 'Ilen kirke, 7012 Trondheim',
		url		: 'http://www.kirkesok.no/eng/kirker/Ilen-kirke',
		category: 'churches',
		yelpid	: '',
        coordinate: {
			latitude : 63.429992, 
			longitude : 10.376265
			}
		},{
		name	: 'Trondhjem Katedralskole',
		location: 'Munkegata 8, 7013 Trondheim',
		url		: 'http://www.trondheim-katedral.vgs.no/',
		category:	'education',
		yelpid	: 'trondheim-katedralskole-trondheim',
        coordinate: {
			latitude : 63.428691, 
			longitude : 10.395716
			}
		},{
		name	: 'Sør-Trøndelag University College',
		location: 'E. C. Dahls gate 2, 7012 Trondheim',
		url		: 'http://http://hist.no/english/',
		category:	'education',
		yelpid	: '',
        coordinate: {
			latitude : 63.429003, 
			longitude : 10.390888
			}
		},{
		name	: 'Vitensenteret i Trondheim',
		location: 'Kongens gate 1, 7011 Trondheim',
		url		: 'http://www.vitensenteret.com/',
		category:	'education',
		yelpid	: 'vitensenteret-trondheim',
        coordinate: {
			latitude : 63.43016, 
			longitude : 10.400834
			}
		},{
		name	: 'Birralee International school',
		location: 'Bispegata 9, 7012 Trondheim',
		url		: 'http://birralee.no/',
		category:	'education',
		yelpid	: '',
        coordinate: {
			latitude : 63.427175, 
			longitude : 10.390663
			}
		},{
		name	: 'Trondheim International school',
		location: 'Festningsgata 2, 7014 Trondheim',
		url		: 'http://this.no/',
		category:	'education',
		yelpid	: 'stiftelsen-trondheim-international-school-trondheim',
        coordinate: {
			latitude : 63.429344, 
			longitude : 10.413644
			}
		},{
		name	: 'Folkeuniversitetet Midt-Norge',
		location: 'Dronningens gate 10, 7011 Trondheim',
		url		: 'http://www.folkeuniversitetet.no/',
		category:	'education',
		yelpid	: 'folkeuniversitetet-midt-norge-trondheim',
        coordinate: {
			latitude : 63.431993, 
			longitude : 10.399107
			}
		},{
		name	: 'NTNU Department of Music',
		location: 'Kjøpmannsgata 48, 7010 Trondheim',
		url		: 'http://www.ntnu.edu/music',
		category:	'education',
		yelpid	: '',
        coordinate: {
			latitude : 63.433869, 
			longitude : 10.404106
			}
		},{
		name	: 'Ringve Music Museum',
		location: 'Lade alle 60, 7041 Trondheim',
		url		: 'http://ringve.no/en/',
		category:	'museums',
		yelpid	: '',
        coordinate: {
			latitude : 63.447162, 
			longitude : 10.453395
			}
		},{
		name	: 'Sverresborg Trøndelag Folk Museum',
		location: 'Sverresborg Alle 13, 7020 Trondheim',
		url		: 'http://sverresborg.no/english/',
		category:	'museums',
		yelpid	: 'sverresborg-trøndelag-folkemuseum-trondheim',
        coordinate: {
			latitude : 63.421347, 
			longitude : 10.356814
			}
		},{
		name	: 'NTNU University Museum',
		location: 'Erling Skakkes gate 47A, 7012 Trondheim',
		url		: 'http://www.ntnu.edu/museum',
		category:	'museums',
		yelpid	: '',
        coordinate: {
			latitude : 63.429113, 
			longitude : 10.387434
			}
		},{
		name	: 'Nordenfjeldske Kunstindustrimuseum',
		location: 'Munkegata 3-7, 7013 Trondheim',
		url		: 'http://nkim.no/english/',
		category:	'museums',
		yelpid	: 'nordenfjeldske-kunstindustri-museum-trondheim',
        coordinate: {
			latitude : 63.428701, 
			longitude : 10.396435
			}
		},{
		name	: 'Trondheim kunstmuseum',
		location: 'Bispegata 7b, 7013 Trondheim',
		url		: 'http://trondheimkunstmuseum.no/en/',
		category:	'museums',
		yelpid	: 'trondheim-kunstmuseum-trondheim',
        coordinate: {
			latitude : 63.427482, 
			longitude : 10.394536
			}
		},{
		name	: 'The Jewish Museum Trondheim',
		location: 'Arkitekt Christies gate 1, 7012 Trondheim',
		url		: 'http://jodiskemuseum.no/english/',
		category:	'museums',
		yelpid	: 'det-jødiske-museum-trondheim-trondheim',
        coordinate: {
			latitude : 63.426416, 
			longitude : 10.392948
			}
		},{
		name	: 'The Norwegian National Museum of Justice',
		location: 'Kongens gate 95, 7012 Trondheim',
		url		: 'http://norsk-rettsmuseum.no/english/',
		category:	'museums',
		yelpid	: '',
        coordinate: {
			latitude : 63.430193, 
			longitude : 10.378357
			}
		},{
		name	: 'Archbishop\'s Palace',
		location: 'Kongsgårds gate 1b, 7013 Trondheim',
		url		: 'http://www.nidarosdomen.no/en-GB/Articles/the+archbishops+palace.html',
		category:	'landmarks',
		yelpid	: '',
        coordinate: {
			latitude : 63.426109, 
			longitude : 10.395652
			}
		},{
		name	: 'Stiftsgården',
		location: 'Munkegata 23, 7011 Trondheim',
		url		: 'http://www.royalcourt.no/artikkel.html?tid=28705&sek=28591',
		category:	'landmarks',
		yelpid	: '',
        coordinate: {
			latitude : 63.43158, 
			longitude : 10.395137
			}
		}
	];

var Sight = function(data){
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);	
	this.url = ko.observable(data.url);
	this.category = ko.observable(data.category);
	this.yelpid = ko.observable(data.yelpid);
	this.latitude = ko.observable(data.coordinate.latitude);
	this.longitude = ko.observable(data.coordinate.longitude);
	this.marker = ko.observableArray([]);
};

function MyViewModel() {
    var self = this;
    self.mapOne = ko.observable({
        lat: ko.observable(63.427165),
        lng:ko.observable(10.396897)
    });
    
    this.displayItemList = ko.observable(false);
	
	self.toggleVisibility = function() {
		self.displayItemList(!self.displayItemList());
    };
	this.sightList = ko.observableArray([]);
	
	this.typeToShow = ko.observable("all");
	
	// filter by category, show/hide proper markers and update map bounds
	this.filter = function (cat) {
        self.typeToShow(cat);
        var bounds = new google.maps.LatLngBounds();
        self.sightList().forEach(function(mark){
        	if(cat == 'all'){
        		mark.marker().setVisible(true);
        		bounds.extend(mark.marker().getPosition());
        	} else {
				if(mark.marker().category == cat){
					mark.marker().setVisible(true);
					bounds.extend(mark.marker().getPosition());
				} else {
					mark.marker().setVisible(false);
				}
			}
        });

		self.mapOne().googleMap.fitBounds(bounds);
		self.mapOne().googleMap.setCenter(bounds.getCenter());
   	};
   	
	this.categoriesToShow = ko.pureComputed(function() {
        // Represents a filtered list of categories
        var desiredType = this.typeToShow();
        if (desiredType == "all"){
        	return this.sightList();
        } else {
        	return ko.utils.arrayFilter(this.sightList(), function(cat) {
            	return ko.unwrap(cat.category) == desiredType;
        	});
        }
        
    }, this);
    
    
	model.forEach(function(sightItem){
		self.sightList.push(new Sight(sightItem));
	});
	
	this.currentSight = ko.observable(this.sightList()[0]);

	this.setCurrentSight = function(sight) {
		self.mapOne().lat(sight.latitude());
		self.mapOne().lng(sight.longitude());
		//console.log(sight.marker());
		//console.log(self.categoriesToShow());
		sight.marker().setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
        	sight.marker().setAnimation(null);
    	}, 2800);
	};
	
	// Category filtering
	
	this.typeToShow = ko.observable("all");
}

ko.bindingHandlers.map = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var mapObj = ko.utils.unwrapObservable(valueAccessor());
                var latLng = new google.maps.LatLng(
                    ko.utils.unwrapObservable(mapObj.lat),
                    ko.utils.unwrapObservable(mapObj.lng));
                var mapOptions = { center: latLng,
                                  zoom: 15, 
                                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                                  zoomControlOptions: {
        							style: google.maps.ZoomControlStyle.SMALL,
    								position: google.maps.ControlPosition.LEFT_BOTTOM
    								},
    								streetViewControlOptions: {
        								position: google.maps.ControlPosition.BOTTOM_CENTER
    								}};
                
                mapObj.googleMap = new google.maps.Map(element, mapOptions);
				// Add markers to the model
				viewModel.sightList().forEach(function(mark){		
					//mapObj.marker = new google.maps.Marker({
						mark.marker(new google.maps.Marker({
                    	map: mapObj.googleMap,
                    	position: {lat: mark.latitude(), lng: mark.longitude()},
                    	title: mark.name(),
                    	category: mark.category()
                	}));
                	// Add marker to model
                	//mark.marker(mapObj.marker);
                	//mark.marker(mymarker);
				});
				/*       
                mapObj.onChangedCoord = function(newValue) {
                    var latLng = new google.maps.LatLng(
                        ko.utils.unwrapObservable(mapObj.lat),
                        ko.utils.unwrapObservable(mapObj.lng));
                    mapObj.googleMap.panTo(latLng);
                    mapObj.marker.setPosition(latLng);                 
                };
                
                mapObj.onMarkerMoved = function(dragEnd) {
                    var latLng = mapObj.marker.getPosition();
                    mapObj.lat(latLng.lat());
                    mapObj.lng(latLng.lng());
                };
 
                mapObj.lat.subscribe(mapObj.onChangedCoord);
                mapObj.lng.subscribe(mapObj.onChangedCoord);
				
                google.maps.event.addListener(mapObj.marker, 'dragend', mapObj.onMarkerMoved);
                */
                $("#" + element.getAttribute("id")).data("mapObj",mapObj);
            }
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

var viewModel = new MyViewModel();
