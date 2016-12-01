---
layout: page_section
title: Blog
topNavigation: true
subcategory: blog
lang: "fr"
order: 10
permalink: /fr/blog/
logoImage: "/images/picto/section-blog.svg"
---

{% assign lang = page.lang %}
{% assign postList = site.posts | sort: "date" | reverse %}

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>