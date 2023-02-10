/********************
**     TEXT AREA    **
********************/
function initTextZone() {
  $('#generate-text').click(function () {
	 
    var selfData, peerData; 
    if ($('#text-area-self').val()) { selfData = JSON.parse($('#text-area-self').val()); }
	if ($('#text-area-peer').val()) { peerData = JSON.parse($('#text-area-peer').val()); }

    margin = 100;
    selfConfig = {
      scaleShowLabels: false,
      scaleShowLine: true,
      showLabels: false,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0,
	  segmentShowStroke: true,
	  segmentStrokeColor: '#000000'
    };    
    displayChart(selfData, selfConfig, margin)
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
