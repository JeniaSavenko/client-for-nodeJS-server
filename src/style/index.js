import styled from 'styled-components';

export const Title = styled.Text`
    fontSize: 16px;
`;

export const Body = styled.Text`
    fontSize: 14px;
    color: #999999
`;

export const Date = styled.Text`
  font-size: 14px;
  color: #FF0400
`;

export const Style = {
  titleStyle: {
    paddingLeft: 5,
    fontSize: 16,
  },
  colorWhite: '#fff',
  iconType: 'ionicon',
  iconSave: 'ios-save',
  iconTrash: 'ios-trash',
};


export const MarkdownStyle = {
  markdown: {
    heading1: {
      color: 'red',
    },
    heading2: {
      color: 'green',
    },
    strong: {
      color: 'red',
      fontWeight: 'bold',
    },
    em: {
      color: 'cyan',
    },
    text: {
      color: 'black',
    },
  },
};
