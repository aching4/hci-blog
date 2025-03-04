import { ParentProps, Show } from "solid-js";

export default function Paragraph(
  props: ParentProps & {
    img?: {
      src?: string;
      direction?: "left" | "right";
    };
  }
) {
  return (
    <div class="indent-12">
      <Show when={props.img?.src}>
        <img
          src={props.img?.src}
          class="mt-2 w-64"
          classList={{
            "float-left mr-5": props.img?.direction !== "right",
            "float-right ml-5": props.img?.direction === "right",
          }}
        />
      </Show>
      {props.children}
    </div>
  );
}
