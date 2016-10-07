# Maypay :credit_card::credit_card::credit_card:

## Your solution for you as promo hunter
This is application is built for providing API to complete the Maypay application mockup in 1000startup hackaton day.


This project is contributed by :
1. ariadiprana :baby:
2. ivangerard :runner:
3. kevinkusumo :boy:


# Architecture
Server only

## Data
| Model | Description
|------|----
| customers | this is to represent all customers for log in purposes
| orders | this is to represent each order inside the application
----------------------------------------------------

## Server

### Cards
Property :
- bankName : String
- type : String
- class : String
- dt_created : Date

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/cards|GET|return card detail in JSON
|/api/cards|POST| add new master cards
|/api/cards/:id|PUT|update cards
|/api/cards/:id|DEL|delete existing cards


### Orders
Property :
- hairStyleId     :String,
- barberName      :String,
- address         :String,
- dt_created      :Date,
- customerId      :String,
- status          :String,
- hairPreference  :String

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/orders|GET|return all orders in JSON
|/api/orders|POST|add new orders
|/api/orders/:id|PUT|update orders
|/api/orders/:id|DEL|delete existing order

- - -

## Client
- home
- items
  - id
- customers
  - profile
- carts

-------------------------------

*This is a repository for displaying our learning result in phase 2 Hacktiv8*
