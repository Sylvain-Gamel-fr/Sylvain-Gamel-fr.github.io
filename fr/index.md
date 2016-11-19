---
layout: default
title: "Accueil"
topNavigation: true
lang: fr
permalink: fr/
---

{% assign lang = page.lang %}


Je m’appelle Sylvain Gamel et je suis un consultant indépendant spécialisé 
dans les nouvelles technologies de l’information et de la communication (NTIC).



{% include page/section-title.html 
    title="Applications Mobiles"
    src="/images/picto/section-mobile-app.svg" %}

{% include apps/card-list.html lang=lang appList=site.data.applications %}

Je peux également écrire vos application mobiles ou web sur demande.

[En savoir plus...](/fr/applications)



{% include page/section-title.html 
    title="Livres"
    src="/images/picto/section-book.svg" %}

{% include books/card-list.html lang=lang bookList=site.data.books %}

[En savoir plus...](/fr/books)



{% include page/section-title.html 
    title="Développement"
    src="/images/picto/section-dev.svg" %}


Vous avez besoin d’un développement logiciel, de conseils ou d’une expertise 
technique ? 

*Je suis prêt à vous aider pour mener à bien vos projets.*

Apprenez en plus sur mes compétences.

[En savoir plus...](/fr/a-propos)


{% include page/section-title.html 
    title="Formations"
    src="/images/picto/section-training.svg" %}

Vous êtes un particulier, ou une entreprise, et vous souhaitez vous former, 
ou former votre personnel, à l’utilisation des nouvelles technologies ? 

Contactez moi pour définir votre plan de formation.


{% include page/section-title.html 
    title="Contact"
    src="/images/picto/section-mail.svg" %}


N'hésitez pas à me contacter pour plus de renseignements.

