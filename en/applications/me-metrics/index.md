---
layout: page_app
title: me-Metrics
slogan: Count what matters to you!
categories: apps
family: iOS
lang: "en"
order: -1
id: memetrics
header_banner: banner_me-metrics.jpg
sideNote:
    Count what matters to you, your way!

---

> <span class="badge rounded-pill px-4 py-2 text-light bg-dark">Retired</span><br/>
> This app is no longer maintained and has been removed from  the AppStore.

- An application ;
- A widget for the Today view;
- An Apple Watch application with its glance view.

### Features

{% capture easyTxt %}
#### Easy to use

Create a counter and a update with a tap.
This is the easiest way to get started.

- A simple tap on a counter to increase or decrease the value.
- Break down your count in units and groups.
- Quick access with the notification center widget.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id src="me-Metrics_iPhone-counters.png"
        description=easyTxt %}


{% capture automateTxt %}
#### Automate !

Integrates with your automated processes using the `x-callback-url` protocol.

- obtain the list of meters;
- apply the default increment to a counter;
- get the value of a counter;
- All this as easily as a copy/paste.

An ideal solution to integrate with processes built in 
[Workflow](https://workflow.is/).
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id align="right"
        src="me-Metrics_iPhone-fav.png"
        description=automateTxt %}


#### Count paquets

_You have just received your coffee capsules? _

Create a counter to know when the you reach the last one 
and know you need to order again!

_Do you want to stop smoking ?_

Count the number of cigarette pack you smoke.

#### A widget for quick access

Add the widget to the Today view of the Notification Center.

You can quickly update your favorite counters.

### On Your Apple Watch

{% capture watchTxt %}
Use the watchOS 2 glance function to quickly view the 
last updated counters.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang appId=page.id src="me-Metrics-watch-app.png"
        description=watchTxt %}

The app for Apple Watch allows you to update your favorite counters 
without having to take your phone out of your pocket.

### Your data, where you want

You can now export your counters in a CSV text format to use 
them in a spreadsheet, or simply save them.


If you respect exactly the same format, you can also reimport a set of counters.

