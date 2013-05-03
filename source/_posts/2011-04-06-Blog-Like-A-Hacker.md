---
layout: post
title: Blog Like A Hacker
summary: I've accepted the inner hacker in me and have decided to overhaul my entire site to accommodate that.  Read on to learn more!
categories: 
- Announcements
- Codenerd
comments: true
---

_I'm told I'm supposed to [Blog Like A Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html).  
Well, here goes nothin._
<!-- more -->

Inspired by Tom
--------------
Tom Preston-Werner, one of GitHub’s cofounders, wrote the blog post I linked above, and I’d encourage you all to check out.  Just like Tom, I love writing.  I too have been locked in the constant unfortunate cycle of writing and quitting.

It's not that I don't have time to write. It’s just that I tend to spend most of my time writing code instead of, well, English. It should come as no surprise to anyone that I enjoy programming.  Yes, it’s a big part of what I do at my dayjob, but it also happens to be one of my greatest passions. I’ve been working on a couple of projects here and there, but I haven’t given much time or effort to writing about them, or anything related to software, technology, or programming for that matter. I dabbled with the idea of having one personal blog and one separate code blog for a while, to cater to different people.

Jekyll
--------------
After learning about [Jekyll](http://github.com/mojombo/jekyll), something just clicked.  My blog has always been locked up in a database of sorts since its inception.  First it started with [Drupal](http://drupal.org), then I moved to [Wordpress](http://www.wordpress.org) which I explain in [this old announcement](/Announcements/2008/04/13/welcome-to-the-new-aashay-com.html). But why bother with such a feature-rich content management system when all I need is…a blog?

So, in order to reignite my writing flame and keep my programming chops sharp, I’ve decided to migrate my entire site over to Jekyll.  I hand-coded the HTML/CSS styling (although it’s primarily based on [Kyle Kneath](http://warpspire.com/)’s very excellent and very popular [Hemingway](http://warpspire.com/hemingway/) Wordpress theme) and I even wrote a custom script (a Rakefile, for you ruby nerds out there) to help me deploy it to GitHub’s Pages, which is now my new host.  

I also implemented the lovingly-created [Tapir API](http://tapirgo.com) for searching, and dropped in the excellent [Disqus](http://disqus.com) decentralized commenting system.  Part of my rakefile includes tag generation, but I’ll hash out the details of that later.  

I use [TextMate](http://macromates.com/) to write and maintain all the code and the posts, and for long periods of writing, nothing beats [WriteRoom](http://www.hogbaysoftware.com/products/writeroom).  All posts are written in [Markdown](http://daringfireball.net/projects/markdown/) and everything is pushed up to GitHub with, what else, [Git](http://git-scm.com/).

But what of the content? 

Please Exit In An Orderly Fashion
--------------
I’m afraid that this next part may cause me to lose some readers (all 3 of you out there).  Fortunately, it will (hopefully) bring on a new readership.  The short version of it is, I’m going to be writing a lot about my programming projects.  This could include anything from discoveries I make while coding (complete with code samples) to musings about tangential passions (such as startups, technology, and the occasional rant-as-response post).  I may still post long-form essays and have people edit them, but the majority of posts will be quick and targeted.  Fortunately everything here is organized by categories, so it should be easier to filter through any noise.

That’s the plan, at least.  This could all change very quickly.  What’s more important than the plan is the goal:  to write as much as possible and as often as possible, and to do it all like a hacker.