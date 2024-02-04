export interface Resource {
	name: string;
	description: string;
	category: (
		| "Boilerplate"
		| "Website Builder"
		| "npm"
		| "CSS"
		| "Components"
		| "Documentation"
		| "Backgrounds"
		| "Images"
		| "Video"
		| "UI/UX"
		| "Hooks"
		| "Authentication"
		| "Animations"
		| "CMS"
		| "API"
		| "AI"
		| "Database"
		| "Practice"
		| "SaaS"
		| "Design"
		| "Fonts"
	)[];
	url: string;
	paid: "Free" | "Paid" | "Free Plan Available";
	keywords?: string[];
}

export const Resources: Resource[] = [
	{
		name: "ShipFast",
		description: "A Next.js boilerplate for building SaaS applications",
		category: ["Boilerplate", "SaaS"],
		url: "https://shipfa.st/",
		paid: "Paid",
		keywords: ["next.js", "boilerplate", "saas"],
	},
	{
		name: "LogoFast",
		description: "Create your own logo in seconds for free.",
		category: ["Images"],
		url: "https://logofa.st/",
		paid: "Free",
		keywords: ["logo", "design", "images"],
	},
	{
		name: "Precedent",
		description:
			"A Next.js starter template with framer motion and reusable hooks/components",
		category: ["Boilerplate", "Components", "Hooks"],
		url: "https://github.com/steven-tey/precedent",
		paid: "Free",
		keywords: ["next.js", "boilerplate", "framer motion", "hooks"],
	},
	{
		name: "Shipixen",
		description:
			"Easily generate beautifully designed landing pages, blogs and more.",
		category: ["Website Builder", "SaaS"],
		url: "https://shipixen.com",
		paid: "Paid",
		keywords: ["boilerplate", "website builder", "saas"],
	},
	{
		name: "React Hooks",
		description: "Collection of React hooks curated by the community",
		category: ["Documentation", "Hooks"],
		url: "https://usehooks.com",
		paid: "Free",
		keywords: ["react", "hooks", "documentation"],
	},
	{
		name: "shadcn-ui",
		description:
			"A collection of UI components for React. Built with Tailwind CSS",
		category: ["Components", "UI/UX", "CSS"],
		url: "https://ui.shadcn.com",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
	},
	{
		name: "shadcn-ui Theme Generator",
		description: "A theme generator for shadcn-ui",
		category: ["UI/UX", "CSS", "Components"],
		url: "https://zippystarter.com/tools/shadcn-ui-theme-generator",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "theme", "generator"],
	},
	{
		name: "Ibelick UI",
		description: "A unique collection of modern UI components and effects",
		category: ["Components", "UI/UX", "CSS"],
		url: "https://ui.ibelick.com",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
	},
	{
		name: "Ibelick LAB",
		description: "A collection of experimental UI components and effects",
		category: ["Components", "CSS"],
		url: "https://www.julienthibeaut.xyz/lab",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "experimental"],
	},
	{
		name: "Ibelick Backgrounds",
		description:
			"A collection of modern and unique backgrounds for your website",
		category: ["Images", "UI/UX", "CSS", "Backgrounds"],
		url: "https://bg.ibelick.com",
		paid: "Free",
		keywords: ["backgrounds", "images", "ui", "css", "web"],
	},
	{
		name: "Ibelick Buttons",
		description: "A collection of modern and unique buttons for your website",
		category: ["UI/UX", "CSS", "Components"],
		url: "https://buttons.ibelick.com",
		paid: "Free",
		keywords: ["buttons", "ui", "css", "web"],
	},
	{
		name: "Ibelick Animations",
		description:
			"A curated collection of animations crafted exclusively with Tailwind CSS",
		category: ["Animations", "CSS", "UI/UX"],
		url: "https://animation.ibelick.com",
		paid: "Free",
		keywords: ["animations", "css", "tailwind", "ui"],
	},
	{
		name: "CSS Background Generator",
		description:
			"Beautiful pure CSS background patterns that you can actually use in your projects!",
		category: ["CSS", "UI/UX", "Images", "Backgrounds"],
		url: "https://www.magicpattern.design/tools/css-backgrounds",
		paid: "Free",
		keywords: ["css", "background", "patterns", "images"],
	},
	{
		name: "MagicPattern",
		description: "10+ tools for designers and developers",
		category: ["Images", "UI/UX", "CSS", "Backgrounds", "Design"],
		url: "https://www.magicpattern.design",
		paid: "Paid",
		keywords: [],
	},
	{
		name: "UploadThing",
		description: "A simple file uploader for your web app",
		category: ["API", "CMS", "Images", "Video"],
		url: "https://uploadthing.com",
		paid: "Free Plan Available",
		keywords: ["file uploader", "api", "cms", "images", "video"],
	},
	{
		name: "Tailwind UI",
		description:
			"Beautiful UI components, crafted by the creators of Tailwind CSS",
		category: ["UI/UX", "CSS", "Components", "Boilerplate"],
		url: "https://tailwindui.com",
		paid: "Paid",
		keywords: ["tailwind", "ui", "components", "css", "boilerplate"],
	},
	{
		name: "Tailwind CSS",
		description:
			"A utility-first CSS framework for rapidly building custom designs",
		category: ["CSS", "UI/UX"],
		url: "https://tailwindcss.com",
		paid: "Free",
		keywords: ["tailwind", "css", "ui", "framework"],
	},
	{
		name: "DevUI",
		description: "A collection of modern UI components for developers",
		category: ["UI/UX", "CSS", "Components"],
		url: "https://www.devui.io/components",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "css"],
	},
	{
		name: "UIVerse",
		description: "Open-Source UI elements for any project",
		category: ["UI/UX", "CSS", "Components"],
		url: "https://uiverse.io",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components"],
	},
	{
		name: "Code Animations",
		description: "Beautiful code animations for social media and websites",
		category: ["Animations", "Video"],
		url: "https://www.animate-code.com",
		paid: "Free",
		keywords: ["code", "animations", "video", "social media", "websites"],
	},
	{
		name: "sharpen.design",
		description: "Design prompts to sharpen your design skills",
		category: ["UI/UX", "Practice", "Design"],
		url: "https://sharpen.design",
		paid: "Free",
		keywords: ["design prompts", "ui", "ux", "practice", "design"],
	},
	{
		name: "Design Resources",
		description: "A github repository with tons of design resources",
		category: ["UI/UX", "Design", "Documentation"],
		url: "https://github.com/bradtraversy/design-resources-for-developers",
		paid: "Free",
		keywords: ["design resources", "ui", "ux", "design", "resources"],
	},
	{
		name: "Figma",
		description: "Collaborative interface design tool",
		category: ["UI/UX", "Design"],
		url: "https://www.figma.com",
		paid: "Free Plan Available",
		keywords: ["design tool", "ui", "ux", "figma"],
	},
	{
		name: "Spline - 3D Design Tool",
		description: "A 3D design tool for the web",
		category: ["UI/UX", "Design", "Animations"],
		url: "https://spline.design",
		paid: "Free",
		keywords: ["3d design", "ui", "ux", "design", "animations"],
	},
	{
		name: "Stack Sorted",
		description: "A curated list of community components & element designs",
		category: ["UI/UX", "Components", "CSS"],
		url: "https://stacksorted.com",
		paid: "Free",
		keywords: [],
	},
	{
		name: "Dribbble",
		description: "Discover the world’s top designers & creatives",
		category: ["UI/UX", "Design"],
		url: "https://dribbble.com",
		paid: "Free",
		keywords: ["designers", "creatives", "ui", "ux", "design"],
	},
	{
		name: "LogoShaper",
		description: "A simple logo maker for your projects",
		category: ["Images"],
		url: "https://www.logoshaper.co",
		paid: "Free",
		keywords: ["logo", "design", "images", "logoshaper"],
	},
	{
		name: "Next-Auth",
		description: "Authentication for Next.js",
		category: ["Authentication"],
		url: "https://next-auth.js.org",
		paid: "Free",
		keywords: ["next.js", "authentication", "next-auth"],
	},
	{
		name: "Clerk",
		description: "The most comprehensive User Management Platform",
		category: ["Authentication"],
		url: "https://clerk.com",
		paid: "Free Plan Available",
		keywords: ["user management", "authentication", "clerk"],
	},
	{
		name: "Lucide",
		description: "A simply beautiful open-source icon set",
		category: ["Images", "Components", "npm"],
		url: "https://lucide.dev",
		paid: "Free",
		keywords: ["icon set", "icons", "images", "components"],
	},
	{
		name: "Strapi",
		description: "The leading open-source headless CMS",
		category: ["CMS"],
		url: "https://strapi.io",
		paid: "Free Plan Available",
		keywords: ["open-source", "headless", "cms", "strapi"],
	},
	{
		name: "Replicate",
		description: "AI API for generating synthetic data",
		category: ["AI", "API"],
		url: "https://replicate.com/",
		paid: "Paid",
		keywords: ["ai", "api", "synthetic data", "replicate"],
	},
	{
		name: "MongoDB",
		description: "The most popular database for modern apps",
		category: ["Database"],
		url: "https://www.mongodb.com",
		paid: "Free Plan Available",
		keywords: ["database", "mongodb"],
	},
	{
		name: "PlanetScale",
		description: "The database for developers",
		category: ["Database"],
		url: "https://planetscale.com",
		paid: "Free Plan Available",
		keywords: ["database", "planetscale", "mysql"],
	},
	{
		name: "Convex",
		description:
			"A better type of backend. Convex is the fullstack TypeScript development platform. Replace your database, server functions and glue code.",
		category: ["Database", "Authentication"],
		url: "https://www.convex.dev",
		paid: "Free Plan Available",
		keywords: ["database", "convex", "authentication", "api"],
	},
	{
		name: "Supabase",
		description: "The open source Firebase alternative",
		category: ["Database", "Authentication"],
		url: "https://supabase.com",
		paid: "Free Plan Available",
		keywords: ["database", "supabase", "authentication", "firebase"],
	},
	{
		name: "Coding Projects",
		description: "Discover new projects to practice your coding skills",
		category: ["Practice"],
		url: "https://app.bigdevsoon.me/projects",
		paid: "Free",
		keywords: ["coding projects", "projects", "coding", "bigdevsoon"],
	},
	{
		name: "AI Skeletons",
		description: "AI generated skeletons based on your components",
		category: ["AI", "Components", "UI/UX"],
		url: "https://gpt-skeleton.vercel.app",
		paid: "Free",
		keywords: ["ai", "skeletons", "components", "ui", "ux"],
	},
	{
		name: "Framer Motion",
		description: "A production-ready animation library for React",
		category: ["Animations", "UI/UX"],
		url: "https://www.framer.com/motion/",
		paid: "Free",
		keywords: ["animation library", "react", "framer motion", "animations"],
	},
	{
		name: "Aceternity UI",
		description:
			"Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
		category: ["UI/UX", "CSS", "Components", "Animations"],
		url: "https://ui.aceternity.com",
		paid: "Free",
		keywords: ["react", "tailwind", "ui", "components", "css", "animations"],
	},
	{
		name: "Squoosh",
		description: "Compress images without sacrificing quality",
		category: ["Images"],
		url: "https://squoosh.app",
		paid: "Free",
		keywords: ["compress", "images", "quality", "compress images", "squoosh"],
	},
	{
		name: "Google Fonts",
		description: "Free, open-source fonts optimized for the web",
		category: ["UI/UX", "Fonts"],
		url: "https://fonts.google.com",
		paid: "Free",
		keywords: ["google fonts", "fonts", "open-source", "web", "google"],
	},
	{
		name: "CodePen",
		description:
			"CodePen is a social development environment for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.",
		category: ["UI/UX", "CSS", "Components", "Practice"],
		url: "https://codepen.io",
		paid: "Free",
		keywords: ["codepen", "front-end", "designers", "developers"],
	},
	{
		name: "Clippy",
		description: "CSS clip-path maker",
		category: ["UI/UX", "CSS", "Images"],
		url: "https://bennettfeely.com/clippy/",
		paid: "Free",
		keywords: ["css", "clip-path", "clip-path maker", "clippy"],
	},
	// {
	// 	name: "",
	// 	description: "",
	// 	category: [],
	// 	url: "",
	// 	paid: "Free",
	// 	keywords: [],
	// },
];
