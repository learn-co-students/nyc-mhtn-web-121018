console.log('%c whacky colors', "color:blue")

// this is the newer better way
document.addEventListener("DOMContentLoaded", function(){
  // Listen for a specific event... page load event?
  // use this form to add comments!
  // event listeners

  // make the form w/ a submit button
  // already done

  // give it ears => listeners
    // listen for that button (click)
  const submitButton = document.querySelector('#the-submit-button')
  console.log('%c submitButton', 'color:red', submitButton);

  const commentForm = document.querySelector('#comment-form')
  const commentsContainer = document.querySelector("#comments-container")

  // full page reload
  // use event bubbling to help avoid redigging through the dom
  // but what about clicking anywhere?
  commentForm.addEventListener('submit', function(event) {
    // default action on a form => Submit => POSTs => refreshes
    // you must stop it
    event.preventDefault() // use this wisely
    // prevents the default POST action of a form submission
    // you will do something that can persist to a database... on thursday

    // when it clicks, event handler has to do something
      // submit somewhere => thursday
    console.log('does this event really happen when I think it happens?')
    // create the element
    const newComment = document.createElement("p")
    // assign it to the text field data
    newComment.innerText = event.target.querySelector("#new-comment").value //innerText // innerHTML // innerContent

    // add a child to the div => specific to the form (comment-container)
    commentsContainer.appendChild(newComment)
  })

  const helicopterParent = document.querySelector('#helicopter-parent')
  console.log('helicopterParent', helicopterParent);
  helicopterParent.addEventListener('click', function(event) {
    console.log(event);
    // debugger
    // event.target["data-name"]
    if (event.target.dataset.name === "alert") {
      console.warn("hey an alert");
    } else if (event.target.dataset.name === "error") {
      console.error("hey an error");
    } else if (event.target.dataset.name === "log") {
      console.log("hey an log");
    }
  })
});
