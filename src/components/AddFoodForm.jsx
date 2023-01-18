import { Card, Button, Input } from 'antd';

import { useState } from "react";

function AddFoodForm(props) {

    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState('');
    const [ servings, setServings ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFood = { name, image, calories, servings };
        setName(''); setImage(''); setCalories(''); setServings('');
        props.addFood(newFood);
    }

    return(
        <Card title="Add food entry" style={ { width: "500px", margin: "auto" } } >
            <form onSubmit={ handleSubmit }>
            
                <label htmlFor='name'>Name</label><br/>
                <Input type="text" id="name" value={ name } onChange={ (e) => setName(e.target.value) } /> <br/><br/>

                <label htmlFor='image'>Image</label><br/>
                <Input type="text" id="image" value={ image } onChange={ (e) => setImage(e.target.value) } /> <br/><br/>

                <label htmlFor='calories'>Calories</label><br/>
                <Input type="number" id="calories" value={ calories } onChange={ (e) => setCalories(e.target.value) } /> <br/><br/>

                <label htmlFor='servings'>Servings</label><br/>
                <Input type="number" id="servings" value={ servings } onChange={ (e) => setServings(e.target.value) } /> <br/><br/>

                <Button type="primary" htmlType="submit">
                    Create
                </Button>

            </form>
        </Card>
    )
}

export default AddFoodForm;