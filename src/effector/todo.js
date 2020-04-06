import { createStore, createEvent, combine, restore } from 'effector'
import { VISIBILITY_FILTERS } from '../constants'

const storagetodos = localStorage.getItem('todos')

let initialState = storagetodos ? JSON.parse(storagetodos).todos : []

export const allTodos = createStore(initialState)
export const addTodo = createEvent()
export const toggled = createEvent()
export const deleteTodo = createEvent()
export const applyFilter = createEvent()
export const editTodo = createEvent()

const add = (allTodos, text) => ([...allTodos, { text: text, completed: false, id: new Date().getTime() }])
const completed = (allTodos, id) => (
    allTodos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed }
        } else {
            return todo
        }
    })
)

const remove = (allTodos, id) => (
    allTodos.filter(todo => todo.id !== id)
)

const edit = (allTodos, payload) => {
    return (
        allTodos.map(todo => {
            if (todo.id === payload.id) {
                return { ...todo, text: payload.text, description: payload.description, completed: payload.completed };
            } else {
                return todo
            }
        })
    )
}

allTodos
    .on(addTodo, add)
    .on(toggled, completed)
    .on(deleteTodo, remove)
    .on(editTodo, edit)

allTodos.watch((state) => {
    localStorage.setItem('todos', JSON.stringify({ todos: state }))
})



export const filter = restore(applyFilter, VISIBILITY_FILTERS.SHOW_ALL)

export const todos = combine(allTodos, filter, (allTodos, filter) => {
    switch (filter) {
        case VISIBILITY_FILTERS.SHOW_ACTIVE:
            return allTodos.filter(({ completed }) => !completed)
        case VISIBILITY_FILTERS.SHOW_COMPLETED:
            return allTodos.filter(({ completed }) => completed)
        case VISIBILITY_FILTERS.SHOW_ALL:
        default:
            return allTodos
    }
})

