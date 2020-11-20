import React, {Component} from 'react'

class Article extends Component{
    state = { //Экспериментальный систаксис. По старинке тут идет описание Constructor
        isOpen: true //редактировать state без setState не рекомендуется
    }

    render() {
        const {post} = this.props;
        const mainText = this.state.isOpen && <section>{post.text}</section> //обязательно оформить в элемент <>
        return(
            <div>
                <h2>
                    {post.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                        {this.state.isOpen}
                    </button>
                </h2>
                <h3>{mainText}</h3>
                <h4>Create Date: {(new Date(post.date)).toDateString()}</h4>
            </div>
        )
    }

    handleClick = () => { //Экспериментальный синтаксис. по старинке надо описывать в конструкторе или биндить.
        this.setState({isOpen: !this.state.isOpen}) //назначаем новое состочние не такое как сейчас
    }
}

export default Article