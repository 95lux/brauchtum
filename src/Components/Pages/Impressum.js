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
            borderRadius: 5,
        };
        let scrollbarStylesRotated = {
            borderRadius: 5,
            left: 0
        };

        return (
            <div className="page">
                <div style={containerStyle} >
                    <h1 style={titleStyle}> Quellen </h1>
                        <ScrollArea
                            // className={this.props.isRotated ? "area rotate" : "area"}
                            className={"scrollarea"}
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
                                    <p><strong>Rauhnächte im Saazerland<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Wikipedia</p>
                                    <p><strong>Silvester im Adlergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Wikipedia</p>
                                    <p><strong>Neujahrswünschen im Oberland<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE) <br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Plumpmänner im Riesengebirge <br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Maskenzug im Mittelgebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Alois Harasko (Hg.): Wir Sudetendeutschen zuhaus. Friedberg 1985.</p>
                                    <p><strong>Aschermittwoch im Elbetal<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Todaustragen in der Wischauer Sprachinsel<br /></strong>Ton: Gemeinschaft Wischauer Sprachinsel e. V.<br /> Bild: Elisabeth Plank: Bilder aus der Wischauer Sprachinsel. Aalen/Württemberg 1981.</p>
                                    <p><strong>Schnarren im Oberland<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild:</p>
                                    <p><strong>Ratschen in Südmähren<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Osterwasser im Altvatergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Höritzer Passionsspiele im Böhmerwald<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Schmeckostern im Adlergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: F. Schlegel</p>
                                    <p><strong>Schmeckostern im Kuhländchen<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Museum</p>
                                    <p><strong>Aufpeitschen im Erzgebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Heimatkreisverein Kaaden-Duppau</p>
                                    <p><strong>Ostersingen im Niederland<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Osterreiten im Niederland<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Osterreiten in der Iglauer Sprachinsel<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Alois Harasko (Hg.): Wir Sudetendeutschen zuhaus. Friedberg 1985.</p>
                                    <p><strong>Ostereier in Südmähren<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Ostern in den Beskiden<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Pfingstreiten im Böhmerwald<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild:</p>
                                    <p><strong>Pfingstausflug im Isergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Pfingstfeuer in den Beskiden<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: SLUB Dresden / Deutsche Fotothek / Martin Gottlöber</p>
                                    <p><strong>Kirchweih in der Iglauer Sprachinsel<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Kirchweih in Südmähren<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Genod im Schönhengstgau<br /></strong>Ton: Schönhengster Heimatbund e. V. / Markus Klenk<br /> Bild: Alois Harasko (Hg.): Wir Sudetendeutschen zuhaus. Friedberg 1985.</p>
                                    <p><strong>Nikolaus im Altvatergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Alois Harasko (Hg.): Wir Sudetendeutschen zuhaus. Friedberg 1985.</p>
                                    <p><strong>Nikolaus im Böhmerwald<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Wikipedia</p>
                                    <p><strong>Nikolaus im Isergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Alois Harasko (Hg.): Wir Sudetendeutschen zuhaus. Friedberg 1985.</p>
                                    <p><strong>Rupprecht im Riesengebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Weihnachtskrippe im Isergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Isergebirgs-Museum Neugablonz</p>
                                    <p><strong>Christbaum im Riesengebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: SLUB Dresden / Deutsche Fotothek / Willy Hanisch</p>
                                    <p><strong>Neunerlei-Essen im Mittelgebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Weihnachten im Egerland<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Gustav Zindel</p>
                                    <p><strong>Weihnachten im Schönhengstgau<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Gustav Ulrich</p>
                                    <p><strong>Weihnachten im Kuhländchen <br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Rudolf von Ottenfeld</p>
                                    <p><strong>Polterabend in der Iglauer Sprachinsel<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Hochzeit in der Wischauer Sprachinsel<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Rosina Reim</p>
                                    <p><strong>Hochzeit in den Beskiden<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Anton Gruda: Heimat zwischen Oder- und Weichselquellen. Inning/Ammersee 1955.</p>
                                    <p><strong>Hochzeit im Egerland<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Wallfahrt nach Zuckmantel im Altvatergebirge<br /></strong>Ton: Collegium Carolinum e. V., Sudetendeutsches Wörterbuch<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Wallfahrt nach Quinau im Erzgebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA) / Franz Ulm</p>
                                    <p><strong>Wallfahrt nach Grulich im Adlergebirge<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Wallfahrt nach Böhmisch Trübau im Schönhengstgau<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Totenbretter im Böhmerwald <br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                    <p><strong>Bestattung im Egerland<br /></strong>Ton: Archiv für Gesprochenes Deutsch am Institut für Deutsche Sprache<br /> Bild:</p>
                                    <p><strong>Bestattung im Kuhländchen<br /></strong>Ton: Institut für Volkskunde der Deutschen des östlichen Europa (IVDE)<br /> Bild: Sudetendeutsches Archiv (SDA)</p>
                                </div>
                        </ScrollArea>
                </div>
            </div>
        );
    }
}


const columnStyle = {
    columnCount: '2',
    columnGap: '5px',
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

 export default Impressum;
