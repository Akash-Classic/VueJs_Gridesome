<template>
  <Layout>
    <h1 v-html="$page.post.title" />
    <h3>By {{ $page.post.author }} on {{ formattedDate }}</h3>
    <g-image :src="$page.post.thumbnail" style="width: 10rem;" />
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      id 
      title
      content
      author 
      thumbnail
      date
      timeToRead
    }
  }
</page-query>

<script>
export default {
  computed: {
    formattedDate() {
      return new Date(this.$page.post.date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    },
  },
};
</script>
