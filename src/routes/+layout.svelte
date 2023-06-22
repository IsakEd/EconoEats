<script>
	import { page } from '$app/stores';
	import { language } from '../stores';
	import { currency } from '../stores';
	import { currencies } from '../stores';
</script>

<div id="header" class="flex-row">
	<title id="EconoEats">
		<img id="logo" src="/logo.svg" alt="EconoEats" />
	</title>
	<div id="nav">
		<a href="/" class:active={$page.url.pathname === '/'}>OPTIMIZER</a>
		<a href="/faq" class:active={$page.url.pathname === '/faq'}>FAQ</a>
	</div>
	<div id="external" class="flex-row">
		<div id="languages">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="language-select"
				on:click={() => {
					$language = 'swedish';
					$currency = currencies.SEK;
				}}
				class:active={$language === 'swedish'}
			>
				SE|kr
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				class="language-select"
				on:click={() => {
					$language = 'english';
					$currency = currencies.EUR;
				}}
				class:active={$language === 'english'}
			>
				EN|€
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
		align-items: baseline;
	}
</style>
