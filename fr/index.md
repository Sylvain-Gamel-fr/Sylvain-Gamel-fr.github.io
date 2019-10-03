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
    title="Logiciels"
    src="/images/picto/section-mobile-app.svg" %}

{% include apps/card-list.html lang=lang appList=site.data.applications type="iOS" %}

[En savoir plus...](/fr/applications)

{% include page/section-title.html 
    title="Livres"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[En savoir plus...](/fr/books)

