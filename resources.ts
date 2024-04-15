import {
	LucideIcon,
	Image,
	Monitor,
	FileSearchIcon,
	Hammer,
	FileJsonIcon,
	Paintbrush,
	Camera,
	Smartphone,
	Code,
	KeyRound,
	Presentation,
	LayoutDashboard,
	Server,
	Bot,
	Database,
	BookOpenCheck,
	ShoppingBasket,
	PaintRoller,
	CaseSensitive,
	Laptop,
	Mail,
	Accessibility,
	Globe,
	Puzzle,
	Sheet,
	Palette,
	MehIcon,
	PenLine,
	Package,
	FolderOpen,
	BatteryCharging,
	SearchCheckIcon,
	Book,
	Keyboard,
	SmartphoneNfc,
	Forklift,
	PenTool,
	Youtube,
	FileBadge2,
	Blocks,
	DatabaseZap,
} from "lucide-react";

export interface Resource {
	name: string;
	description: string;
	category: (
		| "Boilerplate"
		| "CSS"
		| "Components"
		| "Documentation"
		| "Backgrounds"
		| "Images"
		| "Video"
		| "UI UX"
		| "Snippets & Hooks"
		| "Authentication"
		| "Animations"
		| "CMS"
		| "API"
		| "AI"
		| "Database"
		| "Learning & Challenges"
		| "SAAS"
		| "Design"
		| "Fonts"
		| "VS Code Extensions"
		| "Email"
		| "Accessibility"
		| "Web Hosting"
		| "Browser Extensions"
		| "Cheatsheets"
		| "Color"
		| "Icons"
		| "Illustrations"
		| "Libraries & Packages"
		| "Open Source"
		| "Performance"
		| "Screenshots"
		| "SEO"
		| "Books"
		| "Typing"
		| "Social Media"
		| "Website Builders"
		| "Writing"
		| "Youtube Channels"
		| "Frameworks"
		| "Web3"
		| "Data Visualization"
	)[];
	url: string;
	paid: "Free" | "Paid" | "Free Plan Available";
	keywords?: string[];
	image: string;
}

export interface Category {
	name: string;
	icon: LucideIcon;
}

export const categories: Category[] = [
	{ icon: FileJsonIcon, name: "Boilerplate" },
	{ icon: Paintbrush, name: "CSS" },
	{ icon: Hammer, name: "Components" },
	{ icon: FileSearchIcon, name: "Documentation" },
	{ icon: Monitor, name: "Backgrounds" },
	{ icon: Image, name: "Images" },
	{ icon: Camera, name: "Video" },
	{ icon: Smartphone, name: "UI UX" },
	{ icon: Code, name: "Snippets & Hooks" },
	{ icon: KeyRound, name: "Authentication" },
	{ icon: Presentation, name: "Animations" },
	{ icon: LayoutDashboard, name: "CMS" },
	{ icon: Server, name: "API" },
	{ icon: Bot, name: "AI" },
	{ icon: Database, name: "Database" },
	{ icon: BookOpenCheck, name: "Learning & Challenges" },
	{ icon: ShoppingBasket, name: "SAAS" },
	{ icon: PaintRoller, name: "Design" },
	{ icon: CaseSensitive, name: "Fonts" },
	{ icon: Laptop, name: "VS Code Extensions" },
	{ icon: Mail, name: "Email" },
	{ icon: Accessibility, name: "Accessibility" },
	{ icon: Globe, name: "Web Hosting" },
	{ icon: Puzzle, name: "Browser Extensions" },
	{ icon: Sheet, name: "Cheatsheets" },
	{ icon: Palette, name: "Color" },
	{ icon: MehIcon, name: "Icons" },
	{ icon: PenTool, name: "Illustrations" },
	{ icon: Package, name: "Libraries & Packages" },
	{ icon: FolderOpen, name: "Open Source" },
	{ icon: BatteryCharging, name: "Performance" },
	{ icon: SearchCheckIcon, name: "SEO" },
	{ icon: Book, name: "Books" },
	{ icon: Keyboard, name: "Typing" },
	{ icon: SmartphoneNfc, name: "Social Media" },
	{ icon: Forklift, name: "Website Builders" },
	{ icon: PenLine, name: "Writing" },
	{ icon: Youtube, name: "Youtube Channels" },
	{ icon: FileBadge2, name: "Frameworks" },
	{ icon: Blocks, name: "Web3" },
	{ icon: DatabaseZap, name: "Data Visualization" },
].sort((a, b) => {
	return a.name.localeCompare(b.name);
});

