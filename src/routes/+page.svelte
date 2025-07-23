<script lang="ts">
    import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
    <title>Neurapath - Beautiful and Powerful Learning</title>
    <meta
        name="description"
        content="Beautiful and powerful learning based on scientific methods. The all-in-one tool for thinking and learning."
    />
</svelte:head>

<div class="page-container">
    <!-- Header Section -->
    <Header />

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">
                Beautiful and powerful learning based on scientific methods.
            </h1>
            <p class="hero-subtitle">
                The all-in-one tool for thinking and learning: Built to empower
                students, researchers and professionals
            </p>
            <div class="hero-buttons">
                <button class="primary-button">Learn more</button>
                <button class="secondary-button">Enter Evecloud</button>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
        <!-- Feature 1: Faster Learning -->
        <div class="feature">
            <div class="feature-content">
                <h2 class="feature-title">Faster learning.</h2>
                <p class="feature-description">
                    Evecloud is a simple yet powerful app that utilises a
                    technique which is proven to better focus and reduce
                    stress.¹ ²
                </p>
            </div>
            <div class="feature-icon">
                <img
                    alt="Faster Learning"
                    src="/images/cloud-sharing-upload.svg"
                    class="feature-image"
                />
            </div>
        </div>

        <!-- Feature 2: Knowledge that lasts -->
        <div class="feature feature-reverse">
            <div class="feature-icon">
                <img
                    alt="Knowledge Management"
                    src="/images/graph.svg"
                    class="feature-image"
                />
            </div>
            <div class="feature-content">
                <h2 class="feature-title">Knowledge that lasts forever.</h2>
                <p class="feature-description">
                    Evecloud is a simple yet powerful app that utilises a
                    technique which is proven to better focus and reduce
                    stress.¹ ²
                </p>
            </div>
        </div>

        <!-- Feature 3: Flashcards & cloze deletions -->
        <div class="feature">
            <div class="feature-content">
                <h2 class="feature-title">Flashcards & cloze deletions.</h2>
                <p class="feature-description">
                    Capture and link your ideas. RemNote is built for thinking
                    and long-term knowledge management.
                </p>
            </div>
            <div class="feature-icon">
                <img
                    alt="Flashcards"
                    src="/images/flashcards.svg"
                    class="feature-image"
                />
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
        <h2 class="testimonials-title">
            Loved by so many people around the world.
        </h2>
        <div class="testimonial">
            <p class="testimonial-text">
                "This learning platform is amazing! It has helped me so much in
                my studies and I would recommend it to any medical student."
            </p>
            <div class="testimonial-author">
                <span class="author-name">thrvskn</span>
                <span class="author-source">– App Store 🇺🇸</span>
            </div>
        </div>
    </section>

    <!-- Spacer -->
    <div class="spacer"></div>

    <!-- Footer Section -->
    <footer class="page-footer">
        <div class="footer-content">
            <div class="footer-columns">
                <!-- About Column -->
                <div class="footer-column">
                    <h3 class="footer-column-title">About</h3>
                    <a href="/story" class="footer-link">Our Story</a>
                    <a href="/blog" class="footer-link">Blog</a>
                    <a href="/roadmap" class="footer-link">Roadmap</a>
                    <a href="/changelog" class="footer-link">Changelog</a>
                </div>

                <!-- Support Column -->
                <div class="footer-column">
                    <h3 class="footer-column-title">Support</h3>
                    <a href="/help" class="footer-link">Help</a>
                    <a href="/docs" class="footer-link">Documentation</a>
                    <a href="/contribute" class="footer-link">Contribute</a>
                    <a href="/contact" class="footer-link">Contact</a>
                </div>

                <!-- Legal Column -->
                <div class="footer-column">
                    <h3 class="footer-column-title">Legal</h3>
                    <a href="/imprint" class="footer-link">Imprint</a>
                    <a href="/privacy" class="footer-link">Privacy</a>
                    <a href="/terms" class="footer-link">Terms of Use</a>
                </div>

                <!-- Social Column -->
                <div class="footer-column">
                    <h3 class="footer-column-title">Follow us</h3>
                    <div class="social-links">
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <p class="footer-tagline">Made with ♥ in Sweden</p>
            <p class="footer-copyright">
                © 2025 Martin Jakobsson | Mail: Hello@neurapath.com | Website:
                www.neurapath.com
            </p>
        </div>
    </footer>
</div>

