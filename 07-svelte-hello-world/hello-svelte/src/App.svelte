<script>
  import Beans from './Beans.svelte'; // component, becomes a tag
	import MultiProp from './MultiProp.svelte';
	export let name; // this is a prop

	const deezProps = {
		one: "one is the loneliest number",
		two: "two is the perfect number of cats"
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Beans name="{name} + 1" />
	<Beans name={name} />

	<Beans />
	
  <MultiProp />
  <MultiProp {...deezProps} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>