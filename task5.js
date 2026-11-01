let tv = {};
tv.currentChannel = 1;
tv.nextChannel = function() {
    this.currentChannel++;
};

tv.previousChannel = function() {
    this.currentChannel--;
};
tv.setChannel = function(number) {
    this.currentChannel = number;
};
tv.nextChannel();
console.log("После nextChannel():", tv.currentChannel); 

tv.previousChannel();
console.log("После previousChannel():", tv.currentChannel); 

tv.setChannel(5);
console.log("После setChannel(5):", tv.currentChannel); 
