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


                    return {
                        ...value,
                        ...action.essay
                    };


                } else {

                    return value;

                }

            });
        case "DELETE_ESSAY":
            return state.filter(value => value.id !== action.id);

        default:
            return state;

    }

};