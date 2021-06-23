# E-Commerce Back-end Management

## Overview
For this exercise, the user uses a Object-Relational-Mapping tool, specifically Sequelize, to manage a database of consumer products from a created server. As well as creating new data, it must be able to extract, update, and delete. 

## Pseudocode
1. Setup models to establish relationships between data.
2. Setup server and server routes.
3. Setup api routes to give the server functionality.
4. GET, POST, PUT, DELETE methods for 'Category, 'Product', and 'Tag', each having their on script file.
5. GET(finding an item by id), PUT, and DELETE will need to have an id from the request.

## Installation
1. ```npm i```
2. ```npm run seed```
3. ```npm run start```

## Usage
- Run ```schema.sql```.
- ```npm run seed``` to seed the database.
- ```npm run start``` to start the server.

## Resources
- [Object-Relational-Mappers](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a?gi=99dd55e3decd)
- [Sequelize](https://sequelize.org/master/index.html)
- [Many-to-Many](https://vertabelo.com/blog/many-to-many-relationship/)
- [Eager-loading](https://sequelize.org/master/manual/eager-loading.html)

## Links
- [Repository](https://github.com/huirayj/e-commerce-back-end)
- [Folder of Higher Quality Demos](https://drive.google.com/drive/folders/1bv6FHdamzLrXrn4Cc9reYGANCow8hd38?usp=sharing)

## Demo
### Categories
![ecommerce-backend-categories-demo](./demos/ecommerce-backend-categories-demo.gif)
### Products
![ecommerce-backend-products-demo](./demos/ecommerce-backend-products-demo.gif)
### Tags
![ecommerce-backend-tags-demo](./demos/ecommerce-backend-tags-demo.gif)
