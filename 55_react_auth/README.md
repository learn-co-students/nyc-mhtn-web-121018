# Auth!

### What the heck is auth?

*Authentication*

You are who you say you are
- Login/Signup

*Authorization*
You can do what you say you can do
- Things you can access on a site
  - Profile
  - Settings
  - Changing password
  - Deleting/updating
  - Personalized feed
  - Admin vs normal user

### JWT as a Security Scheme

- What is JWT?
  - A hash that contains encoded information that can be stored and retrieved using a secure key
  - We encode our information to create the JWT, then decode the JWT to get back our information
- How do we use it?
  - Rather than store the user's id directly in localStorage, we can instead store a JWT token
  - By writing some clever abstractions, we can quickly authorize routes and prevent non-logged-in users or unauthorized users from performing actions that they should not be able to perform
- Effective use of this scheme brings together controllers, error handling, routing, requests, and responses. It's a lot to orchestrate!
