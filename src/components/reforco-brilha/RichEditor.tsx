import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import { useEffect } from "react";
import {
  Bold, Italic, Underline as UnderlineIcon,
  AlignLeft, AlignCenter, AlignRight,
} from "lucide-react";

// Editor com foco ativo (global) — usado pra inserir conteúdo da Wikipédia
let activeEditor: Editor | null = null;
export function getActiveRichEditor(): Editor | null {
  return activeEditor;
}
export function insertIntoActiveEditor(content: string | { html?: string; text?: string; imageUrl?: string }): boolean {
  const ed = activeEditor;
  if (!ed) return false;
  if (typeof content === "string") {
    ed.chain().focus().insertContent(content).run();
    return true;
  }
  if (content.imageUrl) {
    ed.chain().focus().setImage({ src: content.imageUrl, alt: content.text || "" }).run();
    return true;
  }
  if (content.html) {
    ed.chain().focus().insertContent(content.html).run();
    return true;
  }
  if (content.text) {
    ed.chain().focus().insertContent(content.text).run();
    return true;
  }
  return false;
}

interface Props {
  html: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const SIZES = [
  { label: "P", value: "14px" },
  { label: "M", value: "18px" },
  { label: "G", value: "24px" },
  { label: "GG", value: "32px" },
];

export function RichEditor({ html, onChange, placeholder }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      
      TextStyle,
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: html || `<p></p>`,
    editable: true,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    onFocus: ({ editor }) => { activeEditor = editor; },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[160px] px-3 py-2 focus:outline-none text-base [&_p]:my-1 [&_img]:max-h-72 [&_img]:mx-auto [&_img]:rounded",
        contenteditable: "true",
        autocorrect: "on",
        autocapitalize: "sentences",
        spellcheck: "true",
        inputmode: "text",
        enterkeyhint: "enter",
        style: "font-size:16px; -webkit-user-select:text; user-select:text; touch-action:manipulation; -webkit-touch-callout:default;",
      },
      handleDOMEvents: {
        // Em mobile, alguns wrappers comem o touchstart antes do ProseMirror focar.
        touchend: (view) => {
          if (!view.hasFocus()) view.focus();
          activeEditor = view.state ? (editor as any) : activeEditor;
          return false;
        },
      },
    },
  });

  // Garante modo edição mesmo após hidratação SSR
  useEffect(() => {
    if (editor && !editor.isEditable) editor.setEditable(true);
  }, [editor]);

  useEffect(() => {
    return () => { if (activeEditor === editor) activeEditor = null; };
  }, [editor]);

  if (!editor) return null;

  const Btn = ({ active, onClick, title, children }: any) => (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      title={title}
      className={`h-7 min-w-7 px-2 rounded text-xs font-bold flex items-center justify-center ${active ? "bg-amber-200 text-amber-900" : "bg-white hover:bg-amber-50 text-gray-700"} border border-amber-200`}
    >
      {children}
    </button>
  );

  const setSize = (size: string) => {
    editor.chain().focus().setMark("textStyle", { style: `font-size: ${size}` } as any).run();
    // Tiptap TextStyle não tem font-size nativo; usamos style inline via HTML.
    const { from, to } = editor.state.selection;
    if (from !== to) {
      const sel = editor.state.doc.textBetween(from, to);
      editor.chain().focus().deleteSelection().insertContent(`<span style="font-size:${size}">${sel}</span>`).run();
    } else {
      editor.chain().focus().insertContent(`<span style="font-size:${size}">&nbsp;</span>`).run();
    }
  };

  return (
    <div className="border-2 border-amber-200 rounded-lg bg-white overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 p-1.5 border-b border-amber-200 bg-amber-50 print:hidden">
        <Btn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} title="Negrito"><Bold className="h-3.5 w-3.5" /></Btn>
        <Btn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} title="Itálico"><Italic className="h-3.5 w-3.5" /></Btn>
        <Btn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Sublinhado"><UnderlineIcon className="h-3.5 w-3.5" /></Btn>
        <div className="w-px h-5 bg-amber-200 mx-1" />
        <Btn active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Esquerda"><AlignLeft className="h-3.5 w-3.5" /></Btn>
        <Btn active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Centro"><AlignCenter className="h-3.5 w-3.5" /></Btn>
        <Btn active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Direita"><AlignRight className="h-3.5 w-3.5" /></Btn>
        <div className="w-px h-5 bg-amber-200 mx-1" />
        {SIZES.map((s) => (
          <Btn key={s.value} onClick={() => setSize(s.value)} title={`Fonte ${s.label}`}>{s.label}</Btn>
        ))}
      </div>
      <div
        onMouseDown={() => { activeEditor = editor; }}
        onTouchStart={() => { activeEditor = editor; editor.commands.focus(); }}
      >
        <EditorContent editor={editor} onClick={() => { activeEditor = editor; editor.commands.focus(); }} />
      </div>
    </div>
  );
}
