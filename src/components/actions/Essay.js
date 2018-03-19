import uuid from 'uuid/v4';


export const AddEssay = ({id = uuid(), title, content, date}) => ({

    type: "ADD_ESSAY",
    essay: {
        id,
        title,
        content,
        date
    }

});

export const UpdateEssay = (essay) => ({

    type: "UPDATE_ESSAY",
    essay

});