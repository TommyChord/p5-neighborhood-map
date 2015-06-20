"use strict";
$(document).ready(function () {
	ko.applyBindings(viewModel);
});
// The data model
var model = [
	{
	name	: 'Nidaros Cathedral',
	location: 'Bispegata 11, 7012 Trondheim',
	url		: 'http://www.nidarosdomen.no/en-GB/',
	category: 'churches',
	googleid: 'ChIJGaAFhZAxbUYRxkoY_2IKIhY',
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
	googleid: 'ChIJf5PA2L8xbUYR5BBz-Uo49RA',
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
	googleid: 'ChIJ_SQZi50xbUYR2we35aFCaSU',
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
	googleid: 'ChIJ-WYR7JkxbUYR_NxVgP6GCj0',
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
	googleid: 'ChIJEV4js5sxbUYRiqtUthnruQI',
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
	googleid: 'ChIJkYLe_JsxbUYR01OgR0YPJ1g',
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
	googleid: 'ChIJo2JNV5AxbUYRJXYv-Nf9tmk',
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
	googleid: 'ChIJdVZYwpoxbUYROLFU0BwyC-0',
	yelpid	: 'salem-menighet-normisjon-trondheim-trondheim',
    coordinate: {
		latitude : 63.429804,
		longitude : 10.392219
		}
	},{
	name	: 'Betel Pinsemenighet',
	location: 'Prinsens Gate 10B, 7012 Trondheim',
	url		: 'http://www.beteltrondheim.no/',
	category: 'churches',
	googleid: 'ChIJ7aRzl5oxbUYR2gjvQFphqQw',
	yelpid	: 'pinsemenigheten-betel-trondheim-trondheim',
    coordinate: {
		latitude : 63.428562,
		longitude : 10.392251
		}
	},{
	name	: 'Trondheim Baptistmenighet',
	location: 'Prinsens Gate 2D, 7012 Trondheim',
	url		: '',
	category: 'churches',
	googleid: 'ChIJ31K3XpAxbUYRYA4EXhQ6Yqc',
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
	googleid: 'ChIJbTKKPYYxbUYR2BU32ovQx8s',
	yelpid	: '',
    coordinate: {
		latitude : 63.429992,
		longitude : 10.376265
		}
	},{
	name	: 'Trondhjem Katedralskole',
	location: 'Munkegata 8, 7013 Trondheim',
	url		: 'http://www.trondheim-katedral.vgs.no/',
	category: 'education',
	googleid: 'ChIJRQATZpoxbUYRAJLUokscE3M',
	yelpid	: 'trondheim-katedralskole-trondheim',
    coordinate: {
		latitude : 63.428691,
		longitude : 10.395716
		}
	},{
	name	: 'Sør-Trøndelag University College',
	location: 'E. C. Dahls gate 2, 7012 Trondheim',
	url		: 'http://http://hist.no/english/',
	category: 'education',
	googleid: 'ChIJbQBLt5oxbUYRYxPfSlrS6aM',
	yelpid	: '',
    coordinate: {
		latitude : 63.429003,
		longitude : 10.390888
		}
	},{
	name	: 'Vitensenteret i Trondheim',
	location: 'Kongens gate 1, 7011 Trondheim',
	url		: 'http://www.vitensenteret.com/',
	category: 'education',
	googleid: 'ChIJQWdQ1ZsxbUYReHxtZZTBncE',
	yelpid	: 'vitensenteret-trondheim',
    coordinate: {
		latitude : 63.43016,
		longitude : 10.400834
		}
	},{
	name	: 'Birralee International school',
	location: 'Bispegata 9, 7012 Trondheim',
	url		: 'http://birralee.no/',
	category: 'education',
	googleid: 'ChIJLTKoBZAxbUYR1a0_LVGMBOM',
	yelpid	: '',
    coordinate: {
		latitude : 63.427175,
		longitude : 10.390663
		}
	},{
	name	: 'Trondheim International school',
	location: 'Festningsgata 2, 7014 Trondheim',
	url		: 'http://this.no/',
	category: 'education',
	googleid: 'ChIJhdZiQqIxbUYRAVSYeTd5QHU',
	yelpid	: 'stiftelsen-trondheim-international-school-trondheim',
    coordinate: {
		latitude : 63.429344,
		longitude : 10.413644
		}
	},{
	name	: 'Folkeuniversitetet Midt-Norge',
	location: 'Dronningens gate 10, 7011 Trondheim',
	url		: 'http://www.folkeuniversitetet.no/',
	category: 'education',
	googleid: 'ChIJFSvJ7ZsxbUYRe7vJH6zNDdw',
	yelpid	: 'folkeuniversitetet-midt-norge-trondheim',
    coordinate: {
		latitude : 63.431993,
		longitude : 10.399107
		}
	},{
	name	: 'NTNU Department of Music',
	location: 'Kjøpmannsgata 48, 7010 Trondheim',
	url		: 'http://www.ntnu.edu/music',
	category: 'education',
	googleid: 'ChIJ-XPksJ4xbUYRD8V8USEX73Y',
	yelpid	: '',
    coordinate: {
		latitude : 63.433869,
		longitude : 10.404106
		}
	},{
	name	: 'Ringve Music Museum',
	location: 'Lade alle 60, 7041 Trondheim',
	url		: 'http://ringve.no/en/',
	category: 'museums',
	googleid: 'ChIJExGbthwxbUYRYY6srQ-FrY8',
	yelpid	: '',
    coordinate: {
		latitude : 63.447162,
		longitude : 10.453395
		}
	},{
	name	: 'Sverresborg Trøndelag Folk Museum',
	location: 'Sverresborg Alle 13, 7020 Trondheim',
	url		: 'http://sverresborg.no/english/',
	category: 'museums',
	googleid: 'ChIJo7QnxRgybUYRwIfYyYCMMys',
	yelpid	: 'sverresborg-trøndelag-folkemuseum-trondheim',
    coordinate: {
		latitude : 63.421347,
		longitude : 10.356814
		}
	},{
	name	: 'NTNU University Museum',
	location: 'Erling Skakkes gate 47A, 7012 Trondheim',
	url		: 'http://www.ntnu.edu/museum',
	category: 'museums',
	googleid: 'ChIJR1lrRIUxbUYRFeJlMvS3n9A',
	yelpid	: '',
    coordinate: {
		latitude : 63.429113,
		longitude : 10.387434
		}
	},{
	name	: 'Nordenfjeldske Kunstindustrimuseum',
	location: 'Munkegata 3-7, 7013 Trondheim',
	url		: 'http://nkim.no/english/',
	category: 'museums',
	googleid: 'ChIJKRtLapoxbUYRl9eKvDq9t2Q',
	yelpid	: 'nordenfjeldske-kunstindustri-museum-trondheim',
    coordinate: {
		latitude : 63.428701,
		longitude : 10.396435
		}
	},{
	name	: 'Trondheim kunstmuseum',
	location: 'Bispegata 7b, 7013 Trondheim',
	url		: 'http://trondheimkunstmuseum.no/en/',
	category: 'museums',
	googleid: 'ChIJaVGFgZAxbUYRmLY0McnGb0k',
	yelpid	: 'trondheim-kunstmuseum-trondheim',
    coordinate: {
		latitude : 63.427482,
		longitude : 10.394536
		}
	},{
	name	: 'The Jewish Museum Trondheim',
	location: 'Arkitekt Christies gate 1, 7012 Trondheim',
	url		: 'http://jodiskemuseum.no/english/',
	category: 'museums',
	googleid: 'ChIJge7KZ5AxbUYRpt9V6VoT6dU',
	yelpid	: 'det-jødiske-museum-trondheim-trondheim',
    coordinate: {
		latitude : 63.426416,
		longitude : 10.392948
		}
	},{
	name	: 'The Norwegian National Museum of Justice',
	location: 'Kongens gate 95, 7012 Trondheim',
	url		: 'http://norsk-rettsmuseum.no/english/',
	category: 'museums',
	googleid: 'ChIJUw2_DIYxbUYRWoLTYXpDXaQ',
	yelpid	: '',
    coordinate: {
		latitude : 63.430193,
		longitude : 10.378357
		}
	},{
	name	: 'Archbishop\'s Palace',
	location: 'Kongsgårds gate 1b, 7013 Trondheim',
	url		: 'http://www.nidarosdomen.no/en-GB/Articles/the+archbishops+palace.html',
	category: 'landmarks',
	googleid: 'ChIJRei0vpAxbUYRC3DvDFLTy8Y',
	yelpid	: '',
    coordinate: {
		latitude : 63.426109,
		longitude : 10.395652
		}
	},{
	name	: 'Stiftsgården',
	location: 'Munkegata 23, 7011 Trondheim',
	url		: 'http://www.royalcourt.no/artikkel.html?tid=28705&sek=28591',
	category: 'landmarks',
	googleid: 'ChIJXfOSDpsxbUYRN_VSe55u3qU',
	yelpid	: '',
    coordinate: {
		latitude : 63.43158,
		longitude : 10.395137
		}
	},{
	name	: 'Scandic Nidelven',
	location: 'Havnegata 1-3, 7010 Trondheim',
	url		: 'http://www.scandichotels.no/Hotels/Norge/Trondheim/Nidelven/#.VX9TomMhVZk',
	category: 'restaurants',
	googleid: 'ChIJo2ax9Z4xbUYRNq_f7CrwsNs',
	yelpid	: 'scandic-nidelven-trondheim',
    coordinate: {
		latitude : 63.435582,
		longitude : 10.406424
		}
	},{
	name	: 'Sesam',
	location: 'Elgesetergate 1, 7030 Trondheim',
	url		: '',
	category: 'restaurants',
	googleid: 'ChIJBxOYQ5ExbUYRj650KHMXwts',
	yelpid	: 'sesam-trondheim',
    coordinate: {
		latitude : 63.422543,
		longitude : 10.39488
		}
	},{
	name	: 'Baklandet Skydsstation',
	location: 'Øvre Bakklandet 33, 7013 Trondheim',
	url		: 'http://www.skydsstation.no/',
	category: 'restaurants',
	googleid: 'ChIJqb152pkxbUYRPnGsWN9VfPQ',
	yelpid	: 'baklandet-skydsstation-trondheim-2',
    coordinate: {
		latitude : 63.427412,
		longitude : 10.403334
		}
	},{
	name	: 'Indian Tandoori Restaurant ',
	location: 'Søndre gate 22A, 7010 Trondheim',
	url		: 'http://tandooritrondheim.no/',
	category: 'restaurants',
	googleid: 'ChIJ180zDJwxbUYRNxnVDuOpVXY',
	yelpid	: 'indian-tandoori-restaurant-trondheim',
    coordinate: {
		latitude : 63.433744,
		longitude : 10.400008
		}
	},{
	name	: 'Bryggen Asian Cooking',
	location: 'Øvre Bakklandet 66, 7013 Trondheim',
	url		: 'http://www.bryggen.as/',
	category: 'restaurants',
	googleid: 'ChIJnSfpw5kxbUYRJ7nfmTLJvJ8',
	yelpid	: 'bryggen-asian-cooking-trondheim-2',
    coordinate: {
		latitude : 63.427932,
		longitude : 10.402677
		}
	},{
	name	: 'Kina Garden',
	location: 'Gjelvangveita 2, 7010 Trondheim',
	url		: 'http://www.bryggen.as/',
	category: 'restaurants',
	googleid: 'ChIJa6Xhc5wxbUYRPCUvCtx6Xmw',
	yelpid	: 'kina-garden-trondheim',
    coordinate: {
		latitude : 63.433661,
		longitude : 10.39881
		}
	},{
	name	: 'To Rom og Kjøkken',
	location: 'Carl Johans gate 5, 7010 Trondheim',
	url		: 'http://www.toromogkjokken.no/',
	category: 'restaurants',
	googleid: 'ChIJD_WLcZwxbUYRfOoISvT5WAc',
	yelpid	: 'to-rom-og-kjøkken-trondheim',
    coordinate: {
		latitude : 63.433809,
		longitude : 10.398774
		}
	}
];

