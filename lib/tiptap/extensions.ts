import { Extension, type Extensions } from "@tiptap/core";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

const HeadingAnchor = Extension.create({
    name: "headingAnchor",
    addGlobalAttributes() {
        return [
            {
                types: ["heading"],
                attributes: {
                    id: {
                        default: null,
                        parseHTML: (element) => element.getAttribute("id"),
                        renderHTML: (attributes) => {
                            if (!attributes.id) {
                                return {};
                            }

                            return {
                                id: attributes.id,
                            };
                        },
                    },
                },
            },
        ];
    },
});

export const tiptapExtensions: Extensions = [
    StarterKit.configure({
        underline: false,
    }),
    HeadingAnchor,
    Underline,
    Highlight.configure({
        multicolor: true,
    }),
    Image.configure({
        allowBase64: false,
    }),
    TextAlign.configure({
        types: ["heading", "paragraph"],
    }),
    Typography,
    Subscript,
    Superscript,
];
