import { ParentProps } from "solid-js";

export default function Subtitle(props: ParentProps) {
  return <div class="font-bold text-xl mt-4">{props.children}</div>;
}
