import { useState } from 'react'
import Button from '../../components/Button'

const tabs = [
  'DATA UMUM TKP', 'POSISI KORBAN', 'LUKA TEMBAK', 'PAKAIAN',
  'BARANG BUKTI', 'TRAJECTORY', 'GSR', 'LAB', 'PARAMETER', 'TARGET'
]

export default function BalisticCalculatorCreate() {
  const [activeTab, setActiveTab] = useState(0)

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div><label className="text-xs">Tanggal & Waktu</label><input type="datetime-local" className="w-full px-2 py-1 border rounded text-sm" /></div>
            <div><label className="text-xs">Lokasi TKP</label><input className="w-full px-2 py-1 border rounded text-sm" placeholder="Koordinat" /></div>
            <div><label className="text-xs">Cuaca</label><select className="w-full px-2 py-1 border rounded text-sm"><option>Cerah</option><option>Berawan</option><option>Hujan</option></select></div>
            <div><label className="text-xs">Cahaya</label><select className="w-full px-2 py-1 border rounded text-sm"><option>Terang</option><option>AVG</option><option>Redup</option></select></div>
            <div><label className="text-xs">Indoor/Outdoor</label><div className="flex gap-2 mt-1"><label className="text-xs"><input type="radio" name="indoor" /> Outdoor</label><label className="text-xs"><input type="radio" name="indoor" /> Indoor</label></div></div>
            <div><label className="text-xs">Status TKP</label><select className="w-full px-2 py-1 border rounded text-sm"><option>Asli</option><option>Berubah</option></select></div>
            <div><label className="text-xs">Foto 360°</label><input type="file" accept="image/*" multiple className="text-xs" /></div>
            <div><label className="text-xs">Video TKP</label><input type="file" accept="video/*" className="text-xs" /></div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-2">Identifikasi Posisi Tubuh</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Posisi tubuh', 'Posisi kepala', 'Posisi tangan', 'Posisi kaki', 'Posisi duduk/berdiri/terlentang', 'Posisi terhadap benda'].map((field, i) => (
                  <div key={i}><label className="text-xs">{field}</label><input className="w-full px-2 py-1 border rounded text-sm" /></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Pengukuran Posisi</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Tinggi luka masuk', 'Tinggi luka keluar', 'Tinggi proyektil di dalam tubuh', 'Sudut tubuh korban', 'Arah hadap korban'].map((field, i) => (
                  <div key={i}><label className="text-xs">{field}</label><input className="w-full px-2 py-1 border rounded text-sm" /></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Kondisi Biologis</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Pola darah', 'Blood spatter', 'Pooling darah', 'Tanda perlawanan', 'Livor mortis', 'Rigor mortis'].map((field, i) => (
                  <div key={i}><label className="text-xs">{field}</label><input className="w-full px-2 py-1 border rounded text-sm" /></div>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return <div className="p-4 text-center text-gray-500">Form tab: {tabs[activeTab]}</div>
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calculator Balistik</h2>
      
      <div className="border-b mb-4 overflow-x-auto">
        <div className="flex gap-1">
          {tabs.map((tab, index) => (
            <button key={index} onClick={() => setActiveTab(index)} className={`px-3 py-2 text-xs md:text-sm whitespace-nowrap border-b-2 ${activeTab === index ? 'border-blue-600' : 'border-transparent'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {renderTabContent()}
        <div className="flex justify-between mt-4">
          <Button variant="secondary" onClick={() => setActiveTab(Math.max(0, activeTab - 1))} disabled={activeTab === 0}>Previous</Button>
          <Button onClick={() => setActiveTab(Math.min(tabs.length - 1, activeTab + 1))} disabled={activeTab === tabs.length - 1}>Next</Button>
        </div>
      </div>
    </div>
  )
}