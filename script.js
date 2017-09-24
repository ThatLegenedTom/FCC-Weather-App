$(document).ready(function() {
	var $div = $("#img");
	var $img;
	var lat;
	var lon;
	var cTemp;
	var tempSwap = true;

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			var api =
				"https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat;

			$.getJSON(api, function(data) {
				var weatherImage = data.weather[0].icon;
				var city = data.name;
				var weather = data.weather[0].main;
				cTemp = data.main.temp;
				var fTemp = cTemp * 1.8 + 32;
				$("#city").html(city);
				$("#weather").html(weatherImage);
				$("#temp").html(cTemp);
				$("#swap").click(function(){
					if(tempSwap === false){
						$("#swap").html("^C");
						$("#temp").html(cTemp);
						tempSwap = true;
					} else {
						$("#swap").html("^F");
						$("#temp").html(fTemp);
						tempSwap = false;
					}
			});
			$img = $("<img />", { src: weatherImage }).appendTo($div);
		});
	});
	};
});
