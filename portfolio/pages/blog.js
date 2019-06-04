import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as = {`/${slug}`} href={`/post?title=${title}`}>
      <a>{ title }</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug = "nodejs-post" title = "Nodejs"/>
        <PostLink slug = "react-post" title = "React"/>
        <PostLink slug = "vue-post" title = "Vue"/>
        <PostLink slug = "react-native-post" title = "React native"/>
      </ul>
    </Layout>
  );
};

export default Blog;
