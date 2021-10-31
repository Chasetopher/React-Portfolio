import React, { useState, useEffect } from 'react'

const Footer = () => {

  const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
      getYear();
    }, [])

    return (
        <footer className="bg-dark fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
    <div className="col-md-4 d-flex align-items-center bg-dark">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="text-white">© {date} - Chase Brackeen</span>
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
