import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { FieldBlog, HeadBlog } from "../layouts";

const Blog = () => {
  return (
    <>
      <Navbar />
      <HeadBlog />
      <FieldBlog />
      <Footer />
    </>
  );
};

export default Blog;
