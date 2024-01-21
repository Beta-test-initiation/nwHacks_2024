"use client" 
import dynamic from 'next/dynamic';
import 'regenerator-runtime/runtime';


const DictaphoneWithNoSSR = dynamic(
  () => import('@/components/Dictaphone'),
  { ssr: false }
);

const Page = () => {
  return (
    <div>
      <h1>Speech Recognition Test</h1>
      <DictaphoneWithNoSSR />
    </div>
  );
};

export default Page;
