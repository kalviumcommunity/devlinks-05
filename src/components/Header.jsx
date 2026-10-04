export default function Header() {
  return (
    <header>
      {/* BUG (issue #6): logo image is missing alt text */}
      <img className="logo" src="/check.png" alt="Task Tally Logo" />
      {/* BUG (issue #2): "Tsk Tally" should be "Task Tally" */}
      <h1>Tsk Tally</h1>
    </header>
  )
}
