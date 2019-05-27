import * as React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { createPostTitle } from '../actions/PostActions';

const PostCreateForm = ({ post, setTitleAction }) => {
    const [title, setTitle] = useState();

    const [text, setText] = useState();

    const { t, i18n } = useTranslation();

    return (
        //add form
      <Grid container>
        <Grid item xs={12} md={7}>
          <p style={{ marginTop: 0, fontSize: '3rem' }}>{t('Post creation')}</p>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper style={{ padding: '1rem 2rem' }}>
            <Grid item xs={12}>
              <TextField
                id="postTitle"
                label={t('Post Title')}
                value={post.title}
                onChange={e => setTitle(e.target.value)}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="postBody"
                label={t('Post Content')}
                multiline
                rows="8"
                onChange={e => setText(e.target.value)}
                value={post.text}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Button style={{ marginTop: '2rem', width: '100%' }} variant="contained" color="primary" onClick={() => setTitleAction(title, text)}>{t('Add New Post')}</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} />
      </Grid>
    );
};

const mapStateToProps = store => ({
  createPost: store.post.posts
});
const mapDispatchToProps = dispatch => ({
  setTitleAction: (text, title) => dispatch(createPostTitle(text, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCreateForm);
