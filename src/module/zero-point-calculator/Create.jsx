import Button from '../../components/Button'

export default function ZeroPointCalculatorCreate() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Zero Point Calculation</h2>
      
      <div className="bg-white p-4 rounded shadow space-y-4">
        <div>
          <label className="block mb-1">Tanggal</label>
          <input type="date" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Lokasi</label>
          <input type="text" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Keterangan</label>
          <textarea className="w-full px-3 py-2 border rounded" rows={4}></textarea>
        </div>
        <div className="flex justify-end">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  )
}