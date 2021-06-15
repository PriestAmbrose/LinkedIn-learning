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

var $babItems,
	$babColors,
	$babQtys,
	babQty,
	babCost,
	$babForm,
	$babTotalFlowers,
	$babTotalCost,
	$babUpdatePrice;

var bab = {
	init: function() {
		var $babStep2 = $('#bab_step2'),
			$bab = $('#bab');
	
		$babForm = $('#bab_form');
		$babItems = $('.bab_item');
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

})();