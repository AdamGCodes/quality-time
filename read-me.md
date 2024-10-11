Description
This is the second of four projects created during week 6 of a 12 week bootcamp. 

Insert your Description here:
Quality Time is a web based aplication that aims to solve the problem of what do to with kids you are looking after. This is mainly parents but could also be used by other family members or friends who provide childcare. We will use the expression parents from this point on but that could mean any one providing child care.

Many parents struggle to know what to do with kids and how to make sure that tie spent together is enriching and rewarding for the kids and the adults. Quality Time aims to help address this challenge by providing a library of practical and affordable activities to do with children. Activities will use a system of categories or "tags" to help ensure users are able to filter content to meet their specific needs. This might include categories such as age of child(ren), indoor activities, outdoor activities, in the car, spur of the moment (I've got nothing with me) ideas that can be done with common object etc. 

Each activity will set out the resources required and clear and concise instructions as to how to set up and run the activity. 

Registered users will be able to build out a profile with further information to help tailor their expreince and the content they are presented with.

In adition to this registered users will also be able to:
Add their own activities using a form.
Edit or delete there own activities. 
Comment on their own and others activities.
Like/favourite others activities.  


Deployment link
https://quality-time.netlify.app/


Getting Started/Code Installation
Web based app no need for installation. 

If you wish to view the code for this proect, it can be found at: https://github.com/Archietheowl/quality-time


Timeframe & Working Team (Solo/Pair/Group)
This project was created in one week with an MVP target set and multiple stretch goals. A number of stretch goals were reached an those not achieved are being added to "future developements" bellow.

This was a solo project. 

Technologies Used
    Planning and documentation
        Mardown
        Figma
        Trello
        dbdiagram.io
    Developer Tools
        VSCode
    Front End
        HTML
        CSS
        JavaScript
    Back End
        MEN STACK
                MongoDB
                ExpressJS
                NodeJS
            EJS
            Mongoose
    Hosting/Cloud Storage
        Netlify - Deployment
        Cloudinary - Cloud resource storage

Brief
One week to create a CRUD application of our choice using skills learned previously on the course, specificlaly using the MEN stack skills covered in the two weeks proceding this procet week. 
Project deliverables included:
Planning
    User story
    Wireframing
    Planning our restful routes
    Planning our data architecture
Build



Planning
Starting with a fairly comprehensive user story that outlined the key expectations of each user group I then moved on to creating a wireframe to plan out the user experience and interactions within the site. 

I then moved on to defining the architecture of my required data sets as the basis for planning how the relationships between different sets of data. 

From here I moved on to my RESTful routing table to build the skeliton of the site pages as well as all other routes that would be required to accomplish MVP. At this stage I added routes that might be required only in stretch goals in the eventuality that I reach MVP and was able to scale/expand the app. 



Build/Code Process

Instructions

The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.

You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.

You'll need to include a minimum of 3-4 code snippets, highlighting code you're particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.

You don't need to document every single thing you coded, but walk them through the key sections of the project build.

For any group project, you will just focus on your contributions. 

Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.

Insert your Build/Code Process here:





Challenges

Instructions

Challenges are great for showing your learning journey and problem solving, and this is a section that many engineers will check out. Every day of your engineering career you’ll encounter challenges, this is part of your growth and development. It’s the challenges you encounter that helps you become a stronger and more competent engineer. 

Here you will detail any particular challenges you encountered as you were coding the project. 

Questions to answer here:

What technical challenges did you come across? 
Why were these challenges? 
What problem solving did you do to rectify them?
Team dynamics/ Project management
Tools/Tech you used

Insert your Challenges here:




Wins
I'm pretty happy with the visual design and user interface of the project. There is certainly more that I would like to do given time. I'm not naturally creative or very focused on asthetics but throughout the planning and build process I have kept the user in my mind and tried to ensure that it provides an overal experience that meets or excedes there expections/needs. 

I've also run a couple of accessability checks and am pleased that on that automated tests is scores farily well in the mid to high 90s(%) I did keep this in mind throughout the proces when choosing colours, sizes and other interface items. 

Although there is more I'd like to do with the navigation and filtering of resources I do like the card based system as I think it shows the user what they need to see in order to make choices and navigate smoothly. I didn't get to many of my phase 3 stretch goals but am very keen to implment the tag and filtering functions as I feel they would really bring the site together very well. I've done some work on this but not enough to have it running reliably in time for presentation. 


Key Learnings/Takeaways
There were two fundamental aspects of the process that I've taken away from this project (as well as a number of other important ones)
1 Planning! I spent a long time planning the project and at times got frustrated as I felt it was taking too long and I want to get started. However, I stuck with it and spend as much time as I needed on each element of my plan. Each aspect was important as all the others as the idea grew in my mind it became clear that this project would be far more complex than anything I'd attempted before. The interaction of pages, routes, data sets, user interface and logic would have been overwhelming if I had not planned in great detail. Thanks to thinking through in great detail and taking the time to record all of this in my plans the first 3 days of the build went incredibly smoothly and this meant I was fairly close to MVP with plenty of time to focus on a really effective UI and start looking at some of my stretch goals. 
2 Testing testing testing.  As our stack grows and we learn more and more technologies it's become apparent to me that vital process of starting each element of a project very simply and testing/loging out the whole way along. I have done a little more with Python in the past than JS and find that JS's tools for debugging are a little less explicit than python so testing every single step of the way so you can easily isolate and resolve any issues before you move on is an estential way to work. Any time I've gotten too into what I'm doing and run ahead creating an entire route or function that I thought was straight forward, I've run into issues and found it far harder to fix the issue and move on. 
Aside from these I think I have generally become more comfortable with the back end technologies and the idea of restful routing. I still don't feel I know all the syntaxes and structures backwards and forwards but as the week has gone on I've needed to refer to my notes and other support less and less.  




Bugs
Further testing needed before definitive list but for now:
User profile edit page is not yet working to push updated data to database. 
Some more work required on error handling. The UI is not good and there are sections that require flash notifications not yet in place.
Not a bug but the site although responsive is not optimised for mobiles and has a few large resources that need to be resized or adapted to be lighterweight and perform better. 



Future Improvements

A system of tagging used by users and applied to sparks in order to match users with the most relevent content. 
Filtering in the Spark index page based on established tags
A 0-5 rating scale (probably stars) for users to easily rate each spark. 
Building on the rating system this could be build into the flitering system and also an average star rating given to each spark.
Linking home page and a specific section on the user profile to push a small selection of relevent Sparks.
Adding a smooth and appealing UI in the form of a carousel for browsing rows of cards.
Addministrator authority to edit and delete comments and sparks of all users. 
Creating downloadable/printable pages for each spark, dynamically so people can take sparks off line if needed.
Printer friendly styling and print window button if users wish to print a page to take off line.
Email address verification
Administrator moderation before sparks go live.
Analytics dashboard for Admin showing views, likes, most comment etc. 
Email updates to users with links to relevent content.
Broaden authorisation so users can allow friends to edit their sparks or create private sparks that most users can't see. 