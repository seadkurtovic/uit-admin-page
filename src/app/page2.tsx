// src/app/page.tsx
'use client';  // Ensure this is a client-side component

import React, { useEffect } from 'react';

export default function Page() {
  // Call the API to insert a document every time the page loads
  useEffect(() => {
    async function addDocument() {
      const response = await fetch('/api/addDoc', {
        method: 'POST',
      });

      if (response.ok) {
        console.log('Document successfully added');
      } else {
        console.error('Failed to add document');
      }
    }

    addDocument();
  }, []);

  return (
    <div>
      <h1>Welcome to the Admin Page</h1>
      {/* Your page content here */}
    </div>
  );
}
