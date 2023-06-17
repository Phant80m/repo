
$(document).ready(function() {
  var hidden, visibilityState, visibilityChange;

  if (typeof document.hidden !== "undefined") {
    hidden = "hidden", visibilityChange = "visibilitychange", visibilityState = "visibilityState";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden", visibilityChange = "msvisibilitychange", visibilityState = "msVisibilityState";
  }

  var document_hidden = document[hidden];

  document.addEventListener(visibilityChange, function() {
    if(document_hidden != document[hidden]) {
      if(document[hidden]) {
        // Document hidden
        document.title = "phant80m's repo | add to sileo"
      } else {
        // Document shown
        document.title = "phant80m repo"
      }

      document_hidden = document[hidden];
    }
  });
});

$(document).ready(function() {
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $('#sileo').html('Add to sileo');
  } else {
    $('#sileo').html('Not available on your device');
  }
});

$('#sileo').on('click', function(event) {
  if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    event.preventDefault();
    alert('Not available on your device');
  }
});

$(document).ready(function() {
  $('#copyLink').click(function() {
    var textToCopy = 'evr4';
    
    var tempInput = $('<input>');
    $('body').append(tempInput);
    
    tempInput.val(textToCopy).select();
    
    document.execCommand('copy');
    
    tempInput.remove();
    
    var message = $('#message');
    message.text('Copied discord username: ' + textToCopy);
    
    setTimeout(function() {
      message.text('');
    }, 3000);
    
    return false;
  });
});
