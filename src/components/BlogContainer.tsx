import { IconX } from "@tabler/icons-solidjs";
import { JSX, onCleanup, onMount } from "solid-js";

export default function BlogContainer(props: {
  element?: JSX.Element;
  onClose?: () => void;
}) {
  onMount(() => {
    props.onClose && window.addEventListener("keydown", props.onClose);
  });

  onCleanup(() => {
    props.onClose && window.removeEventListener("keydown", props.onClose);
  });

  return (
    <>
      <div
        class="fixed top-0 bottom-0 left-0 right-0"
        onClick={props.onClose}
      />
      <IconX
        class="fixed top-16 right-16 z-50 mt-2 mr-2"
        size={48}
        onClick={props.onClose}
      />
      <div class="fixed top-16 bottom-16 left-16 right-16 bg-white border-2 border-gray-500 rounded-lg shadow-2xl p-4 z-40 overflow-auto">
        <div class="flex justify-center">
          <div class="w-2/5">{props.element}</div>
        </div>
      </div>
    </>
  );
}
