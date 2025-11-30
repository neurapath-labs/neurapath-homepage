<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import { Brain, Layers3, Sparkles, Clock, Target, CheckCircle, ArrowRight, Zap, TrendingUp, Play, Star, ChevronDown, ChevronUp, GraduationCap, Stethoscope, Briefcase, Globe, Shield, Smartphone, BookOpen, Users, Award, Rocket, Check, X as XIcon, Quote, Timer, BarChart3, Lightbulb } from "@lucide/svelte";
	
	const APP_URL = "https://app.neurapath.shop";
	
	// Stats for social proof
	const stats = [
		{ value: "10K+", label: "Active learners", icon: GraduationCap },
		{ value: "2M+", label: "Cards reviewed", icon: Brain },
		{ value: "94%", label: "Retention rate", icon: TrendingUp },
		{ value: "4.9★", label: "User rating", icon: Star },
	];

	// Features data
	const features = [
		{
			icon: Sparkles,
			title: "Spaced Repetition",
			description: "Our SM-2 algorithm schedules reviews at the optimal moment, right before you forget. Study less, remember more.",
			gradient: "from-blue-500 to-blue-600"
		},
		{
			icon: Brain,
			title: "Active Recall",
			description: "Test yourself instead of passive reading. Active retrieval strengthens neural pathways and builds lasting memory.",
			gradient: "from-indigo-500 to-indigo-600"
		},
		{
			icon: Layers3,
			title: "Cloze Deletions",
			description: "Create fill-in-the-blank cards instantly. Perfect for learning vocabulary, formulas, and key facts.",
			gradient: "from-violet-500 to-violet-600"
		},
		{
			icon: Target,
			title: "Image Occlusion",
			description: "Learn diagrams, maps, and anatomy by hiding parts of images. Perfect for visual learners and medical students.",
			gradient: "from-emerald-500 to-emerald-600"
		},
		{
			icon: TrendingUp,
			title: "Progress Analytics",
			description: "Visualize your learning journey with detailed statistics. Track streaks, review counts, and mastery levels.",
			gradient: "from-amber-500 to-amber-600"
		},
		{
			icon: Clock,
			title: "Smart Scheduling",
			description: "Review intervals adapt to your performance. Difficult cards appear more often until you master them.",
			gradient: "from-rose-500 to-rose-600"
		}
	];

	// Use cases
	const useCases = [
		{
			icon: Stethoscope,
			title: "Medical Students",
			description: "Master anatomy, pharmacology, and clinical concepts. Perfect for USMLE, MCAT, and medical board prep.",
			color: "bg-rose-50 text-rose-600",
			stats: "Used by 3,000+ med students"
		},
		{
			icon: Globe,
			title: "Language Learners",
			description: "Build vocabulary and grammar through immersive spaced repetition. Support for 50+ languages.",
			color: "bg-emerald-50 text-emerald-600",
			stats: "Learn 10x more words"
		},
		{
			icon: Briefcase,
			title: "Professionals",
			description: "Stay sharp on certifications, compliance training, and industry knowledge. Never forget critical information.",
			color: "bg-blue-50 text-blue-600",
			stats: "Trusted by Fortune 500"
		},
		{
			icon: GraduationCap,
			title: "Students",
			description: "Ace exams with less cramming. Works for any subject from history to calculus to computer science.",
			color: "bg-violet-50 text-violet-600",
			stats: "Average grade boost: +15%"
		}
	];

	// Comparison data
	const comparisonFeatures = [
		{ feature: "Modern, intuitive interface", neurapath: true, anki: false, quizlet: true },
		{ feature: "True spaced repetition (SM-2)", neurapath: true, anki: true, quizlet: false },
		{ feature: "Image occlusion", neurapath: true, anki: true, quizlet: false },
		{ feature: "Anki import support", neurapath: true, anki: true, quizlet: false },
		{ feature: "Cloud sync across devices", neurapath: true, anki: false, quizlet: true },
		{ feature: "Free core features", neurapath: true, anki: true, quizlet: false },
		{ feature: "Beautiful mobile apps", neurapath: true, anki: false, quizlet: true },
		{ feature: "Advanced analytics", neurapath: true, anki: false, quizlet: false },
	];

	// How it works steps
	const steps = [
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
	const testimonials = [
		{
			quote: "Neurapath made complex anatomy click. I passed my USMLE Step 1 with a score I never thought possible. The image occlusion feature is a game-changer for medical students.",
			author: "Sarah Chen",
			role: "Medical Student",
			school: "Johns Hopkins",
			avatar: "SC",
			rating: 5,
			gradient: "from-rose-500 to-pink-500"
		},
		{
			quote: "The review timing is perfect. I study 30 minutes a day and remember more than when I crammed for hours. My bar exam prep has never been more efficient.",
			author: "Marcus Johnson",
			role: "Law Student",
			school: "Stanford",
			avatar: "MJ",
			rating: 5,
			gradient: "from-blue-500 to-indigo-500"
		},
		{
			quote: "Beautiful design meets serious learning science. Finally, a flashcard app that doesn't feel like homework. I've tried them all – Neurapath is the best.",
			author: "Elena Rodriguez",
			role: "PhD Researcher",
			school: "MIT",
			avatar: "ER",
			rating: 5,
			gradient: "from-violet-500 to-purple-500"
		},
		{
			quote: "I learned Japanese in half the time using Neurapath. The spaced repetition algorithm is incredibly smart, and importing my existing Anki decks was seamless.",
			author: "David Park",
			role: "Software Engineer",
			school: "Google",
			avatar: "DP",
			rating: 5,
			gradient: "from-emerald-500 to-teal-500"
		}
	];

	// Science section data
	const sciencePoints = [
		{
			icon: Timer,
			title: "Ebbinghaus Forgetting Curve",
			description: "Without review, we forget 70% within 24 hours. Spaced repetition intercepts this decline at optimal moments."
		},
		{
			icon: Lightbulb,
			title: "Testing Effect",
			description: "Actively recalling information strengthens memory 50% more than passive re-reading or highlighting."
		},
		{
			icon: BarChart3,
			title: "Proven Results",
			description: "Studies show spaced repetition learners retain 3× more information over time with 50% less study time."
		}
	];

	// FAQ items
	const faqs = [
		{
			question: "What is Neurapath?",
			answer: "Neurapath is an all-in-one learning app that helps you think, learn, and remember faster using spaced repetition and active recall. It's designed for students, researchers, and professionals who want to master complex topics."
		},
		{
			question: "How is Neurapath different from Anki?",
			answer: "Neurapath offers a modern, beautiful interface with the same powerful spaced repetition algorithm. Plus, you can import your existing Anki decks seamlessly. We focus on user experience without sacrificing learning effectiveness."
		},
		{
			question: "Who is Neurapath for?",
			answer: "Students preparing for exams (medical, law, languages), researchers learning new fields, professionals upskilling, and anyone who wants to retain knowledge long-term instead of cramming and forgetting."
		},
		{
			question: "How much does it cost?",
			answer: "Get started completely free with unlimited cards and reviews. Premium plans add advanced features like collaboration, detailed analytics, and priority support."
		},
		{
			question: "Can I import my existing flashcards?",
			answer: "Yes! Neurapath supports importing from Anki (.apkg files), CSV, and plain text. Your learning history and card progress are preserved during import."
		}
	];

	let openFaq = $state<number | null>(0);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>Neurapath – Learn faster with spaced repetition and active recall</title>
	<meta
		name="description"
		content="Master any subject 3× faster with Neurapath. Science-backed spaced repetition and active recall in a beautiful, modern app. Free to start."
	/>
	<meta name="keywords" content="spaced repetition, flashcards, active recall, learning app, study app, Anki alternative, memory, retention" />
	<link rel="canonical" href="https://neurapath.shop" />
	
	<!-- Open Graph -->
	<meta property="og:title" content="Neurapath – Learn faster with spaced repetition" />
	<meta property="og:description" content="Master any subject 3× faster with science-backed learning. Free to start." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://neurapath.shop" />
	<meta property="og:image" content="https://neurapath.shop/og-image.png" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Neurapath – Learn faster with spaced repetition" />
	<meta name="twitter:description" content="Master any subject 3× faster with science-backed learning." />
	
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Neurapath",
			"applicationCategory": "EducationalApplication",
			"operatingSystem": "Web",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.9",
				"ratingCount": "2847"
			}
		}
	</script>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "What is Neurapath?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Neurapath is an all-in-one learning app that helps you think, learn, and remember faster using spaced repetition and active recall."
					}
				},
				{
					"@type": "Question",
					"name": "Who is Neurapath for?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Students, researchers, and professionals who want to master complex topics and retain knowledge long-term."
					}
				},
				{
					"@type": "Question",
					"name": "How much does Neurapath cost?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Get started free. Paid plans add collaboration, advanced export, and more."
					}
				}
			]
		}
	</script>
