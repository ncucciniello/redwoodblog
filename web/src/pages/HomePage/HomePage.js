import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>Hello test</h1>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
