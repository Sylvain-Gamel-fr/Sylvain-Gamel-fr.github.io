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
    title="Books"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[Learn more...](/en/books)


{% include page/section-title.html 
    title="Software"
    src="/images/picto/section-mobile-app.svg" %}

{% include apps/card-list.html lang=lang appList=site.data.applications type="iOS" %}

[Learn more...](/en/applications)



{% include page/section-title.html 
    title="Trainings"
    src="/images/picto/section-training.svg" %}

> Lack of digital competency is already a new illiteracy.

Your computer is a tool. 
You just need to learn how to use it, and I can help you.


{% include page/section-title.html 
    title="Contact"
    src="/images/picto/section-mail.svg" %}


Feel free to contact me for more information.

{% include resume/contact-info.html %}