</svelte:head>

<!-- Page wrapper -->
<div id="top" class="w-full min-h-screen flex flex-col items-center bg-white font-sans">
	<!-- Header -->
	<Header />

	<!-- Hero -->
	<section class="w-full min-h-screen flex items-center bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden relative pt-20">
		<!-- Animated background elements -->
		<div class="absolute inset-0 overflow-hidden pointer-events-none">
			<div class="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
			<div class="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
			<div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
			
			<!-- Grid pattern -->
			<div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
		</div>
		
		<div class="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
			<!-- Left: Text content -->
			<div class="flex-1 text-center lg:text-left">
				<!-- Badge -->
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8 animate-fadeIn">
					<Zap class="w-4 h-4" />
					<span>Powered by science-backed learning</span>
					<span class="hidden sm:inline-flex items-center gap-1 ml-1 text-blue-500">
						<Star class="w-3 h-3 fill-current" /> 4.9/5
					</span>
				</div>
				
				<h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
					Learn faster.
					<span class="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent animate-gradient">Remember forever.</span>
				</h1>
				
				<p class="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
					Neurapath uses <span class="font-semibold text-slate-900">spaced repetition</span> and
					<span class="font-semibold text-slate-900">active recall</span> to help you master any subject with 3× less effort.
				</p>
				
				<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
					<a 
						href={`${APP_URL}/register`} 
						class="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 font-semibold text-lg w-full sm:w-auto justify-center"
					>
						Start learning free
						<ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
					</a>
					<a 
						href="#how-it-works" 
						class="group inline-flex items-center gap-2 px-6 py-4 text-slate-700 rounded-xl transition hover:text-slate-900 font-medium text-lg"
					>
						<div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition">
							<Play class="w-4 h-4 ml-0.5" />
						</div>
						See how it works
					</a>
				</div>
				
				<div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
					<span class="flex items-center gap-2">
						<CheckCircle class="w-4 h-4 text-emerald-500" />
						No credit card required
					</span>
					<span class="hidden sm:block text-slate-300">•</span>
					<span class="flex items-center gap-2">
						<CheckCircle class="w-4 h-4 text-emerald-500" />
						Import from Anki
					</span>
					<span class="hidden sm:block text-slate-300">•</span>
					<span class="flex items-center gap-2">
						<CheckCircle class="w-4 h-4 text-emerald-500" />
						Free forever plan
					</span>
				</div>
			</div>
			
			<!-- Right: App preview mockup -->
			<div class="flex-1 w-full max-w-lg lg:max-w-none perspective-1000">
				<div class="relative transform-gpu lg:rotate-y-[-2deg] hover:rotate-y-0 transition-transform duration-500">
					<!-- Browser mockup -->
					<div class="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-300">
						<!-- Browser header -->
						<div class="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
							<div class="flex gap-1.5">
								<div class="w-3 h-3 rounded-full bg-red-400"></div>
								<div class="w-3 h-3 rounded-full bg-amber-400"></div>
								<div class="w-3 h-3 rounded-full bg-emerald-400"></div>
							</div>
							<div class="flex-1 mx-4">
								<div class="bg-slate-100 rounded-lg px-3 py-1.5 text-sm text-slate-400 text-center flex items-center justify-center gap-2">
									<Shield class="w-3 h-3 text-emerald-500" />
									neurapath.shop
								</div>
							</div>
						</div>
						<!-- App preview content -->
						<div class="p-6 bg-gradient-to-br from-slate-50 to-white aspect-[4/3] flex items-center justify-center">
							<div class="text-center w-full">
								<div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 animate-float">
									<Brain class="w-8 h-8 text-white" />
								</div>
								<div class="bg-white rounded-xl p-5 shadow-lg border border-slate-100 max-w-xs mx-auto">
									<p class="text-slate-400 text-xs uppercase tracking-wider mb-2">Question</p>
									<p class="text-slate-900 font-medium mb-4">What is the powerhouse of the cell?</p>
									<div class="h-px bg-slate-100 my-4"></div>
									<p class="text-slate-400 text-xs uppercase tracking-wider mb-2">Answer</p>
									<p class="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mitochondria</p>
								</div>
								<div class="flex gap-2 justify-center mt-4">
									<button class="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition">Again</button>
									<button class="px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-100 transition">Hard</button>
									<button class="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-100 transition">Good</button>
									<button class="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">Easy</button>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Floating badges -->
					<div class="absolute -left-4 top-1/4 bg-white rounded-xl px-4 py-3 shadow-xl border border-slate-100 hidden lg:flex items-center gap-3 animate-float animation-delay-1000">
						<div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
							<TrendingUp class="w-5 h-5 text-emerald-600" />
						</div>
						<div>
							<p class="font-bold text-slate-900">94%</p>
							<p class="text-xs text-slate-500">Retention</p>
						</div>
					</div>
					
					<div class="absolute -right-4 bottom-1/4 bg-white rounded-xl px-4 py-3 shadow-xl border border-slate-100 hidden lg:flex items-center gap-3 animate-float animation-delay-2000">
						<div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
							<Sparkles class="w-5 h-5 text-blue-600" />
						</div>
						<div>
							<p class="font-bold text-slate-900">3× faster</p>
							<p class="text-xs text-slate-500">Learning</p>
						</div>
					</div>
					
					<div class="absolute -right-2 top-16 bg-white rounded-xl px-3 py-2 shadow-lg border border-slate-100 hidden lg:flex items-center gap-2 animate-float animation-delay-3000">
						<div class="flex -space-x-1">
							<div class="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">S</div>
							<div class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">M</div>
							<div class="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-violet-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">E</div>
						</div>
						<p class="text-xs text-slate-600">10K+ learners</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
			<span class="text-xs text-slate-400">Scroll to explore</span>
			<ChevronDown class="w-5 h-5 text-slate-400" />
		</div>
	</section>

	<!-- Social proof bar -->
	<section class="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 relative overflow-hidden">
		<!-- Subtle pattern -->
		<div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
		
		<div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
				{#each stats as stat, index}
					<div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 text-center md:text-left">
						<div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
							<stat.icon class="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
						</div>
						<div>
							<div class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
							<div class="text-sm text-slate-400">{stat.label}</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Trusted by section -->
	<section class="w-full py-16 border-b border-slate-100">
		<div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
			<p class="text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">Trusted by learners at</p>
			<div class="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
				<div class="flex items-center gap-2 text-slate-400">
					<Stethoscope class="w-6 h-6" />
					<span class="font-semibold text-lg">Medical Schools</span>
				</div>
				<div class="flex items-center gap-2 text-slate-400">
					<GraduationCap class="w-6 h-6" />
					<span class="font-semibold text-lg">Universities</span>
				</div>
				<div class="flex items-center gap-2 text-slate-400">
					<Briefcase class="w-6 h-6" />
					<span class="font-semibold text-lg">Enterprises</span>
				</div>
				<div class="flex items-center gap-2 text-slate-400">
					<Globe class="w-6 h-6" />
					<span class="font-semibold text-lg">Language Learners</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section id="features" class="w-full py-24 lg:py-32 bg-white">
		<div class="max-w-7xl mx-auto px-6 md:px-12">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
					<Sparkles class="w-4 h-4" />
					<span>Powerful features</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
					Everything you need to learn effectively
				</h2>
				<p class="text-lg text-slate-600 max-w-2xl mx-auto">
					Built on decades of cognitive science research, designed for the modern learner.
				</p>
			</div>
			
			<!-- Feature grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
				{#each features as feature}
					<div class="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
						<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
							<feature.icon class="text-white" size={28} />
						</div>
						<h3 class="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
						<p class="text-slate-600 leading-relaxed">
							{feature.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- How it works -->
	<section id="how-it-works" class="w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
		<div class="max-w-7xl mx-auto px-6 md:px-12">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
					<Target class="w-4 h-4" />
					<span>Simple process</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
					How Neurapath works
				</h2>
				<p class="text-lg text-slate-600 max-w-2xl mx-auto">
					Start learning in minutes, see results in days.
				</p>
			</div>
			
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
				{#each steps as step, index}
					<div class="relative">
						<!-- Connector line (hidden on last item) -->
						{#if index < steps.length - 1}
							<div class="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-blue-200 to-transparent"></div>
						{/if}
						
						<div class="text-center lg:text-left">
							<div class="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-3xl font-bold mb-6 shadow-lg shadow-blue-500/20">
								{step.number}
							</div>
							<h3 class="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
							<p class="text-slate-600 leading-relaxed max-w-sm mx-auto lg:mx-0">
								{step.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
			
			<div class="text-center mt-16">
				<a 
					href={`${APP_URL}/register`}
					class="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition font-semibold text-lg shadow-lg"
				>
					Start your journey
					<ArrowRight class="w-5 h-5" />
				</a>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section id="testimonials" class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-20 text-center">
		<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-12">
			Loved by learners worldwide
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="rounded-lg border p-6 text-left">
				<p class="text-neutral-800">“Neurapath made complex topics click. My recall doubled in weeks.”</p>
				<p class="mt-4 text-sm text-neutral-500">Alex – Medical Student</p>
			</div>
			<div class="rounded-lg border p-6 text-left">
				<p class="text-neutral-800">“The review timing is perfect. I study less and remember more.”</p>
				<p class="mt-4 text-sm text-neutral-500">Priya – Resident</p>
			</div>
			<div class="rounded-lg border p-6 text-left">
				<p class="text-neutral-800">“Beautiful design meets serious learning science. Exactly what I needed.”</p>
				<p class="mt-4 text-sm text-neutral-500">Marco – Researcher</p>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section id="faq" class="w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
		<div class="max-w-3xl mx-auto px-6 md:px-12">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
					<Shield class="w-4 h-4" />
					<span>Got questions?</span>
				</div>
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
					Frequently asked questions
				</h2>
				<p class="text-lg text-slate-600">
					Everything you need to know about Neurapath.
				</p>
			</div>
			
			<div class="space-y-4">
				{#each faqs as faq, index}
					<div class="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-slate-300">
						<button
							class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl"
							onclick={() => toggleFaq(index)}
							aria-expanded={openFaq === index}
							aria-controls={`faq-answer-${index}`}
						>
							<span class="font-semibold text-slate-900 text-lg pr-4">{faq.question}</span>
							<div class="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors" class:bg-blue-100={openFaq === index}>
								{#if openFaq === index}
									<ChevronUp class="w-5 h-5 text-blue-600" />
								{:else}
									<ChevronDown class="w-5 h-5 text-slate-500" />
								{/if}
							</div>
						</button>
						{#if openFaq === index}
							<div 
								id={`faq-answer-${index}`}
								class="px-6 pb-6 text-slate-600 leading-relaxed animate-fadeIn"
							>
								{faq.answer}
							</div>
						{/if}
					</div>
				{/each}
			</div>
			
			<div class="text-center mt-12">
				<p class="text-slate-600 mb-4">Still have questions?</p>
				<a href="mailto:support@neurapath.shop" class="text-blue-600 font-semibold hover:text-blue-700 transition">
					Contact our support team →
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 relative overflow-hidden">
		<!-- Background decoration -->
		<div class="absolute inset-0 pointer-events-none">
			<div class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
			<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
		</div>
		
		<div class="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
				Ready to transform your learning?
			</h2>
			<p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
				Join thousands of learners who've already unlocked their potential with Neurapath.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a 
					href={`${APP_URL}/register`}
					class="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 font-semibold text-lg"
				>
					Get started for free
					<ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
				</a>
				<span class="text-blue-200 text-sm">No credit card required</span>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer id="about" class="w-full bg-slate-900 text-slate-300">
		<div class="max-w-7xl mx-auto px-6 md:px-12 py-16">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
				<!-- Brand -->
				<div class="col-span-2 md:col-span-1">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
							<Brain class="w-5 h-5 text-white" />
						</div>
						<span class="text-xl font-bold text-white">Neurapath</span>
					</div>
					<p class="text-slate-400 text-sm leading-relaxed">
						Learn faster. Remember forever. Science-backed spaced repetition for the modern learner.
					</p>
				</div>
				
				<!-- Product -->
				<div>
					<h3 class="font-semibold text-white mb-4">Product</h3>
					<ul class="space-y-3">
						<li><a href="https://app.neurapath.shop" class="hover:text-white transition" rel="noopener">App</a></li>
						<li><a href="#features" class="hover:text-white transition">Features</a></li>
						<li><a href="#how-it-works" class="hover:text-white transition">How it works</a></li>
						<li><a href="#testimonials" class="hover:text-white transition">Testimonials</a></li>
					</ul>
				</div>
				
				<!-- Support -->
				<div>
					<h3 class="font-semibold text-white mb-4">Support</h3>
					<ul class="space-y-3">
						<li><a href="#faq" class="hover:text-white transition">FAQ</a></li>
						<li><a href="mailto:support@neurapath.shop" class="hover:text-white transition">Contact</a></li>
						<li><a href="#top" class="hover:text-white transition">Back to top</a></li>
					</ul>
				</div>
				
				<!-- Legal -->
				<div>
					<h3 class="font-semibold text-white mb-4">Legal</h3>
					<ul class="space-y-3">
						<li><a href="/privacy" class="hover:text-white transition">Privacy Policy</a></li>
						<li><a href="/terms" class="hover:text-white transition">Terms of Service</a></li>
					</ul>
				</div>
			</div>
			
			<!-- Bottom bar -->
			<div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<p class="text-slate-400 text-sm">
					© 2025 Neurapath. Made with ♥ in Sweden.
				</p>
				<div class="flex items-center gap-6">
					<a href="https://github.com/neurapath-labs" class="text-slate-400 hover:text-white transition" rel="noopener" aria-label="GitHub">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					</a>
					<a href="https://x.com/neurapath" class="text-slate-400 hover:text-white transition" rel="noopener" aria-label="X (Twitter)">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	/* Blob animation for hero background */
	@keyframes blob {
		0%, 100% {
			transform: translate(0, 0) scale(1);
		}
		25% {
			transform: translate(20px, -30px) scale(1.1);
		}
		50% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		75% {
			transform: translate(30px, 10px) scale(1.05);
		}
	}
	
	:global(.animate-blob) {
		animation: blob 8s infinite ease-in-out;
	}
	
	:global(.animation-delay-2000) {
		animation-delay: 2s;
	}
	
	:global(.animation-delay-4000) {
		animation-delay: 4s;
	}
	
	/* FAQ fade-in animation */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	:global(.animate-fadeIn) {
		animation: fadeIn 0.2s ease-out;
	}
</style>
