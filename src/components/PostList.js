import React from 'react'
import Article from "./Article";

export default function PostList({posts}){// Вызывается в App и оттуда передается список постов

    return(
        <ul>
            <li> <Article post = {posts[0]}/> </li>
            <li> <Article post = {posts[1]}/> </li>
            <li> <Article post = {posts[2]}/> </li>
            <li> <Article post = {posts[3]}/> </li>
        </ul>

    )
}