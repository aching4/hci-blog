import { createSignal, For, JSX, Show } from "solid-js";
import MyJourneyPt1 from "../blogs/MyJourneyPt1";
import Blog from "../components/BlogContainer";
import BlogPreview from "../components/BlogPreview";

export default function BlogPage() {
  const [show, setShow] = createSignal<boolean>(false);
  const [blog, setBlog] = createSignal<JSX.Element>();

  const blogs = [
    {
      title: "My Journey - Part 1",
      element: <MyJourneyPt1 />,
    },
  ];

  return (
    <div class="flex flex-wrap gap-4 justify-center items-center p-8">
      <For each={blogs}>
        {(blog) => (
          <BlogPreview
            title={blog.title}
            onClick={() => {
              setBlog(blog.element);
              setShow(true);
            }}
          />
        )}
      </For>
      <Show when={show()}>
        <Blog element={blog()} setShow={setShow} />
      </Show>
    </div>
  );
}
