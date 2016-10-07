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
| cards | this is master data for cards
| trxs | this is transactions record
| usercards | this is collections to connect user and his/her personal cards
| users | Master all users account
----------------------------------------------------

## Server

### - Cards
Property :
- bankName : String
- type : String
- cardClass : String
- dtCreated : Date

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/cards|GET|return all cards in JSON
|/api/cards/:id|GET|return card detail
|/api/cards|POST| add new master cards
|/api/cards/:id|PUT|update cards
|/api/cards/:id|DEL|delete existing cards


### - Trxs
Property :
- refNo : String
- lenderId : String
- userId : String
- status : String
- cardId : String
- productName : String
- location : String
- mayPymt : Number
- realPymt : Number
- lenderPhone : String
- lenderRating : Number
- lenderTotTrx : Number
- UserPhone : String
- UserRating : Number
- UserTotTrx : Number
- dtCreated : Date

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/trxs|GET|return all trxs in JSON
|/api/trxs/:id|GET|return trx detail
|/api/trxs|POST| add new trx
|/api/trxs/:id|PUT|update trx
|/api/trxs/:id|DEL|delete existing trx


### - UserCards
Property :
- userId : String
- cardId : String
- isActive : Boolean
- dtCreated : Date

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/usercards|GET|return all usercards in JSON
|/api/usercards/:id|GET|return usercards detail
|/api/usercards|POST| add new usercards
|/api/usercards/:id|PUT|update usercards
|/api/usercards/:id|DEL|delete existing usercards


### - Users
Property :
- username : String
- password : String
- firstName : String
- lastName : String
- email : String
- phoneNo : String
- lenderRating : Number
- lenderTotTrx : Number
- userRating : Number
- userTotTrx : Number

|Endpoint|HTTP|Description
|--------|----|-----------
|/api/users|GET|return all user in JSON
|/api/users/:id|GET|return user detail
|/api/users|POST| add new user
|/api/users/:id|PUT|update user
|/api/users/:id|DEL|delete existing user

- - -


-------------------------------

*This is a repository for displaying our learning result in phase 2 Hacktiv8*
