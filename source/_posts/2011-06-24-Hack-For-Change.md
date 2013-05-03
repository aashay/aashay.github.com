---
layout: post
title: Hack For Change
summary: Last weekend, I participated in Change.org's HackForChange hackathon. We had 24 hours to design and build an app that could help change the world, and we ended up winning 2nd place! I wanted to take this opportunity to discuss my experience, and announce what lies ahead for our project, AnonyMouse. 
comments: true
categories: 
- Announcements
- Codenerd
---

_Last weekend, I participated in [Change.org](http://change.org) [HackForChange](http://www.hackforchange.com) hackathon. We had 24 hours to design and build an app that could help change the world, and [we ended up winning 2nd place](http://www.symbianone.com/content/view/7402/)! I wanted to take this opportunity to discuss my experience, and announce what lies ahead for our project, [AnonyMouse](http://anonymou.se)._
<!-- more -->

A Quick Disclaimer
--------------
For those of you who may not be in the know, a "[Hackathon](http://en.wikipedia.org/wiki/Hackathon)" has little to do with breaking into computer systems (do we still call this "cracking?") and my app AnonyMouse has no relation to the [Anonymous collective](http://en.wikipedia.org/wiki/Anonymous_(group)).  The title of the app comes from the fact that most of the users will be anonymous.


On Hackathons
--------------
I've participated in a hackathon-type event before, but not one of this scale or caliber. I was on a team of three including myself, my colleague [Aaron Moy](http://twitter.com/aaronmoy), and a great designer we met named [Eliza Wee](http://dogmo.org/). Aaron put together the presentation and helped articulate the vision and user experience, Eliza created the front-end pages in HTML5 and CSS3, and I put together a backend. In 24 hours, we managed to put together a working demo and impress the judges (including Craig Newmark, the founder of Craigslist; Chris Bishko, investment director for Omidyar Network; and Tasneem Raja, _The Bay Citizen_’s Web producer) enough to claim the second place prize. The event took place at Change.org's headquarters and I must say, was very well organized. They fed us healthy food (Mmm quinoa) and gave us all of the resources we needed to get up and running fast, including presentations on various APIs including the [Twilio](http://twilio.com) API, which we rely on. With the exception of a WiFi glitch early on Saturday night, everything ran smoothly. 

The Back Story
--------------
Several months ago I met Aaron through a friend of mine and he discussed his vision for building a website for closeted LGBT individuals who are looking for a more personal mentoring experience than the existing solutions today (i.e. hotlines).  He explained his coming-out experience to me and his ideas for why such a website should exist. At the time, I was looking for an interesting hacking project to work on, and while I wasn’t a part of the LGBT community, I sympathized with Aaron’s experience and thought that his idea would make for an interesting side project.  So we got to work on a prototype.

{% pullquote %}
After spending some time with the project and having a few more discussions, something really hit me hard.  This wasn’t just an idea that could benefit the LGBT community.  This was something that could benefit _anyone_ looking for some personalized help, but preferred to stay anonymous.  {" I began to understand what Aaron’s experience was like, and how terrible the situation is with respect to LGBT bullying.  And so, I no longer just had sympathy for the cause.  I had true empathy for the cause. "}
{% endpullquote %}

I know what it’s like to be bullied for being different.  I remembered my own experiences growing up being small, skinny, nerdy, and ethnic in a relatively non-diverse community.  Bullying is inexcusable and can cause far more damage than people realize, particularly (but not exclusively) for younger people.  

When I heard about HackForChange, I immediately jumped at the opportunity.  While we had some basic prototyping done, I felt like we needed something to help build momentum around our project, and this was the perfect opportunity.

The Hack Story
--------------
_The following section is going to get pretty technical, so if it’s not your cup of tea, feel free to skip down to “The Takeaways.”  If it is, though, please don’t hesitate to post comments below (via Disqus)._

The rules for the Hackathon were pretty basic.  Spend 24 hours and build a web or mobile app to help advance positive change.  Don’t use any existing code (unless it’s a publicly available library or API).  Hacking starts at noon on Saturday and ends with a final commit being pushed to GitHub by noon on Sunday.

Easy enough.  I was a bit bummed about the “no existing code” rule but this was a contest with a $10,000 prize pool, so fair is fair.  Our team sat down to rethink the overall experience and develop a totally new and “parallel” app to our existing prototype.  

I decided to try out the Twilio API and create an SMS-based interface for mentees to talk to mentors (who would use a simple web chat interface back).  Twilio was an official sponsor of the hackathon and [John Britton](http://twitter.com/johndbritton), Developer Evangelist at Twilio, gave us a great demo of the API and generously provided us with a small account to get started.  The Twilio API was the only “unknown” in my stack of choice so the first thing I did was sit down to learn it.

Speaking of my stack (and tools) of choice:

- [MongoDB](http://www.mongodb.org):  Honestly, I probably could’ve used a flat file for the demo that we did end up presenting.  However, I had a little experience with Mongo already (I used it in the prototype) so again, it was a question of speed.  I used MongoLab’s add-on for Heroku.
- [Node.JS](http://nodejs.org/) + [Socket.IO](http://socket.io) (via [NowJS](http://nowjs.com)):  Since the largest component of our app is a real-time communication tool, it only made sense to do something that does real-time pretty well (for those of you unfamiliar with NowJS, I’d suggest checking it out.  It provides a pretty useful abstraction over Socket.IO, although its utility for my upcoming purposes may be overshadowed by the new Socket.IO 0.7).  Sure, I could’ve used EventMachine with Ruby, or even Twisted with Python, but I'm unfortunately not experienced enough with either to be dangerous, and JavaScript was the only “web” language that I was comfortable with (I use Java at my day job, but attempting to crank out a real-time web app in Java at a hackathon would've been a fool's errand for me).  I’ve enjoyed playing with both Ruby and Python, but at a 24 hour hackathon, I needed to use something that I was already fast with.  Makes sense, right?
- [ExpressJS](http://expressjs.com/):  This seems to be the web framework of choice for Node developers (and rightly so. It's a great, lightweight framework).  Sure, if I was using Ruby on Rails or some other code generating solutions, I would’ve had a _lot_ of features pounded out in a shorter amount of time, but as I’ll discuss below, this would’ve been overkill (and would’ve also required me to know Rails.  I’ve played with Sinatra before, and Express is very Sinatra-like, so it felt natural).
- [MooTools](http://mootools.net/):  In retrospect, [jQuery](http://jquery.com/) would’ve worked too.  I’ve been playing around with MooTools (I enjoy the OO aspect of it), but for the quickie UI code that I ended up throwing together, some simple DOM manipulation would’ve been just fine.  For the longer term, though, MooTools wins my vote (and I think I’m finally over the initial learning curve).
- [HTML5](http://en.wikipedia.org/wiki/HTML5) + [CSS3](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3):  Eliza was a pro at cranking out a standards-compliant web front-end.  We it up on an iPhone browser and it worked just fine.  
- [Heroku](http://heroku.com): They were a sponsor of the hackathon and graciously provided us with a month of free hosting.  For those of you who have never built an app on Heroku, you’re missing out on all sorts of warm tingly feelings that come from deploying your app by simply doing a “git push heroku master” in your command line.  I mean, damn.  Talk about rapid deployment.  (FULL DISCLOSURE:  I work at Salesforce.com and yes, they own Heroku, and no, I don’t get any fancy treatment because of this.  _Everyone_ at the hackathon got a free month of Heroku hosting).
- [Git](http://git-scm.com/)/[GitHub](http://github.com):  I probably don’t need to explain this one (GitHub was also a sponsor) but git is (and will be) my VCS of choice, and GitHub is an absolute _pleasure_ to work with.  Also, all of our code had to be up on GitHub anyway, so that worked out well.

Anyways, where was I?  Oh right, the Twilio API.  I initially attempted to use the [twilio library in the npm repository](https://github.com/sjwalter/node-twilio/wiki), but found it to be a bit cumbersome, in the sense that it actually needs to spin up _another_ web server (on port 31337, yay nerd jokes), and I couldn’t find an easy way to make another app server running on another port on Heroku (I’m not saying it’s impossible, I’m saying that I didn’t feel like spending more time on it than I needed to).  So I gave up on using a library and settled for good ol’ fashioned REST (via [Restler](https://github.com/danwrong/restler)).  

Several hours later, I had a working API and a crappy prototype page that displayed inbound SMS messages in real time.  Call it a SMS log, if you will.  It was pretty snappy and was probably our first big milestone.  I decided to take a quick break and get some food and revel in my small but important victory.

Things started to get pretty hairy from then on.  The stress kicked in and contributed to wearing my brain out.  I compensated with caffeine (bad idea: caffeine makes you need to pee a lot, which requires you to get up a lot, which is disruptive) and tried to bang out as much code as I could.  I started getting a little bit disorganized with what features I really _needed_ to build vs. which features I _thought_ I had to build, so I ended up with a lot of “what if” scenarios that translated to unnecessary code.

I say “unnecessary” with a bit of caution here, however.  Had this been any other night of pure app coding, it would’ve been okay to write a bunch of stuff for later use.  After all, we have a vision and we want to see it through.  The key takeaway here is to remember that if you’re at a hackathon building an idea you’ve been thinking about, _stop thinking about the idea as you know it._  In retrospect, all I needed to do was code _just enough_ for the three minute (including demo) presentation that we were going to show the judges.  For some reason, the drive to make an awesome app took over the drive to make something that was _just enough_.

All’s well that ends well though, and after a ~22 hour hack fest (I went home for a relatively useless 2 hours of sleep), we demoed our app, had it judged, and claimed the second place prize.

The Takeaways (or, Hackathons for Noobs)
--------------
1.  **Get there early**.  We were lucky enough to snag one of the very few designers at the hackathon.  There were 50-some participants and only 4-5 designers.  Network with as many people as you can before the clock starts, you never know who may be useful to your team.
2. **Eat a sustainable diet**.  We were fortunate to be fed healthy food (basically, not typical “pizza and mountain dew” coder food) but I made the mistake of getting a bit overzealous with the caffeine.  I paid for this dearly in the day or two after the hackathon (my sleep schedule is still a couple hours off).
3. **BUILD A _MINIMUM_ PRODUCT**.  I capitalized this because I can’t stress this enough.  I kind of suck at keeping things to a bare minimum (I'm a bit of an over-thinker by nature) and it’s something that I feel comes more naturally with practice.  Our demo ended up being so simple, I’m almost glad we only had three minutes.  If you look at my [GitHub repo](https://github.com/hackforchange/AnonyMouse) you will see an astonishing amount of terrible code that isn’t even used (random API calls I thought I needed). This is also important because it buys you more time to...
4. **...Get some sleep**.   The [first place winners](http://goodneighbor.heroku.com/) didn’t even end up needing to pull an all-nighter. They built a simple, elegant, and useful app, went home, and came back the next morning.  Sleep is important, and I know it’s tempting to be a “hero” and stay up all night, but I promise you will end up paying for it one way or another (think mistakes-to-tiredness ratio).  Besides, if you really need the entire time, you’re probably doing it wrong.
5.  **Know your limits**.  I ended up “cowboy” coding the entire app backend (there were a few JS hackers in the room who came by to talk to me, but most of them didn’t seem interested in working with a stack they hadn’t worked with before.  I don’t blame them) and I think I ended up coming off as a bit elitist because of this.  This couldn’t be further from the truth, however.  I’m new to this whole hacking game, and while I don’t think I’m a total zero, I know I have a _ton_ to learn.  It would’ve been nice to have a teammate, but the moment I realized that I was on my own, I should’ve scaled down the amount of work.  In short, I bit off more than I could chew and ended up crashing hard after we were done.

The Long Road Ahead
--------------

The good news is that I’m back on my feet and my zeal for bringing this vision come to life is stronger than ever.  I know there will be many barriers to cross, such as high-level problems like dealing with trolls and bigots (anyone know of any papers about anti-troll algorithms? :-p) to lower level problems such as deciding whether or not to keep the current stack I’m using vs switching something out ([Redis](http://redis.io/) is looking more and more attractive).  I know that I will probably end up coding+pushing+refactoring my code a hundred times before I’m satisfied with it.

But that’s okay.  We’re going to make this happen one way or another.  At the end of the day, [AnonyMouse](http://anonymou.se) is all that matters.  Having a safe, secure, and wonderful experience for both mentors and mentees that “just works” is all that matters.  Creating something that helps even a _few_ people is all that matters.  And if we pick up a few more people who are willing to volunteer their time and efforts to the cause (either by helping me hack or simply helping us spread the word), that would be great too.  

It’s not going to be quick, and it’s certainly not going to be easy.  We’ve got a long road ahead, a lot of ideas and features to discuss, and a ton of challenges to deal with, but I promise, we’ll make it happen.

