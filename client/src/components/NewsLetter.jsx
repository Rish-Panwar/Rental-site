import React from 'react'

const NewsLetter = () => {
  return (
    <div className="bg-[#F0F3FF]">
      <div className="w-full bg-gradient-to-r from-[#725CAD] via-[#8CCDEB] to-[#7965C1] 
                      px-4 py-16 text-center text-white flex flex-col items-center justify-center rounded-lg">
        
        {/* Title */}
        <p className="text-[#0A1D56] font-medium text-sm sm:text-base">
          Never miss an update!
        </p>
        <h1 className="max-w-2xl font-semibold text-2xl sm:text-4xl mt-2 leading-snug">
          Subscribe to our newsletter & get the latest news
        </h1>

        {/* Email input + button */}
        <div className="mt-10 max-w-md w-full flex flex-col sm:flex-row items-center gap-3">
          {/* Email Input */}
          <input 
            type="email" 
            className="bg-white/20 backdrop-blur-lg border border-white/40 
                       text-white placeholder-white/70 outline-none 
                       px-5 py-4 rounded-full w-full text-sm sm:text-base" 
            placeholder="Enter your email address" 
            required 
          />

          {/* Subscribe Button */}
          <button 
            className="bg-primary hover:bg-[#C65BCF] text-white 
                       rounded-full px-3 py-3 w-40 sm:w-50 
                       transition-all duration-300">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
