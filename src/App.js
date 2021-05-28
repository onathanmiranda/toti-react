import style from './App.module.css';

function OrderedList(props){

  //const items = props.items;
  const { items } = props;
  
  return (
    <ol className={style.listaOrdenada}>
      {items.map((item) => {
        return <li>{item}</li>
      })}
    </ol>
  )
}

function UnorderedList(props){
  
  const { items } = props;

  return (
    <ul className={style.listaNaoOrdenada}>
      {items.map((item) => {
        return <li>{item}</li>
      })}
    </ul>
  )
}

function Listas(){

  const comidasPreferidas = [ "Hamburger", "Picanha", "Sopa de Ervilha", "Feijoada" ]
  const filmesPreferidos = [ "Harry Potter", "Dr. Estranho", "Game of Thrones", "The Lord of the Rings" ]

  return (
    <div className={style.container}>
      <p className={style.paragraph}>Nathan de Souza Miranda</p>
      <OrderedList items={comidasPreferidas}/>
      <UnorderedList items={filmesPreferidos} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Listas />
    </div>
  );
}

export default App;
