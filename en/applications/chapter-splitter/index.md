---
layout: page_app
title: Chapter Splitter
slogan: Your movie slicer. One chapter, one video.
categories: apps
family: macOS
lang: "en"
order: 1
id: chapter-splitter
header_banner: banner_chapter-splitter.jpg
sideNote:
        <p>
        Cut your movie files using chapter markers.
        </p>
        <p>
        An easy to use application built to automator your workflow.
        </p>
        <p>
        Available in the Mac AppStore, this application
        requires macOS 10.12 Sierra or higher.
        </p>
        <p>
        Wanna learn more on Automator?
        Find everything you need on 
        <a href="http://automatisez.net/" title="external web site (french)">Automatisez.net&nbsp;!</a>
        </p>
---


Chapter Splitter is an application designed to help you cut
a video in several files.

For this, it uses the chapter markers that you can
add with your video editing or screen recording software.

This kind of treatment is extremely useful especially when you realize
screen recordings or video trainings.

No need to question you.
Save your presentation now, and once in your editing software
you only need to indicate the chapter marks.

> A simple and effective utility to cut your videos.

### Features

A minimalist, but effective, user interface.

{% capture windowDescription %}

Select the video and a destination folder
and you just have to laucnh the export.

{% endcapture %}
{% capture windowScreenshot %}

Once the video is selected, the application will display the list of chapters.

{% endcapture %}
{% include widgets/screenshot-lightbox.html 
        lang=lang 
        appId=page.id 
        src="web-app-screenshot.png" imgAlt=windowScreenshot
        description=windowDescription %}

Simple use in three steps:

1. open the source video;
2. select a destination folder;
3. start the export.

A minimal configuration allow to adjust the output file names.

And if you need maximum flexibility, you can use the Automator action
to build your own workflows.

### Built and designed for Automator

Because nothing is better than leaving your Mac
work for you, Chapter Splitter is
built for Automator.

{% capture workflowDescription %}

Pass a video as input to your document
and you will find the exported videos in
the output.

{% endcapture %}
{% capture workflowScreenshot %}
An Automator action simple to configure and
to integrate into your processes.
{% endcapture %}
{% include widgets/screenshot-lightbox.html 
        lang=lang 
        appId=page.id 
        src="web-automator-workflow.png" imgAlt=workflowScreenshot
        description=workflowDescription %}

The video below shows you how to build an export process
in a few clicks.

{% capture demoAutomatorLabel %}
A simple export process
{% endcapture %}
{% include widgets/youtube.html videoId="eAN4gHLQ44M" title=demoAutomatorLabel %}
