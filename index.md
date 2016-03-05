---
layout: page
title: בלוג מפתח התקציב
tagline: פוסטים אחרונים
---


<ul>
  {% for post in site.posts %}
    <li>

    <div class="row postUnit">
    <div class="col-xs-12 col-sm-2 postDate">
    <span class="postDay">{{ post.day }}</span>
    <span class="postMonth">{{ post.month }}</span>
    <span class="postYear">{{ post.year }}</span>
    </div>

    <div class="col-xs-12 col-sm-10 postLeft">
	<h3 class="postTitle"><a href="{{ post.url }}">{{ post.title }}</a></h3>
	<p class="postExcerpt">{{ post.excerpt }}</p>
	<span class="postAuthor"><img src="{{ post.profile }}" class="postAuthor"><i>{{ post.author }}</i></span>
	</div>

	</div>

    </li>
  {% endfor %}
</ul>
