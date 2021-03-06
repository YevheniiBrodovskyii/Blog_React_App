import React from "react";

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input type="text" placeholder="What do you want to post?" className="form-control new-post-label" />
            <button type="submit" className="btn btn-outline-secondary">Add post</button>
        </form>
    )
}

export default PostAddForm;