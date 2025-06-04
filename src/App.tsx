import Header from "./components/Header";
import FileList from "./components/FileList";
import { filesData } from "./data/filesData";

function App() {
  return (
    <div className="min-h-screen bg-safra-dark flex flex-col">
      <Header />
      <main className="flex-auto px-4 py-2">
        <div className="w-full bg-safra-darker rounded-2xl shadow-lg p-8">
          <FileList files={filesData} />
        </div>
      </main>
    </div>
  );
}

export default App;
