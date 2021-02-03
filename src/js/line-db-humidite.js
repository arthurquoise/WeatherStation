$(document).ready(function(){
	$.ajax({
		url: "http://213.44.97.144/WeatherStation/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var period = [];
			var humid = [];

			for(let i in data) {
				period.push(data[i].heure);
				humid.push(data[i].humidite);
			}

			var chartHumidity = {
				labels: period,
				datasets : [
					{
						label: 'Humidité',
						backgroundColor: 'rgba(232, 37, 63, 0.75)',
						borderColor: 'rgba(200, 200, 200, 0.75)',
						hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data:humid,
                        fill:false,
					},     
				]
			};

			var ctx = $("#line-humidite");

			var barGraph = new Chart(ctx, {
				type: 'line',
				data: chartHumidity
			});
		},
		error: function(data) {
			console.log(data);
                        alert(data);
		}
	});
});