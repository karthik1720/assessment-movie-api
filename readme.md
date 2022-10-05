==================================

## IMPORTANT

===================================

mysql Database is hosted in AWS RDS and its config are stored in a .env file.

========================================

## API reference

==========================================
SIGNUP
POST : localhost:8800/api/auth/signup

Body
{
"username":"test1",
"email":"test@email.com",
"password":"123456"
}

---

SIGNIN
POST : localhost:8800/api/auth/signin

Body
{
"username":"test1",
"password":"123456"
}
===========================================

## CRUD

============================================
ADD MOVIE
POST : localhost:8800/api/crud/add

Body
{
"name":"examplemovie",
"rating":5.3,
"cast":["Actor","Actress"],
"genre":"Action",
"releasedate": "2022-10-15"
}

---

DELETE MOVIE
DELETE : localhost:8800/api/crud/delete/examplemovie

## Note: This will delete examplemovie from the database.(uses examplemovie as params)

---

UPDATE MOVIE
PUT: localhost:8800/api/crud/update/examplemovie

Body
{
"updateWhat":"RATING",
"updateVal":"9.5"
}

## Note: This takes movie name (examplemovie) from url params and updates the required field given in the Body.

---

GET MOVIE
GET: localhost:8800/api/crud/get/examplemovie

## Note: This will show the entire details of examplemovie
