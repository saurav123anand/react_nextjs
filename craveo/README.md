# parcel
- Dev build
- local server
- Hot module replacement
- file watching algorithm - written in c++
- Caching - faster builds
- Image optimization 
- Minification
- Bundling 
- Compressing
- Consistent Hashing 
- code splitting 
- Differential bundling -> So that app can run in all type of systems for example in older browsers 
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking -- remove unused code (if in our application we have 100 functions and using only 5 then it will remove remaining 95)
- Different bundles for dev and prod 
- Parcel is fast because of .parcel-cache

When we execute `npx parcel build index.html` then it will do all the mentioned stuffs and store the build in dist folder
and this is prod build and ready for production 
`npx parcel build index.html` does dev build and same process as above for prod 

// add the browsers where our app should be supported and add in the `package.json`
"browserslist": [ 
"last 2 Chrome version",
"last 2 Firefox version"
]

Instead of writing the `npx parcel build index.html` or `npx parcel index.html` again and again we can 
simply configure it in scripts tag of package.json like below 
```json
    "scripts": {
    "test": "jest",
    "dev": "parcel index.html",
    "prod": "parcel build index.html"
  }
```

and we can execute like `npm run dev` or `npm run prod`, we can keep any name in place of dev or prod key 

`jsx` is not part of React, it just helps in writing the clean and better code ,
if we don't use it then we have to write the code in react with the lengthy code like REact.createElement("h1",{id:"heading","this is heading})
this is lengthy , just imagine we are writing the complex code then how much messy it would be, so to overcome 
it we use jsx 

example:
`// JSX
const jsxHeading=<h1 id="heading">this is jsx heading</h1>`

Above is same as React.createElement("h1",{id:"heading},"this is jsx heading");

Browser doesn't understand jsx so when we write jsx then before reaching it to js engine , `parcel` will 
convert it to valid `JavaScript` but parcel doesn't do it by itself , instead it gives this job to it's dependent
package called `Babel`and it will transpile the jsx

when we write below then `babel` will convert it to R`eact.createElement()` internally that is `js object`,
and then it will be rendered using `render` method of `ReactDOM`

`// JSX
const jsxHeading=<h1 id="heading">this is jsx heading</h1>`

if it multi-line then we have to write like below so babel will know where the jsx is starting and ending 

```const jsxHeading=(<h1 id="heading">
this is jsx heading
</h1>)```

You can use functional component in other compoent like any of the below way 
1. <Heading/> 
2. <Heading></Heading>
3. {Heading()} -> since at the ned FC is function only 