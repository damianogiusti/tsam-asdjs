// CIRCULAR QUEUE

function CircularQueue() {
	CircularQueue(100);
}

function CircularQueue(n) {
	this.length = n;
	this.top = 0;
	this.bottom = 0;
	this.array = [];
}

CircularQueue.prototype.enqueue = function(val) {
	this.array[this.bottom] = val;
	this.bottom = (this.bottom + 1) % this.length;
};

CircularQueue.prototype.dequeue = function() {
	var temp = this.array[this.top];
	this.array[this.top] = undefined;
	this.top = (this.top + 1) % this.length;
	return temp;
};

CircularQueue.prototype.front = function() {
	return this.array[this.top];
};

CircularQueue.prototype.isEmpty = function() {
	return this.top == this.bottom;
};

CircularQueue.prototype.size = function() {
	return Math.abs(this.bottom - this.top);
};