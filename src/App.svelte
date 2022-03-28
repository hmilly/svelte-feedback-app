<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
  main {
    text-align: center;
    height: 100vh;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
