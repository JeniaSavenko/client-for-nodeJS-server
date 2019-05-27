import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/es/Button/Button';
import TextField from '@material-ui/core/es/TextField/TextField';
import { useTranslation } from 'react-i18next';
import { ChikiPukiIcon, PencilIcon, TrashIcon } from './Icons';

const mainClass = 'post';

const Post = ({
 title, body, onDelete, id, editMode, handleEditMode, textEditAction, editableField, saveTextAction
}) => {
  const { t, i18n } = useTranslation();
    return (
      <Grid item xs={12}>
        <div className={mainClass}>
          <div className={`${mainClass}__head`}>
            <p className={`${mainClass}__title`}>{title}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }} className={`${mainClass}__body`}>
            {editMode
            ? (
              <TextField
                id="postBody"
                label={t('Post Content')}
                multiline
                rows="8"
                onChange={e => textEditAction(id, e.target.value)}
                value={editableField}
                margin="normal"
                variant="outlined"
              />
            )
            : (
              <p className={`${mainClass}__content`}>{body}</p>
            )
          }
          </div>
          <div className={`${mainClass}__footer`}>
            {editMode
           && (
           <Button
             variant="contained"
             style={{ backgroundColor: '#00c732' }}
             onClick={() => saveTextAction()}
           >
             <ChikiPukiIcon
               fill="#fff"
               width="3rem"
             />
           </Button>
)
          }
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEditMode()}
            >
              <PencilIcon fill="#fff" width="2rem" />
            </Button>
            <Button onClick={i => onDelete(i)} variant="contained" color="primary">
              <TrashIcon fill="#fff" width="2rem" />
            </Button>
          </div>
        </div>
      </Grid>
);
};


export default Post;
