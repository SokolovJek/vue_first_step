<script setup>
import ToDosProject from "@components/ToDosProject.vue"
import MainHeader from "@components/headers/MainHeader.vue"
</script>

<template>

	<div class="app w3-blue-gray">
		<MainHeader />
	</div>
	<div class="app w3-blue-gray">
		<ToDosProject />
	</div>

</template>

<style scoped>
.app {
	display: flex;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	padding: 5rem;
}
</style>
