import styles from "../styles/Layout.module.scss";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand brand" href="#">
            Memory
          </a>
          <div
            className="collapse navbar-collapse"
            style={{ paddingLeft: 105 }}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Moments
                </a>
              </li>
              <li className="nav-item">
                <Link href="/gallery">
                  <a className="nav-link">Gallery</a>
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-outlined rounded">Let's talk</button>
        </div>
      </nav>
      {children}
    </>
  );
}
