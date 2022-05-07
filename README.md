# Welcome to the Beedol Source Code
👉 [Launch Beedol](https://beedol.app)

Project Status: `In Development`

## Tech Stack
- Backend: `Next.js`
- Frontend: `Next.js`
- Database: `Firestore`
- Auth: `Firebase`
- Hosting: `Vercel`

(Made in Replit)

## CTRL + SHIFT
Beedol was submitted to the CTRL SHIFT competition. Here's the project description:
TLDR: Beedol is a place for students and teachers to write how-to articles for other students. It was coded entirely by hand using NextJs and Firebase.

Beedol solves a problem that many students have: Finding reliable and quick answers to smaller questions. For example, if I have a question about the order of operations, normally, I'd have to make a search on Google and sort through a bunch of annoying websites filled with ads just trying to make money. On Beedol, you will be able to search for something and get a bunch of articles written by other students and teachers on how you can do something. Beedol tells you exactly how many characters there are in an article and how long it will take to read. 

Take a look at this Beedol article written by a student: https://beedol.app/cosmic/how-to-solve-equations-correctly . Beedol teaches students how to write and will provide writing resources. It fosters an ecosystem of learning and collaboration. Beedol has no ads and a smooth, clean UI to help users get the information they need quickly. Users can write posts using Markdown, a text-based way to style writing (https://commonmark.org/help/). This means that users can create elements like links, lists, headers, quotes, and codeblocks without knowing HTML.

What tools does Beedol offer to help users write posts?
Beedol lets users use markdown to style their posts. Beedol also offers a preview so that users can see what their posts will look like without publishing them. Beedol also offers a system to upload images and GIFs. Beedol also lets users toggle if their post is published or not.

How does Beedol ensure safety?
To write a post on Beedol, you must sign up with a Google account. It's an easy way for users to sign in and an extra level of security. The Beedol homepage offers two post feeds: Featured posts (Posts verified by Beedol admins), and Recent posts which shows all of the most recent posts. Beedol uses a Firebase Backend to get a quick and mobile-friendly way for admins to delete and view posts (https://i.imgur.com/hGd1bxp.png)

How does Beedol ensure security?
As I mentioned, Beedol uses Google's Firebase as a database. Firebase has built in security, but also manages authentication. Beedol's robust security rules ensure that only authenticated users can edit and change their own data. Firebase also only accepts auth attempts from the beedol.app URL in addition to the test/development server. This means that even if someone were able to clone Beedol (The code is Open Source), they wouldn't be able to change any of the data.

How did you make Beedol?
Beedol was my first Firebase project, and one of my many Next.js/React projects. I created the base from a tutorial, then created my own UI and added many new features. Beedol uses 15 node packages to manage things from animations (GSAP) to analytics (Splitbee). Beedol's UI was created first in Adobe XD, then in SASS (https://sass-lang.com/), an addon to CSS. Beedol is ~2/3 JS and ~1/3 CSS.  Beedol has over 1200 lines of hand coded CSS, and it was really fun to make.

### Stuff below was not included in the submission because I forgot to add it.
SEO?
Each post has it's own SEO tags generated and is added to the sitemap, even if something changes!

You call Beedol an app. Is it actually an app?
Yes! Beedol is an app and you can download it on IOS, Android, and Windows! See this post: [https://beedol.app/sam/how-to-download-beedol-as-an-app](https://beedol.app/sam/how-to-download-beedol-as-an-app)