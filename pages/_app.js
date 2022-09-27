import "../styles/globals.css";
import React from 'react'
import { Link } from "../routes";

export default function App({ Component, pageProps }) {
    return (
    <Component {...pageProps} />
    )
  }