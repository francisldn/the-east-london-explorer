import Header from '@/components/Header';
import HomeBox from '@/components/HomeBox';
import { contacts, londoneat, nearby, transport, traveltips, usermanual } from '@/images';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto my-5 mb-[10%] lg:gap-12 w-screen md:max-w-screen">
          <Link href="/nearby">
            <HomeBox title="What's Nearby" imageUrl={ nearby} />
          </Link>

          <Link href="/checkin">
            <HomeBox title="Check-In Guide" imageUrl={ contacts} />
          </Link>

          <Link href="/eatdrinks">
            <HomeBox title="Food & Drinks" imageUrl={londoneat} />
          </Link>
            
          <Link href="/transport">
            <HomeBox title="Getting Around" imageUrl={ transport} />
          </Link>
           
           <Link href="/usermanual">
            <HomeBox title="User Manual" imageUrl={ usermanual} />
           </Link>
            
            <Link href="/placesinterest">
              <HomeBox title="Places of Interest" imageUrl={ traveltips} />
            </Link>
        </div>
      </main>
  )
}
