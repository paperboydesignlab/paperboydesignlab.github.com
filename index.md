---
layout: page
title: מפתח התקציב
tagline: פוסטים אחרונים
---


<ul>
  {% for post in site.posts %}
    <li>
	  <a href="{{ post.url }}"> <h3>{{ post.title }}</h3></a> 
      {{ post.excerpt }}

    </li>
  {% endfor %}
</ul>

