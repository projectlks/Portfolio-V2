"use client"

import { useEffect, Suspense } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
// import { useLocation } from "react-router-dom"

import { useCursor } from "./hooks/useCursor"
import React from "react"
import SkeletonLoader from "./components/SkeletonLoader"

// Lazy load all main components
const Header = React.lazy(() => import("./components/Header"))
const CarouselPlugin = React.lazy(() => import("./components/CarouselPlugin"))
const Benefits = React.lazy(() => import("./components/Benefits"))
const Experience = React.lazy(() => import("./components/Experience"))
const Skills = React.lazy(() => import("./components/Skills"))
const Approach = React.lazy(() => import("./components/Approach"))
const Pricing = React.lazy(() => import("./components/Pricing"))
const AboutMe = React.lazy(() => import("./components/AboutMe"))
const Footer = React.lazy(() => import("./components/Footer"))

export default function App() {
  // const location = useLocation()

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    })
  }, [])

  useCursor()

  // ✅ Conditionally open WebSocket only on specific path
  useEffect(() => {
    // Only enable WebSocket on specific route to avoid disabling bfcache
    if (location.pathname === "/live") {
      const socket = new WebSocket("wss://your-server.com/socket")

      const handlePageHide = () => {
        socket.close()
      }

      window.addEventListener("pagehide", handlePageHide)

      return () => {
        socket.close()
        window.removeEventListener("pagehide", handlePageHide)
      }
    }
  }, [])

  return (
    <section className="flex flex-col space-y-[78px] overflow-hidden bg-[#f0f0f0]">
      {/* Global cursor */}
      <div
        id="cursor"
        className="w-2 h-2 rounded-full bg-gray-950 fixed top-0 left-0 pointer-events-none z-50 opacity-100"
      ></div>


      {/* Suspense wraps all lazy-loaded components */}
      <Suspense fallback={<SkeletonLoader />}>
        <Header />
        <CarouselPlugin />
        <Benefits />
        <Experience />
        <Skills />
        <Approach />
        <Pricing />
        <AboutMe />
        <Footer />
      </Suspense>
    </section>
  )
}
