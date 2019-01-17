//九宫格
class Square extends React.Component{
    constructor(){
        super();
        this.state={
            value:null,
        }
    }

    render(){
        return(
            <button className="square" onClick={() => this.state.setState({value:'x'})}>
                {this.state.value}
            </button>
        );
    }
}