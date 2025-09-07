import React from 'react'

const NewsLetter = () => {
    return (
        <div className="bg-[#F0F3FF]">
            <div class="w-full bg-gradient-to-r from-[#725CAD] via-[#8CCDEB] to-[#7965C1] px-2 text-center text-white py-15 max-md:px-4 flex flex-col items-center justify-center">
                <p class="text-[#0A1D56] font-medium">Never miss an update!</p>
                <h1 class="max-w-lg font-semibold text-4xl/[44px] mt-2">Subscribe to our newsletter & get the latest news</h1>
                <div class="flex items-center justify-center mt-10 border border-white focus-within:outline focus-within:outline-[#C65BCF] text-sm rounded-full h-14 max-w-md w-full">
                    <input type="text" class="bg-transparent outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address" required />
                    <button class="bg-primary hover:bg-[#C65BCF] text-white rounded-full h-11 mr-1 px-8 flex items-center justify-center">
                        Subscribe now
                    </button>
                </div>
            </div>
        </div>

    )
}

export default NewsLetter
