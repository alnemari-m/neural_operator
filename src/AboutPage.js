import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div>
      <h1>Welcome to the About Page!</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}
