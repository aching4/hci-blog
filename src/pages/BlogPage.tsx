import { useSearchParams } from "@solidjs/router";
import { createSignal, For, JSX, Show } from "solid-js";
import MyJourneyPt1 from "../blogs/MyJourneyPt1";
import BlogContainer from "../components/BlogContainer";
import BlogPreview from "../components/BlogPreview";

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const blogs = [
    {
      title: "My Journey Pt. 1",
      path: "my-journey-pt-1",
      element: <MyJourneyPt1 />,
    },
  ];

  const [blog, setBlog] = createSignal<JSX.Element>(
    blogs.find((blog) => blog.path === searchParams.path)?.element
  );

  return (
    <div class="p-8">
      <div class="text-5xl text-center mb-16">Human Computer Interaction</div>
      <div class="flex flex-wrap gap-4 justify-center items-center">
        <For each={blogs}>
          {(blog) => (
            <BlogPreview
              title={blog.title}
              onClick={() => {
                setSearchParams({ path: blog.path });
                setBlog(blog.element);
              }}
            />
          )}
        </For>
      </div>
      <Show when={blog()}>
        <BlogContainer
          element={blog()}
          onClose={() => {
            setSearchParams({ path: null });
            setBlog();
          }}
        />
      </Show>
    </div>
  );
}
