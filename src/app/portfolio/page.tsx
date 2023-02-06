import Image from 'next/image';
import Link from 'next/link';
export default async function page() {
    const projects = await fetchProjects();
    console.log(projects);

    return (
        <div
            className="w-full min-h-[calc(100vh-6rem)] grid grid-flow-cols grid-cols-3 grid-rows-3 gap-3 pb-6 flex-wrap">

            {projects.map((project: any) => (
                <Card
                    key={project.id}
                    title={project.name}
                    image={project.image}
                    id={project.id}
                ></Card>
            ))}
        </div>
    )
}

function Card({ title, image, id }: { title: string, image: string, id: string }) {
    return (
        <Link
            href={`/projects/${id}`}
            className="w-fit md:w-[calc(30%-12px)] h-fit bg-dark transition-all duration-300 relative hover:scale-95 hover:shadow-lg">
            <img
                src={image}
                alt={title + " image"}
                fill
                className='h-full w-full object-cover grayscale brightness-50'
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