# UnitTest

<br>

**Personal unit/utility test lib for JS**
<br>
<hr/>

### Utilities

**removeFalsy(data, deleteFlag)**<br>
Recursively remove falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.

- @param { any | any[] } data
- @param { boolean } deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
- @returns { typeof data | boolean } data | false



**mergeDeep(model, user)**<br>
Recursively merge user object in model object until user is empty. Keep [key : value] from model if not present in user. Add [key : value] from user if not present in model. If both are present, keep the one from user. <br>
<h4>RETURN MODEL REFERENCE OBJECT</h4>

- @param { Object } model
- @param { ...Object } user
- @returns { Object } merged object



<hr/>

### Performances

**syncTime(fc, parameters)**<br>
Sync Function to get the execution time of a function on console. Deep copy of parameters if object needed (will be implemented and added to the lib). Returns an object with a summary of the execution.

- @Sync
- @param { Function } fc Function to be executed
- @param { any | any[] } parameters Parameters of the function to be executed
- @returns { Object } return a summary object of the execution

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
