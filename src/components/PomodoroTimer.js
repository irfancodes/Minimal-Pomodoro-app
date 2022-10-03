const PomodoroTimer = () => {
  return <div className="grid text-white place-items-center mt-24">
    <div className="font-black" style={{fontSize : '150px'}}>25:00</div>
    <div className="w-96 flex justify-evenly">
        <div className="rounded-md border border-gray-700 hover:scale-125 hover:bg-gray-700 transition cursor-pointer p-4">Pause</div>
        <div className="rounded-md border border-gray-700 hover:scale-125 hover:bg-gray-700 transition cursor-pointer p-4">Restart</div>
    </div>
  </div>;
};
export default PomodoroTimer;