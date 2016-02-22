$(window).load(function() { 
    $("#loaderInner").fadeOut(); 
    $("#loader").delay(400).fadeOut("slow"); 
});

jQuery(document).ready(function($) {
	$('.samba__btn.-win').on('click', function(event) {
		convertWin();
	});

	$('.samba__btn.-unix').on('click', function(event) {
		convertUnix();
	});

	$('.samba__input').on('click', function(event) {
		$(this).select();
	});

	$('.samba__input.-win').bind('paste', function(event) {
 		setTimeout( function() {
           convertWin();
        }, 100);
	});

	$('.samba__input.-unix').bind('paste', function(event) {
		setTimeout( function() {
          convertUnix();
       }, 100);
	});


	$(".samba__input.-unix").keyup(function (e) {
	    if (e.keyCode == 13) {
	        convertUnix();
	    }
	});

	$(".samba__input.-win").keyup(function (e) {
	    if (e.keyCode == 13) {
	        convertWin();
	    }
	});


    function copyToClipboard(element) {
      console.log(element);
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).val()).select();
	  document.execCommand("copy");
	  $temp.remove();
	}

	function convertWin(){
		var win_val = $('.samba__input.-win').val();
		win_val = win_val.replace("\\\\SAMBA\\", "smb://samba/");
		win_val = win_val.replace("\\\\samba\\", "smb://samba/");
		win_val = win_val.split('\\').join('/');
		win_val = win_val.trim();
		$('.samba__input.-unix').val(win_val);
	}
	function convertUnix(){
		var unix_val = $('.samba__input.-unix').val();
		unix_val = unix_val.replace("smb://samba/", "\\\\SAMBA\\");
		unix_val = unix_val.split('/').join('\\');
		unix_val = unix_val.trim();
		$('.samba__input.-win').val(unix_val);
	}
});
