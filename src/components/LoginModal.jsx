export default function LoginModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Log in</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful");
            onClose();
          }}
          className="flex flex-col gap-3"
        >
          <input required placeholder="Email" className="border p-2 rounded" />
          <input
            required
            placeholder="Password"
            type="password"
            className="border p-2 rounded"
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-indigo-600 text-white rounded"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
