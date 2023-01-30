export default function page() {
  return (
      <div
          className="w-full min-h-[calc(100vh-6rem)] flex flex-col">
          <Section
                title="Developpement"
          >
              <Card />
          </Section>
    </div>
  )
}

function Section({title, children}: {title: string, children: React.ReactNode}) {
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

function Card() {
    return (
        <div className="w-48 h-60 bg-red-200"></div>
    )
}