var Sight = function(data){
	this.name = ko.observable(data.name);
	this.location = ko.observable(data.location);
	this.url = ko.observable(data.url);
	this.category = ko.observable(data.category);
	this.googleid = ko.observable(data.googleid);
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

	self.nameSearch = ko.observable('');
	self.displayItemList = ko.observable(false);

	self.toggleVisibility = function() {
		self.displayItemList(!self.displayItemList());
	};
	self.sightList = ko.observableArray();
	self.typeToShow = ko.observable("all");

	// filter by category, show/hide proper markers and update map bounds
	// triggered by icon click
	self.filter = function (cat, btn) {
		// Visualize the active filter
		$('.menuIcon').removeClass('menuIconGlow');
		$('#menu-btn-' + btn).addClass('menuIconGlow');
		// set the current category
		self.typeToShow(cat);
		var hasMatch = false;
		var bounds = new google.maps.LatLngBounds();
		
		if ((typeof self.currentSight() !== "undefined") && (self.currentSight().category() != cat) && (cat !='all')) {
			infowindow.close();
		}
		// loop through the observaleArray and set visibility & bounds
		self.sightList().forEach(function(mark){
			if (self.nameSearch().length === 0) {
				if (cat == 'all') {
					hasMatch = true;
					mark.marker().setVisible(true);
					bounds.extend(mark.marker().getPosition());
				} else {
					if (mark.marker().category == cat) {
						hasMatch = true;
						mark.marker().setVisible(true);
						bounds.extend(mark.marker().getPosition());
					} else {
						mark.marker().setVisible(false);
					}
				}
			} else {
				if (cat == 'all') {
					if (mark.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1) {
						hasMatch = true;
						mark.marker().setVisible(true);
						bounds.extend(mark.marker().getPosition());
					} else {
						mark.marker().setVisible(false);
					}
				} else {
					if ((mark.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1) && (mark.marker().category == cat)) {
						hasMatch = true;
						mark.marker().setVisible(true);
						bounds.extend(mark.marker().getPosition());
					} else {
						mark.marker().setVisible(false);
					}
				}
			}
		});
		// If the filters have a match use the new bounds
		if (hasMatch) {
			self.mapOne().googleMap.fitBounds(bounds);
			self.mapOne().googleMap.setCenter(bounds.getCenter());
			if (self.mapOne().googleMap.getZoom() > 17) {
				self.mapOne().googleMap.setZoom(17);
			}
		}
   	};

   	// update the list, markers and bounds based on category/search filter
   	self.categoriesToShow = ko.pureComputed(function() {
		// Represents a filtered list of categories and test search
		var desiredType = self.typeToShow();
		var hasMatch = false;
		var bounds = new google.maps.LatLngBounds();
		// No categrories are selected
		if (desiredType == "all") {
			// Nothing is entered in the search box
			if (self.nameSearch().length === 0) {
				self.sightList().forEach(function(item){
					item.marker().setVisible(true);
					hasMatch = true;
					bounds.extend(item.marker().getPosition());
				});
				self.mapOne().googleMap.fitBounds(bounds);
				self.mapOne().googleMap.setCenter(bounds.getCenter());

				return self.sightList();
			} else {
				// Something is entered in the search box
				// If there is no match with the current infowindow, close it
				if ((typeof self.currentSight() !== "undefined") && (self.currentSight().name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) == -1)) {
					infowindow.close();
				}
				// Now handle the markers
				return ko.utils.arrayFilter(self.sightList(), function(item) {
					if (item.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1) {
						item.marker().setVisible(true);
						hasMatch = true;
						bounds.extend(item.marker().getPosition());
					} else {
						item.marker().setVisible(false);
					}
					if (hasMatch) {
						self.mapOne().googleMap.fitBounds(bounds);
						self.mapOne().googleMap.setCenter(bounds.getCenter());
						if (self.mapOne().googleMap.getZoom() > 17) {
							self.mapOne().googleMap.setZoom(17);
						}
					}
					return item.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1;
				});
			}
		} else {
			// A category is selected
			// If selected place is not in the selected category, close the infowindow.
			if ((typeof self.currentSight() !== "undefined") && (self.currentSight().category() == desiredType && self.currentSight().name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) == -1)) {
				infowindow.close();
			}
			return ko.utils.arrayFilter(self.sightList(), function(item) {
				// Nothing is entered in the search box
				if (self.nameSearch().length === 0) {
					if (ko.unwrap(item.category) == desiredType) {
						item.marker().setVisible(true);
						hasMatch = true;
						bounds.extend(item.marker().getPosition());
					} else {
						item.marker().setVisible(false);
					}
					if (hasMatch) {
						self.mapOne().googleMap.fitBounds(bounds);
						self.mapOne().googleMap.setCenter(bounds.getCenter());
					}
					return ko.unwrap(item.category) == desiredType;
				} else {
					// Something is entered in the search box
					if (ko.unwrap(item.category) == desiredType && item.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1) {
						item.marker().setVisible(true);
						hasMatch = true;
						bounds.extend(item.marker().getPosition());
					} else {
						item.marker().setVisible(false);
					}
					if (hasMatch) {
						self.mapOne().googleMap.fitBounds(bounds);
						self.mapOne().googleMap.setCenter(bounds.getCenter());
						if (self.mapOne().googleMap.getZoom() > 17) {
							self.mapOne().googleMap.setZoom(17);
						}
					}
					return ko.unwrap(item.category) == desiredType && item.name().toLowerCase().indexOf(self.nameSearch().toLowerCase()) !== -1;
				}
			});
		}
	}, this);

	// Build the sight list of Sights
	model.forEach(function(sightItem){
		self.sightList.push(new Sight(sightItem));
	});

	//this.currentSight = ko.observable(this.sightList()[0]);
	self.currentSight = ko.observable();
	// Set and center the current point of interest
	// Set a timeout on the Bouncing...
	self.setCurrentSight = function(sight) {
		self.currentSight(sight);
		self.mapOne().googleMap.panTo(sight.marker().getPosition());
		// Trigger the marker click event
		google.maps.event.trigger(sight.marker(), "click");
		sight.marker().setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
			sight.marker().setAnimation(null);
		}, 2800);
	};

	// Initially show all categories
	self.typeToShow = ko.observable("all");
}

