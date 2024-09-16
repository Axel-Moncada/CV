import mobile from './assets/mobile2.png'
import { motion } from 'framer-motion'

function Mobile() {
    return (
        <motion.div


            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            className="flex flex-col items-center max-w-screen-xl mx-auto  justify-center fixed bottom-0">
            <div className=" justify-center mobileClick">
                <img className='w-80' src={mobile} alt="" />
            </div>

        </motion.div>
    )
}

export default Mobile