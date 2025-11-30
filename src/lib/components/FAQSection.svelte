<script lang="ts">
	import { Shield } from "@lucide/svelte";
	import type { FAQ } from "$lib/constants/data";
	import FAQAccordion from "./FAQAccordion.svelte";
	import { SUPPORT_EMAIL } from "$lib/constants";

	interface Props {
		faqs: FAQ[];
	}

	let { faqs }: Props = $props();
</script>

<section id="faq" class="w-full py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="faq-heading">
	<div class="max-w-3xl mx-auto px-6 md:px-12">
		<div class="text-center mb-16">
			<div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
				<Shield class="w-4 h-4" aria-hidden="true" />
				<span>Got questions?</span>
			</div>
			<h2 id="faq-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
				Frequently asked questions
			</h2>
			<p class="text-lg text-slate-600">
				Everything you need to know about Neurapath.
			</p>
		</div>
		
		<FAQAccordion {faqs} />
		
		<div class="text-center mt-12">
			<p class="text-slate-600 mb-4">Still have questions?</p>
			<a href="mailto:{SUPPORT_EMAIL}" class="text-blue-600 font-semibold hover:text-blue-700 transition">
				Contact our support team →
			</a>
		</div>
	</div>
</section>
