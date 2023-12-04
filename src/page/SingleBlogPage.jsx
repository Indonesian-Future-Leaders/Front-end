import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SingleBlog from "../layouts/blog/id";
import { article } from "../static/article";

const SingleBlogPage = () => {
  return (
    <>
      <Navbar />
      <SingleBlog
        id={article?.id}
        author={article?.author}
        conclusion={article?.conclusion}
        heading={article?.heading}
        description={article?.description}
        date={article?.date}
        image={article?.image}
        topic={article?.topic}
      />
      <Footer />
    </>
  );
};

export default SingleBlogPage;
