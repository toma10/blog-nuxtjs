<template>
  <div>
    <heading>
      <x-title>Blog</x-title>
    </heading>
    <x-content>
      <div class="grid gap-16">
        <post v-for="(post, index) in posts" :key="index" :post="post" />
      </div>
    </x-content>
  </div>
</template>

<script>
import matter from 'gray-matter'
import { excerpt } from '~/helpers'
import Heading from '~/components/Heading'
import XTitle from '~/components/XTitle'
import XContent from '~/components/XContent'
import Post from '~/components/Post'

export default {
  components: {
    Heading,
    XTitle,
    XContent,
    Post
  },
  head() {
    return {
      title: 'Home'
    }
  },
  asyncData() {
    const posts = ((context) => {
      const keys = context.keys()
      const values = keys.map(context)

      const data = keys.map((key, index) => {
        const value = values[index]
        const document = matter(value.default)

        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')

        return {
          frontmatter: document.data,
          markdownBody: document.content,
          slug,
          excerpt: excerpt(document.content)
        }
      })

      return data
    })(require.context('../posts', true, /\.md$/))

    return {
      posts: posts.sort(
        (postA, postB) =>
          new Date(postB.frontmatter.date) - new Date(postA.frontmatter.date)
      )
    }
  }
}
</script>
