import React, { Component } from 'react';
import axios from 'axios';
import Cards from '../../components/cards/Cards'


class Tasks extends Component {

    state = {
        tasksData: []
    }

    componentDidMount() {
        axios.get("http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks",
        {headers: {'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc1OTQsImV4cCI6MTU4Mjk4MjM5NH0.ZlaOUE2afu4jv0469XInGAMh59pi1ztIERrCObonjDw'}})
        .then( res => {
            this.setState({
                tasksData: res.data.results
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        const cardsView = this.state.tasksData.length ? (<Cards data={this.state.tasksData}/>): null;

        return(
            <div>
                {cardsView}
            </div>
        );
    }
}

export default Tasks;