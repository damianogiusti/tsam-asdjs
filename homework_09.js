function ricorsione1 (array) {
	if (array.length == 0)
		return 10;
	return 5 * array[0] + ricorsione1(array.slice(1));
}

function sumEvenSquareRec (array) {
	if (array.length == 0)
		return 0;

	if (array[0] % 2 == 0)
		return (array[0] * array[0]) + sumEvenSquareRec(array.slice(1));

	return sumEvenSquareRec(array.slice(1));
}

function ex_1a(array) {
	return ricorsione1(array);
}

function ex_1b(array) {
	return sumEvenSquareRec(array);
}

// --------------------------------------------------------------------- //

function sumEvenSquareFun (array) {
	
	return array.filter(x => x%2==0).map(x => x*x).reduce((acc, x) => acc + x);
}

function ex_2 (array) {
	return sumEvenSquareFun(array);
}

// --------------------------------------------------------------------- //

function stackOperations(array) {
	var stackEven = new Stack();
	var stackOdd  = new Stack();

	array.forEach(function(x) {
		if (x%2 == 0)
			stackEven.pop(x);
		else
			stackOdd.pop(x);
	});

	var stackResult = new Stack();
	while (!stackEven.isEmpty() && !stackOdd.isEmpty()) 
		stackResult.push(stackEven.pop() * stackOdd.pop());

	var result = 0;
	while (!stackResult.isEmpty())
		result += stackResult.pop();

	return result;
}

function ex_3 (array) {
	return stackOperations(array);
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

// --------------------------------------------------------------------- //

function ListItem (i, p, n) {
	this.item = i;
	this.previous = p;
	this.next = n;
}

function LinkedList () {
	this.index = null;
	this.length = 0;
}

LinkedList.prototype.append = function(i) {

	function appendItem (currentIndex, i) {
		if (currentIndex.next == null) 
			currentIndex.next = new ListItem(i, currentIndex, null);
		else 
			appendItem(currentIndex.next, i);
	}

	if (this.index == null)
		this.index = new ListItem(i, null, null);
	else
		appendItem(this.index, i);

	this.length ++;
};

LinkedList.prototype.add = function(index, e) {
	var attuale = this.index;
	while (--index > 0) 
		attuale = attuale.next;

	attuale.next = new ListItem(e, attuale, attuale.next);

	this.length ++;
};

LinkedList.prototype.get = function(i) {
	var attuale = this.index;
	while (i-- > 0)
		attuale = attuale.next;

	return attuale.item;
};

LinkedList.prototype.size = function() {
	return this.length;
};

// --------------------------------------------------------------------- //

/*
TREE

*/

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

BST.prototype.searchNode = function(e) {
	
	function searchNodeT(currentNode, e) {
		if (currentNode == null)
			return null;

		if (currentNode.item == e)
			return currentNode;

		if (e < currentNode.item) 
			return searchNodeT(currentNode.left, e);
		else
			return searchNodeT(currentNode.right, e);
	}

	return searchNodeT(this.root, e);
};
/*
var bst = new BST();
bst.add(20);
bst.add(30);
bst.add(10);
*/