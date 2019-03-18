---
layout: page_single
title: "Accueil"
topNavigation: true
lang: fr
permalink: fr/
---

{% assign lang = page.lang %}


Bienvenu sur mon site personnel.
En plus de mon blog, vous y trouverez le descriptif des mes différents
livres, application et formations.


{% include page/section-title.html 
    title="Livres"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[En savoir plus...](/fr/books)


{% include page/section-title.html 
    title="Logiciels"
    src="/images/picto/section-mobile-app.svg" %}

{% include apps/card-list.html lang=lang appList=site.data.applications type="iOS" %}

[En savoir plus...](/fr/applications)


{% include page/section-title.html 
    title="Formations"
    src="/images/picto/section-training.svg" %}

> L'absence de connaissances de l'outil numérique est un nouvel illétrisme.

Votre ordinateur n'est qu'un outil.
Vous devez simplement apprendre à vous en servir pour faire une vraie différence.

[En savoir plus...](/fr/services)

{% include page/section-title.html 
    title="Contact"
    src="/images/picto/section-mail.svg" %}

{% include resume/contact-info.html %}

N'hésitez pas à [me contacter](/fr/contact.html) pour plus de renseignements.

<div class="text-xs-center">
{% include modals/contact-button.html %}
</div>

{% include modals/contact-form.html %}


