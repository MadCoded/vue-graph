export default {
	getChartData: () => {
		var items = 'Item1,Item2,Item3,Item4'.split(','),
	        data = [];
	    for (var i = 0; i < items.length; i++) {
	        data.push({
	            country: items[i],
	            bar1: Math.round(Math.random() * 20000),
	            bar2: Math.random() * 10000,
	            bar3: Math.random() * 5000
	        });
	    }
	    return data;
	},

	getGridData: (count) => {
        var items = 'Item2221,Item2,Item3,Item4,Item5,Item6'.split(','),
            data = [];
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                item: items[i % items.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 == 0
            });
        }
        return data;
	},

}