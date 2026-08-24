export default function AddTask({ draft, onDraft, onAdd }) {
  return (
    <div className="add">
      <input
        className="input"
        placeholder="Add a task…"
        value={draft}
        onChange={(e) => onDraft(e.target.value)}
      />
      <button className="btn btn-primary" onClick={onAdd}>Add</button>
    </div>
  )
}
