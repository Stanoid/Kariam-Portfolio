import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import { markdownify } from "@/lib/utils/textConverter";

import Image from "next/image";
import { FaAngleDoubleDown } from "react-icons/fa";
import Link from "next/link";
import BIRD from "vanta/dist/vanta.net.min";
import lg from "../../../public/images/logo-darkmode.svg"
import Logo from "./Logo";
import * as THREE from "three";
import SplineViewerComponent from './vantat';
export default function Home() {
  return (
    <main  style={{width:"100%",
      minHeight:"100vh",
      height:"100vh",position:"absolute",top:0,zIndex:100,overflow:"hidden",
      display:"flex",
      overflowX:"hidden",
      overflowY:"hidden",
      justifyContent:"center",
      alignItems:"center",
      }}>


<div style={{
  pointerEvents:"none",
  position:"absolute",
  top:0,left:0,
          backgroundColor:"rgba(0,0,0,0)",
          width:"100%",
          color:"white",
          height:"100%",
         display:"flex",
         flexDirection:"column",
padding:16,
         justifyContent:"space-between",
         alignItems:"start",

        }}>
  <div className='flex w-full items-start '>
  <Image
        width={0}
        height={0}
        sizes="100vw"
          src={lg}
          alt={"aa"}
          priority
          style={{
            height: "auto",
            width:200,
          }}
        />
  </div>

  <div style={{display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"center"}}>
  <h1  style={{
    
    fontSize:40,
    color:"white",
    
  }}
                  className="mb-4"
            


  >
    Supercharge your business with <br/> custom software solutions.
  </h1>

<Link
                    className="btn btn-primary mt-5"
                    href={"#"}
                  >
                    {"Lets Discuss your project"}
                  </Link>

  </div>

  <div style={{
    display:"flex",
    color:"white",
    fontSize:15,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    textAlign:"center",

  }}>



<div  style={{marginBottom:10,fontSize:20, color:"#FF9933",}}>
<FaAngleDoubleDown/>
</div>
Scroll down

  </div>

        </div>
        <SplineViewerComponent
        url="https://prod.spline.design/d-FOn1wGHD0GsEFe/scene.splinecode" 
        />
   
    </main>
  );
}