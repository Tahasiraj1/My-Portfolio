import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-neutral-950'>
      <div className="container mx-auto px-4 py-4">
        <div className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-center mb-12 text-gray-400 opacity-20">
            TAHA SIRAJ
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700/40 text-center text-sm">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer