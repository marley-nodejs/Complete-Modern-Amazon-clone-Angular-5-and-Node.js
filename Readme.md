### [Udemy] Complete Modern Amazon clone: Angular 5 and Node.js

![Application](/img/00-intro.png?raw=true)

I received this course for free by promocode: BLACKHATFORUMFREEV1

<br/>

**My Environment:**

<br/>

    $ lsb_release -a
    No LSB modules are available.
    Distributor ID:	Ubuntu
    Description:	Ubuntu 14.04.5 LTS
    Release:	14.04
    Codename:	trusty


<br/>

    $ docker --version
    Docker version 17.05.0-ce, build 89658be

<br/>

    $ node --version
    v9.10.0

<br/>

    $ npm --version
    5.6.0
    
<br/>    
    
    $ npm list -g --depth=0
    /usr/local/lib
    +-- @angular/cli@1.7.3
    +-- nodemon@1.17.2
    `-- npm@5.6.0


<br/>

## 01 Setting up Node.js

<br/>

### 002 Setting up and Installing Dependencies

    # npm install -g nodemon
    
    $ cd server/
    $ npm init -y
    
    $ npm install --save express body-parser morgan mongoose 
    
<br/>

### 003 Adding all the middle wares

<br/>

### 004 Running your first server

    $ nodemon server.js
    
<br/>    

    $ curl localhost:3000
    {"user":"Arash Yahaya"}
    
<br/>

### 005 Setting up MLab

<br/>

### 006 Setting up Configuration file for database port number and secret key

<br/>

### 007 Adding CORS

    $ npm install --save cors


<br/>

## 02 Setting up Angular 5

<br/>

### 010 Installing Dependencies - Angular

    # npm install -g @angular/cli
    $ cd client/
    $ ng new AngularAmazono --routing --style=scss
    $ cd AngularAmazono
    $ npm install --save @ng-bootstrap/ng-bootstrap

<br/>

### 011 Adding Dependencies to App Module

<br/>

### 012 Setting up Navbar and Footer

<br/>

### 013 logo.png

<br/>

### 014 Setting up Navbar and Footer Episode 2

<br/>

### 015 Angular Router Explanation


    $ cd /project/client/AngularAmazono/
    $ ng generate component home
    $ ng serve --host 0.0.0.0 --port 8080


![Application](/img/pic-02-01.png?raw=true)    

<br/>

### 016 Setting up Home Page

![Application](/img/pic-02-02.png?raw=true) 


<br/>

### 017 Setting up REST Service

    $ ng generate service RestApi
    $ ng serve --host 0.0.0.0 --port 8080
    

<br/>

### 018 Setting up Data Service Message Component

    $ ng generate service Data
    $ ng generate component Message
    $ ng serve --host 0.0.0.0 --port 8080


<br/>

## 03 Authentication - Node.js

<br/>

### 020 Overview

<br/>

### 021 Create your first UserSchema model Part 1 Why


<br/>

### 022 UserSchema model Part 2 Attributes

<br/>

### 023 UserSchema model Part 3 Hash Password

    # cd server/
    # npm install --save bcrypt-nodejs
    
<br/>

### 024 UserSchema model Part 4 Compare Password


<br/>

### 025 UserSchema model Part 5 Gravatar

<br/>

### 026 UserSchema model Part 6 Conclusion

<br/>

### 027 Create a signup API


    # npm install --save jsonwebtoken
    
<br/>
    
    chrome://apps
    
POSTMAN
    
    localhost:3000/api/accounts/signup
    
    
![Application](/img/pic-02-03.png?raw=true) 

<br/>

![Application](/img/pic-02-04.png?raw=true) 

<br/>

![Application](/img/pic-02-05.png?raw=true)  


<br/>

### 028 Create a login API  

<br/>

![Application](/img/pic-02-06.png?raw=true)  

<br/>

![Application](/img/pic-02-07.png?raw=true)  

<br/>

![Application](/img/pic-02-08.png?raw=true)  


<br/>

## 04 Authentication - Angular.js  

<br/>

### 030 Overview JWT on the frontend localStorage

<br/>

### 031 Create Registration Component Logic

    $ cd client/AngularAmazono/
    $ ng generate component Registration
    $ ng serve --host 0.0.0.0 --port 8080

<br/>

### 032 Registration Page Design

<br/>

### 033 Create Login Component Logic

    $ ng generate component Login

<br/>

### 034 Login Page Design

<br/>

### 035 Auth Guard

    $ ng generate service AuthGuard

<br/>

### 036 Features Demo


<br/>

![Application](/img/pic-02-09.png?raw=true)      


<br/>

![Application](/img/pic-02-10.png?raw=true)      

<br/>

![Application](/img/pic-02-11.png?raw=true)      

<br/>

## 05 Profile and Address API - Node.js

<br/>

### 038 Overview

<br/>

### 039 Create A JSONWEBTOKEN middleware

<br/>

### 040 Profile API - GET

<br/>

![Application](/img/pic-05-01.png?raw=true)  

<br/>

![Application](/img/pic-05-02.png?raw=true)  


<br/>

### 041 Profile API - Editing your profile


<br/>

![Application](/img/pic-05-03.png?raw=true)  

<br/>

![Application](/img/pic-05-04.png?raw=true)  

<br/>

![Application](/img/pic-05-05.png?raw=true)  

<br/>

![Application](/img/pic-05-06.png?raw=true)  


<br/>

### 042 Address API - GET and POST


<br/>

![Application](/img/pic-05-07.png?raw=true) 


<br/>

![Application](/img/pic-05-08.png?raw=true) 

<br/>

![Application](/img/pic-05-09.png?raw=true) 

<br/>

![Application](/img/pic-05-10.png?raw=true) 

<br/>

## 06 Profile and Address Pages - Angular


<br/>

### 044 Get Profile Logic

<br/>

### 045 Profile Page

    $ ng generate component Profile

<br/>

### 046 Settings Page

    $ ng generate component Settings
    
<br/>

### 047 Create Address Page

    $ ng generate component Address

<br/>

### 048 Features Demo


<br/>

![Application](/img/pic-06-01.png?raw=true) 

<br/>

![Application](/img/pic-06-02.png?raw=true) 

<br/>

![Application](/img/pic-06-03.png?raw=true) 


<br/>

## 07 Adding a category and product as a seller - Node.js


<br/>

### 050 Overview

<br/>

### 051 Create a category Schema

<br/>

### 052 Create a category Schema

<br/>

### 053 Get all categories API


<br/>

![Application](/img/pic-07-01.png?raw=true) 

<br/>

![Application](/img/pic-07-02.png?raw=true) 

<br/>

### 054 Create a Product Schema

<br/>

### 055 Create amazon web services account

<br/>

### 056 Install dependencies

    $ npm install --save aws-sdk multer multer-s3

<br/>

### 057 Create an upload function using s3 and multer

<br/>

### 058 Add a product API - Seller

<br/>

### 059 Get my Product API

<br/>

### 060 Using faker library to increase the amount of products stored

    $ npm install --save faker

<br/>

![Application](/img/pic-07-03.png?raw=true) 

<br/>

![Application](/img/pic-07-04.png?raw=true) 

___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
