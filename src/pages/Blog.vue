<template>
  <Layout>
    <main class="blog">
      <h1>Blog Posts</h1>
      <nav>
        <g-link
          v-for="post in $page.allPost.edges"
          v-bind:key="post.node.id"
          :to="post.node.path"
        >
          {{ post.node.title }}
        </g-link>
      </nav>
    </main>
  </Layout>
</template>

<page-query>
    query {
        allPost {
            totalCount
            edges {
                node {
                    id 
                    title
                    author
                    date
                    content
                    timeToRead
                    path
                }
            }
        }
    }
</page-query>

<style lang="scss">
.blog {
  nav a {
    display: block;
  }
}
</style>
