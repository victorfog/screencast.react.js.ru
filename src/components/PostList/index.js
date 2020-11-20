import React from 'react'
import Article from "../Article";
import './style.css'

export default function PostList({posts}) {// Вызывается в App и оттуда передается список постов
    const articlePostElements = posts.map(post =>
        <li key = {post.id} className="post-list_li">
            <Article post={post}/>
        </li>
    )
    return (
        <ul>
            {articlePostElements}
        </ul>

    )
}