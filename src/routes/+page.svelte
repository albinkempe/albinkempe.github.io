<svelte:head>
	<title>Albin Kempe | Solution Architect</title>
	<meta name="description" content="Albin Kempe, Solution Architect." />
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<h1 id="hero-title">Albin Kempe</h1>
	<p class="role">Solution Architect</p>
	<a
		class="linkedin-link"
		href="https://www.linkedin.com/in/albinkempe"
		target="_blank"
		rel="noreferrer">LinkedIn</a
	>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 2.5rem 0;
		min-height: 100vh;
		min-height: 100svh;
	}

	h1 {
		margin: 0;
		font-family: 'Noto Serif', serif;
		font-size: 3.25rem;
		font-weight: 400;
		letter-spacing: 0;
		line-height: 1.05;
	}

	.role {
		margin: 0.75rem 0 1.5rem;
		color: #aeb1bb;
		font-size: 1rem;
	}

	.linkedin-link {
		display: inline-flex;
		min-height: 2.875rem;
		align-items: center;
		justify-content: center;
		padding: 0.75rem 1.125rem;
		border: 1px solid #9bc9f2;
		background: #9bc9f2;
		color: #142033;
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background-color 160ms ease,
			border-color 160ms ease;
	}

	.linkedin-link:hover {
		border-color: #b4d8f7;
		background: #b4d8f7;
	}

	.linkedin-link:focus-visible {
		outline: 3px solid #9bc9f2;
		outline-offset: 3px;
	}

	@media (min-width: 48rem) {
		h1 {
			font-size: 5.5rem;
		}
	}
</style>
