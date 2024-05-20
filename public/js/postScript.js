// script for form - posting new content. Route to create a new post

addPostBtn = document.getElementById('postBtn');
postInput = document.getElementById('postInput');
postTitle = document.getElementById('postTitle');
postCard = document.getElementById('postCard');
delPostBtn = document.getElementById('delPostBtn');
// updatePostBtn = document.getElementById('updatePostBtn');
editPostInput = document.getElementById('editPostInput');

// * Create a new post
// Content to be appended to postcard
addPostBtn.onclick = async function(event) {
    event.preventDefault();
    const post = postInput.value;
    const title = postTitle.value;
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({ title:title,post:post})
    });
    console.log("post", post);
    if(response.ok){
       // location.replace("/api/posts")
       location.reload();
    }
    //const data = await response.json();
    // add data to postCard
    // if (data.ok) {
    //     postCard.innerHTML = `<h2>${data.title}</h2><p>${data.post}</p>`;
    //     postInput.value = '';
    // }
 

}

// * Update a post
// updatePostBtn.onclick = async function(event) {
//     event.preventDefault();
//     try{
//     if (!editPostInput.value) {
//         alert('Please enter a new post');
//         return;
//     }
  
//     const post = editPostInput.value;
//     const response = await fetch('/api/posts/' + post.id, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ post })
//     });
//     if (!response.ok) {
//         throw new Error('Error updating post');
//     }
//     const data = await response.json();
//         postCard.innerHTML = data.post;
//         editPostInput.value = '';
//         alert('Post updated');
//         console.log("post updated", data);
// }
//     catch(error) {
//         console.log("post update error", error);
//     }


// }

// * Delete a post
// delPostBtn.onclick = async function(event) {
//     event.preventDefault();
//     try{
//     if (!post.id) {
//         alert('invalid post');
//         console.log("invalid post", error);
//         return;
//     }
//     // or const response = await fetch(`/api/postts/${id}`,
//     const response = await fetch('/api/posts/' + post.id, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ post })
//     });
//     if (!response.ok) {
//         throw new Error('Error updating post');
//     }
//     const data = await response.json();
   
//         postCard.innerHTML = data.post;

//     }
//     catch(error) {
//         console.log("post delete error", error);
//     }
// }

console.log("POST JS")