<script>
    export let label = "Click Me";
    export let target = "#";
</script>

<div class="primary-button">
    <a href={target}>{label}</a>
</div>

<style>
    .primary-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4a311a;
        color: #c6dff8;
        text-decoration: none;
        border-radius: 14px;
        transition: background-color 0.3s ease;
    }

    .primary-button:hover {
        background-color: #333;
    }

    .primary-button a {
        color: inherit;
        text-decoration: none;
    }
</style>