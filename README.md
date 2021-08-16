# Password Generator

> While building this Password Generator application,
> I learned how to work with checkbox using JavaScript
> and how to use setTimeout to hide the alert after certain time.
> Also I tried to implement asynchronous Clipboard API (This is an experimental technology, not supported by every browser)

| [Live Application (👆)](https://krishdu.github.io/Password-Generator) |
| ------|
<p align="center">
<img alt="GIF" src="https://github.com/krishdu/Password-Generator/blob/master/password-generator-image.gif?raw=true" width="800" height="400"/>
</p>

## ✨ My Thought Process ✨

+ UI
    + readonly input box to show the generated input
    + 1 input box (password length)
    + 4 is contain checkbox (uppercase, lowercase, number, symbol)
    + 1 Gennerate Password button 

```
phase 1 (GENERATE ONLY UPPERCASE RANDOM PASSWORD)
```
- Step 1:
    + Generate password button clicked:
        + if password length field blank show a alert to the user
        + otherwise take password length from user
- Step 2        
    + Include Uppercase letter
    + generate a random uppercase only password for the given length
    + display it to the readonly input box

```
phase 2 (GENERATE UPPERCASE INCLUDING OTHER OPTIONS RANDOM PASSWORD)
```

+ create a array to hold the superset 
  + run a loop till the user given password length 
    + if uppercase checkbox checked push UPPERCASE array to the superset (repeat this for each checkbox)
    + pick random character from the superset and concate with final result  

```
phase 3 (IMPLEMENT setTimeout FOR ALERT MESSAGES)
```
+ whenever a sucessMessage function call, it will call setTimeout WebApi and set a callback function.
+ And the callback function will fade up the alert

```
phase 4 (IMPLEMENT A COPY BUTTON)
```
+ request if browser has the access to clipboard
+ if browser has the permission write the clipboard with new value 
