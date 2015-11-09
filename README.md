# The Origin of HyperCard in the Breakdown of the Bicycle for the Mind
---

# Introduction

What is it that we like about computers? A lot of people I meet these days say it was when they first saw PageMaker and realized that publishing could just be about writing and design, without having to deal with paper and glue. Some people love getting lost in the virtual worlds of a computer game. And a select few of us find community with people across the world _in cyberspace_.

For all of us, the computer is a land of pure imagination, where we can let our ideas take form without physical constraint. This is the fundamental promise that computers make to us. But spreadsheets and zork and email are all other people's ideas that we get to inhabit; we are fundamentally limited in what we can do with them. How do we think thoughts that are too big for other people's programs?

```
My first computer program:
10 PRINT "BUTTS" 
20 GOTO 10
```


In many cases, this means you have to become a programmer. Now, I love programming. There is something intrinsically satisfying about it for me -- when the other kids were riding bikes around the block, just for the sake of riding bikes, I was typing into a BASIC interpreter. But getting from there to writing anything nontrivial? Frankly, it sucks. Even ignoring the cost of development software, the prospect of writing your own program from scratch is daunting, and a huge distraction from the problem you were trying to solve in the first place.

The crux of the issue is that we pretend that there's only two kinds of people out there -- users and programmers -- but there's a vast range of human experience between these categories, and we do nothing for them. 

There are culprits on both sides of this equation: first, there are the commercial software companies. A lot of them see their power users as an audience too small to matter; the overhead of making their tools pluggable or scriptable is not worthwhile. But the other side of this, the community of programmers -- we're also responsible. There's a part of our culture that _wants_ programming to be hard and we view these "noobs" with contempt; if they can do it, then it can't be "real programming", that they haven't paid their dues. It resembles nothing so much as schoolboys perpetuating generations-old hazing rituals.

## Hypermedia
```
diagram of a stack, showing links
```
But it doesn't have to be this way. There are some software paradigms that have something for people all across the spectrum, from user to programmer and everyone in between. The one I'm going to be talking about today is hypermedia: in its simplest form, its a nonlinear collection of linked documents. 

This covers an astounding number of use cases that would otherwise have to be done with custom software. People can build interactive presentations, databases, and even simple games without writing any code whatsoever; its all done with linked pages. But when you do hit the limitations of the paradigm, its a surprisingly good substrate for graphical software.

```
Timeline of Hypermedia systems:
1945: Vannevar Bush, "As We May Think": hypertext via microfiche
1960: Ted Nelson, Project Xanadu: coinage of terms "hypertext" and "hypermedia"
1968: Doug Englebart, NLS/Augment: first implementation 
1970s-80s: a bunch of stuff
1988: HyperCard
```

The germ of the idea goes at least as far back as the dawn of computers, and there have been quite a few implementations, but until fairly recently they've been limited to research labs and massively-expensive workstations. All this changed with HyperCard, which takes ideas from hypermedia and object-oriented programming and puts them into an environment that runs on a Mac or a IIGS. 

# challenges and predictions
HyperCard is fascinating software and I've got a lot to say about it, but it is not the end goal of hypermedia software; its just a starting point. So, in the spirit of Bret Victor's "The Future of Programming", I'm going to look at  trends and contemporary research, and extrapolate.

Its a safe bet that computers in 25 years will be vastly more powerful, and that the internet will be vastly more widespread, but we need a little more vision to imagine a world without barriers between users and programmers. So I'll try to answer two questions: how will people across different levels of expertise work together? And: what role will programmers, as we understand them today, play in 2015? 

Let's call the category of people between users and programmers "authors." These are people who have embraced hypermedia as a way to replace or augment something like print or film, but are not necessarily even technical people. What will their work look like, and what can we do to empower them? 

## Transclusion
`animation of moving background under cards`
HyperCard stacks have a simple form of abstraction where the cards have independent foreground layers and a shared background layer. Its limited but pretty effective -- content in the foreground can refer to fields in the background, providing some separation of content and presentation. 

```
examples of transclusion as different parts of layout:
masthead, sidebar, article, teasers, blockquotes, images
article gags:
14 Babies who look like Mikhail Gorbachev
MC Hammer's unstoppable success
```
A more generalized version of this is transclusion -- embedding one document inside another. Its not a copy -- its more like a link, where the transcluded document is inserted dynamically. It allows for much more granular separations of content and layout than layers alone.

