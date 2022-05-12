import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {
  //Se va a trasnformar la funcion de la app para que sea una clase

  // Ahora vamos a empezar a definir los estados de la app de la siguiente manera →

  constructor(props) {
    super(props);
    this.state = {
      //Creamos un objeto con un arreglo 
      books: [
        { id: 0, rating: 4, title: 'Harry Potter y la piedra filosofal', image: 'harryPotter.png' },
        { id: 1, rating: 3, title: 'Batman', image: 'batman.png' },
        { id: 2, rating: 5, title: 'Doctor Strange', image: 'doctorStrange.png' },
        { id: 3, rating: 5, title: 'Charlie y la fabrica de chocolate', image: 'charlie.png' },
        { id: 4, rating: 5, title: 'King regreso a casa', image: 'king.png' },
        { id: 5, rating: 3, title: 'Morbius', image: 'morbius.png' },
        { id: 6, rating: 3, title: 'Sometimes dead is better', image: 'petSematary.png' }
      ],
      copyBooks: []
    };
  }


  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
    let temp = [... this.state.books];
    const id = temp[temp.length - 1].id++;
    item['id'] = id;
    temp.push(item);
    this.setState({ books: [...temp] });
    this.initBooks()
  }


  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    } else {
      
      const temp = [... this.state.books];
      let res = [];


      temp.forEach(item => {
        if (item.title.toLowerCase().indexOf(query) > -1) {
          res.push(item);
        }
      });
      this.setState({ copyBooks: [...res] });
    }
  }

  onUpdateRating = (item) => {
    var temp = [... this.state.books];
    const index = temp.findIndex(x => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({ books: [...temp] });
    this.initBooks();
  }

  onRemove = (id) => {
    var temp = [... this.state.books];
    const res = temp.filter(item => item.id != id );

    this.setState({books: [...res]});
    this.initBooks();
  }

  render() {
    return (
      <div className='app'>
        <Menu title="PELIREDIA" onadd={this.onAdd} onsearch={this.onSearch} />
        <List items={this.state.copyBooks} onupdaterating={this.onUpdateRating} onremove= {this.onRemove} />
      </div>
    );
  }
}


export default App;
