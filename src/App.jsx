import { useState } from 'react'
import Header from './components/Header.jsx'
import AddTask from './components/AddTask.jsx'
import TaskList from './components/TaskList.jsx'
import Counter from './components/Counter.jsx'
import Footer from './components/Footer.jsx'

let nextId = 3

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Read the CONTRIBUTING guide', done: true },
    { id: 2, text: 'Pick a good first issue', done: false },
  ])
  const [draft, setDraft] = useState('')
  // BUG (issue #7): leftover debug console.log
  console.log('debug: tasks length', tasks.length)

  function addTask() {
    // BUG (issue #3): no validation — empty/whitespace-only tasks can be added.
    setTasks([...tasks, { id: nextId++, text: draft, done: false }])
    // BUG (issue #1): the input is never cleared after adding a task.
  }

  function toggle(id) {
    // BUG (issue #5): state is mutated in place instead of creating a new array/objects,
    // so React may not re-render and immutability is broken.
    const t = tasks.find((x) => x.id === id)
    t.done = !t.done
    setTasks(tasks)
  }

  function remove(id) {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <main className="card">
      <Header />
      <AddTask draft={draft} onDraft={setDraft} onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggle} onRemove={remove} />
      <Counter tasks={tasks} />
      <Footer />
    </main>
  )
}
