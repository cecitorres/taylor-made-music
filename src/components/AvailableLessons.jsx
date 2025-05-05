import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function AvailableLessons() {
    return (
        /* Musical instruments */
        <section id="lessons" className="flex flex-col items-center justify-center w-full py-20 text-black bg-white lg:py-30">
            <Typography variant="h2" className="mb-8 font-serif font-normal">Available Lessons</Typography>
            <div className="grid w-10/12 grid-cols-1 gap-6 lg:grid-cols-4 lg:w-8/12 lg:gap-10">
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/piano.svg'} alt="Piano" width="75" height="75" className="mx-auto " />
                    <Typography variant="h4" className="font-serif font-medium">Piano</Typography>
                    <Typography variant="small">A beautiful instrument perfect for beginners and advanced players alike.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/guitar.svg'} alt="Guitar" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Guitar</Typography>
                    <Typography variant="small">Strum chords or pick melodies, learn this versatile and portable instrument.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/theory.svg'} alt="Music Theory" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Music Theory</Typography>
                    <Typography variant="small">Unlock the secrets behind scales, chords, and how music works.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/ear-training.svg'} alt="Ear training" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Ear training</Typography>
                    <Typography variant="small">Train your ear to recognize notes, rhythms, and songs by listening.</Typography>
                </div>

                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/composition.svg'} alt="Composition" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Composition</Typography>
                    <Typography variant="small">Turn your musical ideas into full songs and create your own original music!</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/history.svg'} alt="History" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">History</Typography>
                    <Typography variant="small">Journey through time and discover the stories behind great music.</Typography>
                </div>
                <div className="min-h-full px-4 text-center music-class-item">
                    <Image src={'/icons/college-prep.svg'} alt="Royal Conservatory and College Preparation" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif text-lg font-medium break-words line-clamp-2">Royal Conservatory and College Preparation</Typography>
                    <Typography variant="small">Get expert guidance for exams and music school auditions.</Typography>
                </div>
                <div className="px-4 text-center music-class-item">
                    <Image src={'/icons/arranging.svg'} alt="Piano" width="75" height="75" className="mx-auto fill-teal-300" />
                    <Typography variant="h4" className="font-serif font-medium">Arranging</Typography>
                    <Typography variant="small">Learn how to adapt songs for different instruments and styles.</Typography>
                </div>
            </div>
        </section>
    );
}
