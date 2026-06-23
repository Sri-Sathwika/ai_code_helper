import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  content: string;
}

export default function ResultCard({
  title,
  content,
}: Props) {
  return (
    <div className="rounded-xl border p-4 bg-zinc-900">
      <h2 className="font-bold text-lg mb-3">
        {title}
      </h2>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}