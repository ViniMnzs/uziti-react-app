/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';

import { Container, Line, Image } from './styles';

interface Types {
    id: number;
    name: string;
    price: number;
    unit: number;
    label: string;
    sale: string;
    img: string;
}

const Card: React.FC<Types> = (data) => {
    const product = data || undefined;
    const [qtt, setQtt] = useState(0);

    function Add(): void {
        if (qtt > product.unit) {
            alert(`Você ultrapassou o limite do estoque ${product.unit}`);
        }
        if (qtt <= 0) {
            alert(`Você não pode adicionar um valor vazio ao carrinho`);
        } else alert('Produto adicionado ao carrinho!');
    }

    useEffect(() => {
        if (qtt) setQtt(0);
    }, [qtt]);

    return (
        <Container>
            <Image>Cerveja =)</Image>
            <div className="subcontainer">
                <h4>{product.name}</h4>
                <span className="label">{`${product.unit} - ${product.label}`}</span>
                <p>{`RD$${product.price}.00/Unit`}</p>
                <span className="sale">{product.sale}</span>
                <a>View Details</a>
                <Line>
                    <button onClick={() => setQtt(qtt - 1)} className="btn">
                        -
                    </button>
                    <span>{qtt}</span>
                    <button onClick={() => setQtt(qtt + 1)} className="btn">
                        +
                    </button>
                    <button onClick={Add} className="add">
                        ADD
                    </button>
                </Line>
            </div>
        </Container>
    );
};

export default Card;
