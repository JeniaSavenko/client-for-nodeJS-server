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
  const [userName, setUserName] = useState();

  const [userPass, setUserPass] = useState();

  const { t: translate } = useTranslation();

  const handleUserNameChange = (name) => {
    setUserName(name);
  };

  const handleUserPassChange = (pass) => {
    setUserPass(pass);
  };

  const onCreateUser = () => {
    createUser(userName, userPass, navigation);
  };

  return (
    <Block height width>
      <Input
        placeholder={translate('userName')}
        value={userName}
        onChangeText={handleUserNameChange}
      />
      <Input
        placeholder={translate('userPass')}
        value={userPass}
        onChangeText={handleUserPassChange}
      />
      <Button
        title={translate('registration')}
        onPress={onCreateUser}
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
