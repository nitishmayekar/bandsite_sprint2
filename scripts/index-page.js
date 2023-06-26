
    
    var comments = [
      {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
      },
      {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
      },
      {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
      }
    ];


function displayComment(comment) {
  
  var commentContainer = document.createElement("div");
  commentContainer.classList.add("comment");

  var logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  var logoElement = document.createElement("img");
  logoElement.classList.add("logo");

  var contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  var nameTimestampContainer = document.createElement("div");
  nameTimestampContainer.classList.add("name-timestamp-container");

  var nameElement = document.createElement("p");
  nameElement.classList.add("name");

  var timestampElement = document.createElement("p");
  timestampElement.classList.add("timestamp");

  var commentTextElement = document.createElement("p");
  commentTextElement.classList.add("comment-text");

  logoElement.src = "./Assets/Images/logo.png";
  logoElement.alt = "logo";

  
  nameElement.textContent = comment.name;
  timestampElement.textContent = comment.timestamp;
  commentTextElement.textContent = comment.comment;

  
  logoContainer.appendChild(logoElement);

  nameTimestampContainer.appendChild(nameElement);
  nameTimestampContainer.appendChild(timestampElement);

  contentContainer.appendChild(nameTimestampContainer);
  contentContainer.appendChild(commentTextElement);

  commentContainer.appendChild(logoContainer);
  commentContainer.appendChild(contentContainer);

  
  var commentsContainer = document.getElementById("comments-container");
  commentsContainer.insertBefore(commentContainer, commentsContainer.firstChild);
}


    function handleFormSubmit(event) {
      event.preventDefault(); 


      var name = document.getElementById("name-input").value;
      
      var commentText = document.getElementById("comment-input").value;

      
  var timestamp = new Date().toLocaleString();

      
      var newComment = {
        name: name,
        timestamp: timestamp,
        comment: commentText
      };

      comments.unshift(newComment);

      
      displayComment(newComment);


      document.getElementById("name-input").value = "";
      
      document.getElementById("comment-input").value = "";
    }


    comments.forEach(function(comment) {
      displayComment(comment);
    });


    var commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", handleFormSubmit);
 
