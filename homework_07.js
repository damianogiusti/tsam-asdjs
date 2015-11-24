/**
*	QueueItem
*/
function QueueItem(i, p) {
	this.item = i;
	this.priority = p;
}

QueueItem.prototype.getItem = function() {
	return item;
};
QueueItem.prototype.setItem = function(val) {
	this.i = val;
};
QueueItem.prototype.getPriority = function() {
	return this.priority;
};
QueueItem.prototype.setPriority = function(val) {
	this.priority = val;
};

QueueItem.prototype.toString = function() {
	return [this.item, this.priority];
};

/**
*	PriorityQueue
*/
function PriorityQueue() {
	this.array = [];
}

PriorityQueue.prototype.enqueue = function(item) {

	if (this.isEmpty()) {
		this.array.push(item);
	}
	else {
		var i = 0;
		var inserted = false;

		while (i < this.array.length && !inserted) {
			if (item.getPriority() < this.array[i].getPriority()) {
				this.array.splice(i, 0, item);
				inserted = true;
				// console.log('inserted ' + item.toString() + ' at index ' + i);
			}
			i++;
		}

		if (!inserted)
			this.array.push(item);	
	}
};

PriorityQueue.prototype.dequeue = function() {
	var temp = this.array[0];
	this.array = this.array.slice(1);
	return temp;
};

PriorityQueue.prototype.front = function() {
	return this.array[0];
};

PriorityQueue.prototype.isEmpty = function() {
	return this.array.length == 0;
};

PriorityQueue.prototype.size = function() {
	return this.array.length;
};


/*
*	PriorityQueueC
*/
function PriorityQueueC(callback) {
	this.array = [];
	this.check = callback;
}

PriorityQueueC.prototype.enqueue = function(item) {

	if (this.isEmpty()) {
		this.array.push(item);
	}
	else {
		var i = 0;
		var inserted = false;

		while (i < this.array.length && !inserted) {
			if (this.check(item.getPriority(), this.array[i].getPriority())) {
				this.array.splice(i, 0, item);
				inserted = true;
				// console.log('inserted ' + item.toString() + ' at index ' + i);
			}
			i++;
		}

		if (!inserted)
			this.array.push(item);	
	}
};

PriorityQueueC.prototype.dequeue = function() {
	var temp = this.array[0];
	this.array = this.array.slice(1);
	return temp;
};

PriorityQueueC.prototype.front = function() {
	return this.array[0];
};

PriorityQueueC.prototype.isEmpty = function() {
	return this.array.length == 0;
};

PriorityQueueC.prototype.size = function() {
	return this.array.length;
};