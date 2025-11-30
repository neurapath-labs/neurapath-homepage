<script lang="ts">
	import type { Step } from "$lib/constants/data";
	import { Target, ArrowRight } from "@lucide/svelte";
	import { APP_URL } from "$lib/constants";

	interface Props {
		steps: Step[];
	}

	let { steps }: Props = $props();
</script>

<section id="how-it-works" class="w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="how-it-works-heading">
	<div class="max-w-7xl mx-auto px-6 md:px-12">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-6">
				<Target class="w-4 h-4" aria-hidden="true" />
				<span>Simple process</span>
			</div>
			<h2 id="how-it-works-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
				How Neurapath works
			</h2>
			<p class="text-lg text-slate-600 max-w-2xl mx-auto">
				Start learning in minutes, see results in days.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" role="list">
			{#each steps as step, index (step.number)}
				<div class="relative" role="listitem">
					<!-- Connector line (hidden on last item) -->
					{#if index < steps.length - 1}
						<div class="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" aria-hidden="true"></div>
					{/if}
					
					<div class="text-center lg:text-left">
						<div class="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-3xl font-bold mb-6 shadow-lg shadow-blue-500/20" aria-hidden="true">
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
				<ArrowRight class="w-5 h-5" aria-hidden="true" />
			</a>
		</div>
	</div>
</section>
