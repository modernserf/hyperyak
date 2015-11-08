# The Origin of HyperCard in the Breakdown of the Bicycle for the Mind
---

# Introduction

What is it that we like about computers? A lot of people I meet these days say it was when they first saw PageMaker and realized that publishing could just be about writing and design, without having to deal with paper and glue. I know quite a few people whoe really love computer games; there's something about inhabiting a virtual world that really connects with them. A select few of us _in cyberspace_ are interested in how it can be a communicator -- how we can interact with people in our community or around the world.

The concept that ties these all together is that the computer is a land of pure imagination, where we can let our ideas take form without physical constraint. This is the fundamental promise that computers make to us. But spreadsheets and zork and email are all other people's ideas that we get to inhabit; we are fundamentally limited in what we can do with them. How do we think thoughts that are too big for other people's programs?

In many cases, this means you have to become a programmer. Now, I love programming. There is something intrinsically satisfying about it for me -- when the other kids were riding bikes around the block, just for the sake of riding bikes, I was typing `10 print "butts"; 20 goto 10` into a BASIC interpreter. But getting from there to writing anything nontrivial? Frankly, it sucks. Even ignoring the cost of development software, the prospect of writing your own program from scratch is daunting, and a huge distraction from the problem you were trying to solve in the first place.

The crux of the issue is that we pretend that there's only two kinds of people out there -- users and programmers -- but there's a vast range of human experience between these categories, and we do nothing for them. 

There are culprits on both sides of this equation: first, there are the commercial software companies. A lot of them see their power users as an audience too small to matter; the overhead of making their tools pluggable or scriptable is not worthwhile. But the other side of this, the community of programmers -- we're also responsible. There's a part of our culture that _wants_ programming to be hard and we view these "noobs" with contempt; if they can do it, then it can't be "real programming", that they haven't paid their dues. It resembles nothing so much as schoolboys perpetuating generations-old hazing rituals.

## Definitions and History

But it doesn't have to be this way. There are some software paradigms that have something for people all across the spectrum, from user to programmer and everyone in between. The one I'm going to be talking about today is hypermedia: in its simplest form, its a nonlinear collection of linked documents. The germ of the idea goes back to at least the dawn of computers: Vannevar Bush, in his essay As We May Think, imagines the Memex, a workstation containing a collection of the world's knowlege in microfiche, with an automated system for travelling between cross-references. 

The terms "hypertext" and "hypermedia" come from Ted Nelson's Project Xanadu from the early 60s; although this has never released any software, a lot of the theory and terminology of hypermedia comes from his writing. In Nelson's vision, hypermedia is not just a format for publishing existing information but a form of creation -- as hypermedia encourages you to write nonlinearly, it therefore helps you to _think_ nonlinearly.

The wonderful thing about hypermedia is that its an incredibly expressive medium that could only exist on a computer, but writing it is nothing like writing software. You can build presentations and educational tools and even some simple games without having to think about how the computer will actually implement it. Its a paradigm abstract enough to encompass a vast range of ideas, but simple enough that you don't get bogged-down in implementation details.

There have been quite a few implementations of hypermedia systems since then -- the first one being part of the online system built by Doug Englebart's team at SRI -- but until fairly recently they've been limited to research labs and massively-expensive workstations. All this changed with HyperCard, which takes ideas from hypermedia and object-oriented programming and puts them into an environment that runs on a Mac or a IIGS. 

# challenges and predictions
Now, HyperCard is fascinating software and I've got a lot to say about it, but I'm even more interested in what it signifies, and what it could lead to in the future, particularly for the people between the worlds of user and programmer, and how people at these different levels of expertise will work together. So in the spirit of Bret Victor's landmark paper "The Future of Programming", we're going to look at the modest tools of 1990 and imagine what they will lead to in 25 years -- in other words, how will hypermedia shape the world of 2015?

## Authors
The first group I want to think about are the authors of hypermedia. These are people who have embraced hypermedia as a way to replace or augment something like print or film, but are not necessarily even technical people. What can we do to empower them? What are the barriers or limitations of hypermedia as a medium that we can lift?

### Navigation
One common use case, and I suppose the original use case for hypermedia, is the knowledge base. Links between articles are great for finding related information, but how does one get started? 

The first approach is via an index. Now, a hypermedia author could certainly write their own table of contents, and keep it up to date manually, but this is tedious, error-prone work that a computer is much better at. HyperCard offers some primitive forms of indexing, but the systems of the future will require ways to dynamically generate indexes based on the content and metadata of the articles. Metadata could also be extracted from the content of the document -- long documents could have an outline generated dynamically, or the links within a document could be collected into footnotes.

The second approach is search. Now, most hypermedia systems have some form of full-text search. But search becomes much more powerful when you combine it with metadata and structural analysis -- that is, the relationships between pages based on their links. One obvious use case, particularly in a large and noisy data set, would be ranking search results by relevance based on not just the content of the pages but also the pages that it links to and those that link to it.

