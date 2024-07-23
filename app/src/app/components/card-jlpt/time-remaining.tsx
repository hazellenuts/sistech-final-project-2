'use client'; // Menandai komponen ini sebagai Client Component

const TimeRemaining = () => {
  return (
    <div className="bg-white rounded-2xl p-4 mb-4">
      <h2 className="text-lg text-gray-800">Time Remains</h2>
      <p className="text-xl text-gray-800 font-bold">00:00:00</p>
    </div>
  );
};

export default TimeRemaining;
