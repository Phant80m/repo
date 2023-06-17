window.addEventListener('load', function() {
  var description = document.getElementById('description');
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (!isMobile) {
    description.classList.add('typewriter');
  }
});
$(document).ready(function() {
    $('#mobileButton').click(function() {
      // Request mobile version of the site
      // Replace `mobile-site-url` with the actual URL of your mobile site
      window.location.href = 'mobile-site-url';
    });
  });

$(document).ready(function() {
  var hidden, visibilityState, visibilityChange;

  if (typeof document.hidden !== "undefined") {
    hidden = "hidden",
    visibilityChange = "visibilitychange",
    visibilityState = "visibilityState";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden",
    visibilityChange = "msvisibilitychange",
    visibilityState = "msVisibilityState";
  }

  var document_hidden = document[hidden];

  document.addEventListener(visibilityChange,
  function() {
    if (document_hidden != document[hidden]) {
      if (document[hidden]) {
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
    $('#support').text('Add to sileo');
  }
});

$('#sileo').on('click',
function(event) {
  if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    event.preventDefault();
    $("#sileo").addClass("bg-red-600 text-zinc-50");
    $("#sileo").removeClass("sm:hover:bg-zinc-100 sm:hover:scale-100 hover:border sm:hover:text-slate-950 sm:hover:border-slate-950 sm:hover:border-2");
    $("#sileo").addClass("sm:hover:border sm:hover:text-red-600 sm:hover:bg-zinc-100 sm:hover:border-red-600 sm:hover:border-2");
    $('#force').removeClass("hidden");
    $("#force").addClass("flex");
    $('#support').text('Not supported on your device');
    setTimeout(function() {
      $('#support').text('');
      $('#support').text('Add to sileo');
      $("#sileo").removeClass("bg-red-600 text-zinc-50");
      $("#sileo").removeClass("sm:hover:border sm:hover:text-red-600 sm:hover:bg-zinc-100 sm:hover:border-red-600 sm:hover:border-2");
      $("#sileo").addClass("sm:hover:bg-zinc-100 sm:hover:scale-100 hover:border sm:hover:text-slate-950 sm:hover:border-slate-950 sm:hover:border-2")
      $("#force").removeClass("flex");
      $("#force").addClass('hidden');
    },
    3000);
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
    },
    3000);

    return false;
  });
});