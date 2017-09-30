
// Basic subject with multisubscribtion
        // var subject = new Rx.Subject();

        // subject.subscribe({
        //   next: (v) => console.log('observerA: ' + v)
        // });
        // subject.subscribe({
        //   next: (v) => console.log('observerB: ' + v)
        // });

        // subject.next('x');
        // subject.next('y');

// ----------------------------------------------------------------------------
          // var subject = new Rx.BehaviorSubject(0); // 0 is the initial value

          // subject.subscribe({
          //   next: (v) => console.log('observerA: ' + v)
          // });

          // subject.next(1);
          // subject.next(2);

          // subject.subscribe({
          //   next: (v) => console.log('observerB: ' + v)
          // });

          // subject.next(3);

// -------------------------------------------------------------------------------------

            // var subject = new Rx.ReplaySubject(3); // buffer 3 values for new subscribers

            // subject.subscribe({
            //   next: (v) => console.log('observerA: ' + v)
            // });

            // subject.next(1);
            // subject.next(2);
            // subject.next(3);
            // subject.next(4);

            // subject.subscribe({
            //   next: (v) => console.log('observerB: ' + v)
            // });

            // subject.next(5);
  //  -----------------------------------------------------------------------------------
  
  var subject = new Rx.AsyncSubject();
  
  subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
  });
  
  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);
  
  subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
  
  subject.next(5);
  subject.complete();