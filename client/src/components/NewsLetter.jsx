import { motion } from "motion/react"

const NewsLetter = () => {
  return (
    <div className="bg-[#F0F3FF]">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, amount: 0.3 }} className="w-full bg-gradient-to-r from-[#725CAD] via-[#8CCDEB] to-[#7965C1] px-4 py-16 text-center text-white flex flex-col items-center justify-center rounded-lg">

        {/* Title */}
        <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.2, duration: 0.5}} className="text-[#0A1D56] font-medium text-sm sm:text-base">
          Never miss an update!
        </motion.p>
        <motion.h1 initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.3, duration: 0.5}} className="max-w-2xl font-semibold text-2xl sm:text-4xl mt-2 leading-snug">
          Subscribe to our newsletter & get the latest news
        </motion.h1>

        {/* Email input + button */}
        <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.4, duration: 0.5}} className="mt-10 max-w-md w-full flex flex-col sm:flex-row items-center gap-3">
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
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NewsLetter
