<script lang="ts">
    import { Menu, X } from "@lucide/svelte";
    import { APP_URL } from "$lib/constants";
    import { browser } from "$app/environment";

    interface Props {
        logoSrc?: string;
        logoAlt?: string;
    }

    const { logoSrc = "/favicon.svg", logoAlt = "Neurapath Logo" }: Props = $props();
    
    let mobileMenuOpen = $state(false);
    let scrolled = $state(false);
    
    // Handle scroll for header background
    $effect(() => {
        if (!browser) return;
        
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };
        
        // Check initial scroll position
        handleScroll();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });

    // Close mobile menu on escape key
    $effect(() => {
        if (!browser || !mobileMenuOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                mobileMenuOpen = false;
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    });

    // Prevent body scroll when mobile menu is open
    $effect(() => {
        if (!browser) return;
        
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    });
</script>

<header class="page-header" class:scrolled class:menu-open={mobileMenuOpen} role="banner">
    <div class="header-inner">
        <a href="/" aria-label="Neurapath home" class="logo-link">
            <img alt={logoAlt} src={logoSrc} class="page-logotype" width="40" height="40" />
            <span class="logo-text">Neurapath</span>
        </a>
        
        <!-- Mobile menu button -->
        <button 
            class="mobile-menu-btn" 
            onclick={() => mobileMenuOpen = !mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-nav"
            type="button"
        >
            {#if mobileMenuOpen}
                <X size={24} aria-hidden="true" />
            {:else}
                <Menu size={24} aria-hidden="true" />
            {/if}
        </button>
        
        <!-- Desktop nav (inside header-inner) -->
        <nav class="page-nav desktop-nav" aria-label="Main navigation">
            <div class="nav-links">
                <a href="/#features" class="nav-link">Features</a>
                <a href="/#how-it-works" class="nav-link">How it works</a>
                <a href="/#testimonials" class="nav-link">Testimonials</a>
                <a href="/#faq" class="nav-link">FAQ</a>
            </div>
            <div class="nav-cta">
                <a href="{APP_URL}/login" class="login-link" rel="noopener noreferrer">Log in</a>
                <a href="{APP_URL}/register" class="cta-button" rel="noopener noreferrer" aria-label="Get started free on Neurapath">
                    Get started free
                </a>
            </div>
        </nav>
    </div>
</header>

<!-- Mobile nav (outside header, renders as overlay) -->
{#if mobileMenuOpen}
<nav id="main-nav" class="mobile-nav-overlay" aria-label="Main navigation">
    <div class="nav-links">
        <a href="/#features" class="nav-link" onclick={() => mobileMenuOpen = false}>Features</a>
        <a href="/#how-it-works" class="nav-link" onclick={() => mobileMenuOpen = false}>How it works</a>
        <a href="/#testimonials" class="nav-link" onclick={() => mobileMenuOpen = false}>Testimonials</a>
        <a href="/#faq" class="nav-link" onclick={() => mobileMenuOpen = false}>FAQ</a>
    </div>
    <div class="nav-cta">
        <a href="{APP_URL}/login" class="login-link" rel="noopener noreferrer" onclick={() => mobileMenuOpen = false}>Log in</a>
        <a href="{APP_URL}/register" class="cta-button" rel="noopener noreferrer" aria-label="Get started free on Neurapath" onclick={() => mobileMenuOpen = false}>
            Get started free
        </a>
    </div>
</nav>
{/if}

<style>
    .page-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: all 0.3s ease;
    }

    .page-header.menu-open {
        background-color: white;
    }

    .page-header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .header-inner {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        padding: 16px 48px;
        align-items: center;
        justify-content: space-between;
    }

    .logo-link {
        display: flex;
        align-items: center;
        gap: 12px;
        text-decoration: none;
    }

    .page-logotype {
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .logo-link:hover .page-logotype {
        transform: scale(1.05);
    }

    .logo-text {
        font-size: 20px;
        font-weight: 700;
        color: #0f172a;
        letter-spacing: -0.02em;
    }

    .mobile-menu-btn {
        display: none;
        padding: 8px;
        background: none;
        border: none;
        cursor: pointer;
        color: #0f172a;
        border-radius: 8px;
        transition: background-color 0.2s;
    }

    .mobile-menu-btn:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .page-nav {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .nav-links {
        display: flex;
        gap: 0.5rem;
    }

    .nav-link {
        color: #475569;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .nav-link:hover {
        color: #0f172a;
        background-color: rgba(0, 0, 0, 0.04);
    }

    .nav-cta {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .login-link {
        color: #475569;
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all 0.2s ease;
    }

    .login-link:hover {
        color: #0f172a;
        background-color: rgba(0, 0, 0, 0.04);
    }

    .cta-button {
        padding: 10px 20px;
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2), 0 4px 12px rgba(37, 99, 235, 0.15);
        text-decoration: none;
    }

    .cta-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(37, 99, 235, 0.25), 0 8px 24px rgba(37, 99, 235, 0.2);
    }

    .cta-button:active {
        transform: translateY(0);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .header-inner {
            padding: 16px 24px;
        }
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 120;
            position: relative;
        }

        .desktop-nav {
            display: none;
        }

        .nav-links {
            flex-direction: column;
            width: 100%;
            gap: 0;
        }

        .nav-link {
            padding: 16px;
            font-size: 18px;
            border-radius: 12px;
        }

        .nav-cta {
            flex-direction: column;
            width: 100%;
            gap: 12px;
            margin-top: auto;
            padding-top: 24px;
            border-top: 1px solid #e2e8f0;
        }

        .login-link {
            width: 100%;
            text-align: center;
            padding: 14px;
            font-size: 16px;
            background-color: #f1f5f9;
            border-radius: 12px;
        }

        .cta-button {
            width: 100%;
            text-align: center;
            padding: 14px 20px;
            font-size: 16px;
            border-radius: 12px;
        }
    }

    /* Mobile nav overlay - outside header to avoid stacking context issues */
    .mobile-nav-overlay {
        display: none;
    }

    @media (max-width: 768px) {
        .mobile-nav-overlay {
            display: flex;
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            flex-direction: column;
            padding: 24px;
            gap: 24px;
            overflow-y: auto;
            z-index: 9999;
        }
    }
</style>
