export default (state = [], action) => {


    switch (action.type) {
        case 'ADD_ESSAY':
            return [
                ...state,
                action.essay
            ];
        case 'UPDATE_ESSAY':
            return [
                state.filter(value => value.id !== action.essay.id),
                action.essay
            ];
        default:
            return state;

    }

};