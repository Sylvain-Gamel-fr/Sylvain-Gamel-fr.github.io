---
layout: default
title: "Home"
topNavigation: true
lang: en
permalink: en/
---

{% assign lang = page.lang %}


Welcome on my personnal site.
Here, you will find all about my books, softwares, trainings and of course, 
a blog.

{% include page/section-title.html 
    title="Software"
    src="/images/picto/section-mobile-app.svg" %}

{% assign frontApps = site.data.applications | where: "frontPage", true %}
{% include apps/card-list.html lang=lang appList=frontApps type="iOS" %}

[Learn more...](/en/applications)


{% include page/section-title.html 
    title="Books"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[Learn more...](/en/books)


