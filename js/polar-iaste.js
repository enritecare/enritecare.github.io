/********************
**     TEXT AREA    **
********************/
function initTextZone() {
  $('#generate-text').click(function () {
	 
    var data; 
    if ($('#text-area-peer').val() && $('#text-area-self').val()) { data = JSON.parse($('#text-area-peer').val() + $('#text-area-self').val()); }
	//if ($('#text-area-self').val()) { selfData = JSON.parse($('#text-area-self').val()); }	

    margin = 100;
	
	peerConfig = {		
      scaleShowLabels: false,
      scaleShowLine: true,
      showLabels: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0
    };    
    //displayChart(peerData, peerConfig, selfData, peerData, margin);
		
    config = {
	  scaleShowLabels: false,
      scaleShowLine: true,
      showLabels: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0,
	  // this should be removed for peer graph
	  segmentShowStroke: true,
	  segmentStrokeWidth: 2,
	  segmentStrokeColor: '#000000'
    };    
    
	displayChart(data, config, margin);
	
	//var chrt = new Chart($("#canvas").get(0).getContext("2d"), margin);
	
	//chrt.PolarArea(peerData, peerConfig);
	//chrt.PolarArea(data, selfConfig);
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
  //$('#text-area').val(JSON.stringify(data, null, '\t'));
}

function initColorPickers() {
  $('.colorpicker').each(function(el, i) {
    var colorField = '#f-'+$(this).attr('id');
    $(this).farbtastic(colorField);
    $(this).hide();
    var that = this;
    $(colorField).focus(function() {
      $(that).show();
    });
    $(colorField).blur(function() {
      $(that).hide();
    });
  });
}

function saveImg() {
  document.location.href = ($("#canvas").get(0).toDataURL()).replace("image/png", "image/octet-stream");
}

/********************
**      MAIN       **
********************/
$(document).ready(function() { 
  initTextZone();
  initColorPickers();

  $('#savetoimg').click(function() {
    saveImg();
  });
});
