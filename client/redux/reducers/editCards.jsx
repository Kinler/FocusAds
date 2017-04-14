import _ from 'lodash'

const getCards = (state = [], action) => {
    let type = action && action.type;
    let _id,
        data,
        _idChild,
        initMaps,
        source;

    switch (type) {
        case 'SUBMIT_FORM':
            state = _.assign({}, state, action)
            break;
        default:
            break;
    }

    return state;
}

export default getCards;
