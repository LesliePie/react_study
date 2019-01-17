//棋盘
class Board extends React.Component{
    renderSquare(i){
        return (<Square value={i} />);
    }

}