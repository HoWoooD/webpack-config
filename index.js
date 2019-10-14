require('./styles.scss');

class Car {
	manufacture(car) {
		document.write(`I have a ${car}`)
	}
}

const bmv = new Car;

bmv.manufacture('bmv');