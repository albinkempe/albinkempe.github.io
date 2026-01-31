<main>
	<h1>sitemap</h1>

    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/sitemap">sitemap ←</a></li>
        <li><a href="https://albinkempe.github.io/the-finals/">hsd ranks</a></li>
        <li class="desktop-only"><a href="https://albinkempe.github.io/giza/">giza</a></li>
    </ul>
</main>

<style>
	:global(body) {
		margin: 0;
		background-color: #000000;
        color: #c6dff8;
        font-family: monospace;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	h1 {
		text-align: center;
        font-size: 2em;
	}

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 10px 0;
    }

    a {
        margin-top: 20px;
        text-decoration: none;
        color: #c6dff8;
        font-size: 1.2em;
    }

    a:hover {
        text-decoration: underline;
        color: rgb(0, 218, 170);
    }

    @media (max-width: 600px) {
        .desktop-only {
            display: none;
        }
    }
</style>
