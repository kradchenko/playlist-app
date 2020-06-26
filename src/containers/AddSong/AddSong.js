import React, {Component} from 'react';
import axios from '../../axios-orders';

import Input from '../../components/UI/Input/Input';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../components/UI/Button/Button';

import classes from '../AddSong/AddSong.module.css';

class AddSong extends Component {
    state = {
        addSongForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'e.g. Drake',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter name of song.',
            },
            author: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'e.g. Toosie Slide',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter author of song.',
            },
            songLength: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'e.g. 3:45',
                },
                value: '',
                validation: {
                    required: true,
                    isMinuteSecondsFormat: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter correct format([m]m:ss).',
            },
        },
        loading: false,
        formIsValid: false,
    };

    addSongHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const song = {
            name: this.state.addSongForm["name"].value,
            author: this.state.addSongForm["author"].value,
            songLength: this.state.addSongForm["songLength"].value,
        };

        axios.post('/playlist', song)
            .then(response => {
                this.setState({loading: false,});
            })
            .catch(error => {
                this.setState({loading: false,});
            });
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAddSongForm = {...this.state.addSongForm};
        const updatedFormElement = {...updatedAddSongForm[inputIdentifier]};

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedAddSongForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedAddSongForm) {
            formIsValid = updatedAddSongForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({addSongForm: updatedAddSongForm, formIsValid: formIsValid});
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isMinuteSecondsFormat) {
            const pattern = /([1-5]?[0-9]):([0-5]?[0-9])$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    };

    render() {
        const formElementsArray = [];
        for(let key in this.state.addSongForm) {
            formElementsArray.push({
                    id: key,
                    config: this.state.addSongForm[key],
                }
            );
        }

        let form = (
            <Aux>
                <h2 className={classes.Title}>Add Song To Playlist</h2>
                <form className={classes.Form} onSubmit={(event) => this.addSongHandler(event)}>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            errorMessage={formElement.config.errorMessage}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))}
                    <Button btnType="Success">Submit</Button>
                </form>
            </Aux>
        );

        if (this.state.loading) {
            form = (<p>Loading...</p>)
        }

        return form ;
    }
}

export default AddSong;