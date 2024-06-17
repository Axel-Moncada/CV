import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import foto from "../src/assets/axel.png"
import Mobile from "./Mobile";
import { motion } from "framer-motion";


export default function Hablemos() {


    const [isMobileVisible, setMobileVisible] = useState(false)
    const mobileRef = useRef(null);


    const handleOpenMobile = () => {
        setMobileVisible(true);

    }

    useEffect(() => {
        if (isMobileVisible) {
            document.addEventListener("click", handleClickAfuera)
        } else {
            document.removeEventListener("click", handleClickAfuera)
        }
        return () => {
            document.removeEventListener("click", handleClickAfuera)
        }
    })

    const handleClickAfuera = (event) => {
        if (mobileRef.current || setMobileVisible(true) && !mobileRef.current.contains(event.target)) {
            setMobileVisible(false)
        }
    }


    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center gap-3 pb-16 ">
                <p className="text-center text-lg">¿Tienes algun proyecto?</p>

                <Button

                    onPress={handleOpenMobile}
                    className="capitalize btnescribe border-white p-10 font-bold text-5xl  h-16 w-64 ">
                    {"Escribeme"}
                </Button>

            </div>

            {isMobileVisible && (
                <div className="mobileClick">
                    <motion.div

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">

                    </motion.div>
                    <div ref={mobileRef} className="fixed  inset-20 flex justify-center items-center z-50">
                        <Mobile />
                    </div>
                </div>

            )}





        </>
    );
}
