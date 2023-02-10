/********************
**     TEXT AREA    **
********************/
function initTextZone() {
  $('#generate-text').click(function () {
    var option, data;
    data = JSON.parse($('#text-area').val())
    option = $('#text-select').val()
    margin = 100;
    config = {
      scaleShowLabels: false,
      scaleShowLine: true,
      showLabels: true,
      scaleOverride: true,
      scaleSteps: 10,
      scaleStepWidth: 10,
      scaleStartValue: 0
    };
    switch(option) {
      case 'Custom':
        margin = 0;
        config.scaleShowLine = false;
        config.showLabels = false;
        break;
      case '4x2':
      case '4x3':
        config.scaleShowXYAxis = true;
        break;
      case '5x2':
        config.scaleShowQuintAxis = true;
        break;
      case '2x*':
        config.scaleShowXAxis = true;
        config.startAngle = -Math.PI;
        config.sectionMargin = 25;
        break;
      default:
        break;
    }
    displayChart(data, config, margin)
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
  $('#text-area').val(JSON.stringify(data, null, '\t'));
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
  initTextZone()
  initColorPickers();

  $('#savetoimg').click(function() {
    saveImg();
  });
});
