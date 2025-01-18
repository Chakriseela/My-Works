//open this in chrome browser
https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6#find-one-row

//mongo original location
// C:\Program Files\MongoDB\Server\5.0\bin


db.post.insert({
            title: 'Post One',
            body: 'Body of post one',
            category: 'News',
            likes: 4,
            tags: ['news', 'events'],
            user: {
                name: 'John Doe',
                status: 'author'
            },
            date: Date()
     })


     db.posts.insertMany([
        {
          title: 'Post Two',
          body: 'Body of post two',
          category: 'Technology',
          date: Date()
        },
        {
          title: 'Post Three',
          body: 'Body of post three',
          category: 'News',
          date: Date()
        },
        {
          title: 'Post Four',
          body: 'Body of post three',
          category: 'Entertainment',
          date: Date()
        }
      ])



//   Update Specific Field      
db.posts.update({ title: 'Post Two' },{$set: {views: 10}})      


      
//   Increment Field ($inc)

    db.posts.update({ title: 'Post One' },{$inc: {likes: 5}})
      

//   Rename Field
    db.posts.update({ title: 'Post One' },{$rename: {likes: 'views'}})
