<script lang="ts">
	import { Brain } from "@lucide/svelte";
	import { APP_URL, SUPPORT_EMAIL } from "$lib/constants";

	const currentYear = new Date().getFullYear();
</script>

<footer id="about" class="w-full bg-slate-900 text-slate-300" role="contentinfo">
	<div class="max-w-7xl mx-auto px-6 md:px-12 py-16">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
			<!-- Brand -->
			<div class="col-span-2 md:col-span-1">
				<div class="flex items-center gap-3 mb-4">
					<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center" aria-hidden="true">
						<Brain class="w-5 h-5 text-white" />
					</div>
					<span class="text-xl font-bold text-white">Neurapath</span>
				</div>
				<p class="text-slate-400 text-sm leading-relaxed">
					Learn faster. Remember forever. Science-backed spaced repetition for the modern learner.
				</p>
			</div>
			
			<!-- Product -->
			<nav aria-label="Product links">
				<h3 class="font-semibold text-white mb-4">Product</h3>
				<ul class="space-y-3">
					<li><a href={APP_URL} class="hover:text-white transition" rel="noopener noreferrer">App</a></li>
					<li><a href="#features" class="hover:text-white transition">Features</a></li>
					<li><a href="#how-it-works" class="hover:text-white transition">How it works</a></li>
					<li><a href="#testimonials" class="hover:text-white transition">Testimonials</a></li>
				</ul>
			</nav>
			
			<!-- Support -->
			<nav aria-label="Support links">
				<h3 class="font-semibold text-white mb-4">Support</h3>
				<ul class="space-y-3">
					<li><a href="#faq" class="hover:text-white transition">FAQ</a></li>
					<li><a href="mailto:{SUPPORT_EMAIL}" class="hover:text-white transition">Contact</a></li>
					<li><a href="#top" class="hover:text-white transition">Back to top</a></li>
				</ul>
			</nav>
			
			<!-- Legal -->
			<nav aria-label="Legal links">
				<h3 class="font-semibold text-white mb-4">Legal</h3>
				<ul class="space-y-3">
					<li><a href="/privacy" class="hover:text-white transition">Privacy Policy</a></li>
					<li><a href="/terms" class="hover:text-white transition">Terms of Service</a></li>
				</ul>
			</nav>
		</div>
		
		<!-- Bottom bar -->
		<div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
			<p class="text-slate-400 text-sm">
				© {currentYear} Neurapath. Made with ♥ in Sweden.
			</p>
			<div class="flex items-center gap-6">
				<a 
					href="https://github.com/neurapath-labs" 
					class="text-slate-400 hover:text-white transition" 
					rel="noopener noreferrer" 
					aria-label="Neurapath on GitHub"
					target="_blank"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>
				<a 
					href="https://x.com/neurapath" 
					class="text-slate-400 hover:text-white transition" 
					rel="noopener noreferrer" 
					aria-label="Neurapath on X (Twitter)"
					target="_blank"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
