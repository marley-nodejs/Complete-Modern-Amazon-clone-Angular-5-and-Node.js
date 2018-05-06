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

___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
