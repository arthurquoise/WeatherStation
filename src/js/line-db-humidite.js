$(document).ready(function(){
	$.ajax({
		url: "http://192.168.1.86/WeatherStation/api/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var period = [];
			var humid = [];

			for(var i in data) {
				period.push(data[i].heure);
				humid.push(data[i].humidite);
			}

			var chartdata = {
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
				data: chartdata
			});
		},
		error: function(data) {
			console.log(data);
                        alert(data);
		}
	});
});