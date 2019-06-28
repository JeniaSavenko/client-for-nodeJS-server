import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Markdown from 'react-native-markdown-package';
import Block from './Block';
import { Body, MarkdownStyle } from '../style';

const ListItem = ({
  title, text, updatedAt, onPress, editMode, userId,
}) => {
  const { t: translate } = useTranslation();
  return (
    <TouchableOpacity onPress={!editMode ? onPress : undefined}>
      <Block row ac js>
        <Block pv={5}>
          <Markdown styles={MarkdownStyle.markdown}>
            {title}
            {'\n'}
            {text}
          </Markdown>
          {editMode
            && (
            <Block row>
              <Block mr={5}>
                <Body>{translate('nowEditing')}</Body>
              </Block>
              <Body>{userId}</Body>
            </Block>
            )
          }
        </Block>
        <Block flex={1} row ae je>
          <Block mr={5}>
            <Body>{translate('lastSave')}</Body>
          </Block>
          <Body>
            {updatedAt}
          </Body>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};


export default ListItem;
