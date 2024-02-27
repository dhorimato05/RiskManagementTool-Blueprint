<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import * as Table from '$lib/components/ui/table';
	import * as Card from '$lib/components/ui/card';
	import Form from './Form.svelte';
	export let data: PageData;

	const minisTable = [
		{
			futureTicker: 'NQ',
			pointValue: '$20'
		},
		{
			futureTicker: 'ES',
			pointValue: '$50'
		},

		{
			futureTicker: 'YM',
			pointValue: '$5'
		},
		{
			futureTicker: 'CL',
			pointValue: '$10 per 0.01 (Tick)'
		},
		{
			futureTicker: 'GC',
			pointValue: '$10 per 0.10 (Tick)'
		},
		{
			futureTicker: 'RTY',
			pointValue: '$5 per 0.10 (Tick)'
		}
	];

	const microsTable = [
		{
			futureTicker: 'MNQ',
			pointValue: '$2'
		},
		{
			futureTicker: 'MES',
			pointValue: '$5'
		},
		{
			futureTicker: 'MYM',
			pointValue: '$0.50'
		},
		{
			futureTicker: 'MCL',
			pointValue: '$1 per 0.01 (Tick)'
		},
		{
			futureTicker: 'MGC',
			pointValue: '$1 per 0.01 (Tick)'
		},
		{
			futureTicker: 'M2K',
			pointValue: '$0.50 per 0.01 (Tick)'
		}
	];
</script>

<div class="flex w-full flex-col items-center justify-center">
	<h1
		class="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight 2xs:text-sm sm:text-lg lg:text-5xl"
	>
		Position Size Calculator
	</h1>

	<div
		class="sm:max-w-1/4 mb-10 flex w-1/4 justify-between gap-10 2xs:flex 2xs:flex-col 2xs:items-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row"
	>
		<div>
			<Form data={data.form} />
		</div>
		<div>
			<Card.Root class="pb-4 2xs:w-[200px]">
				<Table.Root>
					<Table.Caption>$ per point for each future ticker.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head>Future Ticker</Table.Head>
							<Table.Head>Point/Tick Value</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each minisTable as mini}
							<Table.Row>
								<Table.Cell class="font-medium">{mini.futureTicker}</Table.Cell>
								<Table.Cell class="font-medium">{mini.pointValue}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Root>
		</div>
		<div>
			<Card.Root class="pb-4 2xs:w-[200px]">
				<Table.Root>
					<Table.Caption>$ per point for each future ticker.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head>Future Ticker</Table.Head>
							<Table.Head>Point/Tick Value</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{#each microsTable as micro}
							<Table.Row>
								<Table.Cell class="font-medium">{micro.futureTicker}</Table.Cell>
								<Table.Cell class="font-medium">{micro.pointValue}</Table.Cell>
							</Table.Row>
						{/each}
					</Table.Body>
				</Table.Root>
			</Card.Root>
		</div>
	</div>
	<div>
		<h1
			class="mb-10 scroll-m-20 text-4xl font-extrabold tracking-tight 2xs:justify-center 2xs:text-center 2xs:text-sm lg:text-2xl"
		>
			Number of Contracts: {data.contracts}
		</h1>
	</div>
</div>
