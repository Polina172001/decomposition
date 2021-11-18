import './App.css';
import Anons from './components/Anons';
import Card from './components/Card';
import List from './components/List';
import ListItem from './components/ListItem';
import Search from './components/Search';
import Td2Img from './styled/Td2Img';
import Td3Img from './styled/Td3Img';

const todos1 = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']
const todos2 = [
  {
    img: 'logo',
    text: 'Путин упростил...',
  },
  {
    img: 'logo',
    text: 'Путин упростил 2...',
  },
  {
    img: 'logo',
    text: 'Путин упростил 3...',
  },
  {
    img: 'logo',
    text: 'Путин упростил 4...',
  },
  {
    img: 'logo',
    text: 'Путин упростил 5...',
  },
]

const todos3 = [{
  img: 'logo',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
}]

const todos4 = [
  {
    currency: 'USD MOEX',
    value: '63,52',
    next: '+0,09',
  },
  {
    currency: 'EUR MOEX',
    value: '70,86',
    next: '+0,14',
  },
  {
    currency: 'НЕФТЬ',
    value: '64,90',
    next: '+1,63%',
  },
]

const todos5 = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'ещё']

const todos6 = [
  {
    img: 'logo',
    text: 'Кино 1...',
    chanel: 'Успех',
  },
  {
    img: 'logo',
    text: 'Кино 2...',
    chanel: 'Успех',
  },
  {
    img: 'logo',
    text: 'Кино 3...',
    chanel: 'Успех',
  },
]

const todos7 = [
  {
    time: '02:00',
    text: 'ТНТ.BEST',
    chanel: 'ТНТ',
  },
  {
    time: '02:15',
    text: 'Джунгли',
    chanel: 'СТС',
  },
  {
    time: '02:25',
    text: 'Наедине со всеми',
    chanel: 'Первый',
  },
]

const todos9 = ['Недвижимость - о сталинках', 'Маркет - люстры и светильники', 'Авто.ру - привод 4x4 до 500 000']
function App() {
  return (
    <div className="App">
      <div className="td1">
        <List className="td1ul" items={todos1}>
          {items => items.map((item, id) => <ListItem className="td1li" key={id}>{item}</ListItem>)}
        </List>
      </div>

      <div className="td2">
        <ul className="td2ul">
          {todos2.map((item, id) => (
            <ListItem className="td2li" key={id}>
              {item.img && <Td2Img src={item.img} alt='' />}
              <div>{item.text}</div>
            </ListItem>
          ))}
        </ul>
        <ul className="td2ul">
          {todos3.map((item, id) => (
            <ListItem className="td3li" key={id}>
              {item.img && <Td3Img src={item.img} alt='' />}
              <div>{item.title}</div>
              <div>{item.text}</div>
            </ListItem>
          ))}
        </ul>
      </div>
      <ul className="td1ul">
        {todos4.map((item, id) => (
          <ListItem className="td4li" key={id}>
            <div>{item.currency}</div>
            <div>{item.value}</div>
            <div>{item.next}</div>
          </ListItem>
        ))}
      </ul>
      <div className="td1">
        <List className="td1ul" items={todos5}>
          {items => items.map((item, id) => <ListItem className="td1li" key={id}>{item}</ListItem>)}
        </List>
      </div>
      <Search />
      <p>Найдётся всё. Например,<span> фаза луны сегодня</span></p>
      <Anons />
      <div className="cards">
        <Card title="Погода">
          <div className="weather">
            <img src="" alt="logo" />
            <div>
              <p>Утром +17,</p>
              <p>днём +20,</p>
            </div>
          </div>
        </Card>
        <Card title="Карта Германии">
          <p>Расписания</p>
        </Card>
        <Card title="Эфир">
          <ul className="td2ul">
            {todos6.map((item, id) => (
              <ListItem className="td2li" key={id}>
                {item.img && <Td2Img src={item.img} alt='' />}
                <div>{item.text} {item.chanel}</div>
              </ListItem>
            ))}
          </ul>

        </Card>
        <Card title="Посещаемое">
          <List className="td9ul" items={todos9}>
            {items => items.map((item, id) => <ListItem className="td9li" key={id}>{item}</ListItem>)}
          </List>
        </Card>
        <Card title="Телепрограмма">
          <ul className="td2ul">
            {todos7.map((item, id) => (
              <ListItem className="td2li" key={id}>
                <div>{item.time} {item.text} {item.chanel}</div>
              </ListItem>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;
