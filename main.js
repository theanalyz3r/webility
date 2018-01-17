(function () {
	let letters = $('.heading .js-letter');
	letters.each(function (i) {
		$(this).fadeIn( 300 * ( i + 1 ) );
	});

	$('.heading').attr('aria-hidden', false);

	letters.promise().done(function() {
		let subheading = $('.subheading');
    	subheading.fadeIn(1000);
		subheading.attr('aria-hidden', false);

		subheading.promise().done(function() {
			let contact = $('.contact');
			contact.fadeIn(1000);
			contact.attr('aria-hidden', false);
	  	});
  	});
})();