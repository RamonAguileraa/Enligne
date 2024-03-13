import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Button,
  FormControl,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import "./style.css";

const Main = () => {
  const [text1, settext1] = useState(1);
  const [text2, settext2] = useState(1);
  const [country, setcountry] = useState([]);
  const [country2, setcountry2] = useState([]);
  const [value1, setvalue1] = useState(1);
  const [value2, setvalue2] = useState(1);

  useEffect(() => {
    getdata();
  }, []);

  async function guardarConversion() {
    try {
      const response = await Axios.post(
        "http://localhost/ENline/src/Conv.php",
        {
          moneda_origen: "USD",
          moneda_destino: "EUR",
          cantidad_origen: text1,
          cantidad_destino: text2,
        }
      );
      console.log(response.data); // Esto mostrará la respuesta del servidor
    } catch (error) {
      console.error(error);
    }
  }

  async function getdata() {
    const result = await Axios.get(
      "http://data.fixer.io/api/latest?access_key=462a8f2c75c468b3922c272d04af1a67"
    );
    console.log(result.data);
    setcountry(result.data.rates);
    setcountry2(result.data.rates);
  }

  function convert(e) {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    settext2(num);
  }

  return (
    <div>
      <Paper className="paper">
        <h2>Covertidor de divisas</h2>
        <form onSubmit={guardarConversion}>
          <div>
            <TextField
              variant="outlined"
              value={text1 || ""}
              onChange={(e) => settext1(e.target.value)}
              autoComplete="off"
            />
            <FormControl
              className="dropdown"
              variant="outlined"
              onChange={(e) => setvalue1(e.target.value)}
            >
              <Select native>
                {Object.keys(country).map((value, index) => (
                  <option key={index} value={country[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField variant="outlined" value={text2 || ""} />
            <FormControl
              className="dropdown"
              variant="outlined"
              onChange={(e) => setvalue2(e.target.value)}
            >
              <Select native>
                {Object.keys(country2).map((value, index) => (
                  <option key={index} value={country[value]}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <Button type="submit" className="button" variant="contained">
            Guardar
          </Button>
          <Button
            type="button"
            className="button"
            variant="contained"
            onClick={convert}
          >
            Convertir
          </Button>
          <br /> <br />
          <div></div>
        </form>
      </Paper>
    </div>
  );
};

export default Main;