<style>
    /* Import or define styles here */
    :global(body) {
        margin: 0;
        font-family: "Inter", "Poppins", Arial, sans-serif;
    }

    .page-container {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
    }

    /* Hero Section */
    .hero-section {
        width: 100%;
        max-width: 2048px;
        padding: 80px 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .hero-content {
        max-width: 1080px;
    }

    .hero-title {
        color: rgba(19, 20, 21, 1);
        font-size: 54px;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
        line-height: 1.2;
        margin-bottom: 2rem;
    }

    .hero-subtitle {
        color: rgba(19, 20, 21, 1);
        font-size: 28px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        line-height: 1.18;
        margin-bottom: 3rem;
    }

    .hero-buttons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    .primary-button {
        padding: 12px 42px;
        background-color: #428dff;
        color: white;
        border: 2px solid #428dff;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
    }

    .secondary-button {
        padding: 12px 42px;
        background-color: transparent;
        color: #428dff;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
    }

    /* Features Section */
    .features-section {
        width: 100%;
        max-width: 2048px;
        padding: 70px 240px;
    }

    .feature {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-bottom: 140px;
    }

    .feature-reverse {
        flex-direction: row-reverse;
    }

    .feature-content {
        flex: 1;
    }

    .feature-title {
        color: rgba(19, 20, 21, 1);
        font-size: 34px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        line-height: 1.3;
        margin-bottom: 1rem;
    }

    .feature-description {
        color: rgba(19, 20, 21, 1);
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        max-width: 634px;
    }

    .feature-icon {
        flex-shrink: 0;
    }

    .feature-image {
        width: 128px;
        height: 128px;
    }

    /* Testimonials Section */
    .testimonials-section {
        width: 100%;
        max-width: 2048px;
        padding: 70px 240px;
        text-align: center;
    }

    .testimonials-title {
        color: rgba(19, 20, 21, 1);
        font-size: 34px;
        font-weight: 700;
        font-family: "Poppins", sans-serif;
        line-height: 1.3;
        margin-bottom: 3rem;
    }

    .testimonial {
        max-width: 767px;
        margin: 0 auto;
        padding: 20px 76px 70px;
    }

    .testimonial-text {
        color: rgba(19, 20, 21, 1);
        font-size: 19px;
        font-weight: 400;
        font-family: "Poppins", sans-serif;
        line-height: 1.8;
        margin-bottom: 2rem;
    }

    .testimonial-author {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    .author-name {
        color: rgba(19, 20, 21, 1);
        font-size: 15px;
        font-style: italic;
        font-weight: 400;
    }

    .author-source {
        color: rgba(19, 20, 21, 1);
        font-size: 15px;
        font-weight: 400;
    }

    /* Spacer */
    .spacer {
        width: 100%;
        height: 100px;
        background-color: #428dff;
    }

    /* Footer Styles */
    .page-footer {
        width: 100%;
        max-width: 2048px;
        padding: 59px 240px 0;
        background-color: rgba(255, 255, 255, 1);
    }

    .footer-content {
        padding: 0 48px;
    }

    .footer-columns {
        display: flex;
        justify-content: space-between;
        padding: 36px 0;
        gap: 2rem;
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer-column-title {
        color: rgba(19, 20, 21, 1);
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .footer-link {
        color: rgba(19, 20, 21, 1);
        font-size: 18px;
        font-weight: 400;
        text-decoration: none;
        line-height: 1.2;
    }

    .footer-link:hover {
        color: #428dff;
    }

    .social-links {
        display: flex;
        gap: 0.5rem;
    }

    .social-icon {
        width: 32px;
        height: 32px;
        background-color: rgba(38, 120, 102, 1);
        border-radius: 50px;
    }

    .footer-bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 36px 0;
        gap: 1rem;
    }

    .footer-tagline {
        color: rgba(19, 20, 21, 1);
        font-size: 18px;
        font-weight: 400;
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .footer-copyright {
        color: rgba(19, 20, 21, 1);
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
        .hero-section,
        .features-section,
        .testimonials-section,
        .page-footer {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        .hero-title {
            font-size: 42px;
        }

        .hero-subtitle {
            font-size: 24px;
        }
    }

    @media (max-width: 768px) {
        .hero-title {
            font-size: 32px;
        }

        .hero-subtitle {
            font-size: 20px;
        }

        .hero-buttons {
            flex-direction: column;
        }

        .feature {
            flex-direction: column;
            text-align: center;
        }

        .feature-reverse {
            flex-direction: column;
        }

        .footer-columns {
            flex-direction: column;
        }
    }
</style>
