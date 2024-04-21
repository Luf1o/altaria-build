'use client'
import '../app/globals.css'
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center  bg-fill-alpha2">
      <div className="w-full flex flex-col justify-center items-center h-full p-2 ">
        <h1 className="text-4xl font-bold text-center text-white">Login into Site</h1>
        <AuthForm />
      </div>
    </div>
  );
}
