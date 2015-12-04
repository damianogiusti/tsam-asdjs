
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */


/***********************************************************************************
*
*	Esercizio Ricorsione 
*	Damiano Giusti
*/
function extractElements (array) {
	if (array.length == 0)
		return 0;

	if (array[0] == 5070)
		return 1 + extractElements(array.slice(1));

	return extractElements(array.slice(1));
}

/***********************************************************************************
*
*	Esercizio filter/map/reduce 
*	Damiano Giusti
*/
function mathOperations (array) {
	return Math.sqrt(array.filter(x => (x >= 0 && x % 2 == 0)).map(x => x*x).reduce((acc, x) => acc + x));
}


/***********************************************************************************
*
*	Esercizio Stack
*	Damiano Giusti
*/
function evaluateExpression (stringExpression) {

	function getOperator (string) {
		switch (string) {
			case '+': return (a, b) => (b + a);
			case '-': return (a, b) => (b - a);
			case '*': return (a, b) => (b * a);
			case '/': return (a, b) => (b / a);
			default: return null;
		}
	}

	var expression = stringExpression.split(' ');
	var numbersStack = new Stack();
	var operatorsStack = new Stack();

	for (var i = 0; i < expression.length; i++) {
		if (expression[i] != '(') {
			if (expression[i] == ')') {
				var operation = operatorsStack.pop();
				numbersStack.push(operation(numbersStack.pop(), numbersStack.pop()));
			} 
			else if (expression[i][0].match('[0-9]') != null)
				numbersStack.push(parseFloat(expression[i], 10));
			else if (expression[i][0].match('[0-9]') == null)
				operatorsStack.push(getOperator(expression[i]));
		}
	}

	return numbersStack.pop();
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


/***********************************************************************************
*
*	Tree
*	Damiano Giusti
*/
function maxValue (array) {
	
	var tree = new BST();
	array.forEach(x => tree.add(x));

	function maxValueR (currentNode) {
		if (currentNode.right == null)
			return currentNode.item;

		return maxValueR(currentNode.right);
	}

	return maxValueR(tree.root);
}



// BINARY SEARCH TREE OBJECT

function Node (i, l, r) {
	this.item = i;
	this.left = l;
	this.right = r;
}


/**
* Binary Search Tree
*/
function BST () {
	this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
	// <
	if (e < currentNode.item) {
		if (currentNode.left == null) {
			currentNode.left = new Node(e, null, null);
		} else {
			this.addNode(currentNode.left, e);
		}
	}

	// >=
	else {
		if (currentNode.right == null) {
			currentNode.right = new Node(e, null, null);
		} else {
			this.addNode(currentNode.right, e);
		}
	}
};

BST.prototype.add = function(e) {
	if (this.root == null) {
		this.root = new Node(e, null, null);
	} else {
		this.addNode(this.root, e);
	} 
};

BST.prototype.existNode = function(currentNode, e) {
	if (currentNode == null)
		return false;

	if (currentNode.item == e)
		return true;
	
	if (e < currentNode.item)
		return this.existNode(currentNode.left, e);
	else 
		return this.existNode(currentNode.right, e);
}

BST.prototype.exist = function(e) {
	return this.existNode(this.root, e);
};

BST.prototype.inOrder = function(node, callback) {
	if (node != null) {
		this.inOrder(node.left, callback);
		callback(node.item);
		this.inOrder(node.right, callback);
	}
};

BST.prototype.preOrder = function(node, callback) {
	if (node != null) {
		callback(node.item);
		this.preOrder(node.left, callback);
		this.preOrder(node.right, callback);
	}
};

BST.prototype.postOrder = function(node, callback) {
	if (node != null) {
		this.postOrder(node.left, callback);
		this.postOrder(node.right, callback);
		callback(node.item);
	}
};

