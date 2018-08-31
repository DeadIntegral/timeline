(function(){
const init = {
	between: 240,
	firstYear: 2005,
	lastYear: 2018
}
const data = [
	{
		name: 'JQuery',
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
		xRange: [9999],
		yRange: [-40, 0],
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
			{ version:'0.1', date:'2012-01-12' },
			{ version:'0.2', date:'2012-01-22' },
			{ version:'0.3', date:'2012-03-23' },
			{ version:'0.4', date:'2013-02-18' },
			{ version:'0.4.2', date:'2013-11-21' },
			{ version:'0.4.5', date:'2014-05-12' },
			{ version:'1', date:'2016-04-04' },
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
		name: 'Webpack',
		xRange: [9999],
		refer: 'https://webpack.js.org/',
		color: '#2B3A42',
		list: [
			{ version:'0.1', date:'2012-03-11' },
			{ version:'0.8', date:'2012-11-14' },
			{ version:'0.9', date:'2013-03-11' },
			{ version:'0.10', date:'2013-06-19' },
			{ version:'1', date:'2014-02-19', type:'main' },
			{ version:'1.3.4', date:'2014-08-25' },
			{ version:'1.5', date:'2015-01-17' },
		]
	},
	{
		name: 'Mocha',
		xRange: [9999],
		refer: 'https://mochajs.org/',
		color: '#c29d7f',
		list: [
			{ version: '0.0.1', date: '2011-11-22'},
			{ version: '0.0.2', date: '2011-11-23'},
			{ version: '0.0.3', date: '2011-11-24'},
			{ version: '0.0.4', date: '2011-11-24'},
			{ version: '0.0.5', date: '2011-11-25'},
			{ version: '0.0.6', date: '2011-11-25'},
			{ version: '0.0.7', date: '2011-11-25'},
			{ version: '0.0.8', date: '2011-11-25'},
			{ version: '0.1.0', date: '2011-11-29'},
			{ version: '0.2.0', date: '2011-11-30'},
			{ version: '0.3.0', date: '2011-12-04'},
			{ version: '0.3.1', date: '2011-12-04'},
			{ version: '0.3.2', date: '2011-12-05'},
			{ version: '0.3.3', date: '2011-12-08'},
			{ version: '0.3.4', date: '2011-12-09'},
			{ version: '0.3.6', date: '2011-12-09'},
			{ version: '0.4.0', date: '2011-12-15'},
			{ version: '0.5.0', date: '2011-12-15'},
			{ version: '0.6.0', date: '2011-12-18'},
			{ version: '0.7.0', date: '2011-12-18'},
			{ version: '0.7.1', date: '2011-12-22'},
			{ version: '0.8.0', date: '2011-12-28'},
			{ version: '0.8.1', date: '2011-12-30'},
			{ version: '0.9.0', date: '2012-01-05'},
			{ version: '0.10.0', date: '2012-01-13'},
			{ version: '0.10.1', date: '2012-01-17'},
			{ version: '0.10.2', date: '2012-01-21'},
			{ version: '0.11.0', date: '2012-02-03'},
			{ version: '0.12.0', date: '2012-02-09'},
			{ version: '0.12.1', date: '2012-02-15'},
			{ version: '0.13.0', date: '2012-02-24'},
			{ version: '0.14.0', date: '2012-03-01'},
			{ version: '0.14.1', date: '2012-03-06'},
			{ version: '1.0.0', date: '2012-03-24'},
			{ version: '1.0.1', date: '2012-04-04'},
			{ version: '1.0.2', date: '2012-04-25'},
			{ version: '1.0.3', date: '2012-04-30'},
			{ version: '1.1.0', date: '2012-05-31'},
			{ version: '1.2.0', date: '2012-06-17'},
			{ version: '1.2.1', date: '2012-06-25'},
			{ version: '1.2.2', date: '2012-06-28'},
			{ version: '1.3.0', date: '2012-07-05'},
			{ version: '1.3.1', date: '2012-08-01'},
			{ version: '1.3.2', date: '2012-08-01'},
			{ version: '1.4.0', date: '2012-08-23'},
			{ version: '1.4.1', date: '2012-08-28'},
			{ version: '1.4.2', date: '2012-09-01'},
			{ version: '1.4.3', date: '2012-09-21'},
			{ version: '1.5.0', date: '2012-09-21'},
			{ version: '1.6.0', date: '2012-10-02'},
			{ version: '1.7.0', date: '2012-11-07'},
			{ version: '1.7.1', date: '2012-11-23'},
			{ version: '1.7.2', date: '2012-11-29'},
			{ version: '1.7.3', date: '2012-11-30'},
			{ version: '1.7.4', date: '2012-12-06'},
			{ version: '1.8.0', date: '2013-01-08'},
			{ version: '1.8.1', date: '2013-01-30'},
			{ version: '1.8.2', date: '2013-03-11'},
			{ version: '1.9.0', date: '2013-04-03'},
			{ version: '1.10.0', date: '2013-05-22'},
			{ version: '1.11.0', date: '2013-06-12'},
			{ version: '1.12.0', date: '2013-07-01'},
			{ version: '1.12.1', date: '2013-08-30'},
			{ version: '1.13.0', date: '2013-09-15'},
			{ version: '1.14.0', date: '2013-11-03'},
			{ version: '1.15.0', date: '2013-12-02'},
			{ version: '1.15.1', date: '2013-12-03'},
			{ version: '1.16.0', date: '2013-12-19'},
			{ version: '1.16.1', date: '2013-12-20'},
			{ version: '1.16.2', date: '2013-12-23'},
			{ version: '1.17.0', date: '2014-01-09'},
			{ version: '1.17.1', date: '2014-01-22'},
			{ version: '1.18.0', date: '2014-03-14'},
			{ version: '1.18.1', date: '2014-03-18'},
			{ version: '1.18.2', date: '2014-03-18'},
			{ version: '1.19.0', date: '2014-05-18'},
			{ version: '1.20.0', date: '2014-05-28'},
			{ version: '1.20.1', date: '2014-06-04'},
			{ version: '1.21.0', date: '2014-07-24'},
			{ version: '1.21.1', date: '2014-07-27'},
			{ version: '1.21.2', date: '2014-07-28'},
			{ version: '1.21.3', date: '2014-07-28'},
			{ version: '1.21.4', date: '2014-08-06'},
			{ version: '1.21.5', date: '2014-10-11'},
			{ version: '2.0.0', date: '2014-10-22'},
			{ version: '2.0.1', date: '2014-10-23'},
			{ version: '2.1.0', date: '2014-12-23'},
			{ version: '2.2.0', date: '2015-03-07'},
			{ version: '2.2.1', date: '2015-03-09'},
			{ version: '2.2.3', date: '2015-04-07'},
			{ version: '2.2.4', date: '2015-04-08'},
			{ version: '2.2.5', date: '2015-05-14'},
			{ version: '2.3.0', date: '2015-08-31'},
			{ version: '2.3.1', date: '2015-09-07'},
			{ version: '2.3.2', date: '2015-09-08'},
			{ version: '2.3.3', date: '2015-09-21'},
			{ version: '2.3.4', date: '2015-11-15'},
			{ version: '2.4.1', date: '2016-01-26'},
			{ version: '2.4.2', date: '2016-01-27'},
			{ version: '2.4.3', date: '2016-01-27'},
			{ version: '2.4.4', date: '2016-01-27'},
			{ version: '2.4.5', date: '2016-01-28'},
			{ version: '2.5.0', date: '2016-05-23'},
			{ version: '2.5.1', date: '2016-05-23'},
			{ version: '2.5.2', date: '2016-05-24'},
			{ version: '2.5.3', date: '2016-05-25'},
			{ version: '3.0.0', date: '2016-08-01'},
			{ version: '3.0.1', date: '2016-08-04'},
			{ version: '3.0.2', date: '2016-08-08'},
			{ version: '3.1.0', date: '2016-09-27'},
			{ version: '3.1.1', date: '2016-10-10'},
			{ version: '3.1.2', date: '2016-10-11'},
			{ version: '3.2.0', date: '2016-11-24'},
			{ version: '3.3.0', date: '2017-04-24'},
			{ version: '3.4.0', date: '2017-05-14'},
			{ version: '3.4.1', date: '2017-05-14'},
			{ version: '3.4.2', date: '2017-05-24'},
			{ version: '3.5.0', date: '2017-07-31'},
			{ version: '3.5.1', date: '2017-09-10'},
			{ version: '3.5.2', date: '2017-09-10'},
			{ version: '3.5.3', date: '2017-09-11'},
			{ version: '4.0.0', date: '2017-10-03'},
			{ version: '4.0.1', date: '2017-10-06'},
			{ version: '4.1.0', date: '2017-12-29'},
			{ version: '5.0.0', date: '2018-01-18'},
			{ version: '5.0.1', date: '2018-02-13'},
			{ version: '5.0.2', date: '2018-03-06'},
			{ version: '5.0.3', date: '2018-03-07'},
			{ version: '5.0.4', date: '2018-03-07'},
			{ version: '5.0.5', date: '2018-03-23'},
			{ version: '5.1.0', date: '2018-04-12'},
			{ version: '5.1.1', date: '2018-04-18'},
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
const lineCalculator = (date1, date2) => {
	return ~~((new Date(date1+'') - new Date(date2+'')) / (86400 * 1000 * 365) * init.between);
}

const str = data.map(prog => {
	let lineX1 = lineCalculator(prog.list[0].date, init.firstYear);
	lineX1 = lineX1 <= prog.xRange[0] ? lineX1 : prog.xRange[0];
	let lineX2 = lineCalculator(prog.list[prog.list.length - 1].date, init.firstYear);
	lineX2 = prog.xRange[1] ? prog.xRange[1] : lineX2;
	const lineColor = prog.color;
	const secondLine = prog.yRange ? `<line stroke="${ lineColor }" x1="${ lineX1 }" x2="${ lineX1 }" y1="${ prog.yRange[0] }" y2="${ prog.yRange[1] }" />` : '';
	return `<g id="${ prog.name }">
		<a xlink:href="${ prog.refer }">
			<text x="${ lineX1-5 }" y="-15" class="pro-name">${ prog.name }</text>
		</a>
		<line stroke="${ lineColor }" x1="${ lineX1 }" x2="${ lineX2 }" y="50" />
		${ secondLine }`
		+ prog.list.map(item => {
			const cx = lineCalculator(item.date, init.firstYear);
			const vType = item.type ? 'version' : 'sub-version';
			return `
				<circle stroke="${ lineColor }" cx="${ cx }" r="10" />
				<text x="${ cx }" y="3" r="10" class="${ vType }">${ item.version }</text>
			`;
		})
		+`</g>`;
}).join('');

const yearGroup = `<g id="yearLabel">
${ [...Array(init.lastYear - init.firstYear + 1).keys()].map((v,i) => `<text x="${i*init.between}">${init.firstYear+i}</text>` ).join('') }
</g>`;

const draw = `
<pattern id="bgLine" patternUnits="userSpaceOnUse" width="${ init.between }" height="100%">
	<line x1="0" x2="0" y2="100%" stroke="#CCC" />
</pattern>`+
yearGroup+
str+
`<g id="content">
	<use x="${ init.between }" y="20" xlink:href="#yearLabel" />
	<use x="${ init.between }" y="100%" transform="translate(0, -20)" xlink:href="#yearLabel" />

	<use x="0" y="100" xlink:href="#JQuery" />
	<use x="0" y="140" xlink:href="#JQuery2.x" />
	<use x="0" y="180" xlink:href="#JQuery3.x" />
	
	<use x="0" y="230" xlink:href="#backbone" />
	<use x="0" y="280" xlink:href="#knockout" />
	<use x="0" y="330" xlink:href="#ember" />
	<use x="0" y="380" xlink:href="#underscore" />

	<use x="0" y="500" xlink:href="#React" />
	<use x="0" y="600" xlink:href="#Vue" />
	<use x="0" y="640" xlink:href="#Vue1" />
	<use x="0" y="680" xlink:href="#Vue2" />

	<use x="0" y="730" xlink:href="#Angular1" />
	<use x="0" y="770" xlink:href="#Angular1.1" />
	<use x="0" y="810" xlink:href="#Angular1.3" />
	<use x="0" y="850" xlink:href="#Angular1.4" />
	<use x="0" y="730" xlink:href="#Angular1.5" />
	<use x="0" y="810" xlink:href="#Angular1.6" />
	<use x="0" y="770" xlink:href="#Angular1.7" />
	<use x="0" y="890" xlink:href="#Angular2" />
	<use x="0" y="930" xlink:href="#Angular4" />
	<use x="0" y="970" xlink:href="#Angular6" />

	<use x="0" y="1100" xlink:href="#Grunt" />
	<use x="0" y="1150" xlink:href="#Gulp" />
	<use x="0" y="1200" xlink:href="#Webpack" />

	<use x="0" y="1300" xlink:href="#Mocha" />
	<use x="0" y="1340" xlink:href="#Jasmine" />

	<use x="0" y="1500" xlink:href="#Dojo" />
</g>
<rect x="0" y="0" height="100%" width="100%" fill="#ffffff"/>
<rect x="0" y="0" height="100%" width="100%" style="fill: url(#bgLine);"/>
<use x="0" y="0" xlink:href="#content"/>
`;
document.querySelector('#mySvg').innerHTML = draw;
}());