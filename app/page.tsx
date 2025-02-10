import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";

export default async function Home() {
    return (
        <>
            <Hero />
            <main className="flex-1 flex flex-col gap-6 px-4">
                <h2 className="font-medium text-xl mb-4">Next steps</h2>
                <ConnectSupabaseSteps />
            </main>
        </>
    );
}
