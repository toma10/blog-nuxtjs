import excerptHtml from 'excerpt-html'
import frontMatter from 'front-matter'
import marked from 'marked'

export function formatPost({ slug, content }) {
  const { attributes: frontmatter, body: postMarkdown } = frontMatter(content)
  const postBody = marked(postMarkdown)
  const postExcerpt = excerptHtml(postBody)

  return {
    slug,
    frontmatter,
    body: postBody,
    excerpt: postExcerpt
  }
}
