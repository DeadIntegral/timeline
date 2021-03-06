const init = {
	between: 240,
	firstYear: 2005,
	lastYear: 2018
}
const data = [
	{
		name: 'JQuery',
		type: 'domControl',
		xRange: [9999],
		refer: 'https://en.wikipedia.org/wiki/JQuery',
		color: '#ff0000',
		list: [
			{ version:'1', date:'2006-08-26', type:'main' },
			{ version:'1.1', date:'2007-01-14' },
			{ version:'1.2', date:'2007-09-10' },
			{ version:'1.3', date:'2009-01-14' },
			{ version:'1.4', date:'2010-01-14' },
			{ version:'1.5', date:'2011-01-31' },
			{ version:'1.6', date:'2011-05-03' },
			{ version:'1.7', date:'2011-11-03' },
			{ version:'1.8', date:'2012-08-09' },
			{ version:'1.9', date:'2013-01-15' },
			{ version:'1.10', date:'2013-05-24' },
			{ version:'1.11', date:'2014-01-24' },
			{ version:'1.12', date:'2016-01-08' },
		]
	},
	{
		name: 'JQuery2.x',
		type: 'domControl',
		xRange: [9999],
		refer: 'https://en.wikipedia.org/wiki/JQuery',
		color: '#ff0000',
		list: [
			{ version:'2', date:'2013-04-18', type:'main' },
			{ version:'2.1', date:'2014-01-24' },
			{ version:'2.2', date:'2016-01-08' },
		]
	},
	{
		name: 'JQuery3.x',
		xRange: [9999],
		type: 'domControl',
		xRange: [2645],
		yRange: [-31, 0],
		refer: 'https://en.wikipedia.org/wiki/JQuery',
		color: '#ff0000',
		list: [
			{ version:'3', date:'2016-06-09', type:'main' },
			// { version:'3.1', date:'2016-07-07' },
			{ version:'3.2', date:'2017-03-16' },
			{ version:'3.3', date:'2018-01-19' },
		]
	},
	{
		name: 'backbone',
		xRange: [9999],
		refer: 'https://github.com/jashkenas/backbone',
		color: '#00aa00',
		list: [
			{ version:'0.1', date:'2010-10-13' },
			{ version:'0.5', date:'2011-07-01' },
			{ version:'0.9', date:'2012-01-30' },
			{ version:'1', date:'2013-03-20', type:'main' },
			{ version:'1.1', date:'2013-10-10' },
			{ version:'1.2', date:'2015-05-13' },
			{ version:'1.3.3', date:'2016-04-05' },
		]
	},
	{
		name: 'knockout',
		xRange: [9999],
		refer: 'https://github.com/knockout/knockout',
		color: '#0000cc',
		list: [
			{ version:'1', date:'2010-07-05', type:'main' },
			{ version:'1.1', date:'2010-10-18' },
			{ version:'1.2', date:'2011-04-26' },
			{ version:'1.3', date:'2011-11-16' },
			{ version:'2', date:'2011-12-21', type:'main' },
			{ version:'2.1', date:'2012-05-08' },
			{ version:'2.2', date:'2012-10-28' },
			{ version:'2.3', date:'2013-07-08' },
			{ version:'3.0', date:'2013-10-25', type:'main' },
			{ version:'3.1', date:'2014-05-14' },
			{ version:'3.2', date:'2014-08-12' },
			{ version:'3.3', date:'2015-02-18' },
			{ version:'3.4', date:'2015-11-17' },
			{ version:'3.5β', date:'2017-12-29' },
		]
	},
	{
		name: 'ember',
		xRange: [9999],
		refer: 'https://www.emberjs.com/',
		color: '#ccbb00',
		list: [
			{ version:'1Pre', date:'2012-08-03' },
			{ version:'1', date:'2013-08-31', type:'main' },
			{ version:'1.13', date:'2015-06-12' },
			{ version:'2', date:'2015-08-13', type:'main' },
			{ version:'2.4LTS', date:'2016-04-11' },
			{ version:'2.8LTS', date:'2016-10-17' },
			{ version:'2.12LTS', date:'2017-04-29' },
			{ version:'2.16LTS', date:'2017-11-20' },
			{ version:'3', date:'2018-02-14', type:'main' },
			{ version:'3.3', date:'2018-07-16' },
		]
	},
	{
		name: 'underscore',
		xRange: [9999],
		refer: 'https://underscorejs.org/',
		color: '#00ccbb',
		list: [
			{ version:'0.1', date:'2009-10-28' },
			{ version:'1', date:'2010-03-18', type:'main' },
			{ version:'1.1', date:'2010-08-18' },
			{ version:'1.2', date:'2011-10-05' },
			{ version:'1.3', date:'2012-01-11' },
			{ version:'1.4', date:'2012-09-27' },
			{ version:'1.5', date:'2013-07-06' },
			{ version:'1.6', date:'2014-02-10' },
			{ version:'1.7', date:'2014-08-26' },
			{ version:'1.8', date:'2015-02-19' },
			{ version:'1.9', date:'2018-04-18' },
			{ version:'1.9.3', date:'2018-05-31' },
		]
	},
	{
		// 버전별 분기 필요
		name: 'React',
		type: 'VirtualDOM',
		xRange: [9999, 9999],
		refer: 'https://reactjs.org/',
		color: '#61dafb',
		list: [
			{ version:'0.3', date:'2013-05-29' },
			{ version:'0.8', date:'2013-12-19' },
			{ version:'0.9', date:'2014-02-20' },
			{ version:'0.10', date:'2014-03-21' },
			{ version:'0.11', date:'2014-07-17' },
			{ version:'0.12', date:'2014-10-28' },
			{ version:'0.13', date:'2015-03-10' },
			{ version:'0.14', date:'2015-10-07' },
			{ version:'15', date:'2016-04-08' },
			{ version:'16', date:'2017-09-26' },
		]
	},
	{
		name: 'Vue',
		type: 'VirtualDOM',
		xRange: [9999],
		refer: 'https://vuejs.org/',
		color: '#61dafb',
		list: [
			{ version:'0.6', date:'2013-12-08' },
			{ version:'0.7', date:'2013-12-24' },
			{ version:'0.8', date:'2014-01-27' },
			{ version:'0.9', date:'2014-02-24' },
			{ version:'0.10', date:'2014-03-24' },
			{ version:'0.11', date:'2014-11-07' },
			{ version:'0.12', date:'2015-06-12' },
			{ version:'0.12.13', date:'2015-09-07' },
			{ version:'0.12.14', date:'2015-09-12' },
			{ version:'0.12.15', date:'2015-09-20' },
			{ version:'0.12.16', date:'2015-09-26' },
		]
	},
	{
		name: 'Vue1',
		type: 'VirtualDOM',
		xRange: [9999],
		refer: 'https://vuejs.org/',
		color: '#61dafb',
		list: [
			{ version:'1α', date:'2015-08-31' },
			{ version:'1β', date:'2015-09-22' },
			{ version:'1', date:'2015-10-27', type:'main' },
			{ version:'1.0.10', date:'2015-11-24' },
			{ version:'1.0.20', date:'2016-03-26' },
			{ version:'1.0.24', date:'2016-05-12' },
			{ version:'1.0.26', date:'2016-06-29' },
			{ version:'1.0.27', date:'2016-09-23' },
			{ version:'1.0.28', date:'2016-09-27' },
		]
	},
	{
		name: 'Vue2',
		type: 'VirtualDOM',
		xRange: [9999, 9999],
		refer: 'https://vuejs.org/',
		color: '#61dafb',
		list: [
			{ version:'2α', date:'2016-06-11' },
			{ version:'2β', date:'2016-07-08' },
			{ version:'2', date:'2016-09-31', type:'main' },
			{ version:'2.1', date:'2016-11-22' },
			{ version:'2.2', date:'2017-02-26' },
			{ version:'2.3', date:'2017-04-27' },
			{ version:'2.4', date:'2017-07-13' },
			{ version:'2.5', date:'2017-10-13' },
			{ version:'2.5.17', date:'2018-08-01' },
		]
	},
	{
		name: 'Angular1',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'0.9', date:'2010-10-20' },
			{ version:'0.9.10', date:'2011-01-26' },
			{ version:'0.10', date:'2011-09-02' },
			{ version:'1', date:'2012-06-13', type:'main' },
			{ version:'1.0.3', date:'2012-11-26' },
			{ version:'1.0.4', date:'2013-01-22' },
			{ version:'1.0.5', date:'2013-02-20' },
			{ version:'1.0.6', date:'2013-04-04' },
			{ version:'1.0.7', date:'2013-05-22' },
			{ version:'1.0.8', date:'2013-08-22' },
			
		]
	},
	{
		name: 'Angular1.1',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.1.0', date:'2012-08-31' },
			{ version:'1.1.1', date:'2012-11-26' },
			{ version:'1.1.2', date:'2013-01-22' },
			{ version:'1.1.3', date:'2013-02-20' },
			{ version:'1.1.4', date:'2013-04-03' },
			{ version:'1.1.5', date:'2013-05-22' },
			{ version:'1.2.0', date:'2013-11-08' },
			{ version:'1.2.10', date:'2014-01-24' },
			{ version:'1.2.20', date:'2014-07-11' },
			{ version:'1.2.30', date:'2016-07-21' },
			{ version:'1.2.32', date:'2016-10-11' },
		]
	},
	{
		name: 'Angular1.3',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.3.0β', date:'2014-03-07' },
			{ version:'1.3.0β10', date:'2014-05-23' },
			{ version:'1.3.0', date:'2014-10-13' },
			{ version:'1.3.10', date:'2015-01-20' },
			{ version:'1.3.20', date:'2015-09-29' },
		]
	},
	{
		name: 'Angular1.4',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.4.0β', date:'2015-01-13' },
			{ version:'1.4.0', date:'2015-05-26' },
			{ version:'1.4.10', date:'2016-03-16' },
			{ version:'1.4.13', date:'2016-10-10' },
		]
	},
	{
		name: 'Angular1.5',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.5.0β', date:'2015-09-17' },
			{ version:'1.5.0', date:'2016-02-05' },
			{ version:'1.5.10', date:'2016-12-15' },
			{ version:'1.5.11', date:'2017-01-13' },
		]
	},
	{
		name: 'Angular1.6',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.6.0', date:'2016-12-08' },
			{ version:'1.6.10', date:'2018-04-17' },
		]
	},
	{
		name: 'Angular1.6',
		xRange: [9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.6.0', date:'2016-12-08' },
			{ version:'1.6.10', date:'2018-04-17' },
		]
	},
	{
		name: 'Angular1.7',
		xRange: [9999, 9999],
		refer: 'https://github.com/angular/angular.js',
		color: '#e36209',
		list: [
			{ version:'1.7.0', date:'2018-05-11' },
			{ version:'1.7.3', date:'2018-08-03' },
		]
	},
	{
		name: 'Angular2',
		xRange: [9999, 9999],
		refer: 'https://github.com/angular/angular',
		color: '#e36209',
		list: [
			{ version:'2', date:'2016-09-14', type:'main' },
			{ version:'2.1.0', date:'2016-10-12' },
			{ version:'2.2.0', date:'2016-11-14' },
			{ version:'2.3.0', date:'2016-12-07' },
			{ version:'2.4.0', date:'2016-12-20' },
			{ version:'2.4.10', date:'2017-03-17' },
		]
	},
	{
		name: 'Angular4',
		xRange: [9999, 9999],
		refer: 'https://github.com/angular/angular',
		color: '#e36209',
		list: [
			{ version:'4.0.0b', date:'2016-12-25' },
			{ version:'4.0.0', date:'2017-03-23', type:'main' },
			{ version:'4.1.0', date:'2017-04-26' },
			{ version:'4.2.0', date:'2017-06-08' },
			{ version:'4.3.0', date:'2017-07-14' },
			{ version:'4.4.1', date:'2017-09-15' },
			{ version:'5', date:'2017-11-01', type:'main' },
			{ version:'5.1.0', date:'2017-12-06' },
			{ version:'5.2.0', date:'2018-01-10' },
			{ version:'4.4.7', date:'2018-04-16' },
			{ version:'5.2.10', date:'2018-04-16' },
		]
	},
	{
		name: 'Angular6',
		xRange: [9999, 9999],
		refer: 'https://github.com/angular/angular',
		color: '#e36209',
		list: [
			{ version:'6.0.0', date:'2018-05-03' },
			{ version:'6.1.0', date:'2018-07-25' },
			//  { version:'7.0.0b', date:'2018-08-02' },
			{ version:'6.1.4', date:'2018-08-22' },
		]
	},
	{
		name: 'Grunt',
		xRange: [9999],
		refer: 'https://gruntjs.com/',
		color: '#e48632',
		list: [
			{version:'0.1.0', date:'2012-01-12'},
			// {version:'0.1.1', date:'2012-01-19'},
			// {version:'0.1.2', date:'2012-01-19'},
			{version:'0.2.0', date:'2012-01-22'},
			// {version:'0.2.1', date:'2012-01-23'},
			// {version:'0.2.2', date:'2012-01-23'},
			// {version:'0.2.3', date:'2012-01-23'},
			// {version:'0.2.4', date:'2012-01-23'},
			// {version:'0.2.5', date:'2012-01-29'},
			// {version:'0.2.6', date:'2012-01-30'},
			// {version:'0.2.7', date:'2012-01-30'},
			// {version:'0.2.8', date:'2012-01-30'},
			// {version:'0.2.9', date:'2012-01-31'},
			// {version:'0.2.10', date:'2012-02-01'},
			// {version:'0.2.11', date:'2012-02-01'},
			// {version:'0.2.12', date:'2012-02-01'},
			// {version:'0.2.13', date:'2012-02-02'},
			// {version:'0.2.14', date:'2012-02-03'},
			// {version:'0.2.15', date:'2012-02-07'},
			{version:'0.3.0', date:'2012-03-23'},
			// {version:'0.3.1', date:'2012-03-25'},
			// {version:'0.3.2', date:'2012-03-26'},
			// {version:'0.3.3', date:'2012-03-27'},
			// {version:'0.3.4', date:'2012-03-27'},
			// {version:'0.3.5', date:'2012-03-28'},
			// {version:'0.3.6', date:'2012-03-29'},
			// {version:'0.3.7', date:'2012-04-01'},
			// {version:'0.3.8', date:'2012-04-06'},
			// {version:'0.3.9', date:'2012-04-18'},
			// {version:'0.3.10', date:'2012-06-25'},
			// {version:'0.3.11', date:'2012-06-29'},
			// {version:'0.3.12', date:'2012-07-30'},
			// {version:'0.3.13', date:'2012-08-27'},
			// {version:'0.3.14', date:'2012-08-29'},
			// {version:'0.3.15', date:'2012-09-04'},
			// {version:'0.3.16', date:'2012-10-02'},
			// {version:'0.3.17', date:'2012-10-15'},
			{version:'0.4.0', date:'2013-02-18'},
			{version:'0.4.1', date:'2013-03-13'},
			{version:'0.4.2', date:'2013-11-21'},
			{version:'0.4.3', date:'2014-03-07'},
			{version:'0.4.4', date:'2014-03-12'},
			{version:'0.4.5', date:'2014-05-12'},
			// {version:'1.0.0-rc1', date:'2016-02-11'},
			{version:'1.0.0', date:'2016-04-04'},
			{version:'1.0.1', date:'2016-04-05'},
			// {version:'0.3.13-a', date:'2012-08-27'},
			// {version:'0.4.0-a', date:'2012-12-05'},
			// {version:'0.4.0-rc1', date:'2012-12-07'},
			// {version:'0.4.0-rc2', date:'2012-12-10'},
			// {version:'0.4.0-rc3', date:'2012-12-12'},
			// {version:'0.4.0-rc4', date:'2012-12-17'},
			// {version:'0.4.0-rc5', date:'2013-01-09'},
			// {version:'0.4.0-rc6', date:'2013-01-18'},
			// {version:'0.4.0-rc7', date:'2013-01-21'},
			// {version:'0.4.0-rc8', date:'2013-02-14'},
			{version:'1.0.2', date:'2018-02-07'},
			{version:'1.0.3', date:'2018-06-04'}
		]
	},
	{
		name: 'Gulp',
		xRange: [9999],
		refer: 'https://github.com/gulpjs/gulp',
		color: '#cf4647',
		list: [
			{ version:'0.1', date:'2013-07-18' },
			{ version:'0.1', date:'2013-08-06' },
			{ version:'1', date:'2013-09-26' },
			{ version:'2', date:'2013-10-31' },
			{ version:'3', date:'2013-12-08' },
			{ version:'3.2', date:'2013-12-21' },
			{ version:'3.3', date:'2014-01-09' },
			{ version:'3.4', date:'2014-01-17' },
			{ version:'3.5', date:'2014-01-25' },
			{ version:'3.9', date:'2015-06-01' },
			{ version:'3.9.1', date:'2016-02-08' },
			{ version:'4.0.0', date:'2018-01-01' },
		]
	},
	{
		name: 'Webpack1',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#8DD6F9',
		list: [
			{ version:'0.1', date:'2012-03-11' },
			{ version:'0.8', date:'2012-11-14' },
			{ version:'0.9', date:'2013-03-11' },
			{ version:'0.10', date:'2013-06-19' },
			{ version:'1', date:'2014-02-19', type:'main' },
			{ version:'1.3.4', date:'2014-08-25' },
			{ version:'1.5', date:'2015-01-17' },
			{ version:'1.6', date:'2015-02-23' },
			{ version:'1.7', date:'2015-03-03' },
			{ version:'1.8', date:'2015-04-07' },
			{ version:'1.9', date:'2015-05-10' },
			{ version:'1.10', date:'2015-06-27' },
			{ version:'1.11', date:'2015-08-06' },
			{ version:'1.12', date:'2015-08-25' },
			{ version:'1.13', date:'2016-04-15' },
			{ version:'1.14', date:'2016-12-07' },
			{ version:'1.15', date:'2017-04-13' }
		]
	},
	{
		name: 'Webpack2',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#8DD6F9',
		list: [
			{ version: '2.0b', date:'2015-11-01'},
			{ version: '2.1b', date:'2016-02-22'},
			{ version: '2.2', date:'2017-01-17'},
			{ version: '2.3', date:'2017-03-21'},
			{ version: '2.4.0', date:'2017-04-14'},
			{ version: '2.5.0', date:'2017-05-04'},
			{ version: '2.6.0', date:'2017-05-22'},
			{ version: '2.7.0', date:'2017-07-12'}
		]
	},
	{
		name: 'Webpack3',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#8DD6F9',
		list: [
			{ version: '3.0.0', date:'2017-06-19'},
			{ version: '3.1.0', date:'2017-07-06'},
			{ version: '3.2.0', date:'2017-07-11'},
			{ version: '3.3.0', date:'2017-07-15'},
			{ version: '3.4.0', date:'2017-07-25'},
			{ version: '3.5.0', date:'2017-08-08'},
			{ version: '3.6.0', date:'2017-09-15'},
			{ version: '3.7.0', date:'2017-10-11'},
			{ version: '3.8.0', date:'2017-10-17'},
			{ version: '3.9.0', date:'2017-11-30'},
			{ version: '3.10.0', date:'2017-12-04'},
			{ version: '3.11.0', date:'2018-02-10'},
			{ version: '3.12.0', date:'2018-05-11'}
		]
	},
	{
		name: 'Webpack4',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#8DD6F9',
		list: [
			{ version: '4.0.0', date:'2018-02-25'},
			{ version: '4.1.0', date:'2018-03-04'},
			{ version: '4.2.0', date:'2018-03-21'},
			{ version: '4.3.0', date:'2018-03-27'},
			{ version: '4.4.0', date:'2018-03-29'},
			{ version: '4.5.0', date:'2018-04-04'},
			{ version: '4.6.0', date:'2018-04-17'},
			{ version: '4.7.0', date:'2018-05-04'},
			{ version: '4.8.0', date:'2018-05-07'},
			{ version: '4.9.0', date:'2018-05-25'},
			{ version: '4.10.0', date:'2018-05-28'},
			{ version: '4.11.0', date:'2018-06-05'},
			{ version: '4.12.0', date:'2018-06-08'},
			{ version: '4.13.0', date:'2018-06-28'},
			{ version: '4.14.0', date:'2018-06-29'},
			{ version: '4.15.0', date:'2018-07-04'},
			{ version: '4.16.0', date:'2018-07-11'},
			{ version: '4.17.0', date:'2018-08-21'},
			{ version: '4.17.2', date:'2018-09-03'}
		]
	},
	{
		name: 'Rollup',
		xRange: [9999],
		refer: 'https://rollupjs.org',
		color: '#2B3A42',
		list: [
			{ version: '0.1.0', date:'2015-05-14'},
			{ version: '0.4.0', date:'2015-05-22'},
			{ version: '0.8.0', date:'2015-06-16'},
			{ version: '0.12.0', date:'2015-07-27'},
			{ version: '0.16.0', date:'2015-09-19'},
			{ version: '0.20.0', date:'2015-10-25'},
			{ version: '0.24.0', date:'2016-01-03'},
			{ version: '0.28.0', date:'2016-06-08'},
			{ version: '0.32.0', date:'2016-06-19'},
			{ version: '0.36.0', date:'2016-09-18'},
			{ version: '0.40.0', date:'2017-01-03'},
			{ version: '0.44.0', date:'2017-07-10'},
			{ version: '0.48.0', date:'2017-08-20'},
			{ version: '0.52.0', date:'2017-11-25'},
			{ version: '0.56.0', date:'2018-02-15'},
			{ version: '0.60.0', date:'2018-06-06'},
			{ version: '0.64.0', date:'2018-08-07'},
			{ version: '0.65.2', date:'2018-09-05'}
		]
	},
	{
		name: 'Mocha',
		xRange: [9999],
		refer: 'https://mochajs.org/',
		color: '#c29d7f',
		list: [
			{ version: '0.0.1', date: '2011-11-22'},
			{ version: '0.1.0', date: '2011-11-29'},
			{ version: '0.4.0', date: '2011-12-15'},
			{ version: '0.8.0', date: '2011-12-28'},
			{ version: '0.12.0', date: '2012-02-09'},
			{ version: '1.0.0', date: '2012-03-24'},
			{ version: '1.4.0', date: '2012-08-23'},
			{ version: '1.8.0', date: '2013-01-08'},
			{ version: '1.12.0', date: '2013-07-01'},
			{ version: '1.16.0', date: '2013-12-19'},
			{ version: '1.20.0', date: '2014-05-28'},
			{ version: '2.0.0', date: '2014-10-22'},
			{ version: '2.5.0', date: '2016-05-23'},
			{ version: '3.0.0', date: '2016-08-01'},
			{ version: '3.1.0', date: '2016-09-27'},
			{ version: '3.2.0', date: '2016-11-24'},
			{ version: '3.3.0', date: '2017-04-24'},
			{ version: '3.4.0', date: '2017-05-14'},
			{ version: '3.5.0', date: '2017-07-31'},
			{ version: '4.0.0', date: '2017-10-03'},
			{ version: '4.1.0', date: '2017-12-29'},
			{ version: '5.0.0', date: '2018-01-18'},
			{ version: '5.1.0', date: '2018-04-12'},
			{ version: '5.2.0', date: '2018-05-18'}
		]
	},
	{
		name: 'Jasmine',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#2B3A42',
		list: [
			{ version: '2.0.1', date: '2014-08-22'},
			{ version: '2.1.0', date: '2014-11-14'},
			{ version: '2.1.1', date: '2014-12-01'},
			{ version: '2.2.0', date: '2015-02-02'},
			{ version: '2.2.1', date: '2015-02-06'},
			{ version: '2.3.0', date: '2015-04-28'},
			{ version: '2.3.1', date: '2015-05-02'},
			{ version: '2.3.2', date: '2015-08-03'},
			{ version: '2.4.0', date: '2015-12-03'},
			{ version: '2.4.1', date: '2015-12-03'},
			{ version: '2.5.0', date: '2016-08-31'},
			{ version: '2.5.1', date: '2016-09-07'},
			{ version: '2.5.2', date: '2016-09-17'},
			{ version: '2.5.3', date: '2017-01-12'},
			{ version: '2.6.0', date: '2017-04-24'},
			{ version: '2.7.0', date: '2017-07-28'},
			{ version: '2.8.0', date: '2017-08-24'},
			{ version: '2.9.0', date: '2018-01-18'},
			{ version: '2.99.0', date: '2018-02-06'},
			{ version: '3.0.0', date: '2018-02-06'},
			{ version: '3.1.0', date: '2018-02-27'},
			{ version: '3.2.0', date: '2018-08-09' }
		]
	},
	{
		name: 'Babel',
		xRange: [9999, 9999],
		refer: 'https://webpack.js.org/',
		color: '#2B3A42',
		list: [
			{ version:'0.0.1', date:'2013-03-16'},
			{ version:'0.0.2', date:'2013-05-09'},
			{ version:'4.0.1', date:'2015-02-15'},
			// { version:'4.0.2', date:'2015-02-17'},
			// { version:'4.1.1', date:'2015-02-17'},
			// { version:'4.2.0', date:'2015-02-18'},
			// { version:'4.2.1', date:'2015-02-18'},
			// { version:'4.3.0', date:'2015-02-18'},
			// { version:'4.4.1', date:'2015-02-21'},
			// { version:'4.4.2', date:'2015-02-21'},
			// { version:'4.4.3', date:'2015-02-21'},
			// { version:'4.4.4', date:'2015-02-22'},
			// { version:'4.4.5', date:'2015-02-22'},
			// { version:'4.4.6', date:'2015-02-24'},
			// { version:'4.5.0', date:'2015-02-25'},
			// { version:'4.5.1', date:'2015-02-25'},
			// { version:'4.5.2', date:'2015-02-25'},
			// { version:'4.5.3', date:'2015-02-25'},
			// { version:'4.5.4', date:'2015-02-25'},
			// { version:'4.5.5', date:'2015-02-26'},
			// { version:'4.6.0', date:'2015-02-27'},
			// { version:'4.6.1', date:'2015-02-28'},
			// { version:'4.6.3', date:'2015-03-01'},
			// { version:'4.6.4', date:'2015-03-02'},
			// { version:'4.6.5', date:'2015-03-02'},
			// { version:'4.6.6', date:'2015-03-03'},
			// { version:'4.7.0', date:'2015-03-06'},
			// { version:'4.7.1', date:'2015-03-06'},
			// { version:'4.7.2', date:'2015-03-07'},
			// { version:'4.7.3', date:'2015-03-07'},
			// { version:'4.7.4', date:'2015-03-09'},
			// { version:'4.7.5', date:'2015-03-10'},
			// { version:'4.7.6', date:'2015-03-10'},
			// { version:'4.7.7', date:'2015-03-10'},
			// { version:'4.7.8', date:'2015-03-10'},
			// { version:'4.7.9', date:'2015-03-13'},
			{ version:'4.7.10', date:'2015-03-13'},
			// { version:'4.7.11', date:'2015-03-13'},
			// { version:'4.7.12', date:'2015-03-13'},
			// { version:'4.7.13', date:'2015-03-17'},
			// { version:'4.7.14', date:'2015-03-18'},
			// { version:'4.7.15', date:'2015-03-18'},
			// { version:'4.7.16', date:'2015-03-18'},
			{ version:'5.0.0', date:'2015-04-02'},
			// { version:'5.0.1', date:'2015-04-02'},
			// { version:'5.0.2', date:'2015-04-02'},
			// { version:'5.0.3', date:'2015-04-03'},
			// { version:'5.0.4', date:'2015-04-03'},
			// { version:'5.0.5', date:'2015-04-03'},
			// { version:'5.0.6', date:'2015-04-03'},
			// { version:'5.0.7', date:'2015-04-03'},
			// { version:'5.0.8', date:'2015-04-04'},
			// { version:'5.0.9', date:'2015-04-06'},
			// { version:'5.0.10', date:'2015-04-07'},
			// { version:'5.0.11', date:'2015-04-08'},
			// { version:'5.0.12', date:'2015-04-08'},
			{ version:'5.0.13', date:'2015-04-13'},
			{ version:'5.1.0', date:'2015-04-13'},
			// { version:'5.1.1', date:'2015-04-13'},
			// { version:'5.1.2', date:'2015-04-13'},
			// { version:'5.1.3', date:'2015-04-13'},
			// { version:'5.1.4', date:'2015-04-13'},
			// { version:'5.1.5', date:'2015-04-13'},
			// { version:'5.1.6', date:'2015-04-13'},
			// { version:'5.1.7', date:'2015-04-13'},
			// { version:'5.1.8', date:'2015-04-13'},
			// { version:'5.1.9', date:'2015-04-14'},
			// { version:'5.1.10', date:'2015-04-15'},
			// { version:'5.1.11', date:'2015-04-20'},
			// { version:'5.1.12', date:'2015-04-25'},
			// { version:'5.1.13', date:'2015-04-25'},
			{ version:'5.2.0', date:'2015-04-30'},
			// { version:'5.2.1', date:'2015-04-30'},
			// { version:'5.2.2', date:'2015-04-30'},
			// { version:'5.2.3', date:'2015-05-01'},
			// { version:'5.2.4', date:'2015-05-01'},
			// { version:'5.2.5', date:'2015-05-01'},
			// { version:'5.2.6', date:'2015-05-01'},
			// { version:'5.2.7', date:'2015-05-03'},
			// { version:'5.2.9', date:'2015-05-04'},
			// { version:'5.2.10', date:'2015-05-04'},
			// { version:'5.2.11', date:'2015-05-04'},
			// { version:'5.2.12', date:'2015-05-04'},
			// { version:'5.2.13', date:'2015-05-05'},
			// { version:'5.2.14', date:'2015-05-05'},
			// { version:'5.2.15', date:'2015-05-05'},
			// { version:'5.2.16', date:'2015-05-06'},
			// { version:'5.2.17', date:'2015-05-07'},
			{ version:'5.3.0', date:'2015-05-12'},
			// { version:'5.3.1', date:'2015-05-13'},
			// { version:'5.3.2', date:'2015-05-13'},
			// { version:'5.3.3', date:'2015-05-13'},
			{ version:'5.4.0', date:'2015-05-14'},
			// { version:'5.4.1', date:'2015-05-15'},
			// { version:'5.4.2', date:'2015-05-15'},
			// { version:'5.4.3', date:'2015-05-16'},
			// { version:'5.4.4', date:'2015-05-20'},
			// { version:'5.4.5', date:'2015-05-21'},
			// { version:'5.4.6', date:'2015-05-21'},
			// { version:'5.4.7', date:'2015-05-21'},
			{ version:'5.5.0', date:'2015-06-05'},
			// { version:'5.5.1', date:'2015-06-05'},
			// { version:'5.5.2', date:'2015-06-05'},
			// { version:'5.5.3', date:'2015-06-05'},
			// { version:'5.5.4', date:'2015-06-05'},
			// { version:'5.5.5', date:'2015-06-08'},
			// { version:'5.5.6', date:'2015-06-09'},
			// { version:'5.5.7', date:'2015-06-13'},
			// { version:'5.5.8', date:'2015-06-13'},
			{ version:'5.6.0', date:'2015-06-20'},
			// { version:'5.6.1', date:'2015-06-20'},
			// { version:'5.6.2', date:'2015-06-21'},
			// { version:'5.6.3', date:'2015-06-22'},
			// { version:'5.6.4', date:'2015-06-22'},
			// { version:'5.6.5', date:'2015-06-24'},
			// { version:'5.6.6', date:'2015-06-24'},
			// { version:'5.6.7', date:'2015-06-25'},
			// { version:'5.6.8', date:'2015-06-25'},
			// { version:'5.6.9', date:'2015-06-25'},
			// { version:'5.6.10', date:'2015-06-26'},
			// { version:'5.6.11', date:'2015-06-26'},
			// { version:'5.6.12', date:'2015-06-26'},
			// { version:'5.6.14', date:'2015-06-26'},
			// { version:'5.6.23', date:'2015-07-15'},
			{ version:'5.8.2', date:'2015-07-21'},
			// { version:'5.8.3', date:'2015-07-21'},
			// { version:'5.8.4', date:'2015-07-24'},
			// { version:'5.8.5', date:'2015-07-24'},
			// { version:'5.8.6', date:'2015-07-26'},
			// { version:'5.8.8', date:'2015-07-26'},
			// { version:'5.8.9', date:'2015-07-26'},
			// { version:'5.8.12', date:'2015-07-28'},
			// { version:'5.8.19', date:'2015-07-29'},
			// { version:'5.8.20', date:'2015-07-31'},
			// { version:'5.8.21', date:'2015-08-05'},
			// { version:'5.8.23', date:'2015-08-27'},
			// { version:'5.8.29', date:'2015-10-24'},
			{ version:'6.0.0', date:'2015-10-29'},
			// { version:'6.0.2', date:'2015-10-29'},
			// { version:'6.0.12', date:'2015-10-30'},
			// { version:'6.0.14', date:'2015-10-30'},
			// { version:'6.0.15', date:'2015-11-01'},
			// { version:'5.8.34', date:'2015-11-12'},
			{ version:'6.1.5', date:'2015-11-12'},
			// { version:'6.1.6', date:'2015-11-12'},
			// { version:'6.1.7', date:'2015-11-12'},
			// { version:'6.1.8', date:'2015-11-12'},
			// { version:'6.1.9', date:'2015-11-12'},
			// { version:'6.1.10', date:'2015-11-12'},
			// { version:'6.1.11', date:'2015-11-12'},
			// { version:'6.1.12', date:'2015-11-12'},
			// { version:'6.1.13', date:'2015-11-12'},
			// { version:'6.1.14', date:'2015-11-12'},
			// { version:'6.1.15', date:'2015-11-12'},
			// { version:'6.1.16', date:'2015-11-12'},
			// { version:'6.1.17', date:'2015-11-12'},
			// { version:'6.1.18', date:'2015-11-12'},
			{ version:'6.2.4', date:'2015-11-25'},
			{ version:'6.3.13', date:'2015-12-04'},
			{ version:'6.3.26', date:'2015-12-23'},
			{ version:'5.8.35', date:'2016-01-20'},
			{ version:'6.5.0', date:'2016-02-07'},
			{ version:'6.5.1', date:'2016-02-08'},
			{ version:'6.5.2', date:'2016-02-12'},
			{ version:'5.8.38', date:'2016-03-22'},
			{ version:'6.23.0', date:'2017-02-13'},
			{ version:'7.0.0', date:'2018-08-27'},
		]
	},
	{
		// 버전별 분기 필요
		name: 'Dojo',
		xRange: [9999],
		refer: 'https://en.wikipedia.org/wiki/Dojo_Toolkit',
		color: '#888888',
		list: [
			{ version:'0.1', date:'2005-08-30' },
			{ version:'0.2', date:'2005-12-14' },
			{ version:'0.3', date:'2006-05-12' },
			{ version:'0.4', date:'2006-11-05' },
			{ version:'0.9', date:'2007-09-14' },
			{ version:'1.0', date:'2007-11-05' },
			{ version:'1.1', date:'2008-03-26' },
			{ version:'1.2', date:'2008-10-02' },
			{ version:'1.3', date:'2009-03-26' },
			{ version:'1.4', date:'2009-12-07' },
			{ version:'1.4.4', date:'2012-06-22' },
			{ version:'1.5', date:'2010-07-22' },
			{ version:'1.6', date:'2011-03-15' },
			{ version:'1.7', date:'2011-10-27' },
			{ version:'1.8', date:'2012-08-15' },
			{ version:'1.9', date:'2013-05-01' },
			{ version:'1.10', date:'2014-06-13' },
			{ version:'2.0', date:'2018-05-02' },
		]
	},
];