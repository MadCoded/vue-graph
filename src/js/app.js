import tabComponent from './components/tabComponent'
import data from './data/data'

Vue.component('tabs', tabComponent.tabs)
Vue.component('tab', tabComponent.tab)

new Vue({
	el: '#app',

	data: {
		chartData: data.getChartData(),

		gridData: data.getGridData(20),
	},

	methods: {
		
	}
})
