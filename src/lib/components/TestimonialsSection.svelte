<script lang="ts">
	import type { Testimonial } from "$lib/constants/data";
	import { Star, Quote } from "@lucide/svelte";

	interface Props {
		testimonials: Testimonial[];
		variant?: "simple" | "full";
	}

	let { testimonials, variant = "full" }: Props = $props();
</script>

{#if variant === "simple"}
	<!-- Simple testimonials (3-column grid) -->
	<section id="testimonials" class="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 text-center" aria-labelledby="testimonials-heading-simple">
		<h2 id="testimonials-heading-simple" class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12">
			Loved by learners worldwide
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
			{#each testimonials.slice(0, 3) as testimonial (testimonial.author)}
				<blockquote class="rounded-2xl border border-slate-200 p-6 text-left bg-white hover:border-slate-300 transition-colors" role="listitem">
					<div class="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
						{#each Array(testimonial.rating) as _, i}
							<Star class="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
						{/each}
					</div>
					<p class="text-slate-700 leading-relaxed mb-4">"{testimonial.quote}"</p>
					<footer class="flex items-center gap-3">
						<div class="w-10 h-10 rounded-full bg-gradient-to-br {testimonial.gradient} flex items-center justify-center text-white text-sm font-bold" aria-hidden="true">
							{testimonial.avatar}
						</div>
						<div>
							<cite class="not-italic font-semibold text-slate-900">{testimonial.author}</cite>
							<p class="text-sm text-slate-500">{testimonial.role}, {testimonial.school}</p>
						</div>
					</footer>
				</blockquote>
			{/each}
		</div>
	</section>
{:else}
	<!-- Full testimonials section -->
	<section id="testimonials" class="w-full py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50" aria-labelledby="testimonials-heading">
		<div class="max-w-7xl mx-auto px-6 md:px-12">
			<div class="text-center mb-16">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6">
					<Star class="w-4 h-4 fill-current" aria-hidden="true" />
					<span>Loved by 10,000+ learners</span>
				</div>
				<h2 id="testimonials-heading" class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
					Real results from real learners
				</h2>
				<p class="text-lg text-slate-600 max-w-2xl mx-auto">
					See how Neurapath is transforming the way people learn.
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
				{#each testimonials as testimonial (testimonial.author)}
					<blockquote class="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300" role="listitem">
						<!-- Quote icon -->
						<div class="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br {testimonial.gradient} flex items-center justify-center shadow-lg" aria-hidden="true">
							<Quote class="w-5 h-5 text-white" />
						</div>
						
						<!-- Rating -->
						<div class="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
							{#each Array(testimonial.rating) as _, i}
								<Star class="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
							{/each}
						</div>
						
						<p class="text-slate-700 leading-relaxed mb-6 text-lg">
							"{testimonial.quote}"
						</p>
						
						<footer class="flex items-center gap-4">
							<div class="w-12 h-12 rounded-full bg-gradient-to-br {testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md" aria-hidden="true">
								{testimonial.avatar}
							</div>
							<div>
								<cite class="not-italic font-bold text-slate-900">{testimonial.author}</cite>
								<p class="text-slate-500">{testimonial.role}</p>
								<p class="text-sm text-slate-400">{testimonial.school}</p>
							</div>
						</footer>
					</blockquote>
				{/each}
			</div>
		</div>
	</section>
{/if}
