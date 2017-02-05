var events = require('events');
var util = require('util');
// ex: event emmiter and util.

// create a class.
var Person = function(name){
  this.name = name;
};
// inherit events emitter
util.inherits(Person, events.EventEmitter);

// create instances of Person class.
var bob = new Person('bob');
var john = new Person('john');
var david = new Person('david');

var persons = [bob, john, david];

// create an event for each person instance.
persons.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + ' said: ' + msg);
  });
});

// emit event.
bob.emit('speak', 'whats up guys?');
john.emit('speak', 'I am fine, how are you?');
david.emit('speak', 'lets meet this weekend.');
