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

> [Command iT][cit] c'est les 15 et 16 mai.
>
> Si vous participez à la conférence, préparez votre participation
> en téléchargeant le matériel de base.

<div class="text-xs-center">
    <a href="/fr/formations/command-it-2019.html" 
       title="Command iT ma présentation et les ateliers" 
       class="btn btn-lg btn-success">
    Toutes les ressources pour Command iT
    </a>
</div>

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

[cit]: https://Command-iT.fr/