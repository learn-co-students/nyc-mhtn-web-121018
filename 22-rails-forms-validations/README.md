Rails Forms and Validations
===========================

## SWBATs

* Explain the difference between render and redirect
* Understand the meaning of _"What happens in the request stays in the request."_
* Create server side validations using Active Record
* Validate different data types i.e. string, numericality, boolean
* Create custom validations
* Implement the Flash Hash to render error messages

Domain

Dog Buddy?
- you rent dogs <== sounds illegal... but ok
- one model: Dogs
  - cuteness_level
  - name
  - size
  - breed
  - clean

Menu Options
- we did some validation
- no garbage, we trust no one

Frontend Validation == nicer user experience
Backend Validation == don't break anything

## Outline

1. New Rails application == New Domain!
2. Build out (at least) `show`, `new`, `create` routes.
3. Why validations?
  - **The Problem:** Trust NO ONE!
  - Reading docs.
  - Where should validations go?
4. Error messages => `valid?`, `errors`, `full_messages`
  - **The Problem:** Useful feedback to the user; how to display errors?
  - Review `render` vs `redirect`; Rails auto-magic.
  - _What happens in the request stays in the request._
5. Flash to the rescue!
  - **The Problem:** Display errors across redirects.
  - What is the flash hash?
  - Persistence for one extra request.
  - `flash[:errors]`
6. **Bonus:** Architectural Design
  - **The Problem:** So so so many choices... 🤯
  - `render` vs `redirect` and data persistence
  - `flash[:notice]`, `flash[:data]`, etc.
  - Hold strong opinions weakly - be open to change and other ideas
7. Custom Validations
  - **The Problem:** Very specific, custom validations.
  - _Batteries included._

## Why Use Validations?

### Validations

- This is your typical user:
  ![Your users on your site](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)


We want to make sure our app is being used the right way:

Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.

- We want to protect against unwanted, unexpected data. We should be programming defensively

- For example, would it make sense for our app to allow a bagel with an empty name to be created?

- ActiveRecord provides us _several_ built in validations and I **highly recommend reading the docs** [Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)

- If we need custom functionality, we can also write our own methods

- These validations will be run **any time i try to write to the database** => `Bagel.create`, `@bagel.update`, `@bagel#save`

```ruby
# validations occur in the model/bagel.rb
class Bagel < ApplicationRecord
  # validates the requirement for name to BOTH be a non empty string and unique
  validates(:name, { presence: true, uniqueness: true })
  # validates :price, numericality: { presence: true, only_integer: true }

  # Custom validations
  validate :validate_num_for_price

  def validate_num_for_price
    # call the attribute you want to validate then put in conditions
    if self.price.class != Fixnum || self.price > 30
      # Add errors to the error's array
      errors.add(:price, "Needs to be a number less than 30")
      # errors array -> [{price: "Needs to be a number less than 30"}]
    end
  end

end
```

_Note_ Walk students through a couple of the validations on the Rails Guides documentation and show them how to try new ones. It is helpful for them to see how easy this is. Reiterate that this not something you simply memorize but something you work on and get practice with.



### Annotated BagelsController

```ruby
class BagelsController < ApplicationController

  # show ALL bagels
  def index
    @bagels = Bagel.all #ask Bagel model for data and pass @bagels instance var to the view
    render :index # look for folder called /bagels in the views folder, then render the index.html.erb
  end

  # show form to create a new bagel
  def new
    @bagel = Bagel.new # create a blank instance to pass to form_for
    render :new # render app/views/bagels/new.html.erb
  end

# POST request from our new bagel form
# create is called when our app receives a POST request to /bagels
  def create
    #@bagel = Bagel.create(bagel_params)
    # this would remove the need to call .new and then .save

    @bagel = Bagel.new(bagel_params) # pass in return value of private bagel_params method, which is a hash of whitelisted attributes

    if @bagel.valid? # checking validations; method is provided by ActiveRecord => returns boolean
      @bagel.save # if bagel is valid, save to database
      flash[:notice] = 'Bagel created!' # save a notice for our user in the flash hash
      redirect_to(bagels_path) # redirect fires new GET request, which will hit the BagelsController#index
    else # if bagel is not valid
      # set the errors into an instance variable to pass to view
      # @errors = @bagel.errors.full_messages
      # because I am not redirecting, instance var @bagel maintains the attributes from the form
      #render(:new) # render DOES NOT TRIGGER NEW GET REQUEST but will change the URL based on the form submission route
      # because render(:new) is NOT a new get request, I don't need to send a flash along

      # rails provides a method for sending data across multiple requests
      # we can access this via flash[:KEY] hash syntax
      flash[:errors] = @bagel.errors.full_messages

      # Should be REDIRECTING because you want to keep the same URL in the event the user decides to hit refresh on the browser
      # Check the terminal logs and see the POST, the rollback transaction then the redirect status 300 then the NEW GET REQUEST
      # Important to note with the NEW GET request the previous "state" is gone and @bagel will be from the show page which is @bagel.new
      redirect_to new_bagel_path
    end
  end

#everything below private keyword is private
private
  def bagel_params
    # return a hash of whitelisted attributes from params
    params.require(:bagel).permit(:name, :price, :tasty)
    # strong params returns a hash of attributes {name: 'some name', price: 2, tasty: true}
  end

end
```


- [Active Record Validations Docs](http://guides.rubyonrails.org/active_record_validations.html)
- [Displaying Validations in Views Rails Docs](http://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
