import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Block from '../components/Block';
import { regNewUser } from '../actions/UserActions';

const CreateUserScreen = ({
  navigation,
  createUser,
}) => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState();

  const [userPass, setUserPass] = useState();

  return (
    <Block height width>
      <Input
        placeholder={t('userName')}
        value={userName}
        onChangeText={value => setUserName(value)}
      />
      <Input
        placeholder={t('userPass')}
        value={userPass}
        onChangeText={value => setUserPass(value)}
      />
      <Button
        title={t('registration')}
        onPress={() => {
          createUser(userName, userPass, navigation);
        }}
      />
    </Block>
  );
};

const mapStateToProps = store => ({
  token: store.user.token,
});

const mapDispatchToProps = dispatch => ({
  createUser: (name, password, navigation) => dispatch(regNewUser(name, password, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserScreen);
