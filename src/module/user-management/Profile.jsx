import { useState } from 'react'
import Button from '../../components/Button'

export default function UserManagement() {
  const [profile, setProfile] = useState({
    email: 'user@example.com',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    // API call to update profile
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      
      <div className="bg-white p-4 rounded shadow max-w-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">No HP</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <hr />
          <div>
            <label className="block mb-1">Password Lama</label>
            <input
              type="password"
              name="currentPassword"
              value={profile.currentPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Password Baru</label>
            <input
              type="password"
              name="newPassword"
              value={profile.newPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Konfirmasi Password Baru</label>
            <input
              type="password"
              name="confirmPassword"
              value={profile.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSave}>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  )
}