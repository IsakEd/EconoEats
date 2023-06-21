<script>
	import { page } from '$app/stores';
	import { language } from '../stores';
</script>

<div id="header" class="flex-row">
	<img id="logo" src="/logo.svg" alt="logo" />

	<div id="nav">
		<a href="/" class:active={$page.url.pathname === '/'}>OPTIMIZER</a>
		<a href="/faq" class:active={$page.url.pathname === '/faq'}>FAQ</a>
		<a href="/about" class:active={$page.url.pathname === '/about'}>ABOUT</a>
	</div>
	<div id="external" class="flex-row">
		<div id="languages">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="language-select"
				on:click={() => ($language = 'swedish')}
				class:active={$language === 'swedish'}
			>
				SE
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="language-select"
				on:click={() => ($language = 'english')}
				class:active={$language === 'english'}
			>
				EN
			</span>
		</div>
		<a href="https://github.com/IsakEd/EconoEats">
			<img class="logo" src="/github-mark.svg" alt="GitHub" />
		</a>
	</div>
</div>
<div id="all-content">
	<slot />
</div>

<style>
	#all-content {
		margin: 0 0.5em;
	}

	#header {
		width: 100vw;
		align-items: center;
		justify-content: space-around;
		height: 2.75em;
		border-bottom: 1px solid var(--bleak);
		margin-bottom: 1em;
	}

	#logo {
		height: 2.2em;
	}

	.logo {
		height: 1.5em;
	}

	a,
	.language-select {
		text-decoration: none;
		color: #ccc;
	}
	.active {
		color: #535353;
	}
	#nav a {
		padding: 0 0.4em;
	}
	#languages {
		margin-right: 1em;
	}
	#languages > span {
		margin: 0 0.3em;
		align-items: center;
	}
</style>
