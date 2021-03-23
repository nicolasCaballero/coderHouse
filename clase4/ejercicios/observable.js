import { Observable } from 'rxjs';

const clock = new Observable(suscriber => {
    console.log(`In Observable`);

    const interval = setInterval(() => {
        suscriber.next(`tick`);
    }, 1000);

    return () => {
        console.log(`Unsubscribe Observable`);
        clearInterval(interval);
    };
});

const subscription = clock.suscribe(
    response => console.log(response),
    error => console.log(error),
    () => {
        console.log(`Complete Observable`);
    }
);

setTimeout(() => subscription.unsubscribe(), 10 * 1000);