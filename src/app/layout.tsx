import React from 'react';
import Header from './components/Header';
import './styles/globals.css' 

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Analyse und Übersicht der Besucherzahlen',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="min-h-screen p-4 ">{children}</main>
      </body>
    </html>
  );
}
