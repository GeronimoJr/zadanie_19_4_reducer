import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';


function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                    , ...state.comments]
            });
        case REMOVE_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.filter(comment => comment.id == action.id)
        });
        case EDIT_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.forEach((comment, action) => {
                if (comment.id === action.id) {
                    comment.text = action.text;
                }
            })
        });
        case THUMB_UP_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.forEach((comment, action) => {
                if (comment.id === action.id) {
                    comment.votes + 1;
                }
            })
        });
        case THUMB_DOWN_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.forEach((comment, action) => {
                if (comment.id === action.id) {
                    comment.votes + 1;
                }
            })
        });
        default:
            return state.comments;
    }
};

export default comments;