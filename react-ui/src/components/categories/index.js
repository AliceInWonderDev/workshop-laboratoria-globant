import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        }
    }

    async componentDidMount() {
        try {
            const response = await axios.get(`http://localhost:3001/categories/`, {
                headers: {
                    "Authorization": "whatever-you-want",
                    "content-type" : "application/json"
                }
            });
            this.setState({
                categories: response.data.categories,
            });
        } catch(err) {
            console.log(`Error: ${err}`);
        }
    }

    handleShowCategories = () => {
        return(
            this.state.categories.map(category => <Button key={category.path}>{category.name}</Button>)
        )
    }

    render() {
        return(<Typography color="inherit">
            Filtrar por: { this.handleShowCategories() }
        </Typography>)
    }
}

export default Categories;
