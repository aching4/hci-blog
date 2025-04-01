import { ParentProps, Show } from "solid-js";

export default function List(
  props: ParentProps & {
    type?: "ordered" | "unordered";
    description?: string;
  }
) {
  return (
    <div>
      <Show when={props.description}>
        <div>{props.description}</div>
      </Show>
      <div class="ml-8">
        <Show
          when={props.type === "unordered"}
          fallback={<ol class="list-decimal ml-4">{props.children}</ol>}
        >
          <ul class="list-disc ml-4">{props.children}</ul>
        </Show>
      </div>
    </div>
  );
}
