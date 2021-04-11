import React, { PureComponent } from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLendthCreator,  required} from '../../../Utils/Validation/validators'
import { Textarea } from '../../common/FormsControls/FormsControls';

  const MyPosts = React.memo(props => {

  // shouldComponentUpdate(nextProps, nextState) {
  //    return nextProps != this.props || nextState != this.state;
  // }

    let postElements =
     [...props.posts].reverse().map(p => <Post message={p.message} likes={p.likesCount} />);

    let newPostElement = React.createRef();


    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }



    return (
      <div className={s.postsBlock}>
        <h3>my posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost} />
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    );
  })



const maxLendth10 = maxLendthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <div>
     <Field name="newPostText" component={Textarea} validate={[required, maxLendth10]} placeholder={"Post message"}/>
    </div>
  <div>
     <button>Add post</button>
  </div>
</form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;















// class MyPosts extends React.Component{
//   constructor(props){
//     super(props)
//      this.postElements = 
//     this.props.posts.map( p => <Post message={p.message} likes={p.likesCount} />);
//     this.newPostElement = React.createRef();
//     this.onAddPost = () => {
//     this.props.addPost();
//   }
//     this.onPostChange = () => {
//     this.text = this.newPostElement.current.value;
//     this.props.updateNewPostText(this.text);
//   }
//   }
//   render(){
//     return (
//       <div className={s.postsBlock}> 
//         <h3>my posts</h3>
//           <div>
//             <div>
//               <textarea onChange={this.onPostChange} ref={this.newPostElement} 
//               value={this.props.newPostText} />
//             </div>
//           <div>
//              <button onClick={this.onAddPost}>Add post</button>
//           </div>
//         </div>
//           <div className={s.posts}>
//             {this.postElements}
//           </div>
//         </div>
//         );
//   }
// }
