import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorMap = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, idx) => {
        return (
          <SingleColor
            color={color}
            key={nanoid()}
            idx={idx}
            half={colors.length / 2}
          />
        );
      })}
    </section>
  );
};
export default ColorMap;
