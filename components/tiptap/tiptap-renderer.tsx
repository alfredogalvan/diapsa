import type { JSONContent } from "@tiptap/core";
import { renderToHTMLString } from "@tiptap/static-renderer";
import DOMPurify from "isomorphic-dompurify";
import { tiptapExtensions } from "@/lib/tiptap/extensions";

export interface TiptapRendererProps {
    content?: object | string | null;
}

const KNOWN_NODE_TYPES = new Set([
    "blockquote",
    "bulletList",
    "codeBlock",
    "doc",
    "hardBreak",
    "heading",
    "horizontalRule",
    "image",
    "listItem",
    "orderedList",
    "paragraph",
    "text",
]);

const KNOWN_MARK_TYPES = new Set([
    "bold",
    "code",
    "highlight",
    "italic",
    "link",
    "strike",
    "subscript",
    "superscript",
    "underline",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseUnknownContent(content: unknown): JSONContent | null {
    if (!content) {
        return null;
    }

    if (typeof content === "string") {
        const trimmedContent = content.trim();

        if (!trimmedContent) {
            return null;
        }

        try {
            const parsedContent: unknown = JSON.parse(trimmedContent);
            return parseUnknownContent(parsedContent);
        } catch {
            return null;
        }
    }

    if (!isRecord(content)) {
        return null;
    }

    if (typeof content.type === "string") {
        return content;
    }

    return parseUnknownContent(content.content ?? content.doc ?? content.document ?? content.json);
}

function normalizeNode(content: JSONContent): JSONContent[] {
    if (!content.type) {
        return [];
    }

    if (!KNOWN_NODE_TYPES.has(content.type)) {
        return (content.content ?? []).flatMap(normalizeNode);
    }

    const normalizedNode: JSONContent = {
        type: content.type,
    };

    if (isRecord(content.attrs)) {
        normalizedNode.attrs = content.attrs;
    }

    if (content.type === "text") {
        if (typeof content.text !== "string") {
            return [];
        }

        normalizedNode.text = content.text;
        normalizedNode.marks = content.marks?.filter((mark) => KNOWN_MARK_TYPES.has(mark.type));

        return [normalizedNode];
    }

    if (content.content) {
        normalizedNode.content = content.content.flatMap(normalizeNode);
    }

    return [normalizedNode];
}

function parseContent(content: TiptapRendererProps["content"]): JSONContent | null {
    const parsedContent = parseUnknownContent(content);

    if (!parsedContent) {
        return null;
    }

    const normalizedContent = normalizeNode(parsedContent);

    if (normalizedContent.length === 0) {
        return null;
    }

    if (normalizedContent.length === 1 && normalizedContent[0].type === "doc") {
        return normalizedContent[0];
    }

    return {
        type: "doc",
        content: normalizedContent,
    };
}

function isEmptyTiptapContent(content: JSONContent) {
    if (!content.type) {
        return true;
    }

    if (!content.content || content.content.length === 0) {
        return content.type === "doc";
    }

    return false;
}

function renderTiptapContent(content: JSONContent) {
    try {
        const html = renderToHTMLString({
            content,
            extensions: tiptapExtensions,
        });

        return DOMPurify.sanitize(html);
    } catch {
        return "";
    }
}

export default function TiptapRenderer({ content }: TiptapRendererProps) {
    const parsedContent = parseContent(content);

    if (!parsedContent || isEmptyTiptapContent(parsedContent)) {
        return null;
    }

    const sanitizedHtml = renderTiptapContent(parsedContent);

    if (!sanitizedHtml) {
        return null;
    }

    return (
        <div
            className="tiptap-content text-base leading-8 text-tertiary [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-secondary [&_blockquote]:bg-gray-50 [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:text-primary [&_code]:rounded-xs [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_h1]:mb-5 [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-extrabold [&_h1]:leading-tight [&_h1]:text-primary [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:text-primary [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-primary [&_hr]:my-8 [&_hr]:border-gray-200 [&_img]:my-8 [&_img]:h-auto [&_img]:w-full [&_img]:rounded-sm [&_img]:object-cover [&_li]:my-1 [&_mark]:rounded-xs [&_mark]:bg-secondary/30 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-sm [&_pre]:bg-primary [&_pre]:p-5 [&_pre]:text-sm [&_pre]:text-white [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-bold [&_strong]:text-primary [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
    );
}
