import Layout from '../components/Layout';

const Post = ({url}) => (
    <Layout title={url.query.title}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda beatae, dolores dolorum earum
            eos fugiat laboriosam magnam natus nesciunt praesentium, saepe sapiente tempora ullam, veniam veritatis? Aliquam, odio!
        </p>
    </Layout>
);

export default Post;