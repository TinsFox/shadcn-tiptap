import type { Registry } from "./schema";

export const extensions: Registry = [
	{
		name: "starter-kit",
		type: "registry:block",
		description: "Starter kit for the editor",
		dependencies: ["@tiptap/starter-kit"],
		registryDependencies: ["separator", "button", "tooltip"],
		files: [
			{
				path: "toolbars/bold.tsx",
				type: "registry:component",
				target: "components/toolbars/bold.tsx",
			},
			{
				path: "toolbars/blockquote.tsx",
				type: "registry:component",
				target: "components/toolbars/blockquote.tsx",
			},
			{
				path: "toolbars/bullet-list.tsx",
				type: "registry:component",
				target: "components/toolbars/bullet-list.tsx",
			},
			{
				path: "toolbars/code.tsx",
				type: "registry:component",
				target: "components/toolbars/code.tsx",
			},
			{
				path: "toolbars/code-block.tsx",
				type: "registry:component",
				target: "components/toolbars/code-block.tsx",
			},
			{
				path: "toolbars/hard-break.tsx",
				type: "registry:component",
				target: "components/toolbars/hard-break.tsx",
			},
			{
				path: "toolbars/horizontal-rule.tsx",
				type: "registry:component",
				target: "components/toolbars/horizontal-rule.tsx",
			},
			{
				path: "toolbars/italic.tsx",
				type: "registry:component",
				target: "components/toolbars/italic.tsx",
			},
			{
				path: "toolbars/ordered-list.tsx",
				type: "registry:component",
				target: "components/toolbars/ordered-list.tsx",
			},
			{
				path: "toolbars/redo.tsx",
				type: "registry:component",
				target: "components/toolbars/redo.tsx",
			},
			{
				path: "toolbars/strikethrough.tsx",
				type: "registry:component",
				target: "components/toolbars/strikethrough.tsx",
			},
		],
	},
	{
		name: "search-and-replace",
		type: "registry:block",
		description:
			"A block that allows you to search and replace text in the editor",
		registryDependencies: [
			"button",
			"input",
			"label",
			"popover",
			"checkbox",
			"tooltip",
			"separator",
		],
		files: [
			{
				path: "extensions/search-and-replace.tsx",
				type: "registry:component",
				target: "components/extensions/search-and-replace.tsx",
			},
			{
				path: "toolbars/search-and-replace-toolbar.tsx",
				type: "registry:component",
				target: "components/toolbars/search-and-replace-toolbar.tsx",
			},
		],
	},
	{
		name: "color-and-highlight",
		type: "registry:block",
		description: "Color & highlight feature in the editor.",
		dependencies: [
			"@tiptap/extension-text-style",
			"@tiptap/extension-color",
			"@tiptap/extension-highlight",
		],
		registryDependencies: [
			"popover",
			"tooltip",
			"button",
			"scroll-area",
			"separator",
		],
		files: [
			{
				path: "toolbars/color-and-highlight.tsx",
				type: "registry:component",
				target: "components/toolbars/color-and-highlight.tsx",
			},
		],
		cssVars: {
			light: {
				"--text-default": "#000000",
				"--text-gray": "#6B7280",
				"--text-brown": "#92400E",
				"--text-orange": "#EA580C",
				"--text-yellow": "#CA8A04",
				"--text-green": "#16A34A",
				"--text-blue": "#2563EB",
				"--text-purple": "#9333EA",
				"--text-pink": "#DB2777",
				"--text-red": "#DC2626",
				"--highlight-default": "#FFFFFF",
				"--highlight-gray": "#F3F4F6",
				"--highlight-brown": "#FEF3C7",
				"--highlight-orange": "#FFEDD5",
				"--highlight-yellow": "#FEF9C3",
				"--highlight-green": "#DCFCE7",
				"--highlight-blue": "#DBEAFE",
				"--highlight-purple": "#F3E8FF",
				"--highlight-pink": "#FCE7F3",
				"--highlight-red": "#FEE2E2",
			},
			dark: {
				"--text-default": "#FFFFFF",
				"--text-gray": "#9CA3AF",
				"--text-brown": "#D97706",
				"--text-orange": "#F97316",
				"--text-yellow": "#EAB308",
				"--text-green": "#22C55E",
				"--text-blue": "#3B82F6",
				"--text-purple": "#A855F7",
				"--text-pink": "#EC4899",
				"--text-red": "#EF4444",
				"--highlight-default": "#1F2937",
				"--highlight-gray": "#374151",
				"--highlight-brown": "#78350F",
				"--highlight-orange": "#9A3412",
				"--highlight-yellow": "#854D0E",
				"--highlight-green": "#166534",
				"--highlight-blue": "#1E40AF",
				"--highlight-purple": "#6B21A8",
				"--highlight-pink": "#9D174D",
				"--highlight-red": "#991B1B",
			},
		},
	},
	{
		name: "image-placeholder",
		type: "registry:block",
		description: "Image placeholder like notion feature in the editor.",
		dependencies: [
			"@tiptap/core",
			"@tiptap/react",
			"react-dropzone",
			"@tiptap/extension-image",
		],
		registryDependencies: [
			"input",
			"popover",
			"button",
			"tabs",
			"dropdown-menu",
			"separator",
		],
		files: [
			{
				path: "extensions/image-placeholder.tsx",
				type: "registry:component",
				target: "components/extensions/image-placeholder.tsx",
			},
			{
				path: "extensions/image.tsx",
				type: "registry:component",
				target: "components/extensions/image.tsx",
			},
			{
				path: "toolbars/image-placeholder-toolbar.tsx",
				type: "registry:component",
				target: "components/toolbars/image-placeholder-toolbar.tsx",
			},
		],
	},
	{
		name: "image",
		type: "registry:block",
		description: "Image feature in the editor.",
		dependencies: ["@tiptap/extension-image"],
		registryDependencies: [
			"input",
			"popover",
			"button",
			"tabs",
			"dropdown-menu",
			"separator",
		],
		files: [
			{
				path: "extensions/image-placeholder.tsx",
				type: "registry:component",
				target: "components/extensions/image-placeholder.tsx",
			},
			{
				path: "extensions/image.tsx",
				type: "registry:component",
				target: "components/extensions/image.tsx",
			},
			{
				path: "toolbars/image-placeholder-toolbar.tsx",
				type: "registry:component",
				target: "components/toolbars/image-placeholder-toolbar.tsx",
			},
		],
	},
];
