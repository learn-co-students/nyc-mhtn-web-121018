Rails Forms & REST
==================

## SWBATs

* Use path helpers and customize them.
* Distinguish between `form_for` vs `form_tag` based on use case.
* Understand the need for strong params & CSRF tokens.
* Begin thinking about checking information before creating things.
* Begin thinking about building a better UX - `link_to`, `button_to`, `button_tag`.

Splat & buttons

## Outline

Facebook - bookface
cd intothefiolder
users
  - username
  - password <== this is not how we store this
  - email
  - self-referencing tables <= google this!
posts - tomorrow
profiles - tomorrow

rails g model ....
rails g controller ...

both of these in one!!!

1. New domain that extends to tomorrow.
  * `rails g resource ModelName column:type`
  * RESTful routes via `resources`, `only`, `except`
2. Build out `index`, `show`, `delete`.
  * Path Helpers, `rails routes`, custom path helpers
  * `<a>` vs `link_to`, `method: HTTP_Verb`
3. Build out `new`, `create`, `edit`, `update`.
  * `form_for` vs `form_tag`
  * CSRF Token
  * strong params
4. Extra Stuff:
  * Abstraction! Partials, `before_action`
  * `button_to` vs `button_tag`
