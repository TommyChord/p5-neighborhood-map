# p5-neighborhood-map
#####Udacity project 5

## Overview
##### The following are the requirements for the project:
1. Write code required to add a full-screen map to your page using the Google Maps API.
2. Write code required to add map markers identifying a number of locations you are interested in within this neighborhood.
3. Implement the search bar functionality to search and filter your map markers. There should be a filtering function on markers that already show up. Simply providing a search function through a third-party API is not enough.
4. Implement a list view of the identified locations.
5. Add additional functionality using third-party APIs when a map marker, search result, or list view entry is clicked (ex. Yelp reviews, Wikipedia, Flickr images, etc).

The result can be viewed here -> [gh-pages](http://tommychord.github.io/p5-neighborhood-map/)

## Instructions
The page shows a full screen size map from Google Maps, showing the city of Trondheim in Norway.
![Screenshot -- fullscreen](http://tommychord.github.io/p5-neighborhood-map/screenshots/fullscreen.png "Fullscreen")

Up in the left corner there is a tiny menu icon that is used to hide or show the list of interesting places in the city.

![Screenshot -- list](http://tommychord.github.io/p5-neighborhood-map/screenshots/list.png "List")

Clicking on the icons will  filter the list based on the selected category.

![Screenshot -- all](http://tommychord.github.io/p5-neighborhood-map/img/all.png "All Categories") Show all categories

![Screenshot -- churces](http://tommychord.github.io/p5-neighborhood-map/img/church.png "Churches") Show only the churches

![Screenshot -- schools](http://tommychord.github.io/p5-neighborhood-map/img/education.png "Schools") Show only the Schools

![Screenshot -- museums](http://tommychord.github.io/p5-neighborhood-map/img/museum.png "Museums") Show only the museums

![Screenshot -- landmarks](http://tommychord.github.io/p5-neighborhood-map/img/landmark.png "Landmarks") Show only the Landmarks

![Screenshot -- restaurants](http://tommychord.github.io/p5-neighborhood-map/img/food.png "Restaurants") Show only the Restaurants

The active category filter is shown by the red "glow".

You can also do a free text search/filter by typing into the search box. If a category is selected, the text search will only show results from that category.
If "ALL" is selected the text search will filter from the entire list. The map markers are also updated based on the desired filter(s).

Clicking on a name in the list will make the marker start bouncing, and the marker will be centered in the map.
Clicking on a marker will bring up additional information about the place. This information is fetched from Google Places, and yelp.com.

![Screenshot -- details](http://tommychord.github.io/p5-neighborhood-map/screenshots/details.png "Details")
