<script>
  // import { onMount, onDestory } from "svelte";
  import { FeedbackStore } from "../stores";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { scale, fade } from "svelte/transition";

  //let feedback = [];

  //  const unsubscribe = FeedbackStore.subscribe(data => feedback = data)
  // onMount(() => {
  //   console.log("mounted")
  // })

  // onDestroy(() => {
  //   unsubscribe()
  // })
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade>
    <!-- ="{{duration: 300}}"> -->
    <FeedbackItem item={fb} />
  </div>
{/each}
