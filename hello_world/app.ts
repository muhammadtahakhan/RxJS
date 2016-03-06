import Rx = require('rxjs/Rx');
//first we require RXJS library,
//observable is the idea of feature values.
//Events and array both are collections
var observable = Rx.Observable.of('hello world');

 observable.subscribe(function(x) { console.log(x); });
