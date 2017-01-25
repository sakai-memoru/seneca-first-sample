seneca micro service module sample
========================

Overvice
-----------
This repo is sample sources of first step programs on seneca.js framework.


Description
-------------
sample sources.

References
-------------
[http://senecajs.org](http://senecajs.org)  
[http://senecajs.org/getting-started/](http://senecajs.org/getting-started/)  
[https://fullstackforger.com/javascript/seneca-cheat-sheet/](https://fullstackforger.com/javascript/seneca-cheat-sheet)  



Installation
--------------
```bash
$ npm install
$ npm list --depth=0
```

Usage
--------------
```bash
$ node seneca-generateid-serv.js
```

[http://localhost:3000/uuid](http://localhost:3000/uuid)  
[http://localhost:3000/timestamp](http://localhost:3000/timestamp)  
[http://localhost:3000/id/random](http://localhost:3000/id/random)  
[http://localhost:3000/date/random](http://localhost:3000/date/random)  
[http://localhost:3000/key/random/:length](http://localhost:3000/key/random/6)  
[http://localhost:3000/random?length=n](http://localhost:3000/random?length=8)  

```bash
$ node seneca-containsKeywords-serv.js
```

[http://localhost:3000/v1/containsKeywords?message=Hello&sceneCode=SAY_HELLO](http://localhost:3000/v1/containsKeywords?message=Hello&sceneCode=SAY_HELLO)  

```bash
$ node seneca-containsKeywords.js
```

[http://localhost:3000/act?role=web&cmd=containsKeywords&message=Hello&sceneCode=SAY_HELLO](http://localhost:3000/act?role=web&cmd=containsKeywords&message=Hello&sceneCode=SAY_HELLO)  

// --- end of file --- //

