import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Post from './Post';

class PostsPage extends React.Component {
    render() {
        const {
            post,
            match,
            getPostsAction,
            deletePostAction,
            handleEditModeAction,
            textEditAction,
            saveTextAction
        } = this.props;
        return (
          <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            {[...post].map((item, i) => (
              <Post
                textEditAction={textEditAction}
                saveTextAction={() => saveTextAction(item._id, item.editableField, item.title)}
                editableField={item.editableField}
                match={match}
                index={i}
                editMode={item.editMode}
                onDelete={() => deletePostAction(item._id)}
                handleEditMode={() => handleEditModeAction(item._id)}
                key={i}
                body={item.text}
                title={item.title}
                id={item._id}
                userId={item.userId}
                getPosts={getPostsAction}
              />
                ))}
          </div>
        );
    }
}

export default PostsPage;
