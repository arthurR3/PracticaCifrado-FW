import React, { useState } from "react";
import '../css/Aviso.css';
import sjcl from "sjcl";
function Cifrado() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    const [tem, setTem] = useState('');

    const encryptData= () => {
        const encrypt = sjcl.encrypt('password', message);
        /* setResult(encrypt.cipherText); */
        setTem(encrypt)
        const encryptedText = JSON.parse(encrypt).ct;
        setResult(encryptedText)
        console.log(encryptedText)
    }

    const decryptData = () => {
        try {
          const decryptedData = sjcl.decrypt('password',tem);
          console.log("Datos descifrados:", decryptedData);
          setResult(decryptedData);
          // Puedes mostrar o utilizar los datos descifrados según sea necesario
        } catch (error) {
          console.error("Error al descifrar los datos:", error);
        }
      }
      

      
    return (
        <div className="container">
            <div className="form-content">
                <h1 className="title">Práctica de cifrado</h1>
                <div className="input-group">
                    <div className="input-field">
                        <input
                            id="message"
                            type="text"
                            placeholder="Texto a cifrar"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    {/* <div className="input-group">
                        <div className="input-field">
                            <input
                                id="filas"
                                type="number"
                                placeholder="Filas"
                                value={filas}
                                onChange={(e) => setFilas(e.target.value)}
                            />
                            <input
                                id="columnas"
                                type="number"
                                placeholder="Columnas"
                                value={columnas}
                                onChange={(e) => setColumnas(e.target.value)}
                            />
                        </div>
                    </div> */}
                    <div className="btn-field">
                        <button id="encrypt" type="button" onClick={encryptData}>
                            Encriptar
                        </button>
                        <button id="decrypt" type="button" onClick={decryptData}>
                            Desencriptar
                        </button>
                    </div>
                    <div className="input-group">
                        <div className="input-field">
                            <input
                                id="result"
                                type="text"
                                placeholder="Texto cifrado"
                                value={result}
                                onChange={(e) => setResult(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cifrado;