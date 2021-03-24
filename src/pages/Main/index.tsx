import React from 'react';
import Card from '../../components/Card';

import { mock } from './mock';
import { Container } from './styles';

const Main: React.FC = () => {
    return (
        <Container>
            {mock ? (
                mock.map((data) => <Card key={data.id} {...data} />)
            ) : (
                <>Carregando....</>
            )}
        </Container>
    );
};

export default Main;
