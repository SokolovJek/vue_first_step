<script setup>

import { ref, inject } from "vue"
import ToDoList from "./ToDoList.vue"
import ToDoFilter from "./ToDoFilter.vue"
import ToDoSummary from "./ToDoSummary.vue"
import ToDoItemForm from "./ToDoItemForm.vue"
import todoService from "../services/todo"

const $modals = inject("$modals")
const _filter = ref("");
const _item = ref(todoService.getDefault());
const _items = ref([]);



function showModal(new_item=true, item={}){
	if (new_item){
		//подготовка нового пункта
		_item.value = todoService.getDefault();
	} else{
		// сделать копию пункта для редактирования
		_item.value = todoService.makeCopy(item);
	}

	// open the modal
	$modals.show("newEditItem").then(() => {
		if (new_item){
			// add to the list
			_items.value.push(_item.value)
		} else {
			// replace item
			let index = getIndex(item);
			if (index >= 0) {
				_items.value[index] = _item.value;
			} else {
				alert("Error updating the item")
			}
		}
	},() => {
		// Handle cancellation, in this case, just ignore
	})
}

function deleteItem(item){
	$modals.show('deleteItem').then(() => {
		let index = getIndex(item);
		if (index >= 0) {
			_items.value.splice(index, 1)
		}
	},() => {})
}

function getIndex(item){
	let index = _items.value.findIndex(it => {
		return it.id == item.id;
	})
	if (index == -1) {
		return false
	} else {
		return index
	}
}

function toggleStatus(item) {
	item.status=todoService.toggleStatus(item.status)
}


</script>

<template>
	<!-- : или . - (при использовании модификатора .prop) -->
	<!-- v-model - Создает двустороннее связывание с элементом ввода формы или с компонентом. -->
	<!-- v-on or @ -  Прикрепление к элементу обработчика событий. -->

	<div class="project-container">

		<!-- Summary -->
		<ToDoSummary  :items="_items" class="w3-marin-bottom"></ToDoSummary>

		<!-- Filter bar -->
		<div class="w3-margin-bottom">
			<ToDoFilter v-model="_filter" class="flex-grow"></ToDoFilter>
		</div>

		<!-- Todo list -->
		<ToDoList
			v-model="_items"
			:filter="_filter"
			@toggle="toggleStatus"
			@edit="showModal"
			@delete="deleteItem">
			<button @click="showModal(true)" class="w3-button w3-blue w3-round-xxlarge">
				<i class="fa-solid fa-square-plus"></i>
				New item
			</button>
		</ToDoList>

		<!-- Modals -->
		<Modal name="newEditItem" title="To do item">
			<ToDoItemForm v-model="_item"></ToDoItemForm>
		</Modal>

		<Modal name="deleteItem" title="Delete To-Do item">
			<p>
				This action will delete the item:<br>
				<strong>{{ _item.text }}</strong>
			</p>
			<p class="w3-text-red w3-pale-red">
				This action cannot be undone
				<strong>{{ _item.text }}</strong>
			</p>
		</Modal>
	</div>

</template>

<style scoped>
.project-container {
    max-width: 56rem;
    padding: 1rem;
    margin: 0 auto;
}
</style>