import React, { Component } from 'react'
import Top3Philippe from "./Top3Philippe"
import Top3Damien from "./Top3Damien"
import Top3Ingrid from "./Top3Ingrid"
import Top3Thibaut from "./Top3Thibaut"
import "./Top3.css"

class Top3 extends Component {
    constructor(){
        super()
        this.state = {
            isShowedPhilippe : false,
            isShowedIngrid: false,
            isShowedDamien : false,
            isShowedThibaut : false
        } ;  
    }

    handleClickP = () => {
        const { isShowedPhilippe, isShowedDamien, isShowedIngrid, isShowedThibaut } = this.state;
        this.setState( {
            isShowedPhilippe : !isShowedPhilippe,
            isShowedIngrid: false,
            isShowedDamien : false,
            isShowedThibaut : false       
        } );
    }
    handleClickI = () => {
        const { isShowedPhilippe, isShowedDamien, isShowedIngrid, isShowedThibaut } = this.state;
        this.setState( {
            isShowedIngrid : !isShowedIngrid,
            isShowedPhilippe : false,
            isShowedDamien : false,
            isShowedThibaut : false
        } );
    }
    handleClickT = () => {
        const { isShowedPhilippe, isShowedDamien, isShowedIngrid, isShowedThibaut } = this.state;
        this.setState( {
            isShowedThibaut: !isShowedThibaut,
            isShowedPhilippe : false,
            isShowedIngrid: false,
            isShowedDamien : false,
        } );
    }   
     handleClickD = () => {
        const { isShowedPhilippe, isShowedDamien, isShowedIngrid, isShowedThibaut } = this.state;
        this.setState( {
            isShowedDamien: !isShowedDamien,
            isShowedPhilippe : false,
            isShowedIngrid: false,
            isShowedThibaut : false
        } );
    }




    render() {
        const { isShowedPhilippe, isShowedDamien, isShowedIngrid, isShowedThibaut } = this.state;
        const {closePopUp,popUp} = this.props;
        return (
            <div className="top3Section">
                <div className="titreTop3">
                    
                    <p className="Top3Filipe">Top 3 Séries Netflix selon Philippe</p>
                    
                    
                    <button type="button" className="fleche" onClick={this.handleClickP}> {isShowedPhilippe ? "˄" : "˅" } </button>
                    
                </div>
                <div class="flexTrait">
                    <hr className="traitDessus"/>
                </div>
                {isShowedPhilippe ? <Top3Philippe closePopUp={closePopUp} popUp={popUp}/> : ""}
                <div className="titreTop3">
                    
                    <p className="Top3Filipe">Top 3 Séries Netflix selon Ingrid  </p>
                    <button type="button" className="fleche" onClick={this.handleClickI}> {isShowedIngrid ? "˄" : "˅" } </button>    
                                  
                </div>
                <div class="flexTrait">
                    <hr className="traitDessus"/>
                </div>
                {isShowedIngrid ? <Top3Ingrid closePopUp={closePopUp}  popUp={popUp}/> : ""}
                <div className="titreTop3">
                    
                    <p className="Top3Filipe">Top 3 Séries Netflix selon Thibaut</p>
                    <button type="button" className="fleche" onClick={this.handleClickT}> {isShowedThibaut ? "˄" : "˅" } </button>    
                                  
                </div>
                <div class="flexTrait">
                    <hr className="traitDessus"/>
                </div>
                {isShowedThibaut ? <Top3Thibaut closePopUp={closePopUp} popUp={popUp}/> : ""}
                <div className="titreTop3">
                    
                    <p className="Top3Filipe">Top 3 Séries Netflix selon Damien</p>
                    <button type="button" className="fleche" onClick={this.handleClickD}> {isShowedDamien ? "˄" : "˅" } </button>    
                                  
                </div>
                <div class="flexTrait">
                    <hr className="traitDessus"/>
                </div>
                {isShowedDamien? <Top3Damien closePopUp={closePopUp} popUp={popUp}/> : ""}
            </div>
        )
    }
};

export default Top3;