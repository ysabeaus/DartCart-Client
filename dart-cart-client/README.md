# Understanding Redux

Redux is a complicated package so I made an example component that uses it to give you a better idea of how to use it. This example and readme do NOT substitute the documentation, there is a lot of information and it would be impossible to condense into something so small. Instead I have highlighted important points that you need to be aware of. This example should be taken as a supplement to the official documentation. 

This link is the main page to Redux's documentation:
> https://redux.js.org/introduction/getting-started


In this example I also make use of a json server for getting fake data, as can be seen in the db.json file. If you check the package.json you can see how it is configured, but to summarize, in the command line type:
```
npm run serve
```
while in the project folder (so inside dart-cart-client). You then should be able to navigate to localhost:3001/products and see a list of the products in the db.json. You can take this as an example on how to use json server. You'll probably need two terminal windows (easy to do in VSCode, just open a new terminal window). One you'll use to run the react app, and the other for the json server.