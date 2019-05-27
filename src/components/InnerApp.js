import React, { useEffect } from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import {
 getPosts, handleEditMode, rmPost, savePost, textEdit 
} from '../actions/PostActions';
import PostsPage from './PostsPage';
import PostCreateForm from './PostCreate';


const InnerApp = ({
                      match,
                      posts,
                      getPostsAction,
                      deletePostAction,
                      handleEditModeAction,
                      textEditAction,
                      saveTextAction
}) => {
    useEffect(() => {
        getPostsAction();
    }, []);

    const { t, i18n } = useTranslation();

    const linkStyle = {
        color: '#444',
        fontSize: '1.6rem',
        padding: '10px 20px',
        textDecoration: 'none',
        display: 'block',
    };

    return (
      <div style={{ marginTop: 48 }}>
        {console.log('POST', posts)}
        <Paper style={{
width: 350, position: 'fixed', top: 48, bottom: 0, left: 0, borderRadius: 0
}}
        >
          <MenuList>
            <li>
              <Link style={linkStyle} to={`${match.url}/posts`}>{t('Posts')}</Link>
            </li>
            <li>
              <Link style={linkStyle} to={`${match.url}/newPost`}>{t('Add Post')}</Link>
            </li>
          </MenuList>
        </Paper>
        <div style={{
width: 'calc(100% - 350px)', marginLeft: 350, padding: 10, boxSizing: 'border-box' 
}}
        >
          <Grid container spacing={8}>
            <Switch>
              <Route
                path={`${match.path}/posts`}
                render={() => (
                  <PostsPage
                    post={posts}
                    match={match}
                    saveTextAction={saveTextAction}
                    textEditAction={textEditAction}
                    getPostAction={getPostsAction}
                    handleEditModeAction={handleEditModeAction}
                    deletePostAction={deletePostAction}
                  />
)}
              />
              <Route path={`${match.path}/newPost`} render={() => <PostCreateForm post={posts} />} />
            </Switch>
          </Grid>
        </div>
      </div>
    );
};

const mapStateToProps = store => ({
    posts: store.post.posts,
});

const mapDispatchToProps = dispatch => ({
    getPostsAction: () => dispatch(getPosts()),
    deletePostAction: item => dispatch(rmPost(item)),
    handleEditModeAction: itemId => dispatch(handleEditMode(itemId)),
    textEditAction: (itemId, itemValue) => dispatch(textEdit(itemId, itemValue)),
    saveTextAction: (itemId, text, title) => dispatch(savePost(itemId, text, title))

});

export default connect(mapStateToProps, mapDispatchToProps)(InnerApp);
