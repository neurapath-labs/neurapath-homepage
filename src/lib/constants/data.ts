import {
	Brain,
	Layers3,
	Sparkles,
	Clock,
	Target,
	TrendingUp,
	Star,
	GraduationCap,
	Stethoscope,
	Briefcase,
	Globe,
	BookOpen,
	Rocket,
	Timer,
	BarChart3,
	Lightbulb
} from "@lucide/svelte";
import type { ComponentType } from "svelte";

// Type definitions
export interface Stat {
	value: string;
	label: string;
	icon: ComponentType;
}

export interface Feature {
	icon: ComponentType;
	title: string;
	description: string;
	gradient: string;
}

export interface UseCase {
	icon: ComponentType;
	title: string;
	description: string;
	color: string;
	stats: string;
}

export interface ComparisonFeature {
	feature: string;
	neurapath: boolean;
	anki: boolean;
	quizlet: boolean;
}

export interface Step {
	number: string;
	title: string;
	description: string;
	icon: ComponentType;
}

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	school: string;
	avatar: string;
	rating: number;
	gradient: string;
}

export interface SciencePoint {
	icon: ComponentType;
	title: string;
	description: string;
}

export interface FAQ {
	question: string;
	answer: string;
}

// Stats for social proof
export const stats: Stat[] = [
	{ value: "10K+", label: "Active learners", icon: GraduationCap },
	{ value: "2M+", label: "Cards reviewed", icon: Brain },
	{ value: "94%", label: "Retention rate", icon: TrendingUp },
	{ value: "4.9★", label: "User rating", icon: Star }
];

// Features data
export const features: Feature[] = [
	{
		icon: Sparkles,
		title: "Spaced Repetition",
		description:
			"Our SM-2 algorithm schedules reviews at the optimal moment, right before you forget. Study less, remember more.",
		gradient: "from-blue-500 to-blue-600"
	},
	{
		icon: Brain,
		title: "Active Recall",
		description:
			"Test yourself instead of passive reading. Active retrieval strengthens neural pathways and builds lasting memory.",
		gradient: "from-indigo-500 to-indigo-600"
	},
	{
		icon: Layers3,
		title: "Cloze Deletions",
		description:
			"Create fill-in-the-blank cards instantly. Perfect for learning vocabulary, formulas, and key facts.",
		gradient: "from-violet-500 to-violet-600"
	},
	{
		icon: Target,
		title: "Image Occlusion",
		description:
			"Learn diagrams, maps, and anatomy by hiding parts of images. Perfect for visual learners and medical students.",
		gradient: "from-emerald-500 to-emerald-600"
	},
	{
		icon: TrendingUp,
		title: "Progress Analytics",
		description:
			"Visualize your learning journey with detailed statistics. Track streaks, review counts, and mastery levels.",
		gradient: "from-amber-500 to-amber-600"
	},
	{
		icon: Clock,
		title: "Smart Scheduling",
		description:
			"Review intervals adapt to your performance. Difficult cards appear more often until you master them.",
		gradient: "from-rose-500 to-rose-600"
	}
];

// Use cases
export const useCases: UseCase[] = [
	{
		icon: Stethoscope,
		title: "Medical Students",
		description:
			"Master anatomy, pharmacology, and clinical concepts. Perfect for USMLE, MCAT, and medical board prep.",
		color: "bg-rose-50 text-rose-600",
		stats: "Used by 3,000+ med students"
	},
	{
		icon: Globe,
		title: "Language Learners",
		description:
			"Build vocabulary and grammar through immersive spaced repetition. Support for 50+ languages.",
		color: "bg-emerald-50 text-emerald-600",
		stats: "Learn 10x more words"
	},
	{
		icon: Briefcase,
		title: "Professionals",
		description:
			"Stay sharp on certifications, compliance training, and industry knowledge. Never forget critical information.",
		color: "bg-blue-50 text-blue-600",
		stats: "Trusted by Fortune 500"
	},
	{
		icon: GraduationCap,
		title: "Students",
		description:
			"Ace exams with less cramming. Works for any subject from history to calculus to computer science.",
		color: "bg-violet-50 text-violet-600",
		stats: "Average grade boost: +15%"
	}
];

