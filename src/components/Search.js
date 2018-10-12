import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordLookUp :   ''
        }
    }

    isChange = (event)=>{
        this.setState({
            wordLookUp : event.target.value
        });
        
        this.props.searchFunc(this.state.wordLookUp);
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 align-self-start">
                        <button type="button" className="btn btn-primary" onClick={()=>this.props.changeState()}>
                            <i className="fa fa-plus" aria-hidden="true"></i>Thêm nhân viên</button>
                    </div>
                    <div className="col-8 align-self-end">
                        <div className="input-group md-form form-sm form-2 pl-0">
                            <input className="form-control my-0 py-1 red-border" type="text" placeholder="Tìm nhân viên" aria-label="Search"
                             onChange={(event)=>this.isChange(event)}/>
                            <div className="input-group-append">
                            <button type="button" onClick={(dl)=>{this.props.searchFunc(this.state.wordLookUp)}} className="btn btn-info"><i className="fa fa-search text-grey" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Search;