import React from 'react'
import Article from "./Article";

export default function PostList({posts}) {// Вызывается в App и оттуда передается список постов
    const articlePostElements = posts.map(post =>
        <li key = {post.id}><Article post={post}/></li>
    )
    return (
        <ul>
            {articlePostElements}
        </ul>

    )
}