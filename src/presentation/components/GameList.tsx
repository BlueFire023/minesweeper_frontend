export function GameList() {
    return (
        <div className="flex flex-col items-center w-full sm:w-96 bg-gray-700 shadow-lg rounded-md justify-end">
            <h2 className="text-3xl font-bold text-white my-4">Available Games</h2>
            <div className="w-3/4 h-[355px] sm:h-[400px] mb-5 overflow-y-auto">
                <ul className="list-none p-0"/>
            </div>
        </div>
    );
}