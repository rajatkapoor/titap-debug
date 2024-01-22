"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: `<p>Hello World! 🌎️</p> 
      <p>
      <a href="https://google.com">hell</a> 
      </p>`,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
