<script lang="ts">
	import CalendarTable from "./CalendarTable.svelte";
	export let data: any;
</script>

<svelte:head>
<title>Tiny Mustards</title>
<meta name="description" content="Tiny Mustards" />
</svelte:head>

<section>
	<CalendarTable calendar_events={data.calendar_events}/>
</section>
