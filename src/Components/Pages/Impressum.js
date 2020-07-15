import React from 'react'
import ScrollArea from 'react-scrollbar/dist/no-css';
import { withTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

import '../../styles/Impressum.css';
// import '../../styles/scrollArea.css';
import '../../styles/App.css';

class Impressum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
        const { t } = this.props;

        for( var i = 0; i< this.state.itemsCount; i++){
            itemElements.push(<div className="item" key={i}>item {i}</div>);
        }

        let scrollbarStyles = {
            borderRadius: 5,
        };
        let scrollbarStylesRotated = {
            borderRadius: 5,
            left: 0
        };

        return (
            <div className="page">
                <div style={containerStyle} >
                    <h1 style={titleStyle}>{t('impressum')}</h1>
                        <ScrollArea
                            // className={this.props.isRotated ? "area rotate" : "area"}
                            className={this.props.isRotated ? "scrollarea rotate" : "scrollarea"}
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
                                <div style={columnStyle}>
                                    <ReactMarkdown source={t('quellen')} escapeHtml={false}/>
                                </div>
                        </ScrollArea>
                </div>
            </div>
        );
    }
}


const columnStyle = {
    columnCount: '2',
    columnGap: '30px',
    columnStyle: 'solid',
    columnSpan: 'all',
    columnWidth: '50%'
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
    padding: '20px',
    paddingTop: '0px',
    boxSizing: 'border-box'
}

const titleStyle = {
    // float: 'left',
    display: 'inline-block',
    borderStyle: 'solid',
    borderColor: 'rgb(242, 240, 255)',
    borderWidth: '2px',
    color: 'rgb(242, 240, 255)',
    paddingTop: '5px',
    paddingBottom: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    margin: '20px',
    marginLeft: '0px',
    // overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '22px',
    fontWeight: 'normal'
}

 export default withTranslation()(Impressum);
