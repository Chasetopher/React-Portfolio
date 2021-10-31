import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="text-muted">© 2021 Company, Inc</span>
    <ul>
        <li><img src="../../assets/images/linkedin.svg" alt="Linkedin" width="32" height="32" /></li>
        <li><img src="../../assets/images/github.svg" alt="Github" width="32" height="32" /></li>
        <li><img src="../../assets/images/at.svg" alt="Email" width="32" height="32" /></li>
        <li><img src="../../assets/images/file-earmark-arrow-down.svg" alt="Resume" width="32" height="32" /></li>
    </ul>
    </div>
  </footer>

    )
}

export default Footer;
