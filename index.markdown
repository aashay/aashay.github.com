---
layout: default
title: Aashay's Nerdery
---


{% for post in site.posts reversed limit:5 %}
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
{{ post.content }}   

 
<em>Posted on {{ post.date | date: "%b %d, %Y"  }}.</em>  
<hr/>
{% endfor %}
