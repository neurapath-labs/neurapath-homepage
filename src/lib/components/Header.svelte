<script>
    // Props can be added here for customization if needed
    const { logoSrc = "/favicon.svg", logoAlt = "Neurapath Logo" } = $props();
</script>

<header class="page-header">
    <a href="#top" aria-label="Neurapath home">
        <img alt={logoAlt} src={logoSrc} class="page-logotype" />
    </a>
    <nav class="page-nav">
        <div class="nav-links">
            <a href="#features" class="nav-link">Features</a>
            <a href="#testimonials" class="nav-link">Testimonials</a>
            <a href="#faq" class="nav-link">FAQ</a>
            <a href="#about" class="nav-link">About</a>
        </div>
        <a href="https://neurapath.shop/register" class="cta-button" rel="noopener" aria-label="Get started free on Neurapath">Get started</a>
    </nav>
</header>

<style>
    .page-header {
        width: 100%;
        max-width: 2048px;
        display: flex;
        padding: 28px 240px;
        align-items: center;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 1);
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .page-logotype {
        width: 64px;
        height: 64px;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .page-logotype:hover {
        transform: scale(1.05);
    }

    .page-nav {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-link {
        color: rgba(0, 0, 0, 1);
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
        padding: 8px 44px;
        border-radius: 4px;
        transition: all 0.2s ease;
        position: relative;
    }

    .nav-link:hover {
        color: #428dff;
        background-color: rgba(66, 141, 255, 0.05);
    }

    .nav-link:active {
        transform: translateY(1px);
    }

    .cta-button {
        padding: 12px 31px;
        background-color: #428dff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(66, 141, 255, 0.2);
    }

    .cta-button:hover {
        background-color: #357abd;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(66, 141, 255, 0.3);
    }

    .cta-button:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(66, 141, 255, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
        .page-header {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }

    @media (max-width: 768px) {
        .page-header {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            position: relative;
        }

        .page-nav {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }

        .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        .nav-link {
            padding: 8px 20px;
            font-size: 16px;
        }

        .cta-button {
            width: fit-content;
            align-self: center;
        }
    }

    @media (max-width: 480px) {
        .nav-links {
            flex-direction: column;
            gap: 0.5rem;
        }

        .nav-link {
            text-align: center;
            padding: 12px 20px;
        }
    }
</style>
