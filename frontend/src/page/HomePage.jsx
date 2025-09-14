import { useEffect } from "react";
import { noteStore } from "../store/noteStore";
import { StickyNote, Building2, Loader2, Trash2 } from "lucide-react";

const HomePage = () => {
  const { notes, getAllNotes, isNotesLoading, deleteNote } = noteStore();

  useEffect(() => {
    getAllNotes();
  }, [getAllNotes]);

  if (isNotesLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <StickyNote className="w-6 h-6 text-blue-600" />
        Notes
      </h1>

      {notes.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <StickyNote className="mx-auto w-12 h-12 text-gray-400 mb-2" />
          <p>No notes available yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition relative"
            >
              <button
                onClick={() => deleteNote(item._id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
                title="Delete Note"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <StickyNote className="w-5 h-5 text-yellow-500" />
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.tenant?.slug || "Unknown Tenant"}
                </h2>
              </div>

              <p className="text-gray-600">{item.description}</p>

              <div className="flex justify-end mt-4 text-sm text-gray-500">
                <Building2 className="w-4 h-4 mr-1" />
                {item.tenant?.slug}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
