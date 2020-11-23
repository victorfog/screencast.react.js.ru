import React, {Component} from 'react'

class Article extends Component {
    //__________________________________
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen
        }
    }

    //__________________________________
    // В кратком синтаксисе НЕ ДОСТУПНЫ МЕТОДЫ ЖИЗНЕННОГО ЦИКЛА
    // state = { //Экспериментальный систаксис. По старинке тут идет описание Constructor
    //     isOpen: false //редактировать state без setState не рекомендуется
    // }
    componentWillReceiveProps(nextProps) {
        console.log("--- componentWillReceiveProps ----")
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        })
    }
    componentWillUpdate() {
        console.log("--- componentWillUpdate ---")

    }


    render() {
        const {post} = this.props;
        const style = {width: '50%'}; // не заработало если поместить прям в литеральной натации
        const mainText = this.state.isOpen && <section className="card-text">{post.text}</section> //обязательно оформить в элемент <>
        return (
            <div className="card mx-auto" style = {style}>
                <div className="card-header">
                    <h2>
                        {post.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? 'close' : 'open'}
                            {this.state.isOpen}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">Create Date: {(new Date(post.date)).toDateString()}</h6>
                    {mainText}
                </div>
            </div>
        )
    }

    handleClick = () => { //Экспериментальный синтаксис. по старинке надо описывать в конструкторе или биндить.
        this.setState({isOpen: !this.state.isOpen}) //назначаем новое состочние не такое как сейчас
    }
}

export default Article