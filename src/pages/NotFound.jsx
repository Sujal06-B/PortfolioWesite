import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__bg" aria-hidden />
      <div className="not-found__inner">
        <Logo />
        <p className="not-found__code">404</p>
        <h1>This route is offline</h1>
        <p className="not-found__copy">
          The page you asked for is not in this deploy. Head home and keep
          exploring the portfolio.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">
            Back to home
          </Link>
          <a href="mailto:bolkesujal@gmail.com" className="btn btn-ghost">
            Contact me
          </a>
        </div>
        <p className="not-found__term">
          <span className="prompt">$</span> cd /home &amp;&amp; ls
        </p>
      </div>
    </main>
  )
}
