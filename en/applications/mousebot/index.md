---
layout: page_app
title: MouseBot
slogan: Bring automation to your cursor!
categories: apps
family: macOS
lang: "en"
order: 2
id: mousebot
header_banner: banner_mouseBot-16-9.jpg
sideNote:
    An Automator action to pilot you mouse clics.
attachments:
    - name: MouseBot_1.0.0.pkg (5,5Mo)
      url: https://s3.eu-central-1.amazonaws.com/assets.sgintech.fr/automatisez.net/apps/MouseBot_1.0.0.pkg
      description: Free download of the installation package

---

This utility provides a simple Automator action that can generate mouse 
clic events.

The short video bellow shows how to use voice commands to do a _secondary (right)
clic_ simply by talking to your computer.

This Automator action gives you the ability to build:

- a service that is able to do a clic using a keyboard shortcut;
- a voice command to clic without the hand.

> Automator is _also_ a great way to adapt your Mac to _your_ needs and
> improve its accessibility.

## Install

The installation package of this tool can be downloaded for free.

> **Important**
>
> Since macOS Mojave, you need to _explicitely authorize_ third party actions

If you do not authorize thrird party actions, you won't be able to 
use them in Automator processes.

{% assign download=page.attachments[0] %}
{% include widgets/download_button.html 
    name=download.name 
    url=download.url 
    tip=download.description %}

A short help is available from the main window.
It will explain main configuration issues you could encounter.

Please contact me if you encounter other ones.


## Dictation Command

You can create a voice command in only few simple steps.
You will then be able to control your Mac using the voice.

1. launch Automator;
2. create a new "_dictation command_" process;
3. add the "_mouse clic_" action;
4. select the "_right_" button for clic and only check the 
   "_mouse down_" option.

Save this command. 
You have to set a proper sentence as "_dictation command_" and
check the "_command enabled_" option.

The first time you will launch the command, the system will ask for
the permission to control computer using the accessibility tools.

Just follow the instructions as described in the video above to
enable the new dictation command and run it with the voice.

-----

{% capture credits_note %}
**Credits&nbsp;:**
Thanks to Stéphane Sudre for the 
[Packages](http://s.sudre.free.fr/Software/Packages/about.html)
sofware used to build the installation package of this utility.
Also thanks to [Guillaume Gete](https://gete.net)
for letting me know about it.

{% endcapture %}
{% include widgets/small-note.html content=credits_note %}
