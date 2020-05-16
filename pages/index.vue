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
import Heading from '~/components/Heading'
import XTitle from '~/components/XTitle'
import XContent from '~/components/XContent'
import Post from '~/components/Post'
import { formatPost } from '~/lib/post-formatters'

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
      const postPaths = context.keys()
      const contents = postPaths.map(context)

      const data = postPaths.map((key, index) => {
        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')

        return formatPost({ slug, content: contents[index].default })
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
