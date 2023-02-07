import Image from 'next/image';
import Link from 'next/link';
export default async function page() {
    const projects = await fetchProjects();

    const devProjects = projects.filter((project: any) => project.type === "dev");
    const designProjects = projects.filter((project: any) => project.type === "design");
    const otherProjects = projects.filter((project: any) => project.type === "other");

    return (
        <>
            <div
                className="w-full min-h-[calc(100vh-6rem)] flex md:justify-between gap-y-4 pb-6 pt-3 flex-wrap">

                <Column>
                    <div className='flex flex-col gap-1 border-x border-dark px-3'>
                        <h1>Developpement</h1>
                        <p className='font-light text-sm opacity-50'>Things I built with my keyboard</p>
                    </div>
                    {devProjects.map((project: any) => (
                        <Card
                        key={project.id}
                        title={project.name}
                        image={project.image}
                        id={project.id}
                        type={"Developpement"}
                    ></Card>
                    ))}
                </Column>
                <Column>
                    <div className='flex flex-col gap-1 border-x border-dark px-3'>
                        <h1>Design</h1>
                        <p className='font-light text-sm opacity-50'>Inside look of my brain</p>
                    </div>
                    {designProjects.map((project: any) => (
                        <Card
                            key={project.id}
                            title={project.name}
                            image={project.image}
                            id={project.id}
                            type={"Design"}
                        ></Card>
                    ))}
                </Column>
                <Column>
                    <div className='flex flex-col gap-1 border-x border-dark px-3'>
                        <h1>Other</h1>
                        <p className='font-light text-sm opacity-50'>
                            Things I did for fun
                        </p>
                    </div>
                    {otherProjects.map((project: any) => (
                        <Card
                            key={project.id}
                            title={project.name}
                            image={project.image}
                            id={project.id}
                            type={"Other"}
                        ></Card>
                    ))}
                </Column>
            </div>
        </>
    )
}

function Column({ children }: { children: JSX.Element[] }) {
    return (
        <div className="w-full md:w-[calc(33.33%-1rem)] flex flex-col gap-y-6">
            {children}
        </div>
    )
}

function Card({ title, image, id, type }: { title: string, image: string, id: string, type: string }) {
    const artwork = image[0]
    return (
        <Link
            href={`/portfolio/${id}`}
            className="w-full h-fit bg-dark transition-all duration-300 relative hover:scale-95 hover:shadow-lg card overflow-hidden">
            <img
                src={artwork}
                alt={title + " image"}
                className='h-full w-full object-cover brightness-50 grayscale transition-all duration-300 max-h-[calc(100vh-6rem)]'
            />
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-50 absolute top-0 left-0 flex items-start p-6 justify-end flex-col">
                <h1 className="text-light font-bold text-xl">{title}</h1>
                <p className='text-light font-light italic'>{type}</p>
            </div>
        </Link>
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