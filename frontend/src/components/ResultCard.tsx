import ReactMarkdown from "react-markdown";

interface Props {
  title: string;
  content: string;
}

export default function ResultCard({ title, content }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-700/70 bg-[#0B1120] shadow-[0_20px_70px_rgba(0,0,0,0.32)]">
      <header className="border-b border-slate-700/70 bg-slate-900/70 px-6 py-5">
        <div className="flex items-center gap-3">
          

          <div>
            <h2 className="text-base font-semibold capitalize tracking-tight text-slate-100">
              {title.replace("_", " ")}
            </h2>
            
          </div>
        </div>
      </header>

      <div
        className="
          prose prose-invert max-w-none px-6 py-6
          text-[15px] leading-7 text-slate-300

          prose-headings:mt-6
          prose-headings:mb-3
          prose-headings:text-slate-100
          prose-headings:font-semibold
          prose-h1:text-2xl
          prose-h2:text-xl
          prose-h3:text-lg

          prose-p:my-3
          prose-p:text-slate-300
          prose-p:leading-7

          prose-strong:text-slate-100
          prose-strong:font-semibold

          prose-ul:my-4
          prose-ol:my-4
          prose-li:my-1.5
          prose-li:text-slate-300
          prose-ul:marker:text-emerald-300
          prose-ol:marker:text-emerald-300

          prose-code:rounded-md
          prose-code:border
          prose-code:border-slate-700
          prose-code:bg-slate-950
          prose-code:px-1.5
          prose-code:py-0.5
          prose-code:text-emerald-200
          prose-code:before:content-none
          prose-code:after:content-none

          prose-pre:my-5
          prose-pre:rounded-2xl
          prose-pre:border
          prose-pre:border-slate-700
          prose-pre:bg-slate-950
          prose-pre:p-4
          prose-pre:text-sm
          prose-pre:shadow-inner

          prose-blockquote:border-l-emerald-300
          prose-blockquote:bg-slate-900/70
          prose-blockquote:px-4
          prose-blockquote:py-2
          prose-blockquote:text-slate-300

          prose-hr:border-slate-700
        "
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}