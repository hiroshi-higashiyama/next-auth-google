import fetch from 'node-fetch'

// Django APIサーバーURL
const SERVERURL = 'http://localhost:8000/'

// 投稿一覧を取得する関数
export async function getAllPostsData() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`))
    const posts = await res.json()
    return posts
}
// 投稿一覧のIDを取得する関数
export async function getAllPostIds() {
    const res = await fetch(new URL(`${SERVERURL}api/post/`))
    const posts = await res.json()
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

// 投稿の詳細を取得する関数
export async function getPostData(id) {
    const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`))
    const post = await res.json()
    return post
}
