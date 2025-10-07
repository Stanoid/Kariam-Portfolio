'use client'
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

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRD({
          el: vantaRef.current,
          color:"#FF9933",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          points: 20.00,
          maxDistance: 20.00,
          spacing: 25.00
        })
      );
    }
    return () => {
      // if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div >


      <main style={{width:"100vw",
      height:"100vh",position:"absolute",top:0,zIndex:100,overflow:"hidden",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      }} ref={vantaRef}>
        <div style={{
          backgroundColor:"rgba(0,0,0,0.7)",
          width:"100%",
          color:"white",
          height:"100%",
         display:"flex",
         flexDirection:"column",

         justifyContent:"space-around",
         alignItems:"center",

        }}>
  <div>
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

  <div style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
  <h1  style={{
    textAlign:"center",
    fontSize:30,
    color:"white",
    padding:25
  }}
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify("Supercharge your business with custom software solutions.")}


  />

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



<div style={{marginBottom:10,fontSize:20, color:"#FF9933",}}>
<FaAngleDoubleDown/>
</div>
Scroll down
  </div>

        </div>

      </main>
      <div style={{
        backgroundColor:"#1B112E",
        width:"100%",
        height:"83vh",
        borderRadius:5
      }}>

      </div>
    </div>
  );
}
