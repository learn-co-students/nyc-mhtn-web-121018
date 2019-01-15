Rails Associations & Forms
==========================

## SWABATs

* Begin thinking about building a better UX - `link_to`, `button_to`, `button_tag`.
* Use Rails form helper methods that create an associated object
  * aka: `collection_select` in a `form_for`

## Outline

1. Review last lecture's code & build out the rest of the routes.
  * `<a>` vs `link_to`, `method: HTTP_Verb` for deleting.
  * `button_to` vs `button_tag`
  * Abstraction! Partials, `before_action`
2. Refresher on `has_many` and `belongs_to` in a one-to-many relationship.
  * Add some seed data.
  * CRUD it up! Build out the 7 RESTful routes for the second model.
3. Learn about `collection_select` in a `form_for`.

## Our Domain

Facebook - bookface
cd intothefiolder
users
  - username
  - password <== this is not how we store this
  - email
  - self-referencing tables <= google this!
posts - tomorrow
  - content
  - title
  - sponsor

## Lecture Notes

### CRUD Review

The 7 RESTful Routes are:

1. index
2. show
3. new
4. create
5. edit
6. update
7. destroy

```
rails routes
http://localhost:3000/rails/info/routes
```

### Forms

```html
<!-- Sinatra Way -->
<form action="/users" method="post">
  <input type="text" name="user[username]" placeholder="pick a username">
  <input type="password" name="user[password]" placeholder="password super secret">
  <input type="text" name="user[email]" placeholder="your email">
  <input type="submit">
</form>

<!-- form_tag -->
<%= form_tag users_path, method: :post do %>
  <%= text_field_tag :username %>
  <%= password_field_tag :password %>
  <%= email_field_tag :email %>
  <%= submit_tag %>
<% end %>

<!-- form_for -->
<%= form_for @user, url: users_path, html: { method: "post" } do |f| %>
  <%= f.text_field :username %>
  <%= f.password_field :password %>
  <%= f.email_field :email %>
  <%= f.submit "Create" %>
<% end %>

<!-- if you give it a empty user => it knows to post and create
     if you give it an existing user => it knows to patch and fill in stuff -->
<%= form_for @user do |f| %>
  <%= f.text_field :username %>
  <%= f.password_field :password %>
  <%= f.email_field :email %>
  <%= f.submit %>
<% end %>
```

### Associations & Forms

DIY `collection_select`:

```html
<!-- DIY f.collection_select -->
  <select name="post[party_id]">
    <% Party.all.each do |party| %>
      <option value="<%= party.id %>">
        <%= party.theme %>
      </option>
    <% end %>
  </select>
```

How `collection_select` works in a `form_for`:

```html
<!--
  first arg is method we want to call on @kid (:party_id) THE KEY🔑 for my Params,
  the collection we want to use to populate the dropdown(Party.all || @parties which is a reference from the controller to be Party.all),
  the value we want in our params: Party#id,
  what do we want to display in the tag itself? Party#theme
-->
<!--   Kid >- Party   -->
<%= form_for @kid do |f| %>
  <!-- yada yada... -->
  <%= f.collection_select(:party_id, @parties, :id, :theme) %>
  <!-- yada yada... -->
  <%= f.submit %>
<% end %>
```
