import "./App.css";
import BasicCard from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BasicCard
        product={{
          title: "khalil",
          description:
            "farouk",
            price:"rania"
        }}
      />
    </div>
  );
}

export default App;
