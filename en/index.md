---
layout: default
title: "Home"
topNavigation: true
lang: en
permalink: en/
---

{% assign lang = page.lang %}


My name is Sylvain Gamel and I am an independent consultant specialized 
in new information and communication technologies (ICTs).


{% include page/section-title.html 
    title="Books"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[Learn more...](/en/books)



{% include page/section-title.html 
    title="Mobile Applications"
    src="/images/picto/section-mobile-app.svg" %}

{% include apps/card-list.html lang=lang appList=site.data.applications %}

I can also write your mobile or web applications on demand.

[Learn more...](/en/applications)



{% include page/section-title.html 
    title="Trainings"
    src="/images/picto/section-training.svg" %}

You are an individual, or a company, and you want to train, 
or train your staff, in the use of new technologies?

> Lack of digital competency is already a new illiteracy.

Contact me to define your training plan.


{% include page/section-title.html 
    title="Development"
    src="/images/picto/section-dev.svg" %}


Do you need software development, advice or technical expertise?

*I am ready to help you to carry out your projects.*

Learn more about my skills.


[Learn more...](/fr/a-propos)


{% include page/section-title.html 
    title="Contact"
    src="/images/picto/section-mail.svg" %}


Feel free to contact me for more information.

{% include resume/contact-info.html %}
