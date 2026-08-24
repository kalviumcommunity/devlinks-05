export default function TaskList({ tasks, onToggle, onRemove }) {
  return (
    <ul className="tasks">
      {tasks.map((t, i) => (
        // BUG (issue #4): using the array index as the key is unstable — after deleting
        // a task the wrong rows can update. Use the stable t.id instead.
        <li key={i} className={t.done ? 'done' : ''}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
            {t.text}
          </label>
          <button className="link" onClick={() => onRemove(t.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}
