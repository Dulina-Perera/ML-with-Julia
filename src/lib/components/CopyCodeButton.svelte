<script lang="ts">
	import CheckIcon from './svg/CheckIcon.svelte';
	import CopyIcon from './svg/CopyIcon.svelte';

	let copyButton: HTMLButtonElement;
	let showCheckMark = false;

	const copyCode = () => {
		const preTagSibling = copyButton.nextElementSibling as HTMLPreElement;

		navigator.clipboard.writeText(preTagSibling.innerText);

		showCheckMark = true;

		setTimeout(() => {
			showCheckMark = false;
		}, 1000);
	};
</script>

<button
	bind:this={copyButton}
	class={`absolute p-1 right-2 rounded-md shadow-md top-2 ${showCheckMark ? 'bg-green-900' : 'bg-gray-700 hover:bg-gray-600'}`}
	on:click={copyCode}
>
	{#if showCheckMark}
		<CheckIcon class="fill-green-300 h-6 w-6" />
	{:else}
		<CopyIcon class="fill-white h-6 w-6" />
	{/if}
</button>
