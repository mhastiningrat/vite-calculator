export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Total Calculations</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Balistik Calculator</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Zero Point Calculator</h3>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  )
}