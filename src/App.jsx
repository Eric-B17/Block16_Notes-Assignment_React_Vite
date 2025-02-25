import 'react';
import Card from './Card.jsx';

const App = () => {
    const cardTitle = "Card 1";
    const cardDescription = "This is the first card's description";
    const cardButtonLabel = "Button 1";
    return (
        <>
            <Card title={cardTitle}
                  description={cardDescription}
                  label={cardButtonLabel}/>

            <Card title ={"Card 2"}
            description={"This is the second card's description"}
            label={"Button 2"}/>
        </>

    );

};

export default App;