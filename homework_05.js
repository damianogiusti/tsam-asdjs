// Damiano Giusti


function rpn(expression) {

	function operation(string) {
		switch (string) {
			case '+':
				return (a,b) => a+b;
			case '-':
				return (a,b) => b-a;
			case '*':
				return (a,b) => a*b;
			case '/':
				return (a,b) => b/a;
		}
	}

	var array = expression.trim().split(' ');
	var stack = new Stack();

	array.forEach(function(x) {
		if (x.match('[0-9]') == null) {	// se ho un operando
			var foo = operation(x);
			stack.push(	foo(parseInt(stack.pop(), 10), 
							parseInt(stack.pop(), 10))
						);
		}
		else {	// se ho un numero
			stack.push(parseInt(x, 10));
		}
	});

	return stack.pop();

}

// STACK OBJECT

function Stack () {
	this.array = [];
	
}

Stack.prototype.push = function(e){
	this.array[this.array.length] = e;
};

Stack.prototype.pop = function(){
	var temp = this.array[this.array.length - 1];
	this.array.splice(this.array.length - 1, 1);
	return temp;
};

Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
};

Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
};

Stack.prototype.popAll = function(foo){
	while(!this.isEmpty()) {
		foo(this.pop());
	}
}

