export default (state = [], action) => {


    switch (action.type) {
        case 'ADD_ESSAY':
            return [
                ...state,
                action.essay
            ];
        default:
            return state;

    }

};