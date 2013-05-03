---
layout: post
title: "A few things I learned at NodeConf Summer Camp"
date: 2012-09-06 12:33
comments: true
categories: Node
---

I recently had the pleasure of attending [NodeConf Summercamp 2012](http://www.nodeconf.com/) and I wanted to quickly jot down some thoughts about stuff I learned, both Node-related and not.

In case you're wondering what the experience itself was like, [Tim Caswell aka Creationix](https://github.com/creationix) wrote a [blog post on the cloud9 blog](https://c9.io/site/blog/2012/09/reflections-on-nodeconf-summer-camp-2012/) that recaps some of the day-to-day activities.

So here are some of my takeaways in no particular order:

* Lots of people are successfully using Node in production, including [Voxer](http://voxer.com/), [Uber](https://www.uber.com/), and [Yammer](https://www.yammer.com/). The Node community wants to encourage more blog posts about both success stories and battles with bugs (and more importantly, follow-ups to both).
* Node is being used for lots of things other than web apps such as non-http servers and even robots!
* Node Streams are pretty awesome [and this is why](http://maxogden.com/node-streams).
* [Node Domains](http://nodejs.org/docs/latest/api/domain.html) are a fairly new feature but also seem pretty useful.
* Crossing the JavaScript to C boundary is expensive, so there was a lot of talk about avoiding compiled dependencies.  I'd still like to learn a lot more about this because I found it counterintuitive.  For example, [node_redis](https://github.com/mranney/node_redis) claims to perform a lot better with hiredis, which was one of the compiled deps that folks mentioned not to use.
* HTTPS (SSL/TLS) isn't very performant right now (TLS handshakes happen in the main event loop and happen a lot more than necessary), so it's probably better to use something like [nginx](http://nginx.org/en/) or [stud](https://github.com/bumptech/stud) for SSL termination. They're working on it!
* People in the NodeJS community are very warm, welcoming and pretty darn funny.
* Unless you want to smell like a wood-fired barbeque, bring a fireplace-specific hoodie and a rest-of-the-day hoodie. (I'm not a very outdoorsy person so I had to figure this out on my own).


I had a fantastic time at NodeConf Summercamp and I'm looking forward to going again next year.  Thanks to [Mikeal Rogers](https://github.com/mikeal) and the rest of the organizing crew for making it such a great experience!