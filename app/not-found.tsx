import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><span className="section-label">404 / LOST IN THE CITY</span><h1>WRONG TURN.</h1><p>This page could not be found.</p><Link className="button button-primary" href="/">BACK TO HOME <span>↗</span></Link></main>;
}
