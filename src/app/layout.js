"use client";
import * as React from "react";
import "../styles/global.css";

export default function RootLayout(children) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
