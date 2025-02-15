<script>
  import { onMount } from 'svelte'
  import dayjs from 'dayjs'

  export let format = 'YYYY-MM-DD'
	export let date = dayjs()
	
  let internal

  const input = (x) => (internal = dayjs(x).format(format))
  const output = (x) => (date = dayjs(x, format))

  $: input(date)
  $: output(internal)
</script>

<input type="date"  bind:value={internal} />

<style>
  .datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: aqua;
}
</style>