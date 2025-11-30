<script lang="ts">
	import type { Feature } from "$lib/constants/data";
	import { Sparkles } from "@lucide/svelte";

	interface Props {
		features: Feature[];
	}

	let { features }: Props = $props();
</script>

<section id="features" class="w-full py-24 lg:py-32 bg-white" aria-labelledby="features-heading">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium mb-6">
				<Sparkles class="w-4 h-4" aria-hidden="true" />
				<span>Powerful features</span>
			</div>
			<h2 id="features-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
				Everything you need to learn effectively
			</h2>
			<p class="text-lg text-slate-600 max-w-2xl mx-auto">
				Built on decades of cognitive science research, designed for the modern learner.
			</p>
		</div>
		
		<!-- Feature grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
			{#each features as feature (feature.title)}
				<article class="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300" role="listitem">
					<div class="w-14 h-14 rounded-2xl bg-gradient-to-br {feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
						<feature.icon class="text-white" size={28} />
					</div>
					<h3 class="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
					<p class="text-slate-600 leading-relaxed">
						{feature.description}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
