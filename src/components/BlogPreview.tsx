export default function BlogPreview(props: {
  title?: string;
  onClick?: () => void;
}) {
  return (
    <div
      class="size-96 flex justify-center items-center border-2 border-gray-500 rounded-lg p-4 space-y-8 text-center text-2xl cursor-pointer select-none"
      onClick={props.onClick}
    >
      <p>{props.title ?? "-"}</p>
    </div>
  );
}
