import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import Block from './Block';
import { Body, Title } from '../style';


const ListItem = ({
  title, text, updatedAt, onPress, editMode, userId,
}) => {
  const { t } = useTranslation();
  const newDate = new Date(updatedAt).toISOString().slice(0, 10);
  return (
    <TouchableOpacity onPress={!editMode ? onPress : undefined}>
      <Block row ac>
        <Block flex={1} pv={5} mr={50}>
          <Title>
            {title}
          </Title>
          <Body>
            {text}
          </Body>
          {editMode
            && (
            <Block row>
              <Block mr={5}>
                <Body>{t('nowEditing')}</Body>
              </Block>
              <Body>{userId}</Body>
            </Block>
            )
          }
        </Block>
        <Block flex={1} row ae je>
          <Block mr={5}>
            <Body>{t('lastSave')}</Body>
          </Block>
          <Body>
            {newDate}
          </Body>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ListItem;
