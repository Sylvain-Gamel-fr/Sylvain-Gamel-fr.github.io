---
layout: page_app
title: Envoyer un SMS à un groupe de contacts
categories: apps
family: iOS
lang: "en"
id: mygroupsSendSMS
order: -1
header_banner: my-groups-banner.jpg
sideNote: >
    <p>Create groups of contacts.</p>

    <p>Application is available in the AppStore.
    It is compatible with iPhone, iPod and iPad.</p>

    [More info…](index.html)
shortcut:
    - name: SMS to a group (raccourcis, 4Ko)
      url: https://www.icloud.com/shortcuts/7081febba8524309bb63dd030839ebff
      description: Download shortcut on your device.
---

I offer you a shortcut that allows you to use the export function
of _My Groups_ to send an SMS message to the members of a contact group.

For more details on how this shortcut works, you may 
refers to the reading of the [dedicated article] [articleShortcut] on my 
(french only) site specialized in automation: [Automatisez.net] [automatisezNet]


{% assign download=page.shortcut[0] %}
{% include widgets/download_button.html 
    name=download.name 
    url=download.url 
    tip=download.description %}


Download this shortcut from your iPhone or iPad,
then follow the instructions to add it to your list of
shortcuts.

{% capture videoLabel %}
This video shows how to install and how to use it.
{% endcapture %}
{% include widgets/youtube.html videoId="qUu-i1zVyBM" title=videoLabel %}


**Note:** This shortcut is compatible with the iOS 13 version.

<h3 class="h5">Common Issue</h3>

You might encounter an error from _Shortcuts_ when trying to
install this shortcut.

This is because on iOS, you are not allowed, by default, to install
a shortcut from untrusted sources.

_To fix this issue_ you shall open the _Settings_ app:

1. go to the _Shortcuts_ section;
2. check the option “**Allow Untrusted Shortcuts**”

This is explained in [a how-to from Apple][howto].

[automatisezNet]: https://Automatisez.net/
[articleShortcut]: https://www.automatisez.net/raccourcis/2020/04/05/envoyer-des-sms-a-un-groupe.html
[howto]: https://support.apple.com/en-us/HT210628