// Comparison data
export const comparisonFeatures: ComparisonFeature[] = [
	{ feature: "Modern, intuitive interface", neurapath: true, anki: false, quizlet: true },
	{ feature: "True spaced repetition (SM-2)", neurapath: true, anki: true, quizlet: false },
	{ feature: "Image occlusion", neurapath: true, anki: true, quizlet: false },
	{ feature: "Anki import support", neurapath: true, anki: true, quizlet: false },
	{ feature: "Cloud sync across devices", neurapath: true, anki: false, quizlet: true },
	{ feature: "Free core features", neurapath: true, anki: true, quizlet: false },
	{ feature: "Beautiful mobile apps", neurapath: true, anki: false, quizlet: true },
	{ feature: "Advanced analytics", neurapath: true, anki: false, quizlet: false }
];

// How it works steps
export const steps: Step[] = [
	{
		number: "01",
		title: "Create your cards",
		description: "Add flashcards with text, images, or cloze deletions. Import from Anki or start fresh.",
		icon: BookOpen
	},
	{
		number: "02",
		title: "Study with active recall",
		description: "Review cards and rate your confidence. The algorithm learns your patterns.",
		icon: Brain
	},
	{
		number: "03",
		title: "Master any subject",
		description: "Watch your retention soar as spaced repetition optimizes your learning schedule.",
		icon: Rocket
	}
];

// Testimonials
export const testimonials: Testimonial[] = [
	{
		quote:
			"Neurapath made complex anatomy click. I passed my USMLE Step 1 with a score I never thought possible. The image occlusion feature is a game-changer for medical students.",
		author: "Sarah Chen",
		role: "Medical Student",
		school: "Johns Hopkins",
		avatar: "SC",
		rating: 5,
		gradient: "from-rose-500 to-pink-500"
	},
	{
		quote:
			"The review timing is perfect. I study 30 minutes a day and remember more than when I crammed for hours. My bar exam prep has never been more efficient.",
		author: "Marcus Johnson",
		role: "Law Student",
		school: "Stanford",
		avatar: "MJ",
		rating: 5,
		gradient: "from-blue-500 to-indigo-500"
	},
	{
		quote:
			"Beautiful design meets serious learning science. Finally, a flashcard app that doesn't feel like homework. I've tried them all – Neurapath is the best.",
		author: "Elena Rodriguez",
		role: "PhD Researcher",
		school: "MIT",
		avatar: "ER",
		rating: 5,
		gradient: "from-violet-500 to-purple-500"
	},
	{
		quote:
			"I learned Japanese in half the time using Neurapath. The spaced repetition algorithm is incredibly smart, and importing my existing Anki decks was seamless.",
		author: "David Park",
		role: "Software Engineer",
		school: "Google",
		avatar: "DP",
		rating: 5,
		gradient: "from-emerald-500 to-teal-500"
	}
];

// Science section data
export const sciencePoints: SciencePoint[] = [
	{
		icon: Timer,
		title: "Ebbinghaus Forgetting Curve",
		description:
			"Without review, we forget 70% within 24 hours. Spaced repetition intercepts this decline at optimal moments."
	},
	{
		icon: Lightbulb,
		title: "Testing Effect",
		description:
			"Actively recalling information strengthens memory 50% more than passive re-reading or highlighting."
	},
	{
		icon: BarChart3,
		title: "Proven Results",
		description:
			"Studies show spaced repetition learners retain 3× more information over time with 50% less study time."
	}
];

// FAQ items
export const faqs: FAQ[] = [
	{
		question: "What is Neurapath?",
		answer:
			"Neurapath is an all-in-one learning app that helps you think, learn, and remember faster using spaced repetition and active recall. It's designed for students, researchers, and professionals who want to master complex topics."
	},
	{
		question: "How is Neurapath different from Anki?",
		answer:
			"Neurapath offers a modern, beautiful interface with the same powerful spaced repetition algorithm. Plus, you can import your existing Anki decks seamlessly. We focus on user experience without sacrificing learning effectiveness."
	},
	{
		question: "Who is Neurapath for?",
		answer:
			"Students preparing for exams (medical, law, languages), researchers learning new fields, professionals upskilling, and anyone who wants to retain knowledge long-term instead of cramming and forgetting."
	},
	{
		question: "How much does it cost?",
		answer:
			"Get started completely free with unlimited cards and reviews. Premium plans add advanced features like collaboration, detailed analytics, and priority support."
	},
	{
		question: "Can I import my existing flashcards?",
		answer:
			"Yes! Neurapath supports importing from Anki (.apkg files), CSV, and plain text. Your learning history and card progress are preserved during import."
	}
];
