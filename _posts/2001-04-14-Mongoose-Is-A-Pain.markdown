---
layout: post
title: Mongoose is a pain.
---

I've been working on a project and I'm using the [Mongoose](http://mongoosejs.com/) object modeling tool to communicate with [MongoDB](http://mongodb.com).  

I have to say, while it certainly has its benefits, it's kind of a pain in the ass, especially for the following reasons:  

1. Terribly organized documentation.  Go take a look at the website and the API ref if you don't believe me.
2. General community inertia.  I've seen at least half a dozen Google Group messages that reference errors I'm having with no reasonable responses. 
3. Useless error messages like this:  

        /usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/types/array.js:62
        var cast = this._schema.caster.prototype.cast
                                       ^
        TypeError: Cannot read property 'prototype' of undefined
            at Array._cast (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/types/array.js:62:33)
            at Object.map (native)
            at Array.<anonymous> (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/types/array.js:129:36)
            at Promise.<anonymous> (/Users/aashay/Dropbox/Projects/myproject/server.js:214:33)
            at Promise.<anonymous> (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/promise.js:120:8)
            at Promise.<anonymous> (events:27:15)
            at Promise.emit (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/promise.js:57:38)
            at Promise.complete (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/promise.js:68:20)
            at complete (/usr/local/lib/node/.npm/mongoose/1.1.5/package/lib/mongoose/model.js:73:13)
            at /usr/local/lib/node/.npm/mongoose/1.1.5/package/support/node-mongodb-native/lib/mongodb/collection.js:169:32


I'm not entirely sure what this is trying to tell me.  All I tried to do was push an object into an array.
