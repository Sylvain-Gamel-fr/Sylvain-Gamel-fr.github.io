---
layout: page_section
title: Books
topNavigation: true
subcategory: books
lang: en
order: 1
permalink: /en/books/
logoImage: "/images/picto/section-book.svg"
---

{% assign lang = page.lang %}
{% assign bookList = site.data.books | sort: "first_publication_year" | reverse %}

{% for current in bookList %}
  {% include books/book-summary-info.html lang=lang book=current %}
{% endfor %}
