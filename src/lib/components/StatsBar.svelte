<script lang="ts">
	import type { Stat } from "$lib/constants/data";

	interface Props {
		stats: Stat[];
	}

	let { stats }: Props = $props();
</script>

<section class="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 relative overflow-hidden" aria-label="Social proof statistics">
	<!-- Subtle pattern -->
	<div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true"></div>
	
	<div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
			{#each stats as stat (stat.label)}
				<div class="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 text-center md:text-left">
					<div class="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10" aria-hidden="true">
						<stat.icon class="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
					</div>
					<div>
						<div class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
						<div class="text-sm text-slate-400">{stat.label}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
