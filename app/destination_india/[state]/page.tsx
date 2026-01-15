
import StatePageClient from './components/StatePageClient'

interface StatePageProps {
    params: {
        state: string
    }
}

const StatePage = async ({ params }: StatePageProps) => {
    const { state } = await params

    return (
        <main className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/states/${state}.png')`
                }}
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            <StatePageClient state={state} />
        </main>
    )
}

export default StatePage
