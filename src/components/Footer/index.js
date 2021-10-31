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
    <img src="/assets/img/bootstrap.svg" alt="Bootstrap" width="32" height="32" />
    </ul>
    </div>
  </footer>

    )
}

export default Footer;
