import {
    GET_POSTS,
    POSTS_SUCCESS,
    DELETE_POST,
    CREATE_POST,
    EDIT_MODE_POST,
    HANDLE_TEXT_CHANGE,
    SAVE_POST,
    POST_NOTES_SUCCESS,
    ERROR_GET_POSTS
} from '../actions/PostActions';

const initialState = {
    posts: [{ _id: '1', title: 'test', text: 'text text' }],
};

const editModePosts = (posts, id) => posts.map(postItem => ({
    ...postItem,
    editMode: postItem._id === id,
    editableField: postItem.text
}));

const savePosts = (posts, id) => posts.map(postItem => ({
    ...postItem,
    text: postItem.editableField,
    editMode: false
}));

const handleTextChange = (posts, id, editableField) =>
    posts.map(postItem => (console.log('ids: ', postItem._id, id) || {
        ...postItem,
        editableField: postItem._id === id ? editableField : postItem.editableField
    }));

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state
            };

        case POSTS_SUCCESS:
            return {
                ...state,
                posts: action.json,
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.item)
            };

        case EDIT_MODE_POST:
            return {
                ...state,
                posts: editModePosts(state.posts, action.itemId)
            };

        case SAVE_POST:
            return {
                ...state,
                posts: savePosts(state.posts, action.itemId),
                action
            };

        case HANDLE_TEXT_CHANGE:
            return {
                ...state,
                posts: handleTextChange(state.posts, action.itemId, action.itemValue)
            };

        case CREATE_POST:
            return {
                ...state,
            };

        case POST_NOTES_SUCCESS:
            return {
                ...state,
                action
            };

        case ERROR_GET_POSTS:
            return {
                ...initialState,

            };

        default:
            return state;
    }
}
