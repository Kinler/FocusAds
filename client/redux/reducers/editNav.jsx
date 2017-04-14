import _ from 'lodash'

const getActive = (state = [], action) => {
    let type = action && action.type;
    let _id,
        data,
        _idChild,
        initMaps,
        source;

    switch (type) {
        case 'CHANGE_NAV_STATUS':
            state = _.assign({}, state, action)
            console.log('state', state);
            break;
        default:
            break;
    }

    return state;
}

export default getActive;
