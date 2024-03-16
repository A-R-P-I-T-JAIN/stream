"use client";

import Image from "next/image";
import meet from "../../public/meet.png";
import meet2 from "../../public/meet2.png";
import arrow from "../../public/arrow.png";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card from "@/components/Card";
export default function Home() {
  const router = useRouter();
  const [joinId, setJoinId] = useState("");

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  useGSAP(() => {
    gsap.to(".head", {
      ease: "power1.inOut",
      y: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
        duration: 1,
      }
    );

    gsap.to(".op", {
      opacity: 1,
      delay: 2,
    });
    gsap.fromTo(
      "#img",
      {
        y: 10,
      },
      {
        y: -10,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        duration: 1,
      }
    );
  }, []);


  return (
    <div className="relative">
      <h1 className="absolute top-3 left-3 text-3xl">Stream</h1>
      
      <div className="relative w-screen min-h-screen flex flex-col md:flex-row items-center justify-around py-28 md:py-0 gap-10 md:gap-0">
      <Image src={arrow} width={80} height={80} id="img"  className='absolute bottom-10 left-1/2 -translate-x-1/2' />
        <div className="md:max-w-[50%] max-w-[90%] flex flex-col gap-2 md:gap-6">
          <h1 className="head opacity-0 translate-y-24 text-4xl md:text-7xl font-bold">
            Stream
          </h1>
          <p className=" opacity-0 para text-2xl md:text-4xl">
            One platform, endless conversations...
          </p>
          <div className="op opacity-0 flex flex-col md:flex-row md:items-center gap-2">
            <button
              className="rounded-md bg-blue-300 py-2 px-3 text-black font-semibold"
              onClick={() => router.push(`/${randomID(5)}`)}
            >
              New Meeting
            </button>
            <p>or</p>
            <div className='flex gap-2 items-center' >
            <input
              className="py-2 rounded-md px-2 text-black"
              type="text"
              placeholder="Enter a code to join"
              value={joinId}
              onChange={(e) => setJoinId(e.target.value)}
            />
            <p
              className="text-xl cursor-pointer"
              style={{
                color: joinId ? "skyblue" : "grey",
              }}
              onClick={() => router.push(`/${joinId}`)}
            >
              Join
            </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            id="img"
            src={meet}
            width={700}
            height={700}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="w-screen bg-slate-800 flex items-center justify-center py-28">
        <div className="border-2 border-gray-200 flex flex-col md:flex-row items-center justify-around py-14 px-4 rounded-3xl max-w-[80%] gap-10 md:gap-0">
          <div className="md:max-w-[50%] flex flex-col gap-4">
            <h1 className="md:text-6xl text-3xl">Drive more engaging meetings.</h1>
            <p className='text-sm md:text-xl'>
              Ensure your meetings are designed to give everyone the ability to
              engage no matter their location, language, or communication style.
            </p>
          </div>
          <div>
            <Image
              src={meet2}
              width={250}
              height={250}
              style={{
                borderRadius: "100%",
              }}
              alt="meet"
            />
          </div>
        </div>
      </div>

      <div className='py-20 px-10 flex flex-col gap-16' >
        <h1 className='md:text-8xl text-5xl font-bold' >Do Business <br /> Better.</h1>
        <div className='flex md:flex-row flex-col items-center gap-12' >
          <Card h1="Inclusive meetings for all." p="Real-time translation. Closed captions. Noise removal, voice optimization, and people-focused views. Give everyone a seat at the table, no matter how or where they work." />
          <Card h1="Engagement is everything." p="From custom stage views and immersive share for presentations to interactive polling and Q&A features, meetings can be more enjoyable and productive." />
          <Card h1="Flexibility comes first." p="Schedule and join meetings across any device with a single tap. Go from desktop to phone to car with our Move to Mobile QR code feature and Apple CarPlay integration. And use our library of embedded apps to simplify workflows." />
        </div>
      </div>

      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Stream
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
