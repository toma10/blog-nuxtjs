import { promises as fs } from 'fs'
import path from 'path'
import { formatPost } from './post-formatters'

export async function getPost(slug) {
  const content = await fs.readFile(
    path.resolve(process.cwd(), `posts/${slug}.md`),
    'utf8'
  )

  return formatPost({ slug, content })
}

export async function allPosts() {
  const postPaths = await fs.readdir(path.resolve(process.cwd(), 'posts'))

  const posts = await Promise.all(
    postPaths.map((path) => getPost(path.replace(/\.md$/, '')))
  )

  return posts.sort(
    (postA, postB) =>
      new Date(postB.frontmatter.date) - new Date(postA.frontmatter.date)
  )
}