export const resources: Resource[] = [
	{
		name: "ShipFast",
		description: "A Next.js boilerplate for building SaaS applications",
		category: ["Boilerplate", "SAAS"],
		url: "https://shipfa.st/",
		paid: "Paid",
		keywords: ["next.js", "boilerplate", "saas", "shipfast"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/shipfast.jpg",
	},
	{
		name: "LogoFast",
		description: "Create your own logo in seconds for free.",
		category: ["Images"],
		url: "https://logofa.st/",
		paid: "Free",
		keywords: ["logo", "design", "images", "logofast", "logos", "brand"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/logofast.jpg",
	},
	{
		name: "Precedent",
		description:
			"A Next.js starter template with framer motion and reusable hooks/components",
		category: ["Boilerplate", "Components", "Snippets & Hooks"],
		url: "https://precedent.dev",
		paid: "Free",
		keywords: [
			"next.js",
			"boilerplate",
			"framer",
			"motion",
			"hooks",
			"components",
			"snippets",
			"precedent",
			"template",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/precedent.jpg",
	},
	{
		name: "useHooks",
		description: "Collection of React hooks curated by the community",
		category: ["Documentation", "Snippets & Hooks"],
		url: "https://usehooks.com",
		paid: "Free",
		keywords: [
			"react",
			"hooks",
			"documentation",
			"docs",
			"usehooks",
			"snippets",
			"use",
			"hooks",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/usehooks.jpg",
	},
	{
		name: "shadcn-ui",
		description:
			"A collection of UI components for React. Built with Tailwind CSS",
		category: ["Components", "UI UX", "CSS"],
		url: "https://ui.shadcn.com",
		paid: "Free",
		keywords: [
			"react",
			"tailwind",
			"ui",
			"components",
			"shadcn-ui",
			"css",
			"web",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/shadcnui.jpg",
	},
	{
		name: "shadcn-ui Theme Generator",
		description: "A theme generator for shadcn-ui",
		category: ["UI UX", "CSS"],
		url: "https://zippystarter.com/tools/shadcn-ui-theme-generator",
		paid: "Free",
		keywords: [
			"react",
			"tailwind",
			"ui",
			"components",
			"theme",
			"generator",
			"shadcn-ui",
			"css",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/shadcnthemes.jpg",
	},
	{
		name: "Ibelick UI",
		description: "A unique collection of modern UI components and effects",
		category: ["Components", "UI UX", "CSS"],
		url: "https://ui.ibelick.com",
		paid: "Free",
		keywords: [
			"react",
			"tailwind",
			"ui",
			"components",
			"effects",
			"css",
			"web",
			"ibelick",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/ibelickui.jpg",
	},
	{
		name: "Ibelick LAB",
		description: "A collection of experimental UI components and effects",
		category: ["Components", "CSS"],
		url: "https://www.julienthibeaut.xyz/lab",
		paid: "Free",
		keywords: [
			"react",
			"tailwind",
			"ui",
			"components",
			"experimental",
			"css",
			"web",
			"ibelick",
			"lab",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/ibelicklab.jpg",
	},
	{
		name: "Ibelick Backgrounds",
		description:
			"A collection of modern and unique backgrounds for your website",
		category: ["CSS", "Backgrounds", "Snippets & Hooks"],
		url: "https://bg.ibelick.com",
		paid: "Free",
		keywords: ["backgrounds", "images", "ui", "css", "web", "bg", "ibelick"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/ibelickbg.jpg",
	},
	{
		name: "Ibelick Buttons",
		description: "A collection of modern and unique buttons for your website",
		category: ["UI UX", "CSS", "Components"],
		url: "https://buttons.ibelick.com",
		paid: "Free",
		keywords: ["buttons", "ui", "css", "web", "ibelick", "components"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/ibelickbuttons.jpg",
	},
	{
		name: "Ibelick Animations",
		description:
			"A curated collection of animations crafted exclusively with Tailwind CSS",
		category: ["Animations", "CSS", "UI UX"],
		url: "https://animation.ibelick.com",
		paid: "Free",
		keywords: ["animations", "css", "tailwind", "ui", "ux", "web", "ibelick"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/ibelickanimations.jpg",
	},
	{
		name: "CSS Background Generator",
		description:
			"Beautiful pure CSS background patterns that you can actually use in your projects!",
		category: ["CSS", "Backgrounds"],
		url: "https://www.magicpattern.design/tools/css-backgrounds",
		paid: "Free",
		keywords: [
			"css",
			"background",
			"patterns",
			"images",
			"ui",
			"ux",
			"web",
			"css",
			"generator",
			"bg",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/cssbackgrounds.jpg",
	},
	{
		name: "MagicPattern",
		description: "10+ tools for designers and developers",
		category: ["CSS", "Backgrounds", "Design"],
		url: "https://www.magicpattern.design",
		paid: "Paid",
		keywords: [
			"designers",
			"developers",
			"images",
			"ui",
			"ux",
			"css",
			"bg",
			"web",
			"magicpattern",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/magicpattern.jpg",
	},
	{
		name: "UploadThing",
		description: "A simple file uploader for your web app",
		category: ["API", "CMS", "Images", "Video"],
		url: "https://uploadthing.com",
		paid: "Free Plan Available",
		keywords: [
			"file uploader",
			"api",
			"cms",
			"images",
			"video",
			"uploadthing",
			"web",
			"app",
			"upload",
			"thing",
			"file",
			"uploader",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/uploadthing.jpg",
	},
	{
		name: "Tailwind UI",
		description:
			"Beautiful UI components, crafted by the creators of Tailwind CSS",
		category: ["UI UX", "CSS", "Components", "Boilerplate"],
		url: "https://tailwindui.com",
		paid: "Paid",
		keywords: [
			"tailwind",
			"ui",
			"components",
			"css",
			"boilerplate",
			"tailwindui",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/tailwindui.jpg",
	},
	{
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building custom designs",
		category: ["CSS", "Frameworks"],
		url: "https://tailwindcss.com",
		paid: "Free",
		keywords: ["tailwind", "css", "ui", "framework", "tailwindcss"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/tailwindcss.jpg",
	},
	{
		name: "DevUI",
		description: "A collection of modern UI components for developers",
		category: ["UI UX", "CSS", "Components"],
		url: "https://www.devui.io/",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "css"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/devui.jpg",
	},
	{
		name: "UIVerse",
		description: "Open-Source UI elements for any project",
		category: ["UI UX", "CSS", "Components"],
		url: "https://uiverse.io",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "css", "uiverse"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/uiverse.jpg",
	},
	{
		name: "Code Animations",
		description: "Beautiful code animations for social media and websites",
		category: ["Animations", "Video"],
		url: "https://www.animate-code.com",
		paid: "Free",
		keywords: [
			"code",
			"animations",
			"video",
			"social media",
			"websites",
			"animate",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/codeanimations.jpg",
	},
	{
		name: "sharpen.design",
		description: "Design prompts to sharpen your design skills",
		category: ["Learning & Challenges", "Design"],
		url: "https://sharpen.design",
		paid: "Free",
		keywords: [
			"design prompts",
			"ui",
			"ux",
			"practice",
			"design",
			"sharpen",
			"skills",
			"sharpen.design",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/sharpendesign.jpg",
	},
	{
		name: "Design Resources",
		description: "A github repository with tons of design resources",
		category: ["Design", "Documentation"],
		url: "https://github.com/bradtraversy/design-resources-for-developers",
		paid: "Free",
		keywords: [
			"design resources",
			"ui",
			"ux",
			"documentation",
			"docs",
			"design",
			"resources",
			"github",
			"bradtraversy",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/designresources.jpg",
	},
	{
		name: "Figma",
		description: "Collaborative interface design tool",
		category: ["UI UX", "Design"],
		url: "https://www.figma.com",
		paid: "Free Plan Available",
		keywords: ["design tool", "ui", "ux", "figma", "interface"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/figma.jpg",
	},
	{
		name: "Spline - 3D Design Tool",
		description: "A 3D design tool for the web",
		category: ["UI UX", "Design", "Animations"],
		url: "https://spline.design",
		paid: "Free",
		keywords: [
			"3d design",
			"ui",
			"ux",
			"design",
			"animations",
			"spline",
			"3d",
			"tool",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/spline.jpg",
	},
	{
		name: "Stack Sorted",
		description: "A curated list of community components & element designs",
		category: ["Design", "Components", "CSS"],
		url: "https://stacksorted.com",
		paid: "Free",
		keywords: [
			"element designs",
			"ui",
			"ux",
			"components",
			"css",
			"stacksorted",
			"community",
			"stack",
			"sorted",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/stacksorted.jpg",
	},
	{
		name: "Dribbble",
		description: "Discover the world’s top designers & creatives",
		category: ["Design"],
		url: "https://dribbble.com",
		paid: "Free",
		keywords: ["designers", "creatives", "ui", "ux", "design", "dribbble"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/dribbble.jpg",
	},
	{
		name: "LogoShaper",
		description: "A simple logo maker for your projects",
		category: ["Images"],
		url: "https://www.logoshaper.co",
		paid: "Free",
		keywords: ["logo", "design", "images", "logoshaper", "logos", "brand"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/logoshaper.jpg",
	},
	{
		name: "Next-Auth",
		description: "Authentication for Next.js",
		category: ["Authentication"],
		url: "https://next-auth.js.org",
		paid: "Free",
		keywords: ["next.js", "authentication", "next-auth", "auth", "next"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/nextauth.jpg",
	},
	{
		name: "Clerk",
		description: "The most comprehensive User Management Platform",
		category: ["Authentication"],
		url: "https://clerk.com",
		paid: "Free Plan Available",
		keywords: ["user management", "authentication", "clerk", "auth", "users"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/clerk.jpg",
	},
	{
		name: "Lucide",
		description: "A simply beautiful open-source icon set",
		category: ["Components", "Icons"],
		url: "https://lucide.dev",
		paid: "Free",
		keywords: ["icon set", "icons", "images", "components", "lucide"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/lucide.jpg",
	},
	{
		name: "Strapi",
		description: "The leading open-source headless CMS",
		category: ["CMS", "API"],
		url: "https://strapi.io",
		paid: "Free Plan Available",
		keywords: ["open-source", "headless", "cms", "strapi", "api", "cms"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/strapi.jpg",
	},
	{
		name: "Replicate",
		description: "AI API for generating synthetic data",
		category: ["AI", "API"],
		url: "https://replicate.com/",
		paid: "Paid",
		keywords: ["ai", "api", "synthetic data", "replicate", "data"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/replicate.jpg",
	},
	{
		name: "MongoDB",
		description: "The most popular database for modern apps",
		category: ["Database"],
		url: "https://www.mongodb.com",
		paid: "Free Plan Available",
		keywords: ["database", "mongodb", "storage", "data", "mongo", "db"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/mongodb.jpg",
	},
	{
		name: "PlanetScale",
		description: "The database for developers",
		category: ["Database"],
		url: "https://planetscale.com",
		paid: "Free Plan Available",
		keywords: [
			"database",
			"planetscale",
			"mysql",
			"storage",
			"data",
			"db",
			"sql",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/planetscale.jpg",
	},
	{
		name: "Convex",
		description:
			"A better type of backend. Convex is the fullstack TypeScript development platform. Replace your database, server functions and glue code.",
		category: ["Database", "Authentication"],
		url: "https://www.convex.dev",
		paid: "Free Plan Available",
		keywords: [
			"database",
			"convex",
			"authentication",
			"api",
			"typescript",
			"db",
			"fullstack",
			"backend",
			"server",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/convex.jpg",
	},
	{
		name: "Supabase",
		description: "The open source Firebase alternative",
		category: ["Database", "Authentication"],
		url: "https://supabase.com",
		paid: "Free Plan Available",
		keywords: [
			"database",
			"supabase",
			"authentication",
			"firebase",
			"api",
			"db",
			"server",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/supabase.jpg",
	},
	{
		name: "BigDevSoon",
		description: "Discover new projects to practice your coding skills",
		category: ["Learning & Challenges"],
		url: "https://app.bigdevsoon.me/projects",
		paid: "Free",
		keywords: [
			"coding projects",
			"projects",
			"coding",
			"bigdevsoon",
			"skills",
			"dev",
			"soon",
			"big",
			"practice",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/bigdevsoon.jpg",
	},
	{
		name: "AI Skeletons",
		description: "AI generated skeletons based on your components",
		category: ["AI", "Components"],
		url: "https://gpt-skeleton.vercel.app",
		paid: "Free",
		keywords: [
			"ai",
			"skeletons",
			"components",
			"ui",
			"ux",
			"gpt",
			"skeleton",
			"loading",
			"css",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/aiskeletons.jpg",
	},
	{
		name: "Framer Motion",
		description: "A production-ready animation library for React",
		category: ["Animations", "Libraries & Packages"],
		url: "https://www.framer.com/motion/",
		paid: "Free",
		keywords: [
			"animation library",
			"react",
			"framer motion",
			"animations",
			"ui",
			"ux",
			"react",
			"framer",
			"motion",
			"library",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/framermotion.jpg",
	},
	{
		name: "Aceternity UI",
		description:
			"Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
		category: ["UI UX", "Components", "Animations"],
		url: "https://ui.aceternity.com",
		paid: "Free",
		keywords: [
			"react",
			"tailwind",
			"ui",
			"components",
			"css",
			"animations",
			"web",
			"aceternity",
			"aceternityui",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/aceternityui.jpg",
	},
	{
		name: "Squoosh",
		description: "Compress images without sacrificing quality",
		category: ["Images", "Performance"],
		url: "https://squoosh.app",
		paid: "Free",
		keywords: [
			"compress",
			"images",
			"quality",
			"compress images",
			"squoosh",
			"app",
			"web",
			"performance",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/squoosh.jpg",
	},
	{
		name: "Google Fonts",
		description: "Free, open-source fonts optimized for the web",
		category: ["Design", "Fonts"],
		url: "https://fonts.google.com",
		paid: "Free",
		keywords: ["google fonts", "fonts", "open-source", "web", "google", "web"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/googlefonts.jpg",
	},
	{
		name: "CodePen",
		description:
			"CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
		category: ["CSS", "Components", "Learning & Challenges"],
		url: "https://codepen.io",
		paid: "Free",
		keywords: ["codepen", "front-end", "designers", "developers", "web"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/codepen.jpg",
	},
	{
		name: "Clippy",
		description: "CSS clip-path maker",
		category: ["CSS", "Images"],
		url: "https://bennettfeely.com/clippy/",
		paid: "Free",
		keywords: [
			"css",
			"clip-path",
			"clip-path maker",
			"clippy",
			"web",
			"css",
			"images",
			"bennettfeely",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/clippy.jpg",
	},
	{
		name: "godly.website",
		description:
			"Astronomically good web design inspiration from all over the internet.",
		category: ["UI UX", "Design"],
		url: "https://godly.website",
		paid: "Free",
		keywords: [
			"web design",
			"inspiration",
			"web",
			"design",
			"godly",
			"website",
			"godly.website",
			"ui",
			"ux",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/godly.jpg",
	},
	{
		name: "Open Doodles",
		description:
			"Open Doodles is a set of free illustrations that embraces the idea of Open Design.",
		category: ["Design", "Illustrations"],
		url: "https://www.opendoodles.com",
		paid: "Free",
		keywords: ["illustrations", "open design", "design", "images", "doodles"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/opendoodles.jpg",
	},
	{
		name: "Footer.design",
		description:
			"Footer fills the need for footer-specific inspiration in the web design space.",
		category: ["Design"],
		url: "https://www.footer.design",
		paid: "Free",
		keywords: ["footer", "inspiration", "web", "design", "footer.design"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/footer.jpg",
	},
	{
		name: "Blitz.js",
		description:
			"The Missing Fullstack Toolkit for Next.js. Providing battle-tested libraries and conventions for shipping and scaling world wide applications.",
		category: ["Boilerplate", "Components", "Frameworks", "Authentication"],
		url: "https://blitzjs.com",
		paid: "Free",
		keywords: ["next.js", "fullstack", "toolkit", "blitz.js", "blitz", "js"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/blitz.jpg",
	},
	{
		name: "Favicon.io",
		description:
			"The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis.",
		category: ["Images", "SEO"],
		url: "https://favicon.io",
		paid: "Free",
		keywords: ["favicon", "generator", "favicon.io", "images", "seo"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/faviconio.jpg",
	},
	{
		name: "Fontshare",
		description:
			"Fontshare is a free fonts service launched by the Indian Type Foundry (ITF). It’s a growing collection of professional grade fonts that are 100% free for personal and commercial use.",
		category: ["Fonts", "Design"],
		url: "https://www.fontshare.com",
		paid: "Free",
		keywords: [
			"fonts",
			"fontshare",
			"itf",
			"indian type foundry",
			"design",
			"ui",
			"ux",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/fontshare.jpg",
	},
	{
		name: "React TS Cheatsheet",
		description:
			"Cheatsheets for experienced React developers getting started with TypeScript.",
		category: ["Documentation", "Cheatsheets"],
		url: "https://react-typescript-cheatsheet.netlify.app",
		paid: "Free",
		keywords: [
			"react",
			"typescript",
			"cheatsheet",
			"documentation",
			"docs",
			"react-ts",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/reactts.jpg",
	},
	{
		name: "Flowbite",
		description:
			"Build websites even faster with components on top of Tailwind CSS.",
		category: ["Components", "UI UX"],
		url: "https://flowbite.com",
		paid: "Free Plan Available",
		keywords: ["tailwind", "css", "components", "flowbite", "ui", "ux"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/flowbite.jpg",
	},
	{
		name: "Prettier",
		description: "An opinionated code formatter",
		category: ["VS Code Extensions"],
		url: "https://prettier.io",
		paid: "Free",
		keywords: [
			"prettier",
			"code",
			"formatter",
			"VS Code Extensions",
			"vscode",
			"extension",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/prettier.jpg",
	},
	{
		name: "Console Ninja",
		description:
			"Stop feeling lost and inefficient when debugging via logs. Use the right tool and debug using console.log like a ninja.",
		category: ["VS Code Extensions"],
		url: "https://console-ninja.com",
		paid: "Free",
		keywords: ["console", "ninja", "debugging", "VS Code Extensions"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/consoleninja.jpg",
	},
	{
		name: "Error Lens",
		description:
			"ErrorLens turbo-charges language diagnostic features by making diagnostics stand out more prominently, highlighting the entire line wherever a diagnostic is generated by the language and also prints the message inline.",
		category: ["VS Code Extensions"],
		url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
		paid: "Free",
		keywords: [
			"error lens",
			"diagnostics",
			"VS Code Extensions",
			"vscode",
			"extension",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/errorlens.jpg",
	},
	{
		name: "Path Intellisense",
		description: "Visual Studio Code plugin that autocompletes filenames.",
		category: ["VS Code Extensions"],
		url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
		paid: "Free",
		keywords: [
			"path",
			"intellisense",
			"VS Code Extensions",
			"vscode",
			"extension",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/pathintellisense.jpg",
	},
	{
		name: "Tailwind CSS Intellisense",
		description:
			"Tailwind CSS IntelliSense enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.",
		category: ["VS Code Extensions"],
		url: "https://marketplace.visualstudio.com/items?itemName=bradlc.VS Code Extensions-tailwindcss",
		paid: "Free",
		keywords: [
			"tailwind",
			"css",
			"intellisense",
			"VS Code Extensions",
			"vscode",
			"extension",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/tailwindintellisense.jpg",
	},
	{
		name: "npm Intellisense",
		description:
			"Visual Studio Code plugin that autocompletes npm modules in import statements.",
		category: ["VS Code Extensions"],
		url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense",
		paid: "Free",
		keywords: [
			"npm",
			"intellisense",
			"VS Code Extensions",
			"vscode",
			"extension",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/npmintellisense.jpg",
	},
	{
		name: "Readme.so",
		description: "The easiest way to create a README. Fast, easy and free.",
		category: ["Documentation"],
		url: "https://readme.so",
		paid: "Free",
		keywords: [
			"readme",
			"documentation",
			"docs",
			"readme.so",
			"docs",
			"readme generator",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/readmeso.jpg",
	},
	{
		name: "React Email",
		description:
			"The next generation of writing emails. A collection of high-quality, unstyled components for creating beautiful emails using React and TypeScript.",
		category: ["Email"],
		url: "https://react.email",
		paid: "Free",
		keywords: [
			"react",
			"email",
			"typescript",
			"components",
			"email components",
			"react email",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/reactemail.jpg",
	},
	{
		name: "Resend",
		description:
			"Email for developers. The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
		category: ["Email"],
		url: "https://resend.com",
		paid: "Free",
		keywords: ["email", "developers", "transactional", "marketing", "resend"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/resend.jpg",
	},
	{
		name: "EmailJS",
		description:
			"Send email directly from your code, no server side code required. Add static or dynamic attachments, dynamic parameters, captcha code and more. 200 free emails per month.",
		category: ["Email"],
		url: "https://www.emailjs.com",
		paid: "Free",
		keywords: ["email", "code", "attachments", "captcha", "emailjs"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/emailjs.jpg",
	},
	{
		name: "Mobbin",
		description:
			"Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.",
		category: ["UI UX", "Design"],
		url: "https://mobbin.com",
		paid: "Free Plan Available",
		keywords: ["ui", "ux", "design", "mobbin", "mobile"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/mobbin.jpg",
	},

	//02/15/2024

	{
		name: "CSS Loaders",
		description:
			"The biggest collection of loading animations for websites. 600+ CSS-only loaders for your next project.",
		category: ["Snippets & Hooks", "CSS", "Animations"],
		url: "https://css-loaders.com",
		paid: "Free",
		keywords: [
			"css",
			"loaders",
			"animations",
			"css loaders",
			"web",
			"loading",
			"spinners",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/cssloaders.jpg",
	},
	{
		name: "KitForStartups",
		description:
			"KitForStartups is a starter kit for building and shipping fast, secure, and scalable full stack SaaS applications with SvelteKit and TypeScript.",
		category: ["Boilerplate"],
		url: "https://docs.kitforstartups.com/intro",
		paid: "Free",
		keywords: [
			"sveltekit",
			"typescript",
			"saas",
			"kitforstartups",
			"starter kit",
			"kit",
			"for",
			"startups",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/kitforstartups.jpg",
	},
	{
		name: "Myna UI",
		description:
			"Create stunning, modern web experiences instantly with Myna UI — a comprehensive design system and UI kit that lets you customize and extend designs.",
		category: ["Design", "UI UX", "Components"],
		url: "https://mynaui.com",
		paid: "Free",
		keywords: [
			"myna",
			"ui",
			"design",
			"components",
			"myna ui",
			"web",
			"ux",
			"ui",
			"loaders",
			"loading",
			"spinners",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/mynaui.jpg",
	},
	{
		name: "Tanstack Query",
		description:
			"Tanstack (React) Query makes fetching, caching, synchronizing and updating server state in your web applications a breeze.",
		category: ["Libraries & Packages", "Snippets & Hooks"],
		url: "https://tanstack.com/query/latest/docs/framework/react/overview",
		paid: "Free",
		keywords: [
			"react query",
			"query",
			"tanstack",
			"react",
			"tanstack query",
			"data",
			"fetching",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/tanstack.jpg",
	},
	{
		name: "query.gg",
		description:
			"The official React Query course. Master React Query with Mystifying Ease.",
		category: ["Documentation", "Learning & Challenges", "Snippets & Hooks"],
		url: "https://query.gg",
		paid: "Free",
		keywords: [
			"react query",
			"query",
			"course",
			"react",
			"query.gg",
			"data",
			"fetching",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/querygg.jpg",
	},
	{
		name: "Mantine",
		description: "100+ components and 50 hooks to cover you in any situation.",
		category: ["UI UX", "Components", "Snippets & Hooks"],
		url: "https://mantine.dev",
		paid: "Free",
		keywords: ["mantine", "components", "hooks", "ui", "ux", "web"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/mantinedev.jpg",
	},
	{
		name: "Color Contrast Checker",
		description: "",
		category: ["Color", "Accessibility", "Design"],
		url: "https://zarhasan.github.io/color-contrast-checker/",
		paid: "Free",
		keywords: [
			"color",
			"contrast",
			"checker",
			"accessibility",
			"design",
			"web",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/contrastchecker.jpg",
	},
	{
		name: "Color Review",
		description: "Color theming, focused on accessibility and contrast.",
		category: ["Accessibility", "Color", "Design"],
		url: "https://color.review",
		paid: "Free",
		keywords: [
			"color",
			"review",
			"accessibility",
			"contrast",
			"design",
			"web",
			"color review",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/colorreview.jpg",
	},
	{
		name: "18F Accessibility Checklist",
		description: "https://guides.18f.gov/accessibility/checklist/",
		category: ["Accessibility", "Documentation"],
		url: "https://guides.18f.gov/accessibility/checklist/",
		paid: "Free",
		keywords: [
			"18f",
			"accessibility",
			"checklist",
			"web",
			"18f.gov",
			"guide",
			"documentation",
			"docs",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/18f.jpg",
	},
	{
		name: "Vercel",
		description: "Develop. Preview. Ship. For the best frontend teams. Vercel.",
		category: ["Web Hosting"],
		url: "https://vercel.com",
		paid: "Free Plan Available",
		keywords: ["vercel", "hosting", "web", "vercel.com", "deploy", "nextjs"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/vercel.jpg",
	},
	{
		name: "App Backend",
		description: "A simple backend for your static website to make it dynamic.",
		category: ["API", "Database", "CMS"],
		url: "https://appbackend.io",
		paid: "Free Plan Available",
		keywords: [
			"app",
			"backend",
			"static",
			"website",
			"dynamic",
			"appbackend",
			"database",
			"cms",
			"db",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/appbackend.jpg",
	},
	{
		name: "MonkeyType",
		description:
			"Monkeytype is a minimalistic and customizable typing test. Providing straightforward, real-time feedback on typos, speed, and accuracy.",
		category: ["Typing"],
		url: "https://monkeytype.com",
		paid: "Free",
		keywords: ["monkey", "type", "typing", "web", "monkeytype", "type", "test"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/monkeytype.jpg",
	},
	{
		name: "Recharts",
		description: "A composable charting library built on React components",
		category: ["Components", "Data Visualization", "Libraries & Packages"],
		url: "https://recharts.org/en-US/",
		paid: "Free",
		keywords: [
			"recharts",
			"charting",
			"charts",
			"library",
			"react",
			"components",
			"data",
			"visualization",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/recharts.jpg",
	},
	{
		name: "Postman",
		description:
			"Postman is an API platform for building and using APIs. Create better APIs - faster.",
		category: ["API"],
		url: "https://www.postman.com",
		paid: "Free",
		keywords: [
			"postman",
			"api",
			"platform",
			"web",
			"api",
			"test",
			"postman.com",
			"post",
			"man",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/postman.jpg",
	},
	{
		name: "Revert",
		description:
			"Revert is an open-source unified API to build, maintain and scale your ALL of your product integrations",
		category: ["API", "SAAS"],
		url: "https://revert.dev",
		paid: "Free Plan Available",
		keywords: [
			"revert",
			"api",
			"integration",
			"product",
			"saas",
			"web",
			"revert.dev",
			"revert",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/revert.jpg",
	},
	{
		name: "Hover.dev",
		description: "Animated UI Components for React & Tailwind",
		category: ["UI UX", "Components", "Animations"],
		url: "https://www.hover.dev",
		paid: "Free Plan Available",
		keywords: [
			"hover",
			"ui",
			"components",
			"animations",
			"react",
			"tailwind",
			"framer",
			"motion",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/hoverdev",
	},
	{
		name: "1000 Inspiring Websites",
		description:
			"A growing list of websites that are memorable, clear and delightful.",
		category: ["Design", "UI UX"],
		url: "https://supercreative.design/1000-inspiring-websites",
		paid: "Free",
		keywords: [
			"websites",
			"inspiring",
			"design",
			"supercreative",
			"1000",
			"inspiration",
			"inspo",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/1000sites.jpg",
	},
	{
		name: "Curated Design",
		description:
			"Unleash your creativity with out-of-this-world web design inspiration from across the web",
		category: ["Design", "UI UX"],
		url: "https://www.curated.design",
		paid: "Free",
		keywords: [
			"design",
			"inspiration",
			"web",
			"curated",
			"curated.design",
			"ui",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/curated.jpg",
	},
	{
		name: "GSAP",
		description: "Professional-grade animation library for the modern web.",
		category: ["Animations", "Libraries & Packages"],
		url: "https://gsap.com/",
		paid: "Free",
		keywords: ["gsap", "animation", "library", "web", "gsap.com"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/gsap.jpg",
	},
	{
		name: "Lenis",
		description: "An elegant smooth scroll API for the web",
		category: ["UI UX", "Libraries & Packages"],
		url: "https://lenis.studiofreight.com/",
		paid: "Free",
		keywords: [
			"lenis",
			"scroll",
			"lenis.studiofreight.com",
			"smooth",
			"studiofreight",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/lenis.jpg",
	},
	{
		name: "Microcopy",
		description: "Short text for your website. 100% free.",
		category: ["UI UX", "Writing", "Design"],
		url: "https://www.microcopy.me/",
		paid: "Free",
		keywords: ["micro", "copy", "microcopy", "writing", "design", "web"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/microcopy.jpg",
	},
	{
		name: "Hero Patterns",
		description:
			"A collection of repeatable SVG background patterns for you to use on your web projects.",
		category: ["Design", "Images"],
		url: "https://heropatterns.com/",
		paid: "Free",
		keywords: [
			"hero",
			"patterns",
			"backgrounds",
			"web",
			"hero patterns",
			"svg",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/heropatterns.jpg",
	},
	{
		name: "Wagmi",
		description:
			"Type Safe, Extensible, and Modular by design. Build high-performance blockchain frontends.",
		category: ["Web3"],
		url: "https://wagmi.sh/",
		paid: "Free",
		keywords: ["wagmi", "web3", "blockchain", "frontends", "web", "wagmi.sh"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/wagmi.jpg",
	},
	{
		name: "ThirdWeb",
		description:
			"Build web3 apps fast, on any EVM chain. The fullstack web3 platform.",
		category: ["Web3"],
		url: "https://thirdweb.com/",
		paid: "Free",
		keywords: [],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/thirdweb.jpg",
	},
	{
		name: "Conventiional Commits",
		description:
			"A specification for adding human and machine readable meaning to commit messages.",
		category: ["Documentation"],
		url: "https://www.conventionalcommits.org/en/v1.0.0/",
		paid: "Free",
		keywords: [
			"git",
			"commits",
			"conventional",
			"conventional commits",
			"docs",
			"documentation",
			"github",
		],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/conventional.jpg",
	},
	{
		name: "Kinde",
		description:
			"Simple, powerful authentication to get your product up and running in minutes.",
		category: ["Authentication"],
		url: "https://kinde.com/",
		paid: "Free Plan Available",
		keywords: ["kinde", "authentication", "auth", "web", "kinde.com", "login"],
		image:
			"https://res.cloudinary.com/doopql2iw/image/upload/v1711743830/kinde.jpg",
	},
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// 	image: "https://res.cloudinary.com/doopql2iw/image/upload/v1710038150/",
	// },
	
];
