import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox(props) {

    const { food, deleteFood } = props;

    return(
        <Card 
            hoverable={true} 
            title={food.name} 
            cover={<img alt={food.name} src={ food.image } style={ { width:"100%", height: "auto" } }/>}>
          {/* <img src={ food.image } alt={ food.name } width={150} /> */}
          <p>Calories: { food.calories }</p>
          <p>Servings: { food.servings }</p>
          <p>Total calories: { food.calories * food.servings }</p>
          <Button type="primary" onClick={ () => deleteFood( food.name ) }>Delete</Button>
        </Card>
    );

}

export default FoodBox;