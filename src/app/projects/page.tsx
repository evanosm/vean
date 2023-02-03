import Image from 'next/image';
import Link from 'next/link';
export default async function page() {
    const projects = await fetchProjects();
    console.log(projects);

    const devProjects = projects.filter((project: any) => project.type === "dev");
    const designProjects = projects.filter((project: any) => project.type === "design");
    const otherProjects = projects.filter((project: any) => project.type === "other");
    
    return (
        <div
            className="w-full min-h-[calc(100vh-6rem)] flex flex-col gap-12 pb-6">
            <Section
                title={"Developpement"}
            >
                {devProjects.map((project: any) => (
                    <Card
                        key={project.id}
                        title={project.name}
                        image={project.image}
                        id={project.id}
                    ></Card>
                ))}
            </Section>
            <Section
                title={"Design"}
            >
                {designProjects.map((project: any) => (
                    <Card
                        key={project.id}
                        title={project.name}
                        image={project.image}
                        id={project.id}
                    ></Card>
                ))}
            </Section>
            <Section
                title={"Other"}
            >
                {otherProjects.map((project: any) => (
                    <Card
                        key={project.id}
                        title={project.name}
                        image={project.image}
                        id={project.id}
                    ></Card>
                ))}
            </Section>
        </div>
    )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="w-full">
            <h1 className="text-xl font-bold mb-3 sticky">{title}</h1>
            <div className="w-full h-px bg-black mb-6"></div>
            <div className="w-full overflow-scroll">
                <div className="h-fit w-fit flex flex-row gap-3">
                    {children}
                </div>
            </div>
        </div>
    )
}

function Card({ title, image, id }: { title: string, image: string, id: string }) {
    return (
        <Link
            href={`/projects/${id}`}
            className="w-56 h-80 bg-red-200 hover:bg-red-500 transition-all duration-300 relative hover:scale-95 hover:shadow-lg">
            <Image
                src={image}
                alt={title + " image"}
                fill
                className='object-cover grayscale brightness-50'
            />
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black bg-opacity-50 absolute top-0 left-0 flex items-end py-3 justify-center">
                <h1 className="text-light font-bold">{title}</h1>
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