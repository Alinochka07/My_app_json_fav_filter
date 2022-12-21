import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts, onOpenWindow, onOpenFullWindow, onDelete, onToggleImportant, onToggleLike}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <div key={id}>
                <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}
                    onOpenWindow={() => onOpenWindow(id)}
                    onOpenFullWindow={() => onOpenFullWindow(id)}
                />
            </div>
        )
    });
    return (
        <div className="app-list list-group">
            {elements}
        </div>
    )
}


export default PostList;