Even more interesting opportunities arise when you combine these approaches with the authoring process. For example, by analyzing article text and links, the system could suggest, given that A links to C and B links to C, that A should also link to B. Or conversely, if A cites a section of B that in turn cites A, that there's a circular dependency between these concepts.

### Transclusion
An extension of the idea of linking documents is embedding one within another. Ted Nelson, lover of neologisms, calls this "transclusion" -- in the Xanadu model, hypermedia documents can be composed partially or entirely of dynamic transclusions of other documents. This is kind of an abstract concept, so let me give some examples:

The platonic ideal is something like a cross between a link and a block quotation: the quote isn't a transcription of its source, it _is_ the source, dynamically inserted. But the basic idea can work at many different sizes, from building layouts to inserting annotations. 

Some of the simplest use cases for this would be essentially page layouts -- for example, a page could be split into frames, with a table of contents on one side with the content on the other. More sophisticated uses of transclusion could allow for separations of content from presentation -- for example, there could be separate layouts for teachers and students, or authors and readers, that share their basic content but feature different annotations and supplementary materials.

Transclusion can also be used as a tool of collaboration -- blockquotes in email and usenet replies are essentially a primitive form of transclusion, and are used to create conversational threads. Future hypermedia tools could use this format as the structure of conversation, but flatten them into somethng that is readable. Likewise, future publishing workflows could be built on alternating rounds of writing and annotation between an author and an editor.

## Extending the model
So I've talked about some general principles of hypermedia and extensions of the model for authors. But hypermedia is still a fundamentally limited format for writing software -- nothing in the hypermedia model outlined so far enables even simple arithmetic. If we intend to make hypermedia a general-purpose tool and allow for the expression of ideas we can't even conceive of today, it needs to be programmable. 

That said, we should consider Turing completeness our last resort. HyperCard uses a very friendly programming language, HyperTalk, which (like its environment) is heavily influenced by Smalltalk, and features some of the "fix-and-continue" style debugging tools that compiled languages can only dream of. But no matter how "user-friendly" a programming language is, its never friendly enough for all people; all code is, at some level, a necessary evil -- a trade-off between clarity and accessibility against programmer time. So we must fight our instinct as programmers to expose a programmatic API and call it a day -- we need to think about extensibility at different levels -- from configuration to plugins to scripting -- and build software with affordances at each tier.

### Customization
In _A Pattern Language_, Christopher Alexander frequently discusses the role of customization in architectuure, and he repeatedly argues that the process of customizing and modifying buildings over time, and the irregularity and idiosyncracy that it produces, is what makes buildings and cities useful and beautiful. Buildings that are adaptable encourage a feeling of ownership in a far deeper sense than property laws, and they allow for an evolutionary process to transform them, where fashions come and go but a timeless style emerges.

This same ideal can apply to software. Emacs has already been around for fifteen years and could very well be around in a hundred, and for a large part this is because its so focused on customizability -- it _wants_ to be customized. Likewise, HyperCard encourages a similar pattern of ownership: HyperCard is configured through modifications to the Home stack, and they even provide you three blank pages to fill in with links to the stacks you've written or collected.

### Widgets, Plugins & Ecosystem
One of the ways that this extensibility can be made accessible to hypermedia authors is through widgets. By "widget" I mean a block of interactive content that you can transclude into a document without having to concern yourself with its implementation details. Apple provides quite a few of these with HyperCard -- for example, my slide navigation -- and there's a small community of third-party widget makers as well. 

As the world becomes more connected, it seems inevitable that this ecosystem is going to eclipse and eventually dwarf the first-party contributions. This becomes its own kind of collaboration, as people who have never met nevertheless become interdependent on eachothers code. First party widgets will be important as reference implementations that de facto standards crystalize around, but its even more important that the creators of the hypermedia systems of tomorrow provide an infrastructure for this ecosystem to bloom -- this means a standard set of tools for people to find and share widgets.

Its important to note that this ecosystem, like all the ideas I'm discussing, will need to work at _both ends_ for people with a wide range of abilities. Authors will be using widgets and programmers will be creating them, but the inverse will be true as well -- programmers will want to use this ecosystem to share code, and authors will share widgets they've modified or composed from smaller pieces. These users will have different needs and workflows but still have the same goals; just as transclusion can provide different views onto the same content, we can provide graphical and code-based views into onto same software.

### Workflows & Frameworks
The unit of abstraction in this ecosystem won't necessarily always be a widget. As industries develop workflows around hypermedia, or are created to leverage it, 
- wiki, CMS, games have frameworks
- framework provides training ground for people to become programmers
    + One of the wonderful things about the Smalltalk and Lisp machines, that the original Mac just didn't have the horsepower for, was that all the software was open -- you can see the source code and the assets and even stuff like the object hierarchies and event systems of the programs as they run. HyperCard's tools aren't nearly as sophisticated as the ones offered by Xerox or Symbolics, but they run on a computer that doesn't cost as much as a house.
