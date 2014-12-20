$().ready(function() {
	window.pagemargin = 120;
	window.pagepadding = 40;
	window.pages = $('a[data-role="page"]');
	console.log(window.pages);
	
	function calculatePos(elem) {
		var $ret = $(elem).offset().top - window.pagemargin;
		
		if ($ret < 0) {
			$ret = 0;
		}
		
		return $ret;
	}
	
	function refreshNavbar() {
		var $y = $(document).scrollTop();
		var $s = window.pages[0];
		
		window.pages.each(function(i, val) {
			var $pos = calculatePos(val) - window.pagepadding;
			if ($y >= $pos) {
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
	
	$('a[data-role="goto"]').click(function() {
		var $elem = $('a[name="' + $(this).attr('href').substring(1) + '"]');
		var $pos = calculatePos($elem);
		console.log($pos);
		$('html,body').animate({ scrollTop: $pos });
		history.pushState(null, null, $(this).attr('href'));
		return false;
	});
});