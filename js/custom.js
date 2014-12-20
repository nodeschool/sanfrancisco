$().ready(function() {
	window.pages = $('a[data-role="page"]');
	console.log(window.pages);
	
	function refreshNavbar() {
		var $y = $(document).scrollTop();
		var $s = window.pages[0];
		
		window.pages.each(function(i, val) {
			if ($y >= ($(val).offset().top - 150)) {
				$s = val;
			}
		});
		
		var $link = $('ul.nav > li > a[href="#' + $s.name + '"]');
		$('ul.nav > li').removeClass('active');
		$link.parent().addClass('active');
	}
	
	refreshNavbar();

	$(document).on('scroll', function() {
		refreshNavbar();
	});
});