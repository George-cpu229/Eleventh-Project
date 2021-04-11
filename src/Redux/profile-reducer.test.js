import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [{
            id: 1,
            message: 'Boom, I am here!',
            likesCount: 15
        },
        {
            id: 2,
            message: "Hello everyone, let's chat.",
            likesCount: 20
        }
    ],
};



test('length of posts should be incremented', () => {

    //1.initial data
    let action = addPostActionCreator("it-kamasutra.com");
   

    //2.action
    let newState = profileReducer(state,action);

    //3.Expectation
    expect (newState.posts.length).toBe(3);
  
  });


test('message of new post should be correct', () => {

    //1.initial data
    let action = addPostActionCreator("it-kamasutra.com");
    
    //2.action
    let newState = profileReducer(state,action);

    //3.Expectation
    expect (newState.posts[2].message).toBe("it-kamasutra.com");
  
  });

test(`after deleting length of messages shouldn't be incorrect`, () => {

    //1.initial data
    let action = deletePost(1000);
    
    //2.action
    let newState = profileReducer(state,action);

    //3.Expectation
    expect (newState.posts.length).toBe(2);
  
  });

  

