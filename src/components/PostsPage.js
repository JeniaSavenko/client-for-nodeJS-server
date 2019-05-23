import * as React from 'react'
import Post from "./Post";
import {Link, Route, Switch} from "react-router-dom";

class PostsPage extends React.Component{

  render(){
    const {post, match, getPostsAction, deletePostAction, handleEditModeAction, textEditAction, saveTextAction} = this.props;
    return(
      <div style={{width: '100%', display: 'flex', flexWrap:'wrap'}}>
        {console.log('POST TEST', post)}
        { post.map((item, i) =>
          <Post
            textEditAction={textEditAction}
            saveTextAction={saveTextAction}
            editableField={item.editableField}
            match={match}
            index={i}
            editMode={item.editMode}
            onDelete={() => deletePostAction(item.id)}
            handleEditMode={()=>handleEditModeAction(item.id)}
            key={i}
            body={item.text}
            title={item.title}
            id={item.id}
            userId={item.userId}
            getPosts={getPostsAction}
          />
        )}
        <Switch>
          <Route exact path={`${match.path}/posts/:postId`} render={()=><p>ok</p>}/>
        </Switch>
      </div>
    )
  }
}

export default PostsPage;