- user-facing workflows eg publishing will have whole packages implementing high-level workflows over low-level systems
    + software within software, ecosystems within ecosystems -- fractal design
- frameworks will have their own internal ecosystems/cultures which can form test beds for the larger community

### Social Mores
- In either the outer or inner ecosystems, the hard part isn't the technology; its managing people.
- Every community will have different mores and different requirements for their collaboration and moderation thereof, best to provide low-level access to version control and identity and let communities build their own solutions, rather than imposing a one-size-fits-all system
- empathy important on moderation side as well 
    + lampshade linus' rants
    + forking a community should be a last resort
    + prophecy of eternal september
    + communities live and die by their ability to welcome new people

# Conclusions
Hypermedia is the product of futurists and philosophers as much as it is of engineers and scientists. Its important to acknowledge that predictions are a product of the time in which they are made. As We May Think was written during the end and immediate aftermath of the Second World War, and the desire to turn the eye of science and technology away from war is a response to what we now know as the Military-Industrial Complex. 

1990 is a much different world than 1945, but there are definite similarities -- we too are living at the conclusion of a war of sorts with the fall of the Iron Curtain. But this is a war fought culturally and economically -- as the first computers were instrumental in the Allied victory back then, the personal computer and tech industry have been a driving force of capitalism.

## The Bicycle for the Mind
There's a metaphor that Apple uses to talk about the personal computer -- the bicycle for the mind. Quoting Steve Jobs:

> I read a study that measured the efficiency of locomotion for various species on the planet. The condor used the least energy to move a kilometer. Humans came in with a rather unimpressive showing about a third of the way down the list....That didn't look so good, but then someone at Scientific American had the insight to test the efficiency of locomotion for a man on a bicycle and a man on a bicycle blew the condor away. That's what a computer is to me: the computer is the most remarkable tool that we've ever come up with. It's the equivalent of a bicycle for our minds.

## Why bicycles?
- the idea of the Bicycle for the Mind is an important metaphor on a lot of levels
- both in the mechanical sense, of a tool that increases human ability but also in the sense of being something kind of cheap and democratic
- instead of creating a bicycle for the mind, we’ve created a car
- which creates a car culture, air pollution, auto accidents, cities designed against pedestrians, the suburbs etc
- the automotive industry has a self-perpetuating virus quality that the computer industry follows

## Conspiracies vs Systematic Injustice
- auto industry conspires against streetcars
- apple changed hypercard from free to paid under pressure from commercial software publishers
- but no conspiracy is necessary to support the status quo, only indifference
- National City Lines was only one small part of the car-ification of America
- the commercialization of HyperCard is Apple trying to increase revenue
- wealth inequality doesn't require an international cabal of bankers, just cost-of-living and compound interest

Technological inequality doesn't require a conspiracy against free software. I don't know about you, but I can imagine a world where the whole tech industry is built on top of free and open source software, and yet anticompetitive practices, institutional prejudices, a culture of credentialism, the venture capital bubble, and the idea that tech workers need to live in the most expensive cities in the country are still endemic issues. I can imagine a world in which computers are a thousand times more powerful than they are today, and nearly everyone has the equipment to create hypermedia-powered software that we couldn't even imagine now, but the tools are so arcane that next to nobody has the ability to use them. And in my darkest moments, I can imagine a 2015 in which everyone is constantly connected to a global network of computers, but the whole system is designed to show us ads and spy on us.  

These are products of the system as much as they are causes, because technology is an open feedback loop. If we want the power of computing to benefit all of humanity -- if we want to make a true bicycle for the mind -- we can't just assume things will work out that way on their own; we need to make this a conscious goal of every decision we make. 

We're on the wrong trajectory today, but we're not doomed. SRI and ARPA show that we can repurpose our efforts from war into peace. Bell Labs and PARC show that commercial technology companies can direct their money and efforts into research that has revolutionary impact on the world. World-changing technology can come from anywhere -- for all we know the technology that dominates the next 25 years could come out of a side project at a European particle accelerator. But these are exceptional cases -- the future we want requires all of our participation. 

I've presented you two visions of 2015 -- one in which we use a global hypertext system to increase human understanding, and one in which we use it to shackle ourselves to the commercial software industry. The basic technology is the same; all the difference lies in how we choose to use it.

(TUMULTUOUS, SUSTAINED APPLAUSE)

---

# Links
- https://jamesfriend.com.au/running-hypercard-stack-2014
- http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.124.2308&rep=rep1&type=pdf
- http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/
- https://www.youtube.com/watch?v=ob_GX50Za6c