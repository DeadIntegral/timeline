(function(){
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

		<use x="0" y="1400" xlink:href="#Babel" />
		<use x="0" y="1500" xlink:href="#Dojo" />
	</g>
	<rect x="0" y="0" height="100%" width="100%" fill="#ffffff"/>
	<rect x="0" y="0" height="100%" width="100%" style="fill: url(#bgLine);"/>
	<use x="0" y="0" xlink:href="#content"/>
	`;
	document.querySelector('#mySvg').innerHTML = draw;
}());