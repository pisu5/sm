'use client';

import { useState } from 'react';
import { storage } from '@/lib/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setStatus('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus('❗ No file selected');
      return;
    }

    setUploading(true);
    setStatus('Uploading...');

    try {
      const storageRef = ref(storage, `uploads/anon/${file.name}`);
      await uploadBytes(storageRef, file);

      setStatus('✅ Upload successful!');
    } catch (error) {
      console.error(error);
      setStatus('❌ Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Upload Support Chat Logs
        </h2>

        <div className="mb-4">
          <label
            htmlFor="fileUpload"
            className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer hover:bg-blue-50 transition"
          >
            <CloudArrowUpIcon className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-sm text-blue-600 font-medium">
              Click to browse or drag & drop files
            </p>
            <p className="text-xs text-gray-500">(CSV or JSON format only)</p>
            <input
              id="fileUpload"
              type="file"
              accept=".csv,.json"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {file && (
          <div className="mb-4 bg-gray-50 border border-gray-200 p-3 rounded-md text-sm text-gray-700">
            <p className="font-medium">📄 {file.name}</p>
            <p>{(file.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        <button
          onClick={handleUpload}
          disabled={uploading}
          className={`w-full py-2 rounded-lg text-white font-semibold transition ${
            uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">{status}</p>
        )}
      </div>
    </main>
  );
}
