<script lang="ts">
	import { Zap, Star, ArrowRight, Play, CheckCircle, ChevronDown } from "@lucide/svelte";
	import AppPreview from "./AppPreview.svelte";
	import { APP_URL } from "$lib/constants";
</script>

<section class="w-full min-h-screen flex items-center bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden relative pt-20" aria-labelledby="hero-heading">
	<!-- Animated background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
				<Zap class="w-4 h-4" aria-hidden="true" />
				<span>Powered by science-backed learning</span>
				<span class="hidden sm:inline-flex items-center gap-1 ml-1 text-blue-500">
					<Star class="w-3 h-3 fill-current" aria-hidden="true" /> 4.9/5
				</span>
			</div>
			
			<h1 id="hero-heading" class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
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
					<ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
				</a>
				<a 
					href="#how-it-works" 
					class="group inline-flex items-center gap-2 px-6 py-4 text-slate-700 rounded-xl transition hover:text-slate-900 font-medium text-lg"
				>
					<div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition" aria-hidden="true">
						<Play class="w-4 h-4 ml-0.5" />
					</div>
					See how it works
				</a>
			</div>
			
			<div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
				<span class="flex items-center gap-2">
					<CheckCircle class="w-4 h-4 text-emerald-500" aria-hidden="true" />
					No credit card required
				</span>
				<span class="hidden sm:block text-slate-300" aria-hidden="true">•</span>
				<span class="flex items-center gap-2">
					<CheckCircle class="w-4 h-4 text-emerald-500" aria-hidden="true" />
					Import from Anki
				</span>
				<span class="hidden sm:block text-slate-300" aria-hidden="true">•</span>
				<span class="flex items-center gap-2">
					<CheckCircle class="w-4 h-4 text-emerald-500" aria-hidden="true" />
					Free forever plan
				</span>
			</div>
		</div>
		
		<!-- Right: App preview mockup -->
		<div class="flex-1 w-full max-w-lg lg:max-w-none perspective-1000">
			<AppPreview />
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
		<span class="text-xs text-slate-400">Scroll to explore</span>
		<ChevronDown class="w-5 h-5 text-slate-400" aria-hidden="true" />
	</div>
</section>
