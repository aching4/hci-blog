import { ParentProps } from "solid-js";

export default function Title(props: ParentProps) {
  return (
    <div class="font-bold text-3xl border-b-2 border-black pb-2">
      {props.children}
    </div>
  );
}
