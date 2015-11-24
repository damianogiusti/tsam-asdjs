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

function PriorityQueue() {
	
}

// ------------------------------------------------- //

function PriorityQueueC(i, p, callback){

	this.check = callback;
}

function callback(p1, p2) {
	/*
	-1	p1<p2
	0	p1==p2
	1	p1>p2
	*/
}