---
layout: none
sitemap:
  exclude: 'yes'
placeholders:
  title: '{title}'
  summary: '{summary}'
  date: '{date}'
  url: '{url}'
  thumb: '{thumb}'
---
{% capture template %}
{%- include card_post.html post=page.placeholders -%}
{% endcapture %}
(function () {
	var template = {{ template | jsonify }};
	var data = [];

	function compile(data) {
		return template.replace(/\{(.*?)\}/g, function (match, prop) {
		    return data[prop] || match;
		});
	}

	function filter(rules) {
		return data.filter(function (row) {
			return isQueryValid(rules.search, row) && isFilterValid(rules.filters, row);
		});
	}

	function isQueryValid(query, row) {
		if (!query || !query.length) {
			return true;
		}
		return query
			.filter(function (word) {
				return row.title.trim().toLowerCase().indexOf(word) !== -1
					|| row.summary.trim().toLowerCase().indexOf(word) !== -1;
			})
			.length === query.length;
	}

	function isFilterValid(args, row) {
		for(var key in args) {
			var rules = args[key];
			for(var i = 0, n = rules.length; i < n; i++) {
				if (isValidRule(row[key], rules[i].rule, rules[i].mode)) {
					continue;
				}
				return false;
			}
		}
		return true;
		// if(!rules.length) {
		// 	return true;
		// }
		// return !!rules
		// 	.filter(function (rule) {
		// 		return row[rule.key] && isValidRule(row[rule.key], rule.filters, rule.mode);
		// 	})
		// 	.length;
	}

	function isValidRule(data, rule, mode) {
		switch(mode) {
			case 'diff-day':
				return moment(data).startOf('days').diff(moment().startOf('days'), 'days') == rule;
			case 'last-day':
				return moment(data).startOf('days').diff(moment().startOf('days'), 'days') <= rule;
			case 'next-day':
				return moment(data).startOf('days').diff(moment().startOf('days'), 'days') >= rule;
			case 'in':
			default:
				if (Array.isArray(data)) {
					return data.indexOf(rule) !== -1;
				}
				return rule in data;
		}
	}

	function initialState() {
		return {search: '', filters: {} };
	}

   $(document).ready(function () {
   		var isLoaded = false;
		var container = $('#page-blog');
		var rules = initialState();
		var input = $('#search-input');
		moment.locale('es', {
			relativeTime : {
		        future: "en %s",
		        past:   "hace %s",
		        s  : 'unos pocos segundos',
		        ss : '%d segundos',
		        m:  "Un minuto",
		        mm: "%d minutos",
		        h:  "una hora",
		        hh: "%d horas",
		        d:  "un día",
		        dd: "%d días",
		        w:  "una semana",
		        ww: "%d semanas",
		        M:  "un mes",
		        MM: "%d meses",
		        y:  "un año",
		        yy: "%d años"
		    }
		});
		function render () {
			if (!isLoaded) {
				return;
			}
			var results = filter(rules);
			if (!results || !results.length) {
				container.html('No se ha encontrado resultados');
				return;
			}
			var html = results
				.map(function (row) {
					return compile(Object.assign({}, row, {
						date: moment(row.date).fromNow()
					}));
				})
				.join('\n');
			container.html(html);
		}

		input.on('keyup', function (event) {
			var value = $(this).val();
			if ([13, 16, 20, 37, 38, 39, 40, 91].indexOf(event.keyCode) !== -1) {
				return;
			}
			rules.search = value.trim().toLowerCase().split(' ');
			render();
		});

		$('[data-role="filter-clear"]').on('click', function (event) {
			event.preventDefault();
        	var key = $(this).data('key');
    		rules.filters[key] = [];
			$('[data-key="' + key + '"].active').removeClass('active');
			render();
		});

		$('[data-filter]').on('click', function (event) {
			event.preventDefault();
			var element = $(this);
        	var key = element.data('key');
        	var role = element.data('role') || 'check';
        	var filter = element.data('filter');
        	filter = (isNaN(filter)) ? filter.trim().toLowerCase() : filter;
        	if (!(key in rules.filters)) {
        		rules.filters[key] = [];
        	}
        	var rule = {
    			mode: element.data('type') || 'in',
    			rule: filter
    		};
    		var index = 0;
        	var isExist = rules.filters[key].some(function (row, i) {
        		index = i;
        		return row.mode === rule.mode && row.rule === rule.rule;
        	});
        	if (role !== 'boolean') {
				if (isExist) {
					rules.filters[key].splice(index, 1);
					element.removeClass('active');
				} else {
					rules.filters[key].push(rule);
					element.addClass('active');
				}
        	} else {
        		$('[data-key="' + key + '"].active').removeClass('active');
        		if (isExist) {
        			rules.filters[key] = [];
        		} else {
        			rules.filters[key] =  [rule];
					element.addClass('active');
        		}
        	}
			render();
		});

		$.get("{{ '/search.json'  | prepend: site.baseurl }}")
		.done(function ($response) {
			data = $response;
			isLoaded = true;
			render();
			$('.nav-blog [role="status"]').remove();
		});
   });
})();