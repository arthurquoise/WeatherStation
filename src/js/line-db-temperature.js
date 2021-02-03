$(document).ready(function(){
	$.ajax({
		url: "http://213.44.97.144/WeatherStation/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var period = [];
			var temp = [];

			for(let i in data) {
				period.push(data[i].heure);
				temp.push(data[i].temperature);
			}

			var chartTemperature = {
				labels: period,
				datasets : [
					{
						label: 'Temperature',
						backgroundColor: 'rgba(232, 37, 63, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data:temp,
                        fill:false,
					},     
				]
			};

			var ctx = $("#line-temperature");

			var barGraph = new Chart(ctx, {
				type: 'line',
				data: chartTemperature
			});
		},
		error: function(data) {
			console.log(data);
                        alert(data);
		}
	});
});