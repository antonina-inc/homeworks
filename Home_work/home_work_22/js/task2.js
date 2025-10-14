"use strict";
if (confirm('Почати тестування?')) {
	class StorageTasks {
		constructor(storageKey) {
			this.storageKey = storageKey
		}
		loadTask() {
			if (localStorage.getItem(this.storageKey))
				return JSON.parse(localStorage.getItem(this.storageKey))
			else return []
		}
		saveTask(list) {
			localStorage.setItem(this.storageKey, JSON.stringify(list))
		}
		addTask(item) {
			const list = this.loadTask()
			list.push(item)
			this.saveTask(list)
		}
		deleteTask(item) {
			let list = this.loadTask()
			list = list.filter((task) => task != item)
			this.saveTask(list)
		}
		handler() {
			let newTask = this.inputEl.value.trim()
			this.addTask(newTask)
			this.inputEl.value = ''
		}
		//=================================
		createLabel() {
			const labelEl = document.createElement('label')
			labelEl.innerText = 'Введіть нове завдання'
			return labelEl
		}
		createInput() {
			const inputEl = document.createElement('input')
			inputEl.type = 'text'
			return inputEl
		}
		createButton() {
			const buttonEl = document.createElement('button')
			buttonEl.innerText = 'Збережіть завдання'
			return buttonEl
		}
		render(container) {
			const elContainer = document.createElement('div')
			const labelEl = this.createLabel()
			this.inputEl = this.createInput()
			labelEl.append(this.inputEl)
			elContainer.append(labelEl)
			const buttonEl = this.createButton()
			buttonEl.onclick = this.handler.bind(this)
			elContainer.append(buttonEl)
			if (container) {
				document.querySelector(container).append(elContainer)
			}
			return elContainer
		}

	}
	const a = new StorageTasks('tasks')
	a.render('body')

	function reminder() {
		const tasksElement = a.loadTask()
		if (tasksElement.length === 0) return
		let randIndex = Math.floor(Math.random() * tasksElement.length)
		const currentTask = tasksElement[randIndex]
		if (confirm(currentTask)) {
			a.deleteTask(currentTask)
		}
	}
	setTimeout(() => {
		setInterval(reminder, 5000);
	}, 20000);

}