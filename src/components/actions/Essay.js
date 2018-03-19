export const AddEssay = ({title, content, date}) => ({

    type: "ADD_ESSAY",
    essay: {
        title,
        content,
        date
    }

});