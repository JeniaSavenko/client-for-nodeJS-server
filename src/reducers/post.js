import {
    GET_POSTS,
    POSTS_SUCCESS,
    DELETE_POST,
    CREATE_POST,
    EDIT_MODE_POST,
    HANDLE_TEXT_CHANGE, SAVE_POST, POST_NOTES_SUCCESS
} from '../actions/PostActions'

const initialState = {
    posts: [],
};

const editModePosts = (posts, id) => posts.map(postItem => ({
    ...postItem,
    editMode: postItem.id === id,
    //body: postItem.id === id ? 'pesun' : postItem.body,
    editableField: postItem.body
}));

const savePosts = (posts, id) => posts.map(postItem => ({
    ...postItem,
    //editMode:
    body: postItem.editableField,
    editMode: false
}));

const handleTextChange = (posts, id, editableField) =>
    posts.map(postItem => (console.log('ids: ', postItem.id, id) || {
        ...postItem,
        editableField: postItem.id === id ? editableField : postItem.editableField
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
                posts: savePosts(state.posts, action.itemId)
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

        default:
            return state;
    }
}