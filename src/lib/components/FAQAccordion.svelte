<script lang="ts">
	import { ChevronDown, ChevronUp } from "@lucide/svelte";
	import type { FAQ } from "$lib/constants/data";

	interface Props {
		faqs: FAQ[];
	}

	let { faqs }: Props = $props();
	let openFaq = $state<number | null>(0);

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<div class="space-y-4">
	{#each faqs as faq, index (faq.question)}
		<div class="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 hover:border-slate-300">
			<button
				class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl"
				onclick={() => toggleFaq(index)}
				aria-expanded={openFaq === index}
				aria-controls={`faq-answer-${index}`}
			>
				<span class="font-semibold text-slate-900 text-lg pr-4">{faq.question}</span>
				<div 
					class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
					class:bg-blue-100={openFaq === index}
					class:bg-slate-100={openFaq !== index}
				>
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
					role="region"
					aria-labelledby={`faq-question-${index}`}
				>
					{faq.answer}
				</div>
			{/if}
		</div>
	{/each}
</div>
