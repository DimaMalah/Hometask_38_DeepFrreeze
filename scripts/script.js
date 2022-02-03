(function () {
	// 'use strict';
	let user = {
		data: {
			a: 1,
			b: 2,
			c: 3,
			d: {
				a1: 1,
				b1: 2,
				c1: 3,
				d1: {
					a2: 3,
					b2: 3,
					c2: 3,
				}
			},
		}
	}


	let deepFreeze = function (obj) {

		for (let key in obj) {
			console.log(obj[key]);

			if (typeof (obj[key]) !== "object") {
				Object.defineProperty(obj, `${key}`, {
					writable: false,
					configurable: false
				})
			} else {
				Object.defineProperty(obj, `${key}`, {
					writable: false,
					configurable: false
				})
				return deepFreeze(obj[key])
			}
		}
	};



	deepFreeze(user);

	// закоментировал 'use strict', чтоб легче было проверить
	user.data.a = 11;
	console.log(user);

	user.data = 11;
	console.log(user);


})()

