import { useNavigate } from "@solidjs/router";
import { For } from "solid-js";
import { blogs } from "../blogs/data";
import BlogPreview from "../components/BlogPreview";

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div class="p-8">
      <div class="text-5xl text-center mb-16">Human Computer Interaction</div>
      <div class="flex flex-wrap gap-4 justify-center items-center">
        <For each={blogs}>
          {(blog) => (
            <BlogPreview
              title={blog.title}
              onClick={() => {
                navigate(blog.path);
              }}
            />
          )}
        </For>
      </div>
    </div>
  );
}
