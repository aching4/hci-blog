import { createSignal, For, JSX, Show } from "solid-js";
import MyJourneyPt1 from "../blogs/MyJourneyPt1";
import BlogContainer from "../components/BlogContainer";
import BlogPreview from "../components/BlogPreview";

export default function BlogPage() {
  const [show, setShow] = createSignal<boolean>(false);
  const [blog, setBlog] = createSignal<JSX.Element>();

  const blogs = [
    {
      title: "My Journey Pt. 1",
      element: <MyJourneyPt1 />,
    },
  ];

  return (
    <div class="p-8">
      <div class="text-5xl text-center mb-16">Human Computer Interaction</div>
      <div class="flex flex-wrap gap-4 justify-center items-center">
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
      </div>
      <Show when={show()}>
        <BlogContainer element={blog()} setShow={setShow} />
      </Show>
    </div>
  );
}
