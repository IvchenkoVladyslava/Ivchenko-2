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
console.log("Після nextChannel():", tv.currentChannel); 
tv.previousChannel();
console.log("Після previousChannel():", tv.currentChannel);
tv.setChannel(5);
console.log("Після setChannel(5):", tv.currentChannel);
