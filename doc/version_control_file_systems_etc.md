
## Files & file systems
hypercard works more like a database than a file
    every change is saved automatically
intermedia is an A/UX hypermedia system contemporary to hypercard
    represents stack as directory
    uses unix permissions for shared access
    every object in stack is a file
the unix file system is really powerful
    but mostly in ways that have nothing to do with files
    stdin, dev/random dont go on a floppy
    unix files are powerful because they work like Objects
    counterintuitive to non-programmers
a file directory isnt an inherently good representation of a stack
embrace the object graph

## Version Control
    - common pain point for non-programmers is version control
    - useful when working alone, life-changing when working on team
    - shared hypercard files lock when multiple people are viewing
    - with version control, each editor can have own version & merge changes
    `head vs snapshot`
    - version control enables a new way of thinking about documents & links
    - links & transclusions can point to HEAD or snapshot
    - comments/corrections can be handled as pull requests
---

---
    **Address in later section**
    - version control is hard
    - programmers will make isolated widgets for comments

## Database
    `queries / views`
    - hypercard is persistent & ignores internal-to-file metaphors
        - automatically saves
        - following a link is opening
    - some file metaphors, like directories, are really useful
    - stack is a queryable object database
        - hypercard has full text search
        - but _only_ text search
        - could also have structured queries, views
    - database state is part of the program
        - code is data, data is code
        - version control contains state, not just code
        - has disadvantages but it reveals some easy to ignore truths
        - programs are living things that grow over time, not static binaries

## Servers and Networks
    - Desktop software is an aberration
    - past and present are both about networks
    - some of us have seen the future: Gopher
    `intermedia`
    - intermedia is a hypermedia system for A/UX
        - runs on network
        - uses unix file system/permissions
    - doesn't take a lot to imagine intermedia running on a public server
    - unix's power comes from flexibility of file system
        - stdin, /dev/random doesn't go on a floppy
        - files in unix model are more like objects than structured data
    `servers`
    - instead of stack as file on server, stack _is_ server
    - stack serves cards to client
        - events bubble up to server
        - code is _in_ the objects, not text files _about_ the objects
        - hypermedia author doesn't need to separate client & server side
