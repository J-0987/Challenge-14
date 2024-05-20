commentInput = document.getElementById('commentInput');
commentButton = document.getElementById('commentButton');
commentList = document.getElementById('commentList');
delCommentBtn = document.getElementById('delCommentBtn');

// post a new comment
commentButton.onclick = async function(event) {
    event.preventDefault();
    const comment = commentInput.value;
    const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    });
    const data = await response.json();
    if (data.success) {
        commentList.innerHTML = data.comment;
        commentInput.value = '';
    } else {
        alert('Error posting comment');
    }

}

// delete a comment
delCommentBtn.onclick = async function(event) {
    event.preventDefault();
    const response = await fetch('/api/comments', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    });
    const data = await response.json();
    if (data.success) {
        commentList.innerHTML = data.comment;
    } else {
        alert('Error deleting comment');
    }
}
