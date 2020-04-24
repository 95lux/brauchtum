import React from 'react'
import ScrollArea from 'react-scrollbar/dist/no-css';

import '../../styles/Impressum.css';
// import '../../styles/scrollArea.css';
import '../../styles/App.css';

class Impressum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemsCount : 40
        };

    }

    componentDidMount() {
    }

    componentDidUpdate() {
        if(this.props.isRotated) {
            this.scrollArea.scrollBottom();
            console.log('SCROLLTOBOTTOM');
        } else {
            this.scrollArea.scrollTop();
        }
    }

    handleScroll = (value) => {
        console.log(value)
        // this.scrollArea.scrollYTo(100)
        // e.preventDefault()
    }

    render() {
        var itemElements = [];

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}>item {i}</div>);
        }

        let scrollbarStyles = {
            borderRadius: 5
        };
        let scrollbarStylesRotated = {
            borderRadius: 5,
            left: 0
        };

        return (
            <div className="page">
                <div style={containerStyle} >
                        <ScrollArea
                            className={this.props.isRotated ? "area rotate" : "area"}
                            contentClassName={this.props.isRotated ? "content rotate" : "content"}
                            verticalScrollbarStyle={scrollbarStyles}
                            verticalContainerStyle={this.props.isRotated? scrollbarStylesRotated : scrollbarStyles}
                            horizontalScrollbarStyle={scrollbarStyles}
                            horizontalContainerStyle={scrollbarStyles}
                            smoothScrolling= {true}
                            minScrollSize={40}
                            onScroll={(value) => this.handleScroll(value)}
                            stopScrollPropagation={false}
                            ref={e => this.scrollArea = e}
                        >
                            {itemElements}
                        </ScrollArea>

                    {/* <div style={insideStyle} class='scrollbar'
                        onTouchMove={ e => this.handleScroll(e)}
                        ref={e => this.scrollArea = e}
                        >
                            {itemElements}
                    </div> */}
                </div>
            </div>
        );
    }
}

const insideStyle = {
    position: 'absolute',
    width: '1136px',
    height: '500px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    overflowY: 'scroll',
    overflowX: 'hidden'
}

const containerStyle = {
    position: 'absolute',
    left: '50%',
    top: '29px',
    // margin: '30px',
    width: '1156px',
    height: '520px',
    marginLeft: '-578px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgb(140, 25, 32)',
    backgroundColor: 'rgba(44, 46, 50, 0.95)',


}

 export default Impressum;
