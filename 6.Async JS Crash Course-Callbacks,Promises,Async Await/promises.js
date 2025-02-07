const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        posts.push(post);
    
        const error =false;

        if(!error){
            resolve();
        } else{
            reject('Error: Something went wrong');
        }
    },2000); 
    });
}

// createPost({title:'Post Three', body: 'This is post three'})
//     .then(getPost)
//     .catch(err => console.log(err));

// Async / Await
// async function init(){
//     await createPost({title: 'Post Three', body: 'This is post three'});
    
//     getPosts();
// }

// init();


//Async / Await / Fetch
async function fetchUsers(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();

//promies.all
// const promies1 = Promise.resolve('hello world');
// const promies2 = 10;
// const promies3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const Promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res  => res.json());

// Promise.all([promies1, promies2, promies3, Promise4]).then(values => console.log(values));