```
RapGenius-style annotations (on 911 is a Joke)
Tumblr-style reply walls
diagram showing combination of source and commentary
```
Transclusion also provides a basis for collaboration: transclusions can be used for annotations and threaded conversations.

## Version Control
`finder window with filenames like "report final FINAL -- version 2"`
Another common pain point for non-programmers is version control. A lot of the benefits are obvious, particularly relating to collaborative work, but what are some of the less-obvious benefits of a hypermedia system that was specifically version-control aware?

```
head vs snapshot animation
    B----------|
- A1-(A2)-(A3)-o
  |
  C  
A2, A3 appear with new content
A changes over time
B transcludes A at head and changes over time
C transcludes A at snapshot and does not change
```
One of the things people wonder about with links and transclusion is if they refer to a document at a particular snapshot in time or whatever the current version is. Well, in a version-control aware system, that can be up to you.We'll explore the implications of this later. 

Version control systems aren't necessarily known for their ease of use. Its important to keep in mind that different users will have different needs and expectations of these systems, and that we don't need everyone to fit a one-size-fits-all solution.

# Widgets
As I mentioned earlier, hypermedia is an effective, but limited, paradigm for writing software. HyperCard extends the paradigm with the HyperTalk language, a very user-friendly, Smalltalk-influenced environment. But no matter how "user-friendly" a programming language is, its never friendly enough for all people; all code is, at some level, a necessary evil -- a trade-off between clarity and accessibility against programmer time. We should consider Turing completeness our last resort.

So we must fight our instinct as programmers to expose a programmatic API and call it a day -- we need to think about extensibility at different levels -- from configuration to plugins to scripting -- and build software with affordances at each tier.

One of the ways that this extensibility can be made accessible to hypermedia authors is through widgets. By "widget" I mean a block of interactive content that you can transclude into a document without having to concern yourself with its implementation details. And their self-contained nature allow authors to integrate the work of programmers without being directly dependent on them.

### Customization
Ideally, widgets aren't just black boxes. Our goal, after all, is to make the boundaries between use and programming permeable, and providing hooks for customization is a big part of that.

In _A Pattern Language_, Christopher Alexander frequently discusses the role of customization in architecture, and he repeatedly argues that the process of customizing and modifying buildings over time, and the irregularity and idiosyncracy that it produces, is what makes buildings and cities useful and beautiful. Buildings that are adaptable encourage a feeling of ownership in a far deeper sense than property laws, and they allow for an evolutionary process to transform them, where fashions come and go but a timeless style emerges.

We also see this work out in the tools we use. Emacs has already been around for fifteen years and could very well be around in a hundred, and for a large part this is because its so focused on customizability -- it _wants_ to be customized. Likewise, HyperCard encourages a similar pattern of ownership: HyperCard is configured through modifications to the Home stack, and they even provide you three blank pages to fill in with links to the stacks you've written or collected. 

This is the standard we should be living up to with the tools we create -- we can make the whole hypermedia authorship experience _ownable_ from the big picture down to the smallest parts.

## Ecosystem
    + version control enables vendoring without breakage
    + version control, customization & transclusion enable remixing & bundling, even for non programmers
    + enables collaboration via sharing
    + programmer duty to make this easy to use
Apple provides quite a few widgets with HyperCard -- for example, my slide navigation -- and there's a small community of third-party widget makers as well.

As the world becomes more connected, it seems inevitable that this ecosystem is going to eclipse and eventually dwarf the first-party contributions. This becomes its own kind of collaboration, as people who have never met nevertheless become interdependent on eachothers code. First party widgets will be important as reference implementations that de facto standards crystalize around, but its even more important that the creators of the hypermedia systems of tomorrow provide an infrastructure for this ecosystem to bloom -- this means a standard set of tools for people to find and share widgets.

Its important to note that this ecosystem, like all the ideas I'm discussing, will need to work at _both ends_ for people with a wide range of abilities. Authors will be using widgets and programmers will be creating them, but the inverse will be true as well -- programmers will want to use this ecosystem to share code, and authors will share widgets they've modified or composed from smaller pieces. These users will have different needs and workflows but still have the same goals; just as transclusion can provide different views onto the same content, we can provide graphical and code-based views into onto same software.


