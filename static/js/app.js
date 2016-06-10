var hidden = false;

$(document).keypress("j", function (e) {

	if (hidden === false) {
		if (e.shiftKey) {
			$(".content").slideUp("slow", function () {
				$(this).hide();
			});
			hidden = true;
		}
	} else {
		$(".content").slideDown("slow", function () {
			$(this).show();
		});
		hidden = false;
	}

});
