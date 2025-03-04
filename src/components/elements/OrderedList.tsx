import { ParentProps, Show } from "solid-js";

export default function OrderedList(
  props: ParentProps & {
    description?: string;
  }
) {
  return (
    <div>
      <Show when={props.description}>
        <div>{props.description}</div>
      </Show>
      <div class="ml-8">
        <ol class="list-decimal ml-4">{props.children}</ol>
      </div>
    </div>
  );
}
