---
layout: page_app
title: my Groups
slogan: Manage your groups of contacts right on iOS device.
categories: apps
family: iOS
lang: "en"
order: 1
id: mygroups
header_banner: my-groups-banner.jpg
sideNote: >
    Create groups of contacts.

    Application is available in the App Store.
    It is compatible with iPhone, iPod touch and iPad.

---

This simple and efficient app will let you organize
your address book in groups of contacts.

What is possible on Mac with _Contacts_ application is, at last,
possible on your iPhone or iPad.

The app _my Groups_ finaly fill this gap by proposing essentials
features:

- create, rename and delete groups of contacts;
- export [vCards](https://fr.wikipedia.org/wiki/VCard) of members;
- merge multiple groups as a single one.


> A simple tool respecting your privacy.

### Managing Groups

{% capture groupesDescription %}

Main screen of this app immediatly displays the list of groups in your
address book.

This is the starting point from where you can create new groups,
delete them or change their names.

- Slide from left to right on a group name to rename it;
- Slide from right to left on a group name to delete it.

Going into edit mode allows you to select multiples groups to delete
them all at once, export them or create a new group by merging your selection.

On this screen, the light appearance is used.

{% endcapture %}
{% capture groupesScreenshot %}
Main screen, list of groups.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="groups-iphone.png" imgAlt=groupesScreenshot
        description=groupesDescription %}


### Premium Features

<html>
<img src="/images/apps/mygroups/message-locked.svg" 
     alt="Paid features"
     style="width: 7rem; margin: 1rem auto; display: block;">
</html>

Merging groups and sharing are premium features that can be
unlocked through an in-app purchase.

<img src="/images/apps/mygroups/free-trial.svg" 
     alt="Free Trial"
     style="float: left; width: 30px; margin-right: 2rem;">
You may test those features for free for a limited time by activating
a free trial.

> The free purchase **is not** a subscription.
> It only allows the temporary unlock of premium features.

If you were finding those useless for you, they will be disabled at the end
of the trial period.

After this, the application will remain fully functional and you will be
able to use freely, exceptiing those small more advanced features.

_If you find this app useful to you, I hope that you will see this purchase
as a direct support of my work and it future evolutions._

### Multiple Directories

<html>
<img src="/images/apps/mygroups/address-book-picker.svg" 
     alt="Selecting an account"
     style="width: 5rem; margin: 1rem auto; display: block;">
</html>

Wherever are your contacts: on your phone, in iCloud or Gmail (cardDAV),
this tool allows you to manage multiple address book accounts as easily 
as a Mac.

{% capture directoryDescription %}

The account picker screen allow you to select which account to manage.

- cardDAV accounts (iCloud, Gmail) can be used to create groups;
- contacts folders on Exchange accounts
  (Outlook, Office 365, G Suite) are displayed but cannot be selected
  as those do not support groups.

Your groups will be managed on the selected account.

The account defined as your default account in system settings will
be the one selected on first launch.

On this screen the interface uses the dark-mode apperance.

{% endcapture %}
{% capture directoryScreenshot %}
Pick an account on which you will manage groups.
{% endcapture %}
{% include widgets/app-screenshot.html 
        lang=lang 
        appId=page.id 
        src="directories-iphone.png" imgAlt=directoryScreenshot
        description=directoryDescription %}

