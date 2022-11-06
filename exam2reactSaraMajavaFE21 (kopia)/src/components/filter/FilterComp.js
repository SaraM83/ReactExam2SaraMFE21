import React from "react";

export default class Filter extends React.Component {

    getCategoryValues = () => { 
        return this.props.category.map((value) => {
            return (
                <>
                <button onClick={() => this.props.filterProduct(value)}>{value}</button>
                </>
            )
        })
    }


    render() {
        
        return(
            <>
            <button onClick={() => this.props.filterAll()}>All</button>
            {this.getCategoryValues()}
            </>
        )
    }
}