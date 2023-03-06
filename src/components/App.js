import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  function handleNumerErorrs (ev) {
    ev.preventDefault();
    setNumberOfErrors (numberOfErrors + 1);

  }
  return <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main classNameName="main">
          <section>
            <div classNameName="solution">
              <h2 classNameName="title">Solución:</h2>
              <ul classNameName="letters">
                <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li>
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">Escribe una letra:</label>
              <input
                autocomplete="off"
                className="form__input"
                maxlength="1"
                type="text"
                name="last-letter"
                id="last-letter"
              />
            </form>
          </section>
          <section className= {`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
          <label>
            <input type="button" value="Incrementar" onClick={handleNumerErorrs}/> 
          </label>
        </main>
      </div>;
}

export default App;


// Día 6 de marzo

//¿Qué datos debemos guardar en el Estado?
//Datos que se pueden guardar en el Estado: Letra de la usuaria y solución
//Datos que no se pueden guardar en el Estado (los que se pueden calcular a partir de otro dato guardado en el Estado): letras correctas de la solución, letras falladas, nº de fallos (muñeco)

//El número de errores, ¿lo tenemos que guardar en el estado para poder pintarlo, o lo podemos calcular a partir de otros datos?: Lo podemos calcular a partir de letras falladas.
//El número de errores, ¿cambia siempre que la jugadora añade una letra, o solo cuando añade una letra errónea?: Solo cuando la usuaria mete una letra erronea
//¿Qué número de errores hay cuando el juego no ha empezado? : 0
//¿Hay un número de errores mínimo y/o máximo?: Máximo, a que el juego acaba (a no ser que ganes) cuando el muñeco es erroneo.
//¿Hay datos que son conjuntos de datos (como un array o un objeto) o todos los datos son simples o primitivos?: Seguramente la solución, que viene de un API

//Diagrama de flujo:
//Al arrancar la página: Debe aparecer la solución vacñia, letras fallidad en blanco y el monigote en gris transparente (nº de errores)
//Al iniciar el juego la usuaria: Según la letra que teclee la usuaría debe colocarse esa letra o en "letras fallidas" o en "letra acertada". En caso de que sea un letra fallida, este debe añadir un nº de error + y esto a su vez pintar una línea del monigote. 

//El muñeco: 
//Se han modificado las líneas: 2/ 5-8 /54 / 69- 71