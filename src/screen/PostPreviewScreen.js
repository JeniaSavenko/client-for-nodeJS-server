import React, { useState, useEffect } from 'react';
import { Button, Icon, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import Block from '../components/Block';
import { deletePost, updatePost } from '../api/socket';
import { Style } from '../style';

const PostPreviewScreen = ({ navigation }) => {
  const post = navigation.getParam('post');

  const goTo = navigation.navigate;

  const [title, setTitle] = useState(post.title);

  const [text, setText] = useState(post.text);

  const { t } = useTranslation();

  useEffect(
    () => {
      const timer = setTimeout(() => updatePost(post._id, title, text), 2000);
      return () => {
        clearTimeout(timer);
      };
    },
    [title, text],
  );

  return (
    <Block>
      <Input
        placeholder={t('title')}
        value={title}
        onChangeText={(value) => {
          setTitle(value);
        }}
      />
      <Input
        placeholder={t('text')}
        value={text}
        onChangeText={(value) => {
          setText(value);
        }}
      />
      <Block row ac jb widht pv="10" ph="5">
        <Block width="48%">
          <Button
            outline
            icon={(
              <Icon
                name={Style.iconSave}
                type={Style.iconType}
                color={Style.colorWhite}
              />
            )}
            titleStyle={Style.titleStyle}
            title={t('save')}
            onPress={() => {
              updatePost(post._id, title, text);
              goTo('PostScreen');
            }}
          />
        </Block>
        <Block width="48%">
          <Button
            outline
            icon={(
              <Icon
                name={Style.iconTrash}
                type={Style.iconType}
                color={Style.colorWhite}
              />
            )}
            titleStyle={Style.titleStyle}
            title={t('delete')}
            onPress={() => {
              deletePost(post._id);
              goTo('PostScreen');
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default PostPreviewScreen;
