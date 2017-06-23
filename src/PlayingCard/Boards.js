import React from 'react';
import Hand from './Hand/Hand';
import Board from './Board';

const styles = {
    oneHand: function(cardSize) {
        return {
            handS: { 'bottom': '3%', 'right': '50%', 'position': 'absolute' },
            board: {  'left': 1.5 * 225 / 314 * cardSize, 'top': cardSize * .5, 'position': 'absolute', 'width': '75%' }
        }
    }
}

let Boards = {
    test : function(state, props, cardSize){
        this.state = state;
        this.props = props;
        this.cardSize = cardSize;
        return (
            <div className='Card-table' style={this.props.style}>
                <div onClick={()=>this.removeOne('handS')} id='bottom' style={{'bottom' : '3%', 'right':'50%', 'position':'absolute'}}>
                    <Hand hide={false} fan={false} stack={true} cards={this.state.handS} cardSize={this.cardSize} />
                </div>
                <div onClick={()=>this.removeOne('handW')} id='left' style={{'top': 'calc(50% - ' + this.cardSize + 'px)', 'left':this.cardSize * .3 + 'px', 'position':'absolute'}}>
                    <Hand rotate={90} fan={true} hide={false} cards={this.state.handW} cardSize={this.cardSize}/>
                </div>
                <div onClick={()=>this.removeOne('handN')} id='top' style={{'right':'50%', 'top': -this.cardSize * .5, 'position':'absolute'}}>
                    <Hand rotate={180} fan={true} hide={false} cards={this.state.handN} cardSize={this.cardSize}/>
                </div>
                <div onClick={()=>this.removeOne('handE')} id='right' style={{'right':this.cardSize * .1 + 'px', 'top':'calc(50% - ' + this.cardSize + 'px)', 'position':'absolute'}}>
                    <Hand rotate={270} hide={true} fan={false} spread={true} cards={this.state.handE} cardSize={this.cardSize}/>
                </div>
                    <Board width={75} cardSize={this.cardSize} hands={this.state.board}/>        
                </div>
                )
    },
    solitaire : function(state, props, cardSize, cardWidth){
        this.state = state;
        this.props = props;
        this.cardSize = cardSize;
        this.cardWidth = cardWidth;
        return (
            <div className='Card-table' style={this.props.style}>
                <div onClick={()=>this.removeOne('handS')} id='bottom' style={styles.oneHand(this.cardSize).handS}>
                    <Hand hide={false} fan={false} stack={true} cards={this.state.handS} cardSize={this.cardSize} />
                </div>
                    <Board width={75} cardSize={this.cardSize} style={styles.oneHand(this.cardSize).board} hands={this.state.board}/>        
                </div>
                )
    }
}
export default Boards