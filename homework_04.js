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

// programma
/*
Stack.prototype.dec2bin = function(num){
	
	if (num == 0)
		return '0';

	while (num > 0) {
		this.push(Math.floor(num % 2));
		num = Math.floor(num/2);
	}

	var result = '';
	while (!this.isEmpty()) {
		result += this.pop();
	}

	return result;
};*/

function dec2bin(num) {

	var stack = new Stack();

	if (num == 0)
		return '0';

	while (num > 0) {
		stack.push(Math.floor(num % 2));
		num = Math.floor(num/2);
	}

	/*var result = '';
	while (!stack.isEmpty()) {
		result += stack.pop();
	}*/

	var result = '';

	stack.popAll(function(x) { result += x.toString(); });
	return result;
}

function dec2bin_2(num) {
	
	function dec2bin_rec(stack, n) {
		if (n == 0)
			return stack;
		else {
			stack.push(Math.floor(n % 2));
			return dec2bin_rec(stack, Math.floor(n / 2));
		}
	}

	var result = '';
	bin2dec_rec(new Stack(), num).popAll(function(e) { result += e.toString(); });
	return result;
}
