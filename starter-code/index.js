/*var SortedList = function() {};

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}
*/

class SortedList{
	
	constructor (list = []){
		this.items = list;
		this.length = this.items.length;
		//console.log(this.items);
	}
	
	add(x){
		
		let i = 0;
		
		while(x > this.items[i] && i < this.length){	
			i++;
		}
		
		this.length++;
		this.items.splice(i, 0 , x);
	}
	
	get(x){
		
		return this.items[x - 1];
		
	}
	
	max(){
		
		return this.items[this.length - 1];
		
	}
	
	min(){
		return this.items[0];
	}
	
	average(){
		
		if(this.length <= 0)
			return 0;
		
		return this.sum() / this.length;
	}
	
	sum(){
		let total = 0;
		
		for( let i = 0 ; i < this.length ; i++){
			total += this.items[i];
		}
		
		return total;
	}
	
}

var list = new SortedList();

console.log(list.length);

if(list instanceof SortedList)
{
	console.log("We are right b****");
}

/*list.add(3)
console.log(list.items);
console.log(list.get(4));
console.log(list.max());
console.log(list.min());
console.log(list.sum());
console.log(list.average());*/

module.exports = SortedList;