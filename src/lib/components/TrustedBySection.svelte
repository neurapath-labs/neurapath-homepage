<script lang="ts">
	import { Stethoscope, GraduationCap, Briefcase, Globe } from "@lucide/svelte";

	const trustedBy = [
		{ icon: Stethoscope, label: "Medical Schools" },
		{ icon: GraduationCap, label: "Universities" },
		{ icon: Briefcase, label: "Enterprises" },
		{ icon: Globe, label: "Language Learners" }
	];
</script>

<section class="w-full py-16 border-b border-slate-100" aria-label="Trusted by organizations">
	<div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
		<p class="text-sm font-medium text-slate-500 mb-8 tracking-wide uppercase">Trusted by learners at</p>
		<div class="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
			{#each trustedBy as { icon: Icon, label }}
				<div class="flex items-center gap-2 text-slate-400">
					<Icon class="w-6 h-6" aria-hidden="true" />
					<span class="font-semibold text-lg">{label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
