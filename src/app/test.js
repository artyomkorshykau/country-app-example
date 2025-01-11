const myObj = {
	name: 'Artyom',
	greet() {
		console.log(this.name)
	},
}

myObj.greet()

const fn = myObj.greet.bind(myObj)
fn()

1,8,7,7,7,2,3,4,5,6,