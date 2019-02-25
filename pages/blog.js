import Layout from '../components/Layout';
import PostLink from '../components/PostLink';

const Blog = () => (
    <Layout>
        <ul>
            <PostLink slug="react-post" title="React"/>
            <PostLink slug="angular-post" title="Angular"/>
            <PostLink slug="vue-post" title="Vue"/>
        </ul>
    </Layout>
)

export default Blog;