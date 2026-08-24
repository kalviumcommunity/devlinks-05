export default function Counter({ tasks }) {
  // BUG (issue #9): "remaining" counts ALL tasks instead of only the ones not done
  // (it should exclude completed tasks).
  const remaining = tasks.length

  return <p className="counter">{remaining} tasks remaining</p>
}
