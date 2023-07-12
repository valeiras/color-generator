import { nanoid } from 'nanoid';

const ColorList = ({ colors, name }) => {
  return (
    <section className="color-list">
      {colors.map((color, idx) => {
        return (
          <p key={nanoid()}>
            --{name || 'colorname'}-{idx + 1}00: #{color.hex}
          </p>
        );
      })}
    </section>
  );
};
export default ColorList;
