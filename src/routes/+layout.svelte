<style>

    :root {
        --cirrus-bg: yellow !important;
				--btn-fg: black !important;
    }

    .page-container {
        padding: 1rem;
    }

    .page-container input {
        text-align: center;
    }

    .page-sub-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>


<main class="page-container">
	<section class="page-sub-container">
		<slot></slot>
	</section>
</main>