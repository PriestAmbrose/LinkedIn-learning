(function() {

$(document).ready(function(e) {
	nav.init();
	accordion.init();
	bab.init();
	pagination.init();
});

var html = document.documentElement,
	$html = $(html),
	multiplier,
	current = 'current',
	close = 'close',
	open = 'open',
	selected = 'selected',
	jsNone = 'js_none',
	ariaHidden = 'aria-hidden',
	ariaInvalid = 'aria-invalid',
	ariaDescribedBy = 'aria-describedby';

var nav = {
	init: function() {
		$('#nav_main > ul > li').hoverIntent({
			timeout: 500,
			over: function() {
				$(this).addClass(open);
			},
			out: function() {
				$(this).removeClass(open);
			}
		});
	}
};

var accordion = {
	init: function() {
		var $accordionLinks = $('.accordion > li > a'),
			$accordionAll = $('#accordion-all'),
			accordionAllOpen = $accordionAll.text(),
			accordionAllClose = accordionAllOpen.replace('Show', 'Hide');
		
		$accordionLinks.on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass(open);
		});
		
		$accordionAll.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass(close);
			
			if ($this.hasClass(close)) {
				$this.text(accordionAllClose);
				$accordionLinks.addClass(open);
			}
			else {
				$this.text(accordionAllOpen);
				$accordionLinks.removeClass(open);
			}
		});
	}
};

var $babGridLinks,
	$babItems,
	$babRemoveItems,
	$babColors,
	$babQtys,
	babQty,
	babCost,
	visible = 0,
	$babForm,
	$babTotalFlowers,
	$babTotalCost,
	$babUpdatePrice;

var bab = {
	init: function() {
		var $babStep2 = $('#bab_step2'),
			$bab = $('#bab'),
			babTop,
			babHeight,
			maxHeight = 0;
		
		window.onload = function() {
			if ($bab.length) {
				babTop = $bab.offset().top,
				babHeight = $bab.height();
			}
		};
		
		$(window).scroll(function() {
			if ($babStep2.hasClass('overflow')) {
				maxHeight = babHeight + (babTop - window.scrollY - 15);
				$babStep2.css('max-height', maxHeight);
			}
		});
		
		$babStep2.scrollToFixed({
			marginTop: 5,
			zIndex: 20,
			fixed: function() {
				maxHeight = babHeight + (babTop - window.scrollY - 15);
				$babStep2.removeClass('static').addClass('overflow').css('max-height', maxHeight);
			},
			postFixed: function() {
				$babStep2.addClass('static').removeClass('overflow').css('max-height', 'none');
			}
		});
	
		$babForm = $('#bab_form');
		$babGridLinks = $('#bab_grid a');
		$babItems = $('.bab_item');
		$babRemoveItems = $babItems.find('a');
		$babColors = $babItems.find('select');
		$babQtys = $babItems.find('.text');
		$babTotalFlowers = $('#total_flowers');
		$babTotalCost = $('#total_cost');
		$babUpdatePrice = $('#update_price');
		
		$babQtys.each(function() {
			var $this = $(this);
			$this[0].value = 0;
			$this.on('keypress', function(e) {
				if (e.keyCode === 13) {
					e.preventDefault();
					bab.calcTotals();
				}
			}).on('keyup', function(e) {
				if (e.keyCode !== 13) {
					bab.calcTotals();
				}
			});
		});
		
		$babGridLinks.on('click', function(e) {
			e.preventDefault();
			var $this = $(this),
				id = $this[0].href.split('#')[1],
				$target = $babItems.filter('[id="' + id + '"]');
				
			$this.toggleClass(selected);
			if ($this.hasClass(selected)) {
				visible++;
				$target.removeClass(jsNone);
				$target.find('.text')[0].value = 1;
				if (visible > 0)
					$babForm.removeClass(jsNone);
			}
			else {
				visible--;
				$target.addClass(jsNone);
				$target.find('.text')[0].value = 0;
				try {
					$target.find('select')[0].selectedIndex = 0;
				}
				catch(e) {
				}
				if (visible === 0)
					$babForm.addClass(jsNone);
			}
			bab.calcTotals();
		});
		
		$babRemoveItems.each(function(idx) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$babGridLinks.eq(idx).click();
			});
		});
		
		$babColors.each(function() {
			var $this = $(this),
				$img = $this.parent().prevAll('img')[0];
			
			$this[0].selectedIndex = 0;
			$this.on('change', function() {
				var value = $(this)[0].value.toLowerCase();
				$img.src = $img.src.replace(/\d.*\./g, value + '.');
			});
		});
		
		$babUpdatePrice.on('click', function(e) {
			e.preventDefault();
			bab.calcTotals();
		});
	},
	calcTotals: function() {
		babQty = 0;
		babCost = 0;
		
		$babQtys.each(function() {
			var $this = $(this),
				qty = parseInt($this[0].value),
				cost;
			
			if (!isNaN(qty)) {
				if (qty < 0) {
					$this[0].value = 0;
					qty = 0;
				}
				babQty += qty;
				var $cost = $this.parent().next('.cost');
				cost = parseFloat($cost.data('cost'));
				$cost.text(qty * cost);
				babCost += qty * cost;
			}
		});
		babCost = babCost.toFixed(2);
		$babTotalFlowers.text(babQty);
		$babTotalCost.text(babCost);
	}
};

var $page;

var pagination = {
	init: function() {
		$page = $('.page');
		$page.each(function() {
			var $this = $(this);
			if ($this.hasClass(open))
				$this.next().find('.divider:first-child').removeClass(jsNone);
		});
		$('.more').on('click', function(e) {
			e.preventDefault();
			var $this = $(this),
				$catalyst = $this.parents('.divider'),
				$dominoes = $catalyst.nextAll('div')
				$parentPage = $this.parents('.page');
			
			$parentPage.addClass(open).next().find('.divider:first-child').removeClass(jsNone);
			$catalyst.addClass(jsNone);
			$dominoes.each(function(index) {
				var $this = $(this);
				window.setTimeout(function() {
					$this.removeClass(jsNone)
				}, index * 100);
			})
		});
	}
};

// I wonder what this code does...
function setupBreakpointChallenge() {
    "use strict";
    
    if (!location.pathname.match(/breakpoint-(challenge|solution)\.html$/)) return;

    var col1 = document.getElementById('col_1');
    var flowers = document.getElementById('flower-items');

    // col1.addEventListener('click', function(evt) {
    //     var removeMe = flowers.querySelector('li:last-child');
    
    //     if (removeMe) removeMe.remove();
    // });
};
setupBreakpointChallenge();

})();