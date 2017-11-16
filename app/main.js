(() => {

	'use strict';

	var array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	function init() {
		basicForeach();
		basicFilter();
		basicMap();
		basicStringModifier();
		basicEndString();
		basicReducer();
		basicObjectManipulation();
	}

	function basicForeach() {
		let times = _.times(10, () => {
			return _.random(100);
		});

		console.log(`Foreach + Random result: ${times}`);
	}

	function basicFilter() {
		let filter = _.filter(array, (n) => n <= 50);

		console.log(`Filter result: ${filter}`);
	}

	function basicMap() {
		let map = _.map(array, n => n * 1.432);

		console.log(`Map result: ${map}`);
	}

	function basicStringModifier() {
		let uppercase = _.toUpper('uppercase');
		let lowercase = _.toLower('LOWERCASE');
		let capitalize = _.capitalize('CAPITALIZE');
		let camelcase = _.camelCase('camel case');

		console.log(`String modifier results: ${uppercase} - ${lowercase} - ${capitalize} - ${camelcase}`);
	}

	function basicEndString() {
		let firstContent = _.endsWith('content', 'a');
		let secondContent = _.endsWith('try', 'y');
		let thirdContent = _.endsWith('lemonade', 'e');

		console.log(`String ends with results: ${firstContent} - ${secondContent} - ${thirdContent}`);
	}

	function basicReducer() {
		let resultCollection = _.reduce(array, (op, n) => (op + n), 0 );

		console.log(`Reducer result: ${resultCollection}`);
	}

	function basicObjectManipulation() {
		let object = { a: 10, b: 3, c: 7, d: 1, e: 0 }
		let pick = _.pick(object, 'd');
		let omit = JSON.stringify(_.omit(object, ['b', 'd']));
		let toJson = JSON.stringify(pick);
		let toArray = _.values(object);

		console.log(`Object manipulation result: ${pick}`);
		console.log(`Object to JSON result: ${toJson}`);
		console.log(`Object to Array result: ${toArray}`);
		console.log(`Object omiting result: ${omit}`);
	}

	init();
})();