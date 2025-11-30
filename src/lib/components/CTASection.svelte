<script lang="ts">
	import { ArrowRight } from "@lucide/svelte";
	import { APP_URL } from "$lib/constants";
</script>

<section class="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 relative overflow-hidden" aria-labelledby="cta-heading">
	<!-- Background decoration -->
	<div class="absolute inset-0 pointer-events-none" aria-hidden="true">
		<div class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
	</div>
	
	<div class="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
		<h2 id="cta-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
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
				<ArrowRight class="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
			</a>
			<span class="text-blue-200 text-sm">No credit card required</span>
		</div>
	</div>
</section>
