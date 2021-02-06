# ng-simple-event-bus

A simple and lightweight library to trigger events through the Angular apps

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Instalation

Add `ng-simple-event-bus` to your dependencies by executing:
```bash
$ npm install --save ng-simple-event-bus
```

## Usage

### (Step 1) Add EventBusService to your application
Add `EventBusService` in providers array on your `app.module.ts`
```typescript
...
providers: [EventBusService],
...
```

### (Step 2) Inject the service
Just add the dependency injection for ```EventBusService``` on your component or service
```typescript
constructor(private event: EventBusService) { }
```
### (Step 3) Subscribe to events
Use the method `on()` passing an object with name and callback. This method will be executed when the event happens
```typescript
ngOnInit(){
	this.event.on({'Event Name',(payload: any) => {
			console.log(payload);
		}
	});
}
```

### (Step 4) Trigger the event
Call the `trigger()` function passing the name of the event and whatever you want to send to subscribers. All subscribers will be notified and receive the data.
```typescript
this.event.trigger('Event Name', 'It works!')
```

### (Step 5) Removing the listeners
And finally remove the listener from the bus when is not required anymore.
```typescript
ngOnDestroy() {
	this.event.off('Event Name')
}
```

## License
[MIT](https://github.com/shoul10/ng-simple-event-bus/blob/master/LICENSE)