### Workflows & Frameworks
    + transclusion enables frameworks of widgets to be packaged together
    + ecosystem enables framework to develop community
    + customization & community provides test bed for new ideas
    + customization provides starting point for authors becoming programmers
    + enables collaboration via shared workflows
    + duty of programmers to make frameworks that work across skill levels
    + "   " provide good examples for beginner programmers
The unit of abstraction in this ecosystem won't always be widgets; common workflows and widget collections will aggregate into frameworks. Knowledge bases, online magazines and adventure games all work pretty well within the rubric of hypermedia, but each have a specific set of needs; these groups will tend to develop their own standards and ecosystems and social mores within those of hypermedia as a whole.

This raises a lot of programmers' hackles. They see frameworks as a moral hazard: they fragment the ecosystem, they encourage inefficient code, they rot young programmers' brains. This is just another case of programmer chauvinism. 

Yes, frameworks create their own ecosystems. This would be troubling if using one framework precluded you from any code outside of it, but that's almost never the case. Instead, we can see the cultures around frameworks as a means to bring people into the community as a whole; we can see frameworks as places for patterns and idioms to mature.

Yes, frameworks add another layer of indirection, but all software is indirection -- you don't get to mock frameworks that rely on hypermedia systems when those systems depend on an OS that depends on a hardware platform that depends on microcode that depends on chips that depend on transistors that depend on -- you get the picture. Even physicists depend on abstractions. Every one of these layers is a trade-off between machine efficiency and human efficiency; given that we're not doubling the number of neurons in our brain every 18 months I think its fair to put the burden on the machines.

And the most pernicious one: yes, new programmers will learn frameworks before they learn the fundamentals. Well, yeah, why wouldn't they? Everything we know about learning suggests that its a process that starts with concrete concepts and only after becoming proficient in those do we understand them in the abstract. When we learn our mother tongue, its by repeating words and phrases and experiementing with them as we discern patterns; formal knowledge of syntax and grammar come much later. 

This process will be the same for a lot of people who become programmers. "When I was a noob, I spoke like a noob, I thought like a noob..." If a framework allows people to be productive even when they barely understand how to program, then the system works! If some people are content remaining at that level of expertise, that's their prerogative. And if they outgrow the framework -- well, that doesn't mean that the framework was bad, its just not _for them_ anymore. We don't need to perpetuate the "rot your brain" canard; no matter how many times you repeat this, Djikstra's still gonna think you're an idiot because you didn't learn by writing proofs. 

If we are concerned that the next generation of programmers are going to learn to code via frameworks, then we should see it as our duty to provide them with frameworks that they can grow with as they move from little bits of scriptng glue to writing business logic to modifying the core. And we should see it as our duty to design frameworks that they can learn from, that demonstrate ideal coding practices and design patterns.

# Conclusions
Hypermedia is the product of futurists and philosophers as much as it is of engineers and scientists. Its important to acknowledge that predictions are a product of the time in which they are made. As We May Think was written during the end and immediate aftermath of the Second World War, and the desire to turn the eye of science and technology away from war is a response to what we now know as the Military-Industrial Complex. 

1990 is a much different world than 1945, but there are definite similarities -- we too are living at the conclusion of a war of sorts with the fall of the Iron Curtain. But this is a war fought culturally and economically -- as the first computers were instrumental in the Allied victory back then, the personal computer and tech industry have been a driving force of capitalism.

Home computers have been around for barely ten years, but in that time its already had world-changing impact and made billions of dollars. And computers have absolutely become easier to use since then. But I see a worrying trend -- as more and more "regular people" get home computers, consumer software has focused on being as "appliance-like" as possible. Extensibility, if available at all, is a "pro" feature.

Including HyperCard. While the current version comes for free with every Mac, Apple thinks they can monetize it, so next years version is going to be paid software, with a crippled "player" version available for free. When I say I'm more interested in the ideas in HyperCard than the program itself, I mean that I don't think it has a future. I'd be willing to bet that HyperCard will never see another major update and will be unceremoniously killed in 2004 when it can no longer run on new computers.

