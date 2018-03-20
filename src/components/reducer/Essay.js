export default (state = [], action) => {


    switch (action.type) {
        case 'ADD_ESSAY':
            return [
                ...state,
                action.essay
            ];
        case 'UPDATE_ESSAY':

            return state.map(value => {
                if (value.id === action.essay.id) {

                    return (
                        action.essay
                    );

                } else {

                    return value;

                }

            });
        default:
            return state;

    }

};