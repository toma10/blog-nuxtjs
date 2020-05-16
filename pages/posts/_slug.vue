<template>
  <div>
    <heading>
      <x-title>{{ post.frontmatter.title }}</x-title>
      <div class="mt-2">
        <dateTime :date-time="post.frontmatter.date">{{
          formatDate(post.frontmatter.date)
        }}</dateTime>
      </div>
    </heading>
    <x-content>
      <div v-html="post.body" class="space-y-6 markdown"></div>
    </x-content>
  </div>
</template>

<script>
import { format } from 'date-fns'
import Heading from '~/components/Heading'
import XTitle from '~/components/XTitle'
import DateTime from '~/components/DateTime'
import XContent from '~/components/XContent'
import config from '~/config'
import { formatPost } from '~/lib/post-formatters'

export default {
  components: {
    Heading,
    XTitle,
    DateTime,
    XContent
  },
  head() {
    return {
      title: this.post.frontmatter.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.frontmatter.excerpt
        },
        {
          property: 'og:url',
          content: `${config.siteUrl}${this.$nuxt.$route.path}`
        },
        {
          property: 'og:type',
          content: 'article'
        },
        {
          property: 'og:title',
          content: this.post.frontmatter.title
        },
        {
          property: 'og:description',
          content: this.post.excerpt
        }
      ]
    }
  },
  async asyncData({ payload, route }) {
    if (payload) {
      return {
        post: payload.post
      }
    }

    const content = await import(`../../posts/${route.params.slug}.md`)

    return {
      post: formatPost({ slug: route.params.slug, content: content.default })
    }
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'dd MMMM, yyyy')
    }
  }
}
</script>
