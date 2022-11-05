import { GreetPros } from './Greet.types';

const Greet = ({ name }: GreetPros) => {
  return <div>Hello {name}</div>;
};

export default Greet;
