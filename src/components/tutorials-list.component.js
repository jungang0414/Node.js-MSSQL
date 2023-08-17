import React, { Component } from 'react';
import TutorialDataService from "../services/tutorial.service";

export default class TutorialsList extends Component {
    constructor(props) {
        super(props);
        this.onChangSearchTitle = this.onChangSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            tutorials: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveTutorials();
    }

    onChangSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }
//全部
    retrieveTutorials() {
        TutorialDataService.getAll()
        .then(response => {
            this.setState({
                tutorials: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }
//更新
    refreshList() {
        this.retrieveTutorials();
        this.setState({
            currentTutorial: null,
            currentIndex: -1
        });
    }

    setActiveTutorial(tutorial, index) {
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index
        })
    }
  render() {
    return (
      <div>tutorialsList</div>
    )
  }
}
