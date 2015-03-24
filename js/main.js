var mainJs = (function () {
 		
 		// Avoid `console` errors in browsers that lack a console.
		(function() {
		    var method;
		    var noop = function () {};
		    var methods = [
		        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		        'timeStamp', 'trace', 'warn'
		    ];
		    var length = methods.length;
		    var console = (window.console = window.console || {});
		
		    while (length--) { 
		        method = methods[length];
		
		        // Only stub undefined methods.
		        if (!console[method]) {
		            console[method] = noop;
		        }
		    }
		}());

		function jumpNav() {
			$('.jumpnav').on('click touchstart', function(e) {
				target = $(this).attr('href');
				
				$('html, body').stop().animate({
					scrollTop: $(target).offset().top
				}, 500);
				
				e.preventDefault();
			});
		} 		
 		
        function init() {
            //Init Here
            jumpNav();
        }
 
 
        // Reveal public pointers to
        // private functions and properties
 
        return {
            init 	:	init
        };
})();