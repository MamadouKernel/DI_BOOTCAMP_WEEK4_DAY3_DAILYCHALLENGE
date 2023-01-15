import { fromEvent, Observable } from 'rxjs';
function createFocusObservable(element: HTMLElement) {
    return new Observable(observer => {
        const focusEvent$ = fromEvent(element, 'focus');
        const blurEvent$ = fromEvent(element, 'blur');

        const focusSubscription = focusEvent$.subscribe(event => {
            observer.next('focused');
        });

        const blurSubscription = blurEvent$.subscribe(event => {
            observer.next('blurred');
        });

        return () => {
            focusSubscription.unsubscribe();
            blurSubscription.unsubscribe();
        }
    });
}
