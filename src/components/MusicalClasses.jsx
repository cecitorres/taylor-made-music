import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function MusicalClasses() {
    return (
        /* Musical instruments */
        <section id="lessons" className="flex flex-col items-center justify-center w-full py-20 text-black bg-white lg:py-30">
            <Typography variant="h2" className="mb-8 font-serif font-normal">Available Lessons</Typography>
            <div className="grid w-10/12 grid-cols-1 gap-6 lg:grid-cols-4 lg:w-8/12 lg:gap-10">
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/piano.svg'} alt="Piano" width="75" height="75" className="mx-auto " />
                    <Typography variant="h4" className="font-serif font-medium">Piano</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/guitar.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Guitar</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/theory.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Music Theory</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/ear-training.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Ear training</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/composition.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Composition</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/history.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">History</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/college-prep.svg'} alt="Royal Conservatory and College Preparation" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif text-lg font-medium break-words line-clamp-2">Royal Conservatory and College Preparation</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/arranging.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Arranging</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
            </div>
        </section>
    );
}
