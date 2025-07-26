<script lang="ts">
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Neurapath - Beautiful and Powerful Learning</title>
	<meta
		name="description"
		content="Beautiful and powerful learning based on scientific methods. The all-in-one tool for thinking and learning."
	/>
</svelte:head>

<!-- Page wrapper -->
<div class="w-full min-h-screen flex flex-col items-center bg-white font-sans">
	<!-- Header -->
	<Header />

	<!-- Hero -->
	<section
		class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-20 flex flex-col items-center text-center"
	>
		<div class="max-w-[1080px]">
			<h1
				class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-neutral-900 mb-8"
			>
				Beautiful and powerful learning based on scientific methods.
			</h1>
			<p
				class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-neutral-900 mb-12"
			>
				The all-in-one tool for thinking and learning: Built to empower students,
				researchers and professionals
			</p>

			<div
				class="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center"
			>
				<button
					class="px-10 py-3 bg-blue-500 border-2 border-blue-500 text-white rounded transition hover:bg-blue-600"
				>
					Learn more
				</button>
				<button
					class="px-10 py-3 text-blue-500 rounded transition hover:text-blue-600"
				>
					Enter Evecloud
				</button>
			</div>
		</div>
	</section>

	<!-- Features -->
	<section
		class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-16"
	>
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
				<p
					class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl"
				>
					Evecloud is a simple yet powerful app that utilises a technique which
					is proven to better focus and reduce stress.¹ ²
				</p>
			</div>
			<div class="flex-shrink-0">
				<img
					src="/images/cloud-sharing-upload.svg"
					alt="Faster Learning"
					class="w-32 h-32"
				/>
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
				<p
					class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl"
				>
					Evecloud is a simple yet powerful app that utilises a technique which
					is proven to better focus and reduce stress.¹ ²
				</p>
			</div>
			<div class="flex-shrink-0">
				<img
					src="/images/graph.svg"
					alt="Knowledge Management"
					class="w-32 h-32"
				/>
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
				<p
					class="text-base md:text-lg text-neutral-900 leading-relaxed max-w-xl"
				>
					Capture and link your ideas. RemNote is built for thinking and
					long-term knowledge management.
				</p>
			</div>
			<div class="flex-shrink-0">
				<img
					src="/images/flashcards.svg"
					alt="Flashcards"
					class="w-32 h-32"
				/>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section
		class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 py-16 text-center"
	>
		<h2
			class="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-12"
		>
			Loved by so many people around the world.
		</h2>
		<div class="max-w-2xl mx-auto px-8 py-16">
			<p
				class="text-base md:text-lg text-neutral-900 leading-relaxed mb-8"
			>
				"This learning platform is amazing! It has helped me so much in my
				studies and I would recommend it to any medical student."
			</p>
			<div class="flex justify-center gap-2">
				<span class="text-sm text-neutral-900 italic">thrvskn</span>
				<span class="text-sm text-neutral-900">– App Store 🇺🇸</span>
			</div>
		</div>
	</section>

	<!-- Spacer -->
	<div class="w-full h-24 bg-blue-500"></div>

	<!-- Footer -->
	<footer
		class="w-full max-w-[2048px] px-6 md:px-12 lg:px-60 pt-14 bg-white"
	>
		<div class="px-12">
			<div
				class="flex flex-col lg:flex-row justify-between py-9 gap-8"
			>
				<!-- About -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">About</h3>
					<a href="/story" class="text-lg text-neutral-900 hover:text-blue-500">Our Story</a>
					<a href="/blog" class="text-lg text-neutral-900 hover:text-blue-500">Blog</a>
					<a href="/roadmap" class="text-lg text-neutral-900 hover:text-blue-500">Roadmap</a>
					<a href="/changelog" class="text-lg text-neutral-900 hover:text-blue-500">Changelog</a>
				</div>

				<!-- Support -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Support</h3>
					<a href="/help" class="text-lg text-neutral-900 hover:text-blue-500">Help</a>
					<a href="/docs" class="text-lg text-neutral-900 hover:text-blue-500">Documentation</a>
					<a href="/contribute" class="text-lg text-neutral-900 hover:text-blue-500">Contribute</a>
					<a href="/contact" class="text-lg text-neutral-900 hover:text-blue-500">Contact</a>
				</div>

				<!-- Legal -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Legal</h3>
					<a href="/imprint" class="text-lg text-neutral-900 hover:text-blue-500">Imprint</a>
					<a href="/privacy" class="text-lg text-neutral-900 hover:text-blue-500">Privacy</a>
					<a href="/terms" class="text-lg text-neutral-900 hover:text-blue-500">Terms of Use</a>
				</div>

				<!-- Social -->
				<div class="flex flex-col gap-4">
					<h3 class="text-lg font-bold text-neutral-900 mb-2">Follow us</h3>
					<div class="flex gap-2">
						<div class="w-8 h-8 bg-emerald-700 rounded-full"></div>
						<div class="w-8 h-8 bg-emerald-700 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom -->
		<div class="flex flex-col items-center py-9 gap-4">
			<p class="text-lg text-neutral-900 text-center">Made with ♥ in Sweden</p>
			<p class="text-base text-neutral-900 text-center">
				© 2025 Martin Jakobsson | Mail: Hello@neurapath.com | Website:
				www.neurapath.com
			</p>
		</div>
	</footer>
</div>