ko.bindingHandlers.map = {
	init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
		// Create the map
		var mapObj = ko.utils.unwrapObservable(valueAccessor());
		var mapOptions = {
			panControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			streetViewControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
			}
		};

		mapObj.googleMap = new google.maps.Map(element, mapOptions);
		//var infowindow = new google.maps.InfoWindow();
		var bounds = new google.maps.LatLngBounds();

		// Add markers to the model and set the boundaries
		viewModel.sightList().forEach(function(mark){
			mark.marker(new google.maps.Marker({
				map: mapObj.googleMap,
				position: {
					lat: mark.latitude(),
					lng: mark.longitude()
				},
				title: mark.name(),
				category: mark.category()
			}));
			bounds.extend(mark.marker().getPosition());

			// Add a click event to the marker
			google.maps.event.addListener(mark.marker(), 'click', function() {
				viewModel.currentSight(mark);
				var request = {placeId: mark.googleid()};
				var service = new google.maps.places.PlacesService(mapObj.googleMap);

				//connect to Google Places and request details
				service.getDetails(request, function(place, status) {
					// Start building the infoWindow content
					var contentString = '';

					if (status == google.maps.places.PlacesServiceStatus.OK) {
						if (place.url) {
							contentString += '<h1><a href="' + place.url + '" title="Open in Google Plus" target="Plus" class="link">' + mark.name() + '</a></h1>';
						} else {
							contentString += '<h1>' + mark.name() + '</h1>';
						}
						contentString += '<div class="row"><span class="label">Address: </span><span class="data">'+ mark.location() + '</span></div>';
						if (place.international_phone_number) {
							contentString += '<div class="row"><span class="label">Phone: </span><span class="data">'+ place.international_phone_number + '</span></div>';
						}
						if (place.opening_hours) {
							var open = (place.opening_hours.open_now) ? 'Yes' : 'No';
							contentString += '<div class="row"><span class="label">Open Now: </span><span class="data">'+ open + '</span></div>';
							contentString += '<div class="row"><span class="label">Opening Hours: </span><ol class="data-ol">';
							place.opening_hours.weekday_text.forEach(function (day){
								contentString += '<li>' + day + '</li>';
							});
							contentString += '</ol></div>';
						}
						if (place.rating) {
							contentString += '<div class="row"><span class="label">Rating: </span><span class="data">'+ place.rating + '</span></div>';
						}
					}

					if (mark.url()) {
						contentString += '<div class="row"><span class="label">Website: </span><span class="data"><a href="'+ mark.url() + '" target="P5-Link">' + mark.url() + '</a></span></div>';
					}
					// Fetch data from yelp.com if we have the ID
					if (mark.yelpid()) {
						getYelpData(mark.yelpid(), function(retData){
							infowindow.setContent(infowindow.getContent() + retData.content);
						});
					}

					infowindow.setContent(contentString);
					infowindow.open(mapObj.googleMap, mark.marker());
				});
			});
		});
		mapObj.googleMap.fitBounds(bounds);
		mapObj.googleMap.setCenter(bounds.getCenter());

		$("#" + element.getAttribute("id")).data("mapObj",mapObj);
	}
};
// Custom binding to hide/show an element. The Menu in this case
ko.bindingHandlers.fadeVisible = {
	init: function(element, valueAccessor) {
		// Initially set the element to be instantly visible/hidden depending on the value
		var value = valueAccessor();
		$(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
	},
	update: function(element, valueAccessor) {
		// Fade the element in/out using jQuery
		var value = valueAccessor();
		ko.unwrap(value) ? $(element).fadeIn(200) : $(element).fadeOut(200);
	}
};

var viewModel = new MyViewModel();
var infowindow = new google.maps.InfoWindow();