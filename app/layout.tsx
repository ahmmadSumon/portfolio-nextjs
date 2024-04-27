"use client"

import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../app/component/Nav'
import Footer from '../app/component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main >{children}</main>
        <Footer/>
        
      </body>
    </html>
  );
}




