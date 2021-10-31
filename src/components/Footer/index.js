import React, { useState, useEffect } from 'react'

const Footer = () => {

  const [date, setDate] = useState();
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
      getYear();
    }, [])

    return (

    )
}

export default Footer;
