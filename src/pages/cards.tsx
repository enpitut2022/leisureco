import TinderCard from 'react-tinder-card';
import React from 'react';

interface store {
  name: string;
  time: string;
  image: string;
  price: string;
  mapname: string;
  maplink: string;
}

const tmpStoreList: Array<store> = [
    {
        name: 'つくば温泉 喜楽里 別邸',
        time: '09:00 ~ 24:00',
        image:
      'https://www.yurakirari.com/kirari/tsukuba/images/inside_spa/inside_spa_ph01.jpg',
        price: '1000 ~ 2000円',
        mapname: '茨城県つくば市西大橋６１４−１',
        maplink:
      'https://www.google.com/maps/place/%E3%81%A4%E3%81%8F%E3%81%B0%E6%B8%A9%E6%B3%89+%E5%96%9C%E6%A5%BD%E9%87%8C+%E5%88%A5%E9%82%B8/@36.074972,140.0817692,17z/data=!3m1!4b1!4m5!3m4!1s0x60220b98d62e8e71:0xe1b112d7b966938c!8m2!3d36.074972!4d140.0839579',
    },
    {
        name: 'スポーレクライミングジム',
        time: '13:00~22:00',
        image:
      'https://spoleclimbinggym.com/wp/wp-content/uploads/2020/05/QoutaSpole2-1024x683.jpg',
        price: '2000円',
        mapname: '茨城県つくば市下原３７０−１',
        maplink:
      'https://www.google.com/maps/place/%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%AC%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B8%E3%83%A0/@36.0493451,140.131481,17z/data=!3m2!4b1!5s0x6022732dc5f93185:0xa57d77fb25f38a90!4m5!3m4!1s0x6022732dc5e72c9d:0x8092fce9ac885675!8m2!3d36.0493408!4d140.1336697',
    },
];

const Cards = () => {
    return (
        <div className="Cards">
            {tmpStoreList.map((store, index) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <TinderCard className="Card" key={index}>
                    <div className="shop-card">
                        <p>{store.name}</p>
                        <p>{store.time}</p>
                        <img src={store.image}></img>
                        <p>{store.price}</p>
                        <a href={store.maplink}>{store.mapname}</a>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
};

export default Cards;
