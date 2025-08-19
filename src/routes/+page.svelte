<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import { Brain, Layers3, Sparkles } from "@lucide/svelte";
	const APP_URL = "https://neurapath.shop";
</script>

<svelte:head>
	<title>Neurapath – Learn faster with spaced repetition and active recall</title>
	<meta
		name="description"
		content="Think, learn, and remember faster with Neurapath. Spaced repetition, active recall, and beautiful design in one powerful learning app."
	/>
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
	<section class="w-full bg-gradient-to-b from-blue-50 to-white">
		<div class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-20 flex flex-col items-center text-center">
			<div class="max-w-[1080px]">
				<h1 class="text-3xl sm:text-5xl xl:text-6xl font-semibold tracking-tight text-neutral-900 mb-6">
					Learn faster. Remember longer.
				</h1>
				<p class="text-lg sm:text-2xl lg:text-3xl font-normal text-neutral-700 mb-10">
					Neurapath combines <span class="font-semibold text-neutral-900">spaced repetition</span> and
					<span class="font-semibold text-neutral-900">active recall</span> in a beautiful, all‑in‑one app.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
					<a href={`${APP_URL}/register`} class="px-8 py-3 bg-blue-600 border-2 border-blue-600 text-white rounded-md shadow-sm transition hover:bg-blue-700" aria-label="Get started free">
						Get started free
					</a>
					<a href={APP_URL} class="px-8 py-3 text-blue-600 rounded-md transition hover:text-blue-700" rel="noopener" aria-label="Open Neurapath">
						Open Neurapath →
					</a>
				</div>
				<p class="mt-4 text-sm text-neutral-500">No credit card required</p>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section id="features" class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-20">
		<!-- Feature 1 -->
		<div
			class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-36"
		>
			<div class="flex-1">
				<h2
					class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-snug"
				>
					Faster learning.
				</h2>
				<p class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl">
					Study with scientifically‑proven methods. Turn any concept into smart cards and
					build durable understanding without cramming.
				</p>
			</div>
			<div class="flex-shrink-0">
				<div class="w-28 h-28 rounded-xl bg-blue-50 flex items-center justify-center">
					<Sparkles class="text-blue-600" size={48} aria-hidden="true" />
				</div>
			</div>
		</div>

		<!-- Feature 2 -->
		<div
			class="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-36"
		>
			<div class="flex-1">
				<h2
					class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-snug"
				>
					Knowledge that lasts forever.
				</h2>
				<p class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl">
					Intelligent review schedules resurface the right facts at the right time so you
					retain more with less effort.
				</p>
			</div>
			<div class="flex-shrink-0">
				<div class="w-28 h-28 rounded-xl bg-blue-50 flex items-center justify-center">
					<Brain class="text-blue-600" size={48} aria-hidden="true" />
				</div>
			</div>
		</div>

		<!-- Feature 3 -->
		<div
			class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-36"
		>
			<div class="flex-1">
				<h2
					class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 leading-snug"
				>
					Flashcards &amp; cloze deletions.
				</h2>
				<p class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl">
					Create rich cards in seconds. Use cloze deletions to test recall and build
					deep understanding of difficult material.
				</p>
			</div>
			<div class="flex-shrink-0">
				<div class="w-28 h-28 rounded-xl bg-blue-50 flex items-center justify-center">
					<Layers3 class="text-blue-600" size={48} aria-hidden="true" />
				</div>
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
	<section id="faq" class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-20">
		<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">Frequently asked questions</h2>
		<div class="space-y-4">
			<details class="rounded-lg border p-4" open>
				<summary class="cursor-pointer font-medium">What is Neurapath?</summary>
				<p class="mt-2 text-neutral-700">An all‑in‑one learning app that helps you think, learn, and remember faster using spaced repetition and active recall.</p>
			</details>
			<details class="rounded-lg border p-4">
				<summary class="cursor-pointer font-medium">Who is Neurapath for?</summary>
				<p class="mt-2 text-neutral-700">Students, researchers, and professionals who want long‑term retention and deep understanding.</p>
			</details>
			<details class="rounded-lg border p-4">
				<summary class="cursor-pointer font-medium">How much does it cost?</summary>
				<p class="mt-2 text-neutral-700">Get started free. Upgrade anytime for collaboration, advanced export, and more.</p>
			</details>
		</div>
		<div class="mt-8">
			<a href={`${APP_URL}/register`} class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Start free</a>
		</div>
	</section>

	<!-- Spacer -->
	<div class="w-full h-24 bg-blue-500"></div>

	<!-- Footer -->
	<footer id="about" class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 pt-14 bg-white">
		<div class="px-12">
			<div
				class="flex flex-col lg:flex-row justify-between py-9 gap-8"
			>
				<!-- About -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">About</h3>
					<a href="https://neurapath.shop" class="text-lg text-neutral-900 hover:text-blue-500" rel="noopener">App</a>
					<a href="#features" class="text-lg text-neutral-900 hover:text-blue-500">Features</a>
					<a href="#testimonials" class="text-lg text-neutral-900 hover:text-blue-500">Testimonials</a>
					<a href="#faq" class="text-lg text-neutral-900 hover:text-blue-500">FAQ</a>
				</div>

				<!-- Support -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Support</h3>
					<a href="mailto:support@neurapath.com" class="text-lg text-neutral-900 hover:text-blue-500">Contact</a>
					<a href="#top" class="text-lg text-neutral-900 hover:text-blue-500">Back to top</a>
				</div>

				<!-- Legal -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Legal</h3>
					<a href="/privacy" class="text-lg text-neutral-900 hover:text-blue-500">Privacy</a>
					<a href="/terms" class="text-lg text-neutral-900 hover:text-blue-500">Terms of Use</a>
				</div>

				<!-- Social -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Follow us</h3>
					<div class="flex gap-3 text-neutral-700">
						<a href="https://github.com/neurapath" class="hover:text-blue-600" rel="noopener">GitHub</a>
						<span>·</span>
						<a href="https://x.com/neurapath" class="hover:text-blue-600" rel="noopener">X</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom -->
		<div class="flex flex-col items-center py-9 gap-4">
			<p class="text-lg text-neutral-900 text-center">Made with ♥ in Sweden</p>
			<p class="text-base text-neutral-900 text-center">© 2025 Neurapath</p>
		</div>
	</footer>
</div>
