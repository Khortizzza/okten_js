// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let postM = document.getElementsByClassName('posts')[0];
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const postVal of value) {
//             let postss = document.createElement('div');
//             postss.classList.add('post');
//             let postsId = document.createElement('div');
//             postsId.innerText = `id - ${postVal.id}`;
//            let postssUser = document.createElement('div');
//            postssUser.innerText = `user ID - ${postVal.userId}`;
//             let postssTitle = document.createElement('h2');
//             postssTitle.innerText = postVal.title;
//             let postssBody = document.createElement('div');
//             postssBody.innerText=postVal.body;
//             postss.append(postsId, postssUser, postssTitle, postssBody);
//             postM.appendChild(postss);
//         }
//
//         });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let commentsDiv = document.getElementsByClassName('comments')[0];
fetch ('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        for (const commentsV of value) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            let commentPost = document.createElement('div');
            commentPost.innerText='Post ID - ' + commentsV.postId;

            let commentId=document.createElement('div');
            commentId.innerText='id -' + commentsV.id;

            let commentName=document.createElement('div');
            commentName.innerText='Name:' + commentsV.name;

            let commentEmail=document.createElement('div');
            commentEmail.innerText='e-mail: ' + commentsV.email;

            let commentBody=document.createElement('div');
            commentBody.innerText='Body: ' + commentsV.body;

            commentDiv.append(commentPost, commentId, commentName, commentEmail, commentBody);
            commentsDiv.appendChild(commentDiv);

        }
    });


