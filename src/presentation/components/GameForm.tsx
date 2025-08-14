import {InputField} from "./InputField";

export function GameForm() {
    return (
        <div className="flex flex-col items-center w-full sm:w-96 h-full bg-gray-700 shadow-lg rounded-md">
            <h2 className="text-3xl font-bold text-white my-4">New Game</h2>
            <InputField label="Rows" id="rows" type="number" rangeMin={5} rangeMax={30} />
            <InputField label="Columns" id="columns" type="number" rangeMin={5} rangeMax={30} />
            <InputField label="Mines" id="mines" type="number" rangeMin={10} rangeMax={40} suffix={"%"}/>
            <button className="bg-gray-500 border-none text-white py-4 px-8 text-center no-underline text-lg my-5 mx-1 cursor-not-allowed rounded-md" disabled>
                New Game
            </button>
        </div>
    );
}