But more than that, I'm troubled that while our world is becoming increasingly dependent on software, the creation of that software isn't being democratized. If anything, we've made programming an even more elite field, where only rock stars and 10xers need apply. In many ways, the software industry seems to be recapitulating the excesses of the gilded age, only with technology as the lever of class stratification instead of railroads and oil.

## The Bicycle for the Mind
There's a metaphor that Apple uses to talk about the personal computer -- the bicycle for the mind. Quoting Steve Jobs:

> I read a study that measured the efficiency of locomotion for various species on the planet. The condor used the least energy to move a kilometer. Humans came in with a rather unimpressive showing about a third of the way down the list....That didn't look so good, but then someone at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle and a man on a bicycle blew the condor away. That's what a computer is to me: the computer is the most remarkable tool that we've ever come up with. It's the equivalent of a bicycle for our minds.

## Why bicycles?
I like this metaphor -- enough to name this talk after it -- because it speaks to me on a couple of different levels. Not only is a bicycle a tool that increases human ability, but its a relatively cheap one, too. You can sink a lot of money into a nice one, but even a cheap single-speed Huffy will get you around. Its a machine that's eminently fixable and understandable, suitable for children at play and adults at work. 

The computers we have today are not bicycles. Instead we've got something more like a car for the mind. Which, you know, does get you around and is easier and more comfortable than a bike. But at what cost? When we decided that America would be a place for cars, we signed ourselves up for urban sprawl, air pollution, car crashes, and oil wars. And even on a personal level, cars as much liabilities as they are assets -- I'm sure we've all known people working terrible jobs to keep their junker running so they can get to their terrible job.

## Conspiracies vs Systematic Injustice
So how did it get this way? How did we get so far off course? Some people look at this through a conspiracy lens. They think the reason Apple started charging money for HyperCard is because the commercial software publishers were afraid that if everyone could make their own software, then nobody would buy theirs. 

The unspoken premise of conspiracy theories is that the the world would be fair if there weren't outside interference. But no conspiracy is necessary to support the status quo, only indifference. Wealth inequality doesn't require an international cabal of bankers, just cost-of-living and compound interest
And HyperCard -- well, the bean counters know that they can make some money _right now_ if they sell it for a lot of money, and this is entirely consistent with them marketing the Mac as a luxury good for wealthy dilletantes.

Technological inequality doesn't require a conspiracy against free software. I don't know about you, but I can imagine a world where the whole tech industry is built on top of free and open source software, and yet anticompetitive practices, institutional prejudices, a culture of credentialism, the venture capital bubble, and the idea that tech workers need to live in the most expensive cities in the country are still endemic issues. I can imagine a world in which computers are a thousand times more powerful than they are today, and nearly everyone has the equipment to create hypermedia-powered software that we couldn't even imagine now, but the tools are so arcane that next to nobody has the ability to use them. And in my darkest moments, I can imagine a 2015 in which everyone is constantly connected to a global network of computers, but the whole system is designed to show us ads and spy on us.  

These are products of the system as much as they are causes, because technology is an open feedback loop. If we want the power of computing to benefit all of humanity -- if we want to make a true bicycle for the mind -- we can't just assume things will work out that way on their own; we need to make this a conscious goal of every decision we make. 

We're on the wrong trajectory today, but we're not doomed. SRI and ARPA show that we can repurpose our efforts from war into peace. Bell Labs and PARC show that commercial technology companies can direct their money and efforts into research that has revolutionary impact on the world. World-changing technology can come from anywhere -- for all we know the technology that dominates the next 25 years could come out of a side project at a European particle accelerator. But these are exceptional cases -- the future we want requires all of our participation. 

I've presented you two visions of 2015 -- one in which we use a global hypermedia system to increase human understanding, and one in which we use it to shackle ourselves to the commercial software industry. The basic technology is the same; all the difference lies in how we choose to use it.

(TUMULTUOUS, SUSTAINED APPLAUSE)

---

# Links
- [Running a Hypercard stack on a modern Mac](https://jamesfriend.com.au/running-hypercard-stack-2014)
- [Reflections On Notecards: Seven Issues For The Next Generation of Hypermedia Systems](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.2308&rep=rep1&type=pdf)
- [Vannevar Bush -- As We May Think](http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/)
- [The Bicycle for the Mind](https://www.youtube.com/watch?v=ob_GX50Za6c)
- [Bret Victor -- The Future of Programming](https://vimeo.com/71278954)