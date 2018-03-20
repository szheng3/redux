import uuid from 'uuid/v4';


export const AddEssay = ({id, title, content, date}) => ({

    type: "ADD_ESSAY",
    essay: {
        id:uuid(),
        title,
        content,
        date
    }

});

export const UpdateEssay = (essay) => ({

    type: "UPDATE_ESSAY",
    essay

});

export const DeleteEssay = (id) => ({

    type: "DELETE_ESSAY",
    id

});