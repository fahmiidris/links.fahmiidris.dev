import * as React from 'react';

export const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="mt-12">
      <div className="border-t border-gray-800">
        <div className="container flex items-center justify-center py-4">
          <p className="flex items-center justify-center space-x-4 text-xs font-medium text-white">
            © {year} - Fahmi Idris. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
