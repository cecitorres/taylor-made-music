import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function MusicalClasses() {
    return (
        /* Musical instruments */
        <section className="flex flex-col items-center justify-center w-full py-20 text-black bg-white">
            <Typography variant="h2" className="mb-8">Musical Classes</Typography>
            <div className="grid w-10/12 grid-cols-2 gap-6 lg:grid-cols-4">
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/piano.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Piano</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/guitar.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Guitar</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/theory.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Music Theory</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/ear-training.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Ear training</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/composition.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Composition</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/history.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">History</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/college-prep.svg'} alt="Royal Conservatory and College Preparation" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="text-lg break-words line-clamp-2">Royal Conservatory and College Preparation</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/arranging.svg'} alt="Piano" width="100" height="100" className="mx-auto fill-teal-300" />
                    <Typography variant="h4">Arranging</Typography>
                    <Typography variant="small">It is a musical instrument played using a keyboard.</Typography>
                </div>
            </div>
        </section>
    );
}
