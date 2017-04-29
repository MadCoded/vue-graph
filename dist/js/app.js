(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _tabComponent = require('./components/tabComponent');

var _tabComponent2 = _interopRequireDefault(_tabComponent);

var _data = require('./data/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('tabs', _tabComponent2.default.tabs);
Vue.component('tab', _tabComponent2.default.tab);

new Vue({
	el: '#app',

	data: {
		chartData: _data2.default.getChartData(),

		gridData: _data2.default.getGridData(20)
	},

	methods: {}
});

},{"./components/tabComponent":2,"./data/data":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	tabs: {
		template: '\n\t\t\t<div>\n\t\t\t\t<div class="tabs">\n\t\t\t\t  <ul>\n\t\t\t\t    <li v-for="tab in tabs" :class="{ \'is-active\': tab.isActive }">\n\t\t\t\t    \t<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>\n\t\t\t\t    </li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="column is-12">\n\t\t\t\t\t\t<slot></slot>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',

		data: function data() {
			return { tabs: [] };
		},


		methods: {
			selectTab: function selectTab(selectedTab) {
				this.tabs.forEach(function (tab) {
					tab.isActive = tab.name == selectedTab.name;
				});
			}
		},

		mounted: function mounted() {
			this.tabs = this.$children;
		}
	},

	tab: {
		template: '\n\t\t\t<div v-if="isActive"><slot></slot></div>\n\t\t',

		props: {
			name: { required: true },
			selected: { default: false }
		},

		data: function data() {
			return {
				isActive: false
			};
		},


		computed: {
			href: function href() {
				return '#' + this.name.toLowerCase().replace(/ /g, '-');
			}
		},

		mounted: function mounted() {
			this.isActive = this.selected;
		}
	}
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.default = {
				getChartData: function getChartData() {
								var items = 'Item1,Item2,Item3,Item4'.split(','),
								    data = [];
								for (var i = 0; i < items.length; i++) {
												data.push({
																item: items[i],
																bar1: Math.round(Math.random() * 20000),
																bar2: Math.random() * 10000,
																bar3: Math.random() * 5000
												});
								}
								return data;
				},

				getGridData: function getGridData(count) {
								var items = 'Item1,Item2,Item3,Item4,Item5,Item6'.split(','),
								    data = [];
								for (var i = 0; i < count; i++) {
												data.push({
																id: i,
																country: items[i % items.length],
																date: new Date(2014, i % 12, i % 28),
																amount: Math.random() * 10000,
																active: i % 4 == 0
												});
								}
								return data;
				}

};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxjb21wb25lbnRzXFx0YWJDb21wb25lbnQuanMiLCJzcmNcXGpzXFxkYXRhXFxkYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFNBQUosQ0FBYyxNQUFkLEVBQXNCLHVCQUFhLElBQW5DO0FBQ0EsSUFBSSxTQUFKLENBQWMsS0FBZCxFQUFxQix1QkFBYSxHQUFsQzs7QUFFQSxJQUFJLEdBQUosQ0FBUTtBQUNQLEtBQUksTUFERzs7QUFHUCxPQUFNO0FBQ0wsYUFBVyxlQUFLLFlBQUwsRUFETjs7QUFHTCxZQUFVLGVBQUssV0FBTCxDQUFpQixFQUFqQjtBQUhMLEVBSEM7O0FBU1AsVUFBUztBQVRGLENBQVI7Ozs7Ozs7O2tCQ05lO0FBQ2QsT0FBTTtBQUNMLHdiQURLOztBQW1CTCxNQW5CSyxrQkFtQkU7QUFDTixVQUFPLEVBQUUsTUFBTSxFQUFSLEVBQVA7QUFDQSxHQXJCSTs7O0FBdUJMLFdBQVM7QUFDUixZQURRLHFCQUNFLFdBREYsRUFDZTtBQUN0QixTQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGVBQU87QUFDeEIsU0FBSSxRQUFKLEdBQWdCLElBQUksSUFBSixJQUFZLFlBQVksSUFBeEM7QUFDQSxLQUZEO0FBR0E7QUFMTyxHQXZCSjs7QUErQkwsU0EvQksscUJBK0JLO0FBQ1QsUUFBSyxJQUFMLEdBQVksS0FBSyxTQUFqQjtBQUNBO0FBakNJLEVBRFE7O0FBcUNkLE1BQUs7QUFDSixvRUFESTs7QUFLSixTQUFPO0FBQ04sU0FBTSxFQUFFLFVBQVUsSUFBWixFQURBO0FBRU4sYUFBVSxFQUFFLFNBQVMsS0FBWDtBQUZKLEdBTEg7O0FBVUosTUFWSSxrQkFVRztBQUNOLFVBQU87QUFDTixjQUFVO0FBREosSUFBUDtBQUdBLEdBZEc7OztBQWdCSixZQUFVO0FBQ1QsT0FEUyxrQkFDRjtBQUNOLFdBQU8sTUFBTSxLQUFLLElBQUwsQ0FBVSxXQUFWLEdBQXdCLE9BQXhCLENBQWdDLElBQWhDLEVBQXNDLEdBQXRDLENBQWI7QUFDQTtBQUhRLEdBaEJOOztBQXNCSixTQXRCSSxxQkFzQk07QUFDVCxRQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFyQjtBQUNBO0FBeEJHO0FBckNTLEM7Ozs7Ozs7O2tCQ0FBO0FBQ2Qsa0JBQWMsd0JBQU07QUFDbkIsWUFBSSxRQUFRLDBCQUEwQixLQUExQixDQUFnQyxHQUFoQyxDQUFaO0FBQUEsWUFDTyxPQUFPLEVBRGQ7QUFFRyxhQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNuQyxpQkFBSyxJQUFMLENBQVU7QUFDTixzQkFBTSxNQUFNLENBQU4sQ0FEQTtBQUVOLHNCQUFNLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixLQUEzQixDQUZBO0FBR04sc0JBQU0sS0FBSyxNQUFMLEtBQWdCLEtBSGhCO0FBSU4sc0JBQU0sS0FBSyxNQUFMLEtBQWdCO0FBSmhCLGFBQVY7QUFNSDtBQUNELGVBQU8sSUFBUDtBQUNILEtBYmE7O0FBZWQsaUJBQWEscUJBQUMsS0FBRCxFQUFXO0FBQ2pCLFlBQUksUUFBUSxzQ0FBc0MsS0FBdEMsQ0FBNEMsR0FBNUMsQ0FBWjtBQUFBLFlBQ0ksT0FBTyxFQURYO0FBRUEsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDO0FBQzVCLGlCQUFLLElBQUwsQ0FBVTtBQUNOLG9CQUFJLENBREU7QUFFTix5QkFBUyxNQUFNLElBQUksTUFBTSxNQUFoQixDQUZIO0FBR04sc0JBQU0sSUFBSSxJQUFKLENBQVMsSUFBVCxFQUFlLElBQUksRUFBbkIsRUFBdUIsSUFBSSxFQUEzQixDQUhBO0FBSU4sd0JBQVEsS0FBSyxNQUFMLEtBQWdCLEtBSmxCO0FBS04sd0JBQVEsSUFBSSxDQUFKLElBQVM7QUFMWCxhQUFWO0FBT0g7QUFDRCxlQUFPLElBQVA7QUFDTjs7QUE1QmEsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgdGFiQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy90YWJDb21wb25lbnQnXHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS9kYXRhJ1xyXG5cclxuVnVlLmNvbXBvbmVudCgndGFicycsIHRhYkNvbXBvbmVudC50YWJzKVxyXG5WdWUuY29tcG9uZW50KCd0YWInLCB0YWJDb21wb25lbnQudGFiKVxyXG5cclxubmV3IFZ1ZSh7XHJcblx0ZWw6ICcjYXBwJyxcclxuXHJcblx0ZGF0YToge1xyXG5cdFx0Y2hhcnREYXRhOiBkYXRhLmdldENoYXJ0RGF0YSgpLFxyXG5cclxuXHRcdGdyaWREYXRhOiBkYXRhLmdldEdyaWREYXRhKDIwKSxcclxuXHR9LFxyXG5cclxuXHRtZXRob2RzOiB7XHJcblx0XHRcclxuXHR9XHJcbn0pXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHR0YWJzOiB7XHJcblx0XHR0ZW1wbGF0ZTogYFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJzXCI+XHJcblx0XHRcdFx0ICA8dWw+XHJcblx0XHRcdFx0ICAgIDxsaSB2LWZvcj1cInRhYiBpbiB0YWJzXCIgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogdGFiLmlzQWN0aXZlIH1cIj5cclxuXHRcdFx0XHQgICAgXHQ8YSA6aHJlZj1cInRhYi5ocmVmXCIgQGNsaWNrPVwic2VsZWN0VGFiKHRhYilcIj57eyB0YWIubmFtZSB9fTwvYT5cclxuXHRcdFx0XHQgICAgPC9saT5cclxuXHRcdFx0XHQgIDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMTJcIj5cclxuXHRcdFx0XHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YCxcclxuXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4geyB0YWJzOiBbXSB9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2VsZWN0VGFiKHNlbGVjdGVkVGFiKSB7XHJcblx0XHRcdFx0dGhpcy50YWJzLmZvckVhY2godGFiID0+IHtcclxuXHRcdFx0XHRcdHRhYi5pc0FjdGl2ZSA9ICh0YWIubmFtZSA9PSBzZWxlY3RlZFRhYi5uYW1lKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy50YWJzID0gdGhpcy4kY2hpbGRyZW5cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHR0YWI6IHtcclxuXHRcdHRlbXBsYXRlOiBgXHJcblx0XHRcdDxkaXYgdi1pZj1cImlzQWN0aXZlXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxyXG5cdFx0YCxcclxuXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuYW1lOiB7IHJlcXVpcmVkOiB0cnVlIH0sXHJcblx0XHRcdHNlbGVjdGVkOiB7IGRlZmF1bHQ6IGZhbHNlIH1cclxuXHRcdH0sXHJcblxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc0FjdGl2ZTogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRocmVmKCkge1xyXG5cdFx0XHRcdHJldHVybiAnIycgKyB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICctJylcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmlzQWN0aXZlID0gdGhpcy5zZWxlY3RlZFxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRnZXRDaGFydERhdGE6ICgpID0+IHtcclxuXHRcdHZhciBpdGVtcyA9ICdJdGVtMSxJdGVtMixJdGVtMyxJdGVtNCcuc3BsaXQoJywnKSxcclxuXHQgICAgICAgIGRhdGEgPSBbXTtcclxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgZGF0YS5wdXNoKHtcclxuXHQgICAgICAgICAgICBpdGVtOiBpdGVtc1tpXSxcclxuXHQgICAgICAgICAgICBiYXIxOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDAwMCksXHJcblx0ICAgICAgICAgICAgYmFyMjogTWF0aC5yYW5kb20oKSAqIDEwMDAwLFxyXG5cdCAgICAgICAgICAgIGJhcjM6IE1hdGgucmFuZG9tKCkgKiA1MDAwXHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gZGF0YTtcclxuXHR9LFxyXG5cclxuXHRnZXRHcmlkRGF0YTogKGNvdW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gJ0l0ZW0xLEl0ZW0yLEl0ZW0zLEl0ZW00LEl0ZW01LEl0ZW02Jy5zcGxpdCgnLCcpLFxyXG4gICAgICAgICAgICBkYXRhID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6IGl0ZW1zW2kgJSBpdGVtcy5sZW5ndGhdLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoMjAxNCwgaSAlIDEyLCBpICUgMjgpLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBNYXRoLnJhbmRvbSgpICogMTAwMDAsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGkgJSA0ID09IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG5cdH0sXHJcblxyXG59Il19
