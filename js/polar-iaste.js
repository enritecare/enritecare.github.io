/********************
**     TEXT AREA    **
********************/
function initTextZone() {
  $('#generate-text').click(function () {
	 
    var data; 
    if ($('#text-area-peer').val() && $('#text-area-self').val()) { data = JSON.parse($('#text-area-peer').val() + $('#text-area-self').val()); }
	
    margin = 100;
			
    config = {
	  scaleShowLabels: false,
      scaleShowLine: true,
      showLabels: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0,
	  segmentShowStroke: true,
	  segmentStrokeWidth: 2,
	  segmentStrokeColor: '#000000'
    };    
    
	displayChart(data, config, margin);
  });
}


/********************
** SERVICE METHODS **
********************/
function displayChart(data, config, margin) { 
  if (config == null) {
    config = {
      scaleShowLabels: false,
      scaleShowLine: false,
    };
  }

  if (margin == null) {
    margin = 0;
  }
  console.log(config)
     
  new Chart($("#canvas").get(0).getContext("2d"), margin).PolarArea(data, config);
}

function saveImg() {
  //document.location.href = ($("#canvas").get(0).toDataURL()).replace("image/png", "image/octet-stream");
  var dataURL = ($("#canvas").get(0).toDataURL()).replace("image/png", "image/octet-stream");
  
  var a = document.createElement('a');
  a.href = dataURL;
  a.download = '360Chart.png';
  //document.body.appendChild(a);
  a.click();
}

/********************
**      MAIN       **
********************/
$(document).ready(function() { 
  initTextZone();

  $('#savetoimg').click(function() {
    saveImg();
  });
});
