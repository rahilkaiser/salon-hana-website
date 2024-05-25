import {Hero} from "@/components/sections/hero/Hero";
import {NextUIProvider} from "@nextui-org/react";
import {StickyNavbar} from "@/components/core/navbar/StickyNavbar";
import {Link} from "@nextui-org/link";

export default function Home() {
    return (
        <NextUIProvider>

            <main className="relative w-full h-full">

                <StickyNavbar/>
                <Hero/>
                {/*<Hero/>*/}
                {/*<Hero/>*/}
                {/*<Hero/>*/}

            </main>
        </NextUIProvider>
    );
}
