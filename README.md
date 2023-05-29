# My_lib

<br>
I used this functions in multiple project to test my code perfs or as utilities functions. I decided to put them in a library to use them more easily and to share them with the community. I'm adding more functions as I need them. Feel free to use them and to contribute to the project. <br>
<br><br>

🔴 : Not ready<br>
🟠 : Main function is ready, but some features are missing<br>
🟢 : Ready<br><br>

## Utilities

 <h3>🟢 removeFalsy(data, deleteFlag)</h3>
Recursively remove falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.

> @param { any | any[] } data<br>
> @param { boolean } deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.<br>
> @returns { typeof data | boolean } data | false<br><br>
<br><br>
<h3>🟠 mergeDeep(model, user)</h3>
Recursively merge user object in model object until user is empty. Keep [key : value] from model if not present in user. Add [key : value] from user if not present in model. If both are present, keep the one from user. <br>
<h4>RETURN MODEL REFERENCE OBJECT</h4>

> @param { Object } model<br>
> @param { ...Object } user<br>
> @returns { Object } merged object<br><br>
<br><br>
<h3>🟢 isObject(item)</h3>
Check if item is an object. Returns true if data is an object, false otherwise.

> @param { \* } data<br>
> @returns { boolean } true | false<br><br>

## Performances

<h3>🔴 syncTime(fc, parameters)</h3>
Sync Function to get the execution time of a function on console. Returns an object with a summary of the execution. Summary completion is done after the function execution 💔 . <br>

> @Sync
> @param { Function } fc Function to be executed<br>
> @param { any | any[] } parameters Parameters of the function to be executed<br>
> @returns { Object } return a summary object of the execution<br>

For this function sum :

```javascript
function sum(a: number, b: number): number {
  return a + b;
}
const summary = syncTime(sum, [5, 5]);
```

summary is equal to :

```javascript
{
  success: true,
  execution: 'sum with 2 parameters',
  parameters: [ 5, 5 ],
  return: 10,
  time: '0.0285 ms'
}
```
<br><br>