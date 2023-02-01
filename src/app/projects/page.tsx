import Image from 'next/image';
export default async function page() {
    const projects = await fetchProjects();
    console.log(projects);
    
    return (
        <div
            className="w-full min-h-[calc(100vh-6rem)] flex flex-col">
            <Section
                title={"Developpement"}
            >
                <Card
                    title={"Project 1"}
                    image={"https://picsum.photos/200/300"}
                />
            </Section>
        </div>
    )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold mb-1 sticky">{title}</h1>
            <div className="w-full h-px bg-black mb-3"></div>
            <div className="w-full overflow-scroll">
                <div className="h-fit w-fit flex flex-row gap-3">
                    {children}
                </div>
            </div>
        </div>
    )
}

function Card({ title, image }: { title: string, image: string }) {
    return (
        <div className="w-56 h-80 bg-red-200 hover:bg-red-500 transition-all duration-300 relative">
            <Image
                src={image}
                alt={title + " image"}
                fill
                className='object-cover grayscale brightness-50'
            />
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-50 absolute top-0 left-0 flex items-end py-3 justify-center">
                <h1 className="text-white font-bold">{title}</h1>
            </div>
        </div>
    )
}

const fetchProjects = () => {
    return fetch("http://api.vean.fr/projects",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
            }
        }
    )
        .then((res) => res.json())
        .then((data) => data);
}