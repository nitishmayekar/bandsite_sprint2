
const fetchComments = async () => {
  try {
    const response = await axios.get(
      'https://project-1-api.herokuapp.com/comments?api_key=${824d2731-6a26-4c87-8169-63e27f0caf2d}'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};


const displayComment = (comment) => {
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logoElement = document.createElement('img');
  logoElement.classList.add('logo');
  logoElement.src = './Assets/Images/logo.png';
  logoElement.alt = 'logo';

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const nameTimestampContainer = document.createElement('div');
  nameTimestampContainer.classList.add('name-timestamp-container');

  const nameElement = document.createElement('p');
  nameElement.classList.add('name');
  nameElement.textContent = comment.name;

  const timestampElement = document.createElement('p');
  timestampElement.classList.add('timestamp');

  let dateFormat = new Date(comment.timestamp);
  let dateFinalFormat =dateFormat.getDate() + '/' + (dateFormat.getMonth() + 1) + '/' + dateFormat.getFullYear();
  timestampElement.textContent = dateFinalFormat;

  const commentTextElement = document.createElement('p');
  commentTextElement.classList.add('comment-text');
  commentTextElement.textContent = comment.comment;

  nameTimestampContainer.appendChild(nameElement);
  nameTimestampContainer.appendChild(timestampElement);

  contentContainer.appendChild(nameTimestampContainer);
  contentContainer.appendChild(commentTextElement);

  logoContainer.appendChild(logoElement);

  commentContainer.appendChild(logoContainer);
  commentContainer.appendChild(contentContainer);

  const commentsContainer = document.getElementById('comments-container');
  const firstChild = commentsContainer.firstChild;
  commentsContainer.insertBefore(commentContainer, firstChild);
  
};



const loadComments = async () => {
   const comments = await fetchComments();
   comments.forEach(displayComment);

};
const loadUpdatedComment= async (comment) => {
 
  displayComment(comment);
};

const addComment = async (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');

  const name = nameInput.value;
  const comment = commentInput.value;

  if (name && comment) {
    const timestamp = new Date().toLocaleString();

    try {
    const response = await axios.post(
        'https://project-1-api.herokuapp.com/comments?api_key=${824d2731-6a26-4c87-8169-63e27f0caf2d}',
        {
          name,
          comment,
        }
      );
console.log('response from backend',response);
      // Clear input fields
      nameInput.value = '';
      commentInput.value = '';

      // Refresh comments
      loadUpdatedComment(response.data);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  }
};


document.addEventListener('DOMContentLoaded', loadComments);


const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', addComment);
