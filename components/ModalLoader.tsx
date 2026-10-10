"use client"
import dynamic from "next/dynamic";

const ModalComponents=dynamic(
()=>import("@/components/modal").then(m=>m.ModalComponents),
{ssr:false}

);
export default ModalComponents;