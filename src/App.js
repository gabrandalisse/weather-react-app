import React, { Fragment, useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {

  const [search, updateSearch] = useState({
    city: "",
    country: "",
  });
  const [ consult, updateConsult ] = useState(false);
  const [ result, updateResult ] = useState({});
  const [ error, updateError ] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const consultAPI = async () => {
      if(consult){
        const appId = "70f27c2046099533907fc55397c7389d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();
  
        updateResult(result);
        updateConsult(false); 

        if(result.cod === "404"){
          updateError(true);
        } else {
          updateError(false);
        }
      }
    };
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);

  let component;
  if(error){
    component = <Error message="No hay resultados" />
  } else {
    component = <Weather result={result} />;
  }


  return (
    <Fragment>
      <Header 
        title="Weather React App" 
      />
     
      <div className="contenedor-form">
        <div className="container">
          <div className="row">

            <div className="col m6 s12">
              <Form 
                search={search}
                updateSearch={updateSearch}
                updateConsult={updateConsult}
              />

            </div>
            <div className="col m6 s12">
              {component}
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
