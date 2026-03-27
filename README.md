# library-management-system
<<<<<<< HEAD
=======
<<<<<<< HEAD
    commiting by hani
=======
>>>>>>> d1005bf
    
    This is a libaray mnanagement API Backend for the management of users and the books

# Routes and the Endpoints

## /users
GET: Get all the list of users in the system
POST: Create/Register a new user

## /users{id}
GET: Get a user by their ID 
PUT: Updating a user by their ID
DELETE: Delating a user by their ID (Check if the iser skill has an issued book) && {is there any fine/penalty to be collected}

## /user/subscription-details/{id}
GET: Get a user subscribtion details by their ID
    >> Date of subcription
    >> Valid till ?
    >> Fine if any ?


## /books
GET: Get all the books in the system
POST: Add a new book to the system


## /books{id}
GET: Get a book by its ID
PUT: Update a book by its ID
DELETE: Delete a book by its ID


## /books/issued
GET: Get all the issued books

## /books/issued/withFine
GET: Get all issued books with their fine amount


### Subscription Types
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)


> > If a user missed the renewal date, then user should be collected with $100
> > If a user misses his subscription, then user is expected to pay $100
> > If a user misses both renewal & subscription, then the collected amount should be $200


## Commands:
npm init
npm i express
npm i nodemon --save-dev


npm run dev

To restore node modules and package-lock.json --> npm i/npm install

npm i mongoose
npm install mongodb

mongodb+srv://hanipathak8104_db_user:<db_password>@cluster0.f23vddo.mongodb.net/?appName=Cluster0
LS7NXNDVSPfOB2uq
mongodb+srv://hanipathak8104_db_user:LS7NXNDVSPfOB2uq@cluster0.f23vddo.mongodb.net/?appName=Cluster0



npm i dotenv


## MVC Architecture
    >> m: Model (Structure of our MongoDb)
    >> V: View (Frontend)
    >> C: Controllers (Brain/Logic of a route) 


### DTO (Data Transfer Object)
    