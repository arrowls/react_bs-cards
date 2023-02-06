import Card from "./Card";

function App() {
    const exampleLink = {
        href: 'https://youtube.com/',
        title: 'YouTube',
    }
  return (
    <div className="App">
      <div className="container-sm p-lg-5 vh-100 d-flex flex-row flex-wrap align-content-lg-start gap-2">
          <Card title="test" description="test" >
              <img src="https://source.unsplash.com/random" alt="test" className="card-img-top"/>
          </Card>
          <Card title="YouTube" description="Search for cool videos here" subtitle="Learn here!" links={[exampleLink]}>
              <img src="https://source.unsplash.com/random" alt="test" className="card-img-top"/>
          </Card>
          <Card title="No img required" description="also works without an image"/>
      </div>
    </div>
  );
}

export default App;
