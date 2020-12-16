import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class InputArea extends Component {
    constructor(props) {
        super(props);
        console.log("in Constructor")
    
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
       // this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            // username: '',
             item:'',
             date: new Date(),
             amount: 0
         }       
    }



    /*
     onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    */
    onChangeItem(e) {
       console.log("in onChangeItem")
        this.setState({
            item: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }
   
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
       console.log("in onSubmit")
        const expense = {
            //username: this.state.username,
            item: this.state.item,
            amount: this.state.amount,
            date: this.state.date
        }

        console.log(expense)

        window.location = '/';
    }

    render() {
    return (
         
        <div>
            <h3>Create New Expense</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Item: </label>
                    <input type="text"
                        required
                        className="form-control"
                        placeholder= "Enter an Item"
                        value={this.state.item}
                        onChange={this.onChangeItem}
                    />
                </div>
                <div className="form-group">
                    <label>Amount: </label>
                    <input type="text"
                     required
                     className="form-control"
                     value={this.state.amount}
                     onChange={this.onChangeAmount}
                     />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Budget Expense" className= "btn btn-secondary" />
                </div>
            </form>
        </div>
        
    
        
    );
    }
}