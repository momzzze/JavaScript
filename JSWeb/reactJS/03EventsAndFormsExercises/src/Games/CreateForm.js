import React from 'react';

const CreateForm = (props) => {

    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                // TODO: prevent the default behaviour of the click event, call the createGame function and pass it the data from the form
            }}>
                <label>Title</label>
                <input type="text" id="title"/>
                <label>Description</label>
                <textarea type="text" id="description"/>
                <label>ImageUrl</label>
                <input type="text" id="imageUrl"/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

