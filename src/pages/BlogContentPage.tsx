import { useNavigate, useParams } from "@solidjs/router";
import { blogs } from "../blogs/data";
import BlogContainer from "../components/BlogContainer";
import BlogPage from "./BlogPage";

export default function BlogContentPage() {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <BlogPage />
      <BlogContainer
        element={blogs.find((blog) => blog.path === params.id)?.element}
        onClose={() => {
          navigate("..");
        }}
      />
    </>
  );
}
