import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h1>Page not found!</h1>

      <p>Go to the <NavLink to="/dashboard">Homepage</NavLink>.</p>
    </div>
  )
}
