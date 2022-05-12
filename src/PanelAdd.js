import React from "react";

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //En react cuando utilizamods formularios siempre nos recomiendam utilizar los estados
            // para manejar los cambios, de tal manera cuando un elemento cambie de valor, ese valor se
            // actualice en el state y a su vez ese campo reciba la info del state 

            title: '',
            image: '',
            rating: 1
        };
    }

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    onChangeImage = (e) => {
        this.setState({ image: e.target.value });
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({ rating: rating });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd ({title: title, image: image, rating: rating});
        this.props.oncancel();
    }

    render() {
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Título del libro</label>
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input"></input>
                        </p>
                        <p>
                            <label>Título de imagen</label>
                            <input onChange={this.onChangeImage} type="text" name="image" className="input"></input>
                        </p>

                        <p>
                            <label>Clasificación</label> <br />
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Registrar libro" />
                        <button onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        );
    }
}



export default PanelAdd;