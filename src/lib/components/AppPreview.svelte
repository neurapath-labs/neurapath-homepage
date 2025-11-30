<script lang="ts">
	import { Brain, TrendingUp, Sparkles } from "@lucide/svelte";

	interface Props {
		class?: string;
	}

	let { class: className = "" }: Props = $props();
</script>

<div class="relative transform-gpu lg:rotate-y-[-2deg] hover:rotate-y-0 transition-transform duration-500 {className}">
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
					<svg class="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
					app.neurapath.shop
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
					<button type="button" class="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition" aria-label="Rate as Again">Again</button>
					<button type="button" class="px-3 py-1.5 bg-amber-50 text-amber-600 rounded-lg text-sm font-medium hover:bg-amber-100 transition" aria-label="Rate as Hard">Hard</button>
					<button type="button" class="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-100 transition" aria-label="Rate as Good">Good</button>
					<button type="button" class="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition" aria-label="Rate as Easy">Easy</button>
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
