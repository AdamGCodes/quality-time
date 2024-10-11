# Quality Time - Project Overview

## Description

**Quality Time** is a web-based application designed to solve the common problem of finding engaging activities to do with children. While primarily aimed at parents, it can also be useful for other family members or friends who provide childcare. Throughout this document, we will refer to "parents," but this term is used inclusively for anyone providing childcare.

Many parents struggle with finding enriching, rewarding activities to share with their kids. **Quality Time** addresses this challenge by offering a library of practical and affordable activities, which can be filtered using a system of categories or "tags." These categories may include the child's age, indoor or outdoor activities, activities for the car, or spur-of-the-moment ideas using common objects.

Each activity provides a list of required resources and clear, concise instructions for setup and execution. 

Registered users will be able to create a profile, which will help personalize their experience and the content displayed to them.

In addition, registered users can:
- Add their own activities via a form.
- Edit or delete their activities.
- Comment on both their activities and others'.
- Like or favorite activities created by others.

[**Deployment link:**](https://quality-time.netlify.app/)

## Getting Started / Code Installation

This is a web-based app, so no installation is required. 

To view the code for this project, visit the GitHub repository:  
[**GitHub Repository**](https://github.com/Archietheowl/quality-time)

## Timeframe & Working Team (Solo/Pair/Group)

This project was created in one week with an MVP target and several stretch goals. Some stretch goals were met, while others are planned for future development (see below).

**Team:** Solo project.

## Technologies Used

### Planning and Documentation:
- Markdown
- Figma
- Trello
- dbdiagram.io

### Developer Tools:
- VSCode

### Front End:
- HTML
- CSS
- JavaScript

### Back End (MEN Stack):
- MongoDB
- Express.js
- Node.js
- EJS
- Mongoose

### Hosting / Cloud Storage:
- Netlify (Deployment)
- Cloudinary (Cloud resource storage)

## Brief

This was a one-week project to create a CRUD application using the MEN stack, applying skills learned in previous weeks of the bootcamp. The deliverables included:
- User stories
- Wireframing
- Planning RESTful routes
- Planning data architecture

## Planning

I began by outlining a comprehensive user story that defined the key expectations for each user group. Following this, I created a wireframe to visualize the user experience and interactions within the site.

Next, I focused on defining the required data architecture, which formed the basis for planning relationships between different data sets.

From there, I created a RESTful routing table to structure the site’s pages and all necessary routes for reaching MVP. I also added routes that would be useful in future stretch goals if MVP was reached.

## Build / Code Process

Insert your **Build/Code Process** here, including any code snippets that highlight specific aspects of the project, your approach, and how you solved challenges.

## Challenges

Insert your **Challenges** here, detailing the technical issues encountered and your problem-solving approach. Answer questions like:
- What technical challenges did you face?
- Why were these challenges?
- What solutions did you implement?

## Wins

I am particularly pleased with the visual design and user interface of the project. Despite not being naturally focused on aesthetics, I kept the user experience in mind throughout the process and aimed to exceed their expectations.

Accessibility checks scored the project in the mid to high 90s (%), which I’m proud of. Although there is room for improvement, particularly in navigation and filtering, the card-based system works well to show users the necessary information to make decisions and navigate smoothly.

Although I didn’t achieve all my stretch goals, I made significant progress toward implementing a tagging and filtering system, which I believe will enhance the site’s usability.

## Key Learnings / Takeaways

There were two major takeaways from this project:

1. **Planning:**  
   I spent a lot of time on planning, which was frustrating at times because I wanted to dive into building. However, thorough planning was critical to the project’s success. With a clear roadmap, I was able to build the MVP smoothly and focus on enhancing the user interface and reaching stretch goals. The detailed planning of routes, data sets, and interactions made the build process efficient and manageable.

2. **Testing:**  
   Testing was vital throughout the project. With growing familiarity with JavaScript and the MEN stack, I found debugging less straightforward than with Python. Testing every step of the way ensured that I could easily isolate and fix issues before moving forward.

Beyond these two lessons, I also became more comfortable with back-end technologies and RESTful routing. While I still need to solidify my understanding of syntax, I became less reliant on references as the project progressed.

## Bugs

Further testing is needed, but for now:
- The user profile edit page does not yet push updated data to the database.
- Some sections need better error handling, including flash notifications.
- The site is responsive but not optimized for mobile; some resources need to be resized for better performance.

## Future Improvements

1. Implement a tagging system for better content matching.
2. Add filtering options on the index page based on established tags.
3. Introduce a 0-5 rating scale (likely stars) for easy activity ratings.
4. Build a filtering system based on the rating scale, with average star ratings displayed for each activity.
5. Push relevant activities to users on the homepage and in their profile sections.
6. Enhance the UI with a carousel for browsing rows of cards.
7. Grant administrators the ability to edit and delete all user comments and activities.
8. Create downloadable/printable pages for each activity so users can access them offline.
9. Add printer-friendly styling and a print button for users.
10. Implement email verification for new users.
11. Require admin moderation for activities before they go live.
12. Build an admin dashboard with analytics (views, likes, comments, etc.).
13. Send email updates to users with relevant content links.
14. Broaden authorization to allow users to collaborate with friends or create private activities not visible